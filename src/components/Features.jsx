import { motion } from 'framer-motion';
import { Bell, Bot, CalendarCheck, FileHeart, FolderLock, HeartHandshake, MessageSquareText, QrCode } from 'lucide-react';
import SectionHeader from './SectionHeader';

const features = [
  { icon: QrCode, title: 'Healthcare Connectivity', text: 'Connect quickly using QR-based profiles and controlled digital connections.', help: 'Reduces friction when sharing trusted contact details.' },
  { icon: CalendarCheck, title: 'Appointment Management', text: 'Book and manage healthcare appointments from the app.', help: 'Keeps families aligned on upcoming care needs.' },
  { icon: MessageSquareText, title: 'Patient Communication', text: 'Direct chat and community discussions support ongoing coordination.', help: 'Keeps conversations in one organized channel.' },
  { icon: FileHeart, title: 'Health Records', text: 'Store reports, prescriptions and personal health summaries.', help: 'Makes important information easier to find when needed.' },
  { icon: HeartHandshake, title: 'Family Care Support', text: 'Create family groups and coordinate care using a unique family code.', help: 'Gives caregivers better visibility without clutter.' },
  { icon: Bell, title: 'Notifications and Alerts', text: 'Stay aware of community updates, messages and care activity.', help: 'Helps users respond at the right moment.' },
  { icon: Bot, title: 'Allobot Guidance', text: 'Ask general questions and get in-app guidance from Allobot.', help: 'Improves discovery and day-to-day app use.' },
  { icon: FolderLock, title: 'Personal Files', text: 'Manage personal documents through Allofold and linked storage.', help: 'Keeps essential files accessible and organized.' },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Key Features"
          title="Built for everyday healthcare coordination."
          text="Compact tools help patients, families and providers communicate, organize and stay prepared."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text, help }, index) => (
            <motion.article
              key={title}
              className="rounded-lg border border-gray-100 bg-white p-5 shadow-card transition hover:border-teal-100"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.03 }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal-50 text-primary">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              <p className="mt-3 text-sm font-medium text-secondary">{help}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
