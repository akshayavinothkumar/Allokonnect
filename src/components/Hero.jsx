import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, ShieldCheck } from 'lucide-react';
import { screenshots } from '../assets/screenshots';

const trust = ['Secure health organization', 'Family care coordination', 'Android app available'];

export default function Hero() {
  const heroShot = screenshots.find((shot) => shot.id === 'home') ?? screenshots[0];

  return (
    <section id="hero" className="overflow-hidden bg-white">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-semibold text-secondary">
            <ShieldCheck size={16} aria-hidden="true" />
            Connected healthcare for modern families
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            AlloKonnect keeps care, records and communication together.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            A secure mobile platform for patients, families and healthcare teams to coordinate health records,
            appointments, trusted communities and everyday care support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.savemom.alloconnect"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-primary"
            >
              Download App <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#screenshots"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 font-semibold text-secondary transition hover:border-primary hover:text-primary"
            >
              <Play size={18} aria-hidden="true" /> View Screens
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trust.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <CheckCircle2 className="text-primary" size={18} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[470px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65 }}
        >
          <div className="absolute -left-6 top-10 hidden rounded-2xl bg-white p-4 shadow-card sm:block">
            <p className="text-xs font-semibold uppercase text-gray-500">Profile completion</p>
            <p className="mt-1 text-2xl font-bold text-secondary">55%</p>
          </div>
          <div className="phone-frame mx-auto max-w-[330px]">
            <img src={heroShot.src} alt={heroShot.title} className="w-full object-cover" />
          </div>
          <div className="absolute -right-2 bottom-12 rounded-2xl bg-white p-4 shadow-card">
            <p className="text-xs font-semibold uppercase text-gray-500">Care modules</p>
            <p className="mt-1 text-2xl font-bold text-secondary">8+</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
