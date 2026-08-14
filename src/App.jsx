import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "./images/heroImage.jpeg";
import logoImage from "./images/Logo.png";
import resourceImage from "./images/image.jpeg";
import cornerstoneBook from "./images/cornerstone-youth-guide.pdf";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  HandCoins,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Vision & Mission", "#vision"],
  ["Programmes", "#programmes"],
  ["Impact", "#impact"],
  ["Governance", "#governance"],
  ["Support", "#get-involved"],
  ["Contact", "#contact"],
];

const stats = [
  { value: "2009", label: "Established" },
  { value: "Rwanda", label: "National reach" },
  { value: "Youth", label: "Primary focus" },
  { value: "Trust", label: "Community-first approach" },
];

const values = [
  { icon: Heart, title: "Trust", text: "A family-oriented environment where young people feel safe, heard and respected." },
  { icon: Users, title: "Participation", text: "Inclusive engagement that gives youth a voice in decisions and activities." },
  { icon: ShieldCheck, title: "Protection", text: "Support that promotes well-being, responsible choices and healthy relationships." },
  { icon: GraduationCap, title: "Growth", text: "Education, skills, leadership and entrepreneurship designed for long-term empowerment." },
];

const programmes = [
  {
    title: "Momentum",
    summary:
      "A youth empowerment initiative using karate, Rwandan culture and community engagement to build discipline, resilience and social cohesion.",
    details: ["Karate sessions", "Holiday camps", "Family and community engagement", "Mentor development"],
    accent: "from-sky-400 to-cyan-600",
  },
  {
    title: "Train with Elites (TWE)",
    summary:
      "A school-based sports and youth development programme that strengthens academic engagement, wellbeing, confidence and prevention of school drop-out.",
    details: ["Elite karate coaching", "Girls’ participation", "School-based support", "Well-being and discipline"],
    accent: "from-[#fcd116] to-[#d9a800]",
  },
  {
    title: "Skills & Enterprise",
    summary:
      "Youth-focused vocational and entrepreneurship support that develops employability and socio-economic autonomy.",
    details: ["Leather processing", "Shoe making", "Entrepreneurship support", "Start-up guidance"],
    accent: "from-green-500 to-green-600",
  },
];

const trackRecord = [
  "Youth vocational and technical skills initiatives",
  "School and youth-sector collaboration",
  "Participation in child-rights and youth coalitions",
  "Sport, prevention, culture and community programmes",
  "Partnerships with public institutions and civil society",
];

const governance = [
  "General Assembly",
  "Executive Committee",
  "Conflict Resolution, Complaints and Ethics Committee",
  "Audit and Oversight Committee",
  "Advisory Council",
];

const partners = [
  "Schools & Communities",
  "Public Institutions",
  "Civil Society",
  "International Partners",
  "Youth Networks",
  "Local Volunteers",
];

