"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-md border border-ink px-6 py-3 text-base font-semibold text-ink hover:bg-ink hover:text-paper print:hidden"
    >
      Print This Page
    </button>
  );
}
