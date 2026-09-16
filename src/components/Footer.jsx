import { Link } from 'react-router-dom';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { businessInfo } from '../data/siteData';

const Footer = () => (
  <footer className="border-t border-[#edd7d1] bg-[#f7f0ee]">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <p className="text-lg font-black tracking-[0.2em] text-[#2b1b1d]">DELIPHINE</p>
          <p className="mt-4 max-w-sm text-base leading-7 text-[#564744]">
            Women-only hair salon in the heart of Kigali — braids, weaves, colour and bridal styling.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a4d46]">Explore</p>
          <div className="mt-4 space-y-3 text-sm text-[#4e3f3d]">
            <Link to="/services" className="block transition hover:text-[#7a4d46]">Services</Link>
            <Link to="/gallery" className="block transition hover:text-[#7a4d46]">Gallery</Link>
            <Link to="/shop" className="block transition hover:text-[#7a4d46]">Shop</Link>
            <Link to="/about" className="block transition hover:text-[#7a4d46]">About Us</Link>
            <Link to="/contact" className="block transition hover:text-[#7a4d46]">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a4d46]">Contact</p>
          <div className="mt-4 space-y-4 text-sm text-[#4e3f3d]">
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-[#7a4d46]" />
              <a href="tel:+250781216840" className="hover:text-[#7a4d46]">+250 781 216 840</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-[#7a4d46]" />
              <span>{businessInfo.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 size={16} className="mt-0.5 text-[#7a4d46]" />
              <span>
                Mon–Sat 8:00–20:00
                <br />
                Sun 10:00–18:00
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a4d46]">Follow us</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#ebd6d1] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#caa29d] hover:text-[#7a4d46]">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#ebd6d1] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#caa29d] hover:text-[#7a4d46]">Facebook</a>
            <a href="https://wa.me/250781216840" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#ebd6d1] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#caa29d] hover:text-[#7a4d46]">
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#ebd6d1] pt-6 text-center text-sm text-[#5f4b48]">
        🇷🇼 Proudly Kigali · Proudly Rwandan
      </div>
    </div>
  </footer>
);

export default Footer;
