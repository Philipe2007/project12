import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { navItems, squareBookingUrl } from '../data/siteData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--brand-line)] bg-[var(--brand-ivory)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Deliphine Beauty Studio home">
          <img
            src={logo}
            alt="Deliphine Beauty Studio logo"
            className="h-14 w-auto rounded-[1rem] border border-[var(--brand-line)] bg-[var(--brand-ink)] object-cover shadow-[0_12px_28px_rgba(16,19,21,0.14)] transition-transform duration-200 hover:scale-[1.02]"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--brand-ink)] lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-[var(--brand-rose-deep)]' : 'text-[var(--brand-ink)] hover:text-[var(--brand-rose)]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+12393991228" className="hidden items-center gap-2 rounded-full border border-[var(--brand-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:border-[var(--brand-rose)] lg:inline-flex">
            <Phone size={15} />
            Call now
          </a>
          <a
            href={squareBookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[var(--brand-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-rose-deep)] md:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-line)] bg-white text-[var(--brand-ink)] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-[#efe1dc] bg-[#faf4f0] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl border px-4 py-3 text-sm font-medium ${
                    isActive ? 'border-[#e5c3bd] bg-[#fffaf9] text-[#7a4d46]' : 'border-[#f2e0dc] bg-white text-[#2d2424]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={squareBookingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-[#2b1b1d] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
