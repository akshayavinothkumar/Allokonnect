import { Building2, Heart, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';

const groups = [
  {
    icon: Heart,
    title: 'Patients',
    benefits: ['Easier healthcare access', 'Better communication', 'Convenient digital consultations'],
  },
  {
    icon: Users,
    title: 'Families',
    benefits: ['Improved care coordination', 'Shared visibility', 'Organized records and files'],
  },
  {
    icon: Building2,
    title: 'Healthcare Providers',
    benefits: ['Improved patient engagement', 'Efficient communication', 'Remote care continuity'],
  },
];

export default function Benefits() {
  return (
    <section className="bg-surface py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Benefits"
          title="Designed for everyone involved in care."
          text="AlloKonnect helps users keep essential health context accessible, organized and shareable."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {groups.map(({ icon: Icon, title, benefits }) => (
            <article key={title} className="rounded-lg bg-white p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-teal-50 text-primary">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
              <ul className="mt-5 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-gray-600">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
