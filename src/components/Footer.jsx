import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Stethoscope } from 'lucide-react';

const links = ['About', 'Features', 'Screenshots', 'FAQ', 'Download'];

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3 font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary">
              <Stethoscope size={20} aria-hidden="true" />
            </span>
            <span className="text-lg">AlloKonnect</span>
          </div>
          <p className="mt-4 max-w-md leading-7 text-gray-300">
            Connected healthcare, family coordination and digital health organization from Savemom Private Limited.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Social link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Quick Navigation</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase() === 'download' ? 'download' : link.toLowerCase()}`} className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li className="flex gap-3"><Mail size={18} className="shrink-0 text-primary" /> admin@savemom.app</li>
            <li className="flex gap-3"><Phone size={18} className="shrink-0 text-primary" /> +91 80952 07092</li>
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-primary" /> Madurai, Tamil Nadu, India</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-300">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-gray-400">
        Copyright 2026 AlloKonnect. All rights reserved.
      </div>
    </footer>
  );
}