const newsItems = [
  { title: "Youth leadership and mentorship workshops", date: "May 2026" },
  { title: "Community-based prevention and culture activities", date: "June 2026" },
  { title: "School outreach and talent development programmes", date: "July 2026" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#00a1de] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#00a1de]/90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden text-white">
                <img src={logoImage} alt="The Cornerstone logo" className="h-full w-full" />
              </div>
              <div>
                <p className="text-lg font-black tracking-[0.18em] text-white">THE CORNERSTONE</p>
                <p className="text-[9px] uppercase tracking-[0.32em] text-blue-50">Education • Confidence • Change</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-[#fcd116]">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#get-involved"
                className="hidden rounded-full bg-[#fcd116] px-5 py-2.5 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/15 transition hover:bg-[#e7c00f] md:inline-flex items-center gap-2"
              >
                Support Us
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-full border border-slate-300 p-2 lg:hidden"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/20 bg-[#00a1de] lg:hidden">
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-5">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-[#0a3d8f] text-white">
          <img
            src={heroImage}
            alt="Young people participating in community activities"
            className="absolute inset-0 h-full w-full object-cover opacity-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,161,222,0.92)_0%,rgba(0,61,133,0.8)_35%,rgba(0,61,133,0.62)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-emerald-200"
            >
              <Sparkles size={12} />
              National • non-profit • public-interest organisation
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-8 max-w-5xl"
            >
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                Empowering Rwanda’s youth to rise with confidence, purpose and resilience.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                The Cornerstone works to empower adolescents and young people through prevention, education, mentoring, skills development, sport, culture and community engagement in a trusted environment of expression and participation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-7 py-3.5 font-semibold text-[#173d38] shadow-lg shadow-yellow-900/20 transition hover:bg-[#e7c00f]"
              >
                Explore Programmes
                <ArrowRight size={18} />
              </a>
              <a
                href="{cornerstoneBook}"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/10"
              >
                Learn More
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin size={16} className="text-emerald-300" />
                Kigali, Rwanda
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Building2 size={16} className="text-emerald-300" />
                New headquarters in Kanombe
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl border-t border-white/10 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-black text-[#fcd116]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">About The Cornerstone</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">
                A trusted place where young people grow into confident, capable and responsible citizens.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The Cornerstone was established in November 2009 and has grown to become a national non-governmental organisation committed to the empowerment of adolescents and young people in Rwanda. Our programmes combine prevention, education, mentoring, skills development, sport, culture and community engagement to create lasting positive change.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We work with families, schools, communities and public institutions to strengthen youth wellbeing, dignity and opportunity while promoting inclusion, social cohesion and responsible life choices.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#dfe6df] bg-white p-6 shadow-[0_25px_80px_rgba(20,43,36,0.08)]">
              <div className="rounded-[1.5rem] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Youth development session"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf8ff] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#b7d9f7] bg-white shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
              <img
                src={resourceImage}
                alt="Young people learning and engaging in community programmes"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-[#b7d9f7] bg-white p-8 shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Resource Library</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">A practical guide for learning, growth and community action.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Explore our book and resource materials designed to support youth empowerment, mentorship, safe participation and sustainable community development.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] border border-dashed border-[#8fc6f3] bg-[#f0faff] p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a3d8f] text-white">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a3d8f]">Downloadable Book</p>
                  <p className="mt-1 text-xl font-black text-slate-800">Cornerstone Youth Guide</p>
                </div>
              </div>

              <a
                href={cornerstoneBook}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/15 transition hover:bg-[#e7c00f]"
              >
                Download Book
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="vision" className="bg-[#dfeefa] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[#b7d9f7] bg-white p-8 shadow-lg shadow-blue-200/50">
                <div className="flex items-center gap-3 text-[#0a3d8f]">
                  <Target size={26} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">Vision</p>
                </div>
                <p className="mt-6 text-2xl font-bold leading-relaxed text-slate-800">
                  Empowered, resilient and responsible youth who are able to fulfil their potential, contribute positively to society and build strong families and communities.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#b7d9f7] bg-white p-8 shadow-lg shadow-blue-200/50">
                <div className="flex items-center gap-3 text-[#0a3d8f]">
                  <BookOpen size={26} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">Mission</p>
                </div>
                <p className="mt-6 text-2xl font-bold leading-relaxed text-slate-800">
                  To empower adolescents and young people to develop personally, socially, educationally and economically through inclusive programmes in prevention, education, mentoring, skills development, sport, culture and community engagement.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] border border-[#b7d9f7] bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff6ff] text-[#0a3d8f]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0a3d8f]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programmes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Flagship Programmes</p>
            <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Helping young people build confidence, skills and belonging.</h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {programmes.map((programme) => (
              <div key={programme.title} className="overflow-hidden rounded-[2rem] border border-[#b7d9f7] bg-white shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
                <div className={`h-2 bg-gradient-to-r ${programme.accent}`} />
                <div className="p-7">
                  <h3 className="text-2xl font-black text-[#0a3d8f]">{programme.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{programme.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {programme.details.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#00a1de]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="bg-[#0a3d8f] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Experience & Track Record</p>
                <h2 className="mt-4 text-3xl font-black sm:text-4xl">A growing history of youth-focused action and impact.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  TC has built a strong track record through youth vocational initiatives, school collaboration, prevention work, sport and culture-based engagement, and support for entrepreneurship and community development.
                </p>
              </div>

              <div className="grid gap-4">
                {trackRecord.map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fcd116] text-[#0a3d8f]">
                      <Trophy size={18} />
                    </div>
                    <p className="text-base leading-7 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="governance" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Governance</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">A strong governance framework built for accountability and service.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The organisation is governed through a General Assembly, Executive Committee, Conflict Resolution, Complaints and Ethics Committee, Audit and Oversight Committee and Advisory Council. In July 2026, TC revised its governance framework to align with Rwanda’s current NGO legislation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {governance.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[#b7d9f7] bg-[#edf8ff] p-5 text-lg font-semibold text-[#0a3d8f] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f5f1] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Partners & Collaborators</p>
                <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Working together for youth wellbeing and opportunity.</h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="rounded-[1.5rem] border border-[#dfe6df] bg-white p-6 text-center text-lg font-semibold text-slate-700 shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">News & Events</p>
            <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Updates from the field and community.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-[#dfe6df] bg-white p-6 shadow-[0_20px_60px_rgba(16,37,33,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a3d8f]">{item.date}</p>
                <h3 className="mt-4 text-xl font-bold leading-relaxed text-[#0a3d8f]">{item.title}</h3>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a3d8f]">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="get-involved" className="bg-[#0a3d8f] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Get Involved</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">Support a new generation of leaders, creators and change-makers.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Whether through volunteering, partnership, mentorship, funding or outreach, your support helps young people access safe spaces, practical skills and opportunities to thrive.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <HandCoins className="text-[#fcd116]" size={22} />
                  <p className="mt-3 text-xl font-bold">Support programmes</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Briefcase className="text-[#fcd116]" size={22} />
                  <p className="mt-3 text-xl font-bold">Partner with us</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-black text-white">Ways to contribute</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-200">
                <li>• Volunteer as a mentor, coach or community supporter</li>
                <li>• Partner with TC on youth development initiatives</li>
                <li>• Provide in-kind support or resources for programmes</li>
                <li>• Share knowledge, expertise and networks</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Contact Us</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Let’s work together for stronger youth futures.</h2>
              <div className="mt-8 space-y-5 text-slate-700">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#0a3d8f]" size={20} />
                  <span>KK 383F St, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#0a3d8f]" size={20} />
                  <span>Phone number : </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#0a3d8f]" size={20} />
                  <span>Email address: </span>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#dfe6df] bg-white shadow-[0_25px_80px_rgba(20,43,36,0.08)]">
                <iframe
                  title="The Cornerstone location map"
                  src="https://www.google.com/maps?q=KK%20383F%20St%2C%20Kigali%2C%20Rwanda&z=15&output=embed"
                  className="h-[300px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form className="rounded-[2rem] border border-[#dfe6df] bg-white p-7 shadow-[0_25px_80px_rgba(20,43,36,0.08)]">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]" />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
                <input type="text" placeholder="Partnership, volunteering, support..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]" />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea rows="5" placeholder="Tell us how you would like to support or collaborate..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]" />
              </div>

              <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] transition hover:bg-[#e7c00f]">
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f8f4ee]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-base font-black tracking-[0.18em] text-[#0a3d8f]">THE CORNERSTONE</p>
            <p className="mt-2">Education • Confidence • Change</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#about" className="transition hover:text-[#00a1de]">About</a>
            <a href="#programmes" className="transition hover:text-[#00a1de]">Programmes</a>
            <a href="#impact" className="transition hover:text-[#00a1de]">Impact</a>
            <a href="#contact" className="transition hover:text-[#00a1de]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
