import { motion } from 'framer-motion';
import { HeartPulse, MessageCircle, UsersRound } from 'lucide-react';
import SectionHeader from './SectionHeader';

const points = [
  { icon: HeartPulse, title: 'Health clarity', text: 'Organize records, summaries, reports and prescriptions for faster reference.' },
  { icon: UsersRound, title: 'Family visibility', text: 'Coordinate care for family members through profiles, groups and shared context.' },
  { icon: MessageCircle, title: 'Connected support', text: 'Use chat, communities and app guidance to keep care conversations moving.' },
];

export default function About() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About AlloKonnect"
          title="A clearer way to stay connected to care."
          text="AlloKonnect brings health information, family coordination and trusted communication into one simple mobile experience."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              className="rounded-lg bg-white p-6 shadow-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Icon className="text-primary" size={30} aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
