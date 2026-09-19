import { Link } from 'react-router-dom';
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import logo from '../images/logo.jpeg';
import { businessInfo } from '../data/siteData';

const Footer = () => (
  <footer className="border-t border-[#edd7d1] bg-[#f7f0ee]">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <img
            src={logo}
            alt="Deliphine Beauty Studio logo"
            className="h-16 w-auto rounded-[1.1rem] border border-[#e6d0ca] bg-[#1b1718] object-cover shadow-[0_12px_22px_rgba(43,27,29,0.12)]"
          />
          <p className="mt-4 max-w-sm text-base leading-7 text-[#564744]">
            A welcoming beauty studio in Bonita Springs offering cuts, color, styling, treatments and bridal beauty.
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
              <a href="tel:+12393991228" className="hover:text-[#7a4d46]">+1 239-399-1228</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-[#7a4d46]" />
              <span>{businessInfo.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 size={16} className="mt-0.5 text-[#7a4d46]" />
              <span>
                Open daily
                <br />
                Closes at 5:00 PM
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7a4d46]">Follow us</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#ebd6d1] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#caa29d] hover:text-[#7a4d46]">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-[#ebd6d1] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#caa29d] hover:text-[#7a4d46]">Facebook</a>
            <a href="https://wa.me/12393991228" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#ebd6d1] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#caa29d] hover:text-[#7a4d46]">
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
