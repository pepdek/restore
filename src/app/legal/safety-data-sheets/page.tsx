import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Safety Data Sheets" };

const products = [
  { name: "Antimicrobial Treatment", casNumber: "—", sheet: "Pending upload" },
  { name: "Odor Neutralizer", casNumber: "—", sheet: "Pending upload" },
  { name: "Surface Disinfectant", casNumber: "—", sheet: "Pending upload" },
];

export default function SafetyDataSheetsPage() {
  return (
    <LegalPage title="Safety Data Sheets">
      <p>
        Safety Data Sheets (SDS) for chemicals and products used on RESTORA job sites are listed below. Sheets are
        added as products are added to our approved product list.
      </p>
      <div className="mt-6 overflow-x-auto rounded-lg border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-paper-raised text-ink">
            <tr>
              <th className="px-4 py-3 font-semibold">Product</th>
              <th className="px-4 py-3 font-semibold">CAS Number</th>
              <th className="px-4 py-3 font-semibold">SDS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name} className="border-t border-line">
                <td className="px-4 py-3">{p.name}</td>
                <td className="px-4 py-3">{p.casNumber}</td>
                <td className="px-4 py-3">{p.sheet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LegalPage>
  );
}
