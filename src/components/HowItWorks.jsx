import { Download, FileUser, Handshake, HeartPulse, Smartphone, UsersRound } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  { icon: Download, title: 'Download App' },
  { icon: FileUser, title: 'Create Account' },
  { icon: Handshake, title: 'Add Connections' },
  { icon: UsersRound, title: 'Create Family Group' },
  { icon: HeartPulse, title: 'Manage Care' },
  { icon: Smartphone, title: 'Stay Connected' },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="How It Works"
          title="Start simple. Stay connected."
          text="A guided mobile journey keeps setup clear for patients, families and caregivers."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map(({ icon: Icon, title }, index) => (
            <article key={title} className="relative rounded-lg bg-white p-5 text-center shadow-card">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-500">Step {index + 1}</p>
              <h3 className="mt-1 font-bold text-ink">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
