import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

const faqs = [
  ['Is AlloKonnect free?', 'The Android app can be downloaded from Google Play. Availability of paid services may depend on future product plans.'],
  ['Is my data secure?', 'The Play Store listing indicates encrypted data in transit and user data deletion request support.'],
  ['How do consultations work?', 'AlloKonnect supports digital care coordination and appointment management. Specific consultation availability may depend on connected providers.'],
  ['Can I schedule appointments?', 'Yes. The app listing includes booking and managing healthcare appointments.'],
  ['Can family members participate?', 'Yes. Family groups can be created with a unique family code for coordinated support.'],
  ['Is the app available on Android?', 'Yes. AlloKonnect is available on Google Play for Android users.'],
  ['Will iOS be available?', 'The App Store version is marked as coming soon on this landing page.'],
  ['Does Allobot give medical advice?', 'No. Allobot supports general questions and app interactions and is not a replacement for professional medical advice.'],
  ['How do I contact support?', 'The Play Store support email is admin@savemom.app and phone support is listed as +91 80952 07092.'],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers before you download."
          text="Quick details for patients, families and healthcare professionals."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-100 rounded-lg border border-gray-100 shadow-card">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="bg-white">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-ink"
                aria-expanded={open === index}
              >
                <span>{question}</span>
                <ChevronDown className={`shrink-0 text-primary transition ${open === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              {open === index ? <p className="px-5 pb-5 leading-7 text-gray-600">{answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
