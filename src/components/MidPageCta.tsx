import { RequestOnlineCta } from "@/components/Cta";

export default function MidPageCta({
  heading = "Ready to Get Started?",
  body = "Tell us what's going on and a member of our team will call within the hour.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="border-y border-line bg-paper-raised">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
        <p className="mt-3 text-ink/70">{body}</p>
        <div className="mt-6 flex justify-center">
          <RequestOnlineCta />
        </div>
      </div>
    </section>
  );
}
