import { Check, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const rows = [
  ['Family health coordination', true, false],
  ['QR-based trusted connections', true, false],
  ['Health records and personal files', true, true],
  ['Communities and chat', true, false],
  ['Allobot app guidance', true, false],
  ['Remote accessibility', true, true],
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Choose AlloKonnect"
          title="More than a records app."
          text="A connected experience for care, family support, communities and daily organization."
        />
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-gray-100 shadow-card">
          <div className="grid grid-cols-[1.3fr_0.8fr_0.8fr] bg-secondary px-4 py-4 text-sm font-bold text-white sm:px-6">
            <span>Capability</span>
            <span>AlloKonnect</span>
            <span>Typical tools</span>
          </div>
          {rows.map(([label, allo, typical]) => (
            <div key={label} className="grid grid-cols-[1.3fr_0.8fr_0.8fr] items-center border-t border-gray-100 px-4 py-4 sm:px-6">
              <span className="font-medium text-ink">{label}</span>
              <span>{allo ? <Check className="text-primary" aria-label="Included" /> : <Minus className="text-gray-400" />}</span>
              <span>{typical ? <Check className="text-gray-400" aria-label="Often included" /> : <Minus className="text-gray-400" />}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
