export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold text-ink">{title}</h1>
      <div className="mt-8 max-w-none space-y-3 text-ink/70 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mb-2">
        {children}
      </div>
    </section>
  );
}
