import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">{text}</p> : null}
    </motion.div>
  );
}
