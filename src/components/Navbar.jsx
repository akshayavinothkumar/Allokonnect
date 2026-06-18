import { Menu, Stethoscope, X } from 'lucide-react';
import { useState } from 'react';
import icon from "../assets/screenshots/icon.jpeg";

const navItems = [
  ['About', '#about'],
  ['Features', '#features'],
  ['Screens', '#screenshots'],
  ['FAQ', '#faq'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/92 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#hero" className="flex items-center gap-3 font-bold text-secondary" aria-label="AlloKonnect home">
          <img
            src={icon}
            alt="AlloKonnect Logo"
            className="h-10 w-10 object-contain rounded-md"
          />
          <span className="text-lg">AlloKonnect</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-gray-600 transition hover:text-secondary">
              {label}
            </a>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.savemom.alloconnect"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-primary"
          >
            Download App
          </a>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 text-secondary md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-medium text-gray-700">
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
