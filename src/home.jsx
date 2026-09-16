import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// Icons
import {
  Camera,
  Mic2,
  Radio,
  Sparkles,
  Music2,
  Heart,
  Palette,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";


// Assets
import heroImg from "./images/abasaza.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Sonorisation",
      desc: "High quality sound systems",
      Icon: Mic2,
    },
    {
      title: "Photo & Video",
      desc: "Professional shooting",
      Icon: Camera,
    },
    {
      title: "Live Streaming",
      desc: "Broadcast worldwide",
      Icon: Radio,
    },
    {
      title: "Decoration",
      desc: "Beautiful event decoration",
      Icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="h-20 flex items-center justify-between">

      {/* LOGO */}
      <a
        href="#home"
        className="flex items-center gap-3"
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-ember flex items-center justify-center shadow-glow">
          <span className="font-bold text-black text-lg">
            K
          </span>
        </div>

        <div>
          <h2 className="font-bold text-xl tracking-wider">
            KRIZZO
          </h2>

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            African Creative Art
          </p>
        </div>
      </a>

      {/* DESKTOP MENU */}
      <nav className="hidden lg:flex items-center gap-10">

        <a href="#home" className="hover:text-orange-400 transition">
          Home
        </a>

        <a href="#services" className="hover:text-orange-400 transition">
          Services
        </a>

        <a href="#about" className="hover:text-orange-400 transition">
          About
        </a>

        <a href="#contact" className="hover:text-orange-400 transition">
          Contact
        </a>

      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        <a
          href="#contact"
          className="hidden md:flex bg-gradient-ember text-black px-5 py-3 rounded-full font-semibold items-center gap-2 shadow-glow"
        >
          Book Event
          <ArrowRight size={16} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

    </div>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800">

      <div className="flex flex-col px-6 py-6 gap-5">

        <a href="#home">Home</a>

        <a href="#services">Services</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

      </div>

    </div>
  )}
</header>
      {/* HERO */}
      <section id="home" className="relative min-h-screen overflow-hidden">

  {/* Background Image */}
  <img
    src={heroImg}
    alt="Hero"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 hero-overlay" />

  <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-4 py-2 rounded-full text-orange-400 text-xs uppercase tracking-[0.2em]"
    >
      <Sparkles size={14} />
      Bonita Springs • Est. 2014
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
    >
      Your Story,
      <br />
      <span className="text-gradient-ember">
        Unforgettably
      </span>
      <br />
      Told.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6 max-w-xl text-zinc-300 text-lg leading-relaxed"
    >
      Professional services in Sound,
      Media Production,
      Live Streaming,
      Culture,
      Decoration and Live Music.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-10 flex flex-wrap gap-4"
    >
      <button className="bg-gradient-ember px-7 py-4 rounded-full text-black font-semibold shadow-glow flex items-center gap-2">
        Plan My Event
        <ArrowRight size={18} />
      </button>

      <button className="border border-zinc-700 px-7 py-4 rounded-full hover:border-orange-500 transition">
        Explore Services
      </button>
    </motion.div>

    {/* Rating */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-12 flex items-center gap-4"
    >
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-black"></div>
        <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-black"></div>
        <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-black"></div>
        <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-black"></div>
      </div>

      <div>
        <p className="text-orange-400">★★★★★</p>
        <p className="text-sm text-zinc-400">
          Loved by 850+ clients
        </p>
      </div>
    </motion.div>

  </div>
</section>

<section className="border-t border-zinc-800 bg-zinc-950">

  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">

    {[
      { value: "850+", label: "Events Covered" },
      { value: "12", label: "Years Experience" },
      { value: "60+", label: "Creative Crew" },
      { value: "100%", label: "Client Retention" },
    ].map((item) => (
      <div
        key={item.label}
        className="py-8 text-center border-zinc-800 md:border-l"
      >
        <h3 className="text-4xl font-bold text-gradient-ember">
          {item.value}
        </h3>

        <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>

</section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => {
            const Icon = service.Icon;

            return (
              <div
                key={service.title}
                className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
              >
                <Icon className="mb-4 text-yellow-500" />

                <h3 className="font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-400">
                  {service.desc}
                </p>

                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-4 text-yellow-500"
                >
                  Read More
                </button>
              </div>
            );
          })}

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 bg-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="max-w-2xl text-zinc-400">
            We create powerful creative experiences using
            modern technology and African culture.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Contact Us
          </h2>

          <form className="grid gap-4 max-w-xl">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg"
            />

            <button
              type="submit"
              className="bg-yellow-500 text-black py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-zinc-900 p-6 rounded-2xl w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-3">
              {selectedService.title}
            </h3>

            <p className="text-zinc-400">
              {selectedService.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}