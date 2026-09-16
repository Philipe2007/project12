import { Menu, Phone, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems, squareBookingUrl } from '../data/siteData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#efe1dc] bg-[#faf4f0]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2b1b1d] text-[#f7d9d1]">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-base font-black tracking-[0.18em] text-[#2b1b1d]">DELIPHINE</p>
            <p className="text-[8px] uppercase tracking-[0.28em] text-[#7a4d46]">Beauty Studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#2d2424] lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-[#7a4d46]' : 'text-[#2d2424] hover:text-[#7a4d46]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+250781216840" className="hidden items-center gap-2 rounded-full border border-[#e9d4ce] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d] transition hover:border-[#cda09a] lg:inline-flex">
            <Phone size={15} />
            Call now
          </a>
          <a
            href={squareBookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#2b1b1d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4b2d2f] md:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e7d6d2] bg-white text-[#2b1b1d] lg:hidden"
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
