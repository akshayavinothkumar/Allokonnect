import { Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    quote: 'AlloKonnect makes it easier to keep reports, appointments and family updates in one place.',
    name: 'Priya R.',
    role: 'Patient',
  },
  {
    quote: 'The family group view helps us coordinate care without searching through old messages.',
    name: 'Arun K.',
    role: 'Caregiver',
  },
  {
    quote: 'For patients who need frequent follow-up, organized communication can make a real difference.',
    name: 'Dr. Meera S.',
    role: 'Healthcare provider',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <div className="section-shell">
        <SectionHeader eyebrow="Testimonials" title="Built around real care moments." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <article key={name} className="rounded-lg bg-white p-6 shadow-card">
              <Quote className="text-primary" size={28} aria-hidden="true" />
              <p className="mt-5 leading-7 text-gray-700">{quote}</p>
              <div className="mt-6">
                <p className="font-bold text-ink">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
