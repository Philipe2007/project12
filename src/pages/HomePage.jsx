import { ArrowRight, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo, galleryItems, heroStats, reasons, services, squareBookingUrl, testimonials } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import heroImage from '../images/WhatsApp Image 2026-09-16 at 18.12.24.jpeg';
import locationImage from '../images/WhatsApp Image 2026-09-16 at 18.12.25.jpeg';

const HomePage = () => (
  <>
    <section className="relative overflow-hidden bg-[#f9efe9] text-[#201918]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,155,145,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(146,106,100,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8b7b0] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#6f453f]">
            <Sparkles size={12} />
            Bonita Springs beauty studio
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.05em] text-[#201918] sm:text-5xl lg:text-7xl">
            Hair, beauty and confidence made for women.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#4b3c3a]">
            Expert braids, weaves, colour and bridal styling, crafted with care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-7 py-3.5 font-semibold text-white transition hover:bg-[#4a2c2f]">
              Book Now
              <ArrowRight size={18} />
            </a>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-[#d8b7b0] bg-white px-7 py-3.5 font-semibold text-[#2b1b1d] transition hover:border-[#c99790] hover:bg-[#fffaf9]">
              View Services
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#ead9d4] bg-white/80 p-4 shadow-sm">
                <p className="text-2xl font-black text-[#2b1b1d]">{item.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#6f453f]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-[#ead9d4] bg-[#f4e5df] p-3 shadow-[0_30px_60px_rgba(32,25,24,0.12)]">
            <img src={heroImage} alt="Deliphine beauty salon" className="h-[540px] w-full rounded-[1.5rem] object-cover" loading="eager" />
          </div>
          <div className="absolute -left-5 bottom-8 rounded-2xl border border-[#ecd9d5] bg-white/85 p-4 shadow-xl backdrop-blur-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#6f453f]">Best seller</p>
            <p className="mt-2 text-xl font-black text-[#2b1b1d]">Luxury weave</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Our services"
        title="Beauty treatments created to match your style."
        description="Browse our full menu, then call or WhatsApp us to confirm availability and pricing."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.slice(0, 8).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a4d46]">
          See all services
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>

    <section className="bg-[#2b1b1d] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0d8d1]">Customer spotlight</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Beautiful work, made for every customer.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#f2e3df]">Explore real customer styles from Deliphine Beauty Studio, then visit us for your own personalized look.</p>
            <div className="mt-7 flex items-start gap-3 text-[#f7e8e5]">
              <MapPin size={20} className="mt-1 shrink-0 text-[#f0d8d1]" />
              <span>{businessInfo.address}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
            <img src={locationImage} alt="Customer wearing a finished braided hairstyle" className="h-[360px] w-full rounded-[1.25rem] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Our customers"
        title="Real looks created for our customers."
        description="Browse a selection of styles, color and beauty looks from the Deliphine Beauty Studio chair."
      />
      <div className="mt-10">
        <GalleryGrid items={galleryItems.slice(0, 6)} />
      </div>
    </section>

    <section className="bg-[#f9efe9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why women choose us"
          title="A salon experience designed around your confidence, comfort and style."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const icons = [Sparkles, ShieldCheck, Clock3, Phone, MessageCircle, Star];
            const Icon = icons[index] || Sparkles;

            return (
              <div key={reason.title} className="rounded-[1.7rem] border border-[#efd9d2] bg-white p-6 shadow-[0_12px_30px_rgba(48,34,34,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f9e7e2] text-[#7a4d46]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#2b1b1d]">{reason.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#5d4540]">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Client reviews"
        title="Women keep returning because they feel beautiful and cared for."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((review) => (
          <div key={review.name} className="rounded-[1.7rem] border border-[#efd9d2] bg-white p-6 shadow-[0_18px_35px_rgba(48,34,34,0.04)]">
            <div className="flex items-center gap-1 text-[#d28f7a]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={`${review.name}-${index}`} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-lg leading-8 text-[#4b3c3a]">“{review.quote}”</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{review.name}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#241516] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0d8d1]">Book your appointment</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Ready to look your best? Book in seconds.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#f2e3df]">
            Pick your service, choose a date and send your appointment request directly to WhatsApp.
          </p>

          <div className="mt-8 space-y-4 text-[#f7e8e5]">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#f0d8d1]" />
              <span>{businessInfo.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#f0d8d1]" />
              <span>{businessInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 size={18} className="text-[#f0d8d1]" />
              <span>{businessInfo.openingHours.weekdays} · {businessInfo.openingHours.sunday}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/12393991228?text=Hello%20Deliphine%20Beauty%20Studio%2C%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f0d8d1] px-5 py-3 font-semibold text-[#2b1b1d] hover:bg-[#e6c6c2]">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="tel:+12393991228" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Call now
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#f7e8e5]">Most popular</p>
              <h3 className="mt-2 text-2xl font-black text-white">Luxury weave</h3>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f7e8e5]">Availability</p>
              <p className="mt-2 text-sm text-[#f0d8d1]">Open Tuesday–Sunday</p>
            </div>
          </div>
          <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f0d8d1] px-6 py-3 font-semibold text-[#2b1b1d] transition hover:bg-[#e6c6c2]">
            Book online
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
