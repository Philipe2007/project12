import { Link } from 'react-router-dom';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { businessInfo } from '../data/siteData';

const Footer = () => (
  <footer className="border-t border-[var(--brand-line)] bg-[var(--brand-ivory)]">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <p className="max-w-xs text-2xl font-black leading-tight text-[var(--brand-ink)]">Deliphine Beauty Studio</p>
          <p className="mt-4 max-w-sm text-base leading-7 text-[#564744]">
            A welcoming beauty studio in Bonita Springs offering cuts, color, styling, treatments and bridal beauty.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-rose-deep)]">Explore</p>
          <div className="mt-4 space-y-3 text-sm text-[#4e3f3d]">
            <Link to="/services" className="block transition hover:text-[var(--brand-rose)]">Services</Link>
            <Link to="/gallery" className="block transition hover:text-[var(--brand-rose)]">Gallery</Link>
            <Link to="/about" className="block transition hover:text-[var(--brand-rose)]">About Us</Link>
            <Link to="/contact" className="block transition hover:text-[var(--brand-rose)]">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-rose-deep)]">Contact</p>
          <div className="mt-4 space-y-4 text-sm text-[#4e3f3d]">
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-[var(--brand-rose-deep)]" />
              <a href="tel:+12393991228" className="hover:text-[var(--brand-rose)]">+1 239-399-1228</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-[var(--brand-rose-deep)]" />
              <span>{businessInfo.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 size={16} className="mt-0.5 text-[var(--brand-rose-deep)]" />
              <span>
                Open daily
                <br />
                Closes at 5:00 PM
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-rose-deep)]">Follow us</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--brand-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-rose)] hover:text-[var(--brand-rose-deep)]">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-[var(--brand-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-rose)] hover:text-[var(--brand-rose-deep)]">Facebook</a>
            <a href="https://wa.me/12393991228" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-rose)] hover:text-[var(--brand-rose-deep)]">
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#ebd6d1] pt-6 text-center text-sm text-[#5f4b48]">
        Proudly serving Bonita Springs, Florida
      </div>
    </div>
  </footer>
);

export default Footer;
