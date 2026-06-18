import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { screenshots } from '../assets/screenshots';
import SectionHeader from './SectionHeader';

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  const next = () => setActive((value) => (value + 1) % screenshots.length);
  const previous = () => setActive((value) => (value - 1 + screenshots.length) % screenshots.length);

  return (
    <section id="screenshots" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="App Screens"
          title="Real AlloKonnect screens, front and center."
          text="Screenshots are managed from one data file, so future app updates can be swapped into the site quickly."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="mx-auto w-full max-w-[340px]">
            <div className="phone-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.src}
                  alt={current.title}
                  className="w-full object-cover"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>
            </div>
          </div>
          <div>
            <p className="eyebrow">Featured Screen</p>
            <h3 className="mt-3 text-3xl font-bold text-ink">{current.title}</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">{current.caption}</p>
            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={previous}
                className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 text-secondary transition hover:border-primary hover:bg-teal-50"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="grid h-11 w-11 place-items-center rounded-full border border-gray-200 text-secondary transition hover:border-primary hover:bg-teal-50"
                aria-label="Next screenshot"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="mt-8 grid grid-cols-5 gap-3">
              {screenshots.map((shot, index) => (
                <button
                  type="button"
                  key={shot.id}
                  onClick={() => setActive(index)}
                  className={`overflow-hidden rounded-lg border-2 bg-white transition ${
                    active === index ? 'border-primary shadow-card' : 'border-gray-100 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Show ${shot.title}`}
                >
                  <img src={shot.src} alt="" className="aspect-[9/16] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
