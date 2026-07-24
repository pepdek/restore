// Triggered by a Postgres trigger (on_service_request_created) via pg_net on
// every new row in public.service_requests. verify_jwt is off because
// Postgres triggers don't carry a Supabase user JWT -- same pattern as
// notify-new-referral. Set RESEND_API_KEY and NOTIFY_EMAIL secrets via the
// Supabase dashboard (Edge Functions > notify-new-service-request >
// Secrets) -- until both are set, this no-ops instead of erroring, so
// requests still save even before email is configured.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req: Request) => {
  try {
    const payload = await req.json();

    const resendKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = Deno.env.get("NOTIFY_EMAIL");

    if (!resendKey || !notifyEmail) {
      console.log("notify-new-service-request: RESEND_API_KEY or NOTIFY_EMAIL not set, skipping email", payload.id);
      return new Response(JSON.stringify({ skipped: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emergencyTag = payload.is_emergency?.startsWith("Yes") ? "EMERGENCY " : "";
    const subject = `${emergencyTag}New service request: ${payload.first_name} ${payload.last_name} (${payload.service_needed})`;
    const html = `
      <h2>New Service Request</h2>
      <p><strong>Name:</strong> ${payload.first_name} ${payload.last_name}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Email:</strong> ${payload.email ?? "(not provided)"}</p>
      <p><strong>Address:</strong> ${payload.address}</p>
      <p><strong>Service Needed:</strong> ${payload.service_needed}</p>
      <p><strong>Emergency:</strong> ${payload.is_emergency}</p>
      <p><strong>Insurance Claim:</strong> ${payload.insurance_claim}</p>
      ${payload.details ? `<p><strong>Details:</strong> ${payload.details}</p>` : ""}
      <p><strong>Submitted:</strong> ${payload.created_at}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RESTORA Service Requests <requests@restore.pepdekker.com>",
        to: [notifyEmail],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("notify-new-service-request: Resend API error", res.status, text);
      return new Response(JSON.stringify({ error: "resend_failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ sent: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("notify-new-service-request: unexpected error", err);
    return new Response(JSON.stringify({ error: "unexpected" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
