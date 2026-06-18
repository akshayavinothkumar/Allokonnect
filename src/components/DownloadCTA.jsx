import qrCode from "../assets/screenshots/qr_code.png";
import { Apple, QrCode, Smartphone } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="bg-secondary py-20 text-white">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-100">Download AlloKonnect</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Start coordinating care from your phone.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-teal-50">
            Manage connections, family health, appointments, records, communities and Allobot guidance in one app.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.savemom.alloconnect"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-secondary transition hover:bg-teal-50"
            >
              <Smartphone size={20} aria-hidden="true" /> Google Play
            </a>
            <button
              type="button"
              className="inline-flex cursor-not-allowed items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-3 font-bold text-white/80"
              disabled
            >
              <Apple size={20} aria-hidden="true" /> App Store Coming Soon
            </button>
          </div>
        </div>
        <div className="grid h-44 w-44 place-items-center rounded-lg bg-white text-secondary shadow-soft">
          <div className="text-center">
            <img
  src={qrCode}
  alt="QR Code"
  className="mx-auto w-[86px] h-[86px]"
/>
          </div>
        </div>
      </div>
    </section>
  );
}
