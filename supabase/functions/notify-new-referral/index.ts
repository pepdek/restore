// Triggered by a Postgres trigger (on_referral_created) via pg_net on every
// new row in public.referrals. verify_jwt is off because Postgres triggers
// don't carry a Supabase user JWT -- this is a low-stakes notification
// email, not a money-moving action, so a public invoke URL is an acceptable
// tradeoff. Set the RESEND_API_KEY and NOTIFY_EMAIL secrets via the
// Supabase dashboard (Edge Functions > notify-new-referral > Secrets) or
// `supabase secrets set` -- until both are set, this no-ops instead of
// erroring, so referrals still save even before email is configured.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req: Request) => {
  try {
    const payload = await req.json();

    const resendKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = Deno.env.get("NOTIFY_EMAIL");

    if (!resendKey || !notifyEmail) {
      console.log("notify-new-referral: RESEND_API_KEY or NOTIFY_EMAIL not set, skipping email", payload.id);
      return new Response(JSON.stringify({ skipped: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const subject = `New referral: ${payload.homeowner_name} (${payload.damage_type}, ${payload.severity})`;
    const html = `
      <h2>New Partner Referral</h2>
      <p><strong>Partner:</strong> ${payload.partner_name}${payload.partner_slug ? ` (${payload.partner_slug})` : ""}</p>
      <p><strong>Homeowner:</strong> ${payload.homeowner_name}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Address:</strong> ${payload.address}</p>
      <p><strong>Damage Type:</strong> ${payload.damage_type}</p>
      <p><strong>Severity:</strong> ${payload.severity}</p>
      ${payload.notes ? `<p><strong>Notes:</strong> ${payload.notes}</p>` : ""}
      <p><strong>Submitted:</strong> ${payload.created_at}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "RESTORA Referrals <referrals@restore.pepdekker.com>",
        to: [notifyEmail],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("notify-new-referral: Resend API error", res.status, text);
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
    console.error("notify-new-referral: unexpected error", err);
    return new Response(JSON.stringify({ error: "unexpected" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
