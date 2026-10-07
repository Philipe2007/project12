import { ArrowRight, Clock3, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo, galleryItems, heroStats, reasons, services, squareBookingUrl, testimonials } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import locationImage from '../location/WhatsApp Image 2026-09-17 at 15.25.34.jpeg';
import locationImage2 from '../location/WhatsApp Image 2026-09-17 at 15.25.35.jpeg';
import video1 from '../location/helovideo.mp4';
import salonVideo from '../location/WhatsApp Video 2026-09-17 at 15.25.34.mp4';
import { useLanguage } from '../context/LanguageContext';

const heroServices = ['Hair', 'Skin Care', 'Hair Removal', 'Eyelashs & Brow', 'VIP scalp massage'];
const HomePage = () => {
  const { t } = useLanguage();
  return (
  <>
    {/* ============================ HERO ============================ */}





<section className="relative isolate flex min-h-[580px] flex-col overflow-hidden bg-[#1a0f14] text-white sm:min-h-[80svh] lg:min-h-[88svh]">

  {/* Background video */}
  <video
    className="absolute inset-0 z-0 h-full w-full object-cover object-[60%_center] motion-reduce:hidden sm:object-center"
    src={video1}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    aria-hidden="true"
  />

  {/* One even overlay + a little extra at the bottom */}
  <div className="absolute inset-0 z-10 bg-black/45" />
  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

  {/* Content */}
  <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 items-end px-5 pb-10 pt-24 sm:px-8 lg:items-center lg:pb-14">
    <div className="max-w-xl">

      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ff8cc6]">
        Delphine Beauty Studio
      </p>

      <h1
        className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        style={{ fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif' }}
      >
        {t('Relaxing time.')}
        <span
          className="block text-4xl font-normal text-[#ff8cc6] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: '"Allura", "Great Vibes", cursive' }}
        >
          {t('Perfect look.')}
        </span>
      </h1>

      <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
        {t('European-style beauty care in a calm, welcoming studio, designed around your comfort and confidence.')}
      </p>

      {/* Service chips */}
      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label={t('Our main services')}
      >
        {heroServices.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md sm:text-sm"
          >
            {t(item)}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={squareBookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#E0218A] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#E0218A]/30 transition hover:bg-[#c21a76] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          {t('Book now')}
          <ArrowRight size={15} />
        </a>

        <Link
          to="/services"
          className="border-b border-white pb-0.5 text-sm font-medium text-white transition hover:border-[#ff8cc6] hover:text-[#ff8cc6] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          {t('View services')}
        </Link>
      </div>

      {/* Social proof row */}
      <div className="mt-5 flex items-center gap-2 text-xs text-white/80">
        <span className="flex gap-0.5 text-[#ff8cc6]" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </span>
        <span>4.9 · 70 Google reviews</span>
      </div>

      <p className="mt-2 text-[11px] text-white/60">
        {t('We speak English and French.')}
      </p>
    </div>
  </div>

  {/* Stats strip: desktop and tablet only */}
  <div className="relative z-20 mx-auto hidden w-full max-w-7xl px-5 pb-5 sm:block sm:px-8">
    <dl className="grid grid-cols-2 divide-x divide-white/20 border-t border-white/20 pt-4 lg:grid-cols-4">
      {heroStats.map((item, i) => (
        <div key={item.label} className={i === 0 ? 'pr-4' : 'px-4'}>
          <dt className="sr-only">{t(item.label)}</dt>
          <dd className="text-lg font-semibold">{t(item.value)}</dd>
          <p className="text-[11px] text-white/60" aria-hidden="true">{t(item.label)}</p>
        </div>
      ))}
    </dl>
  </div>

</section>



    {/* ============================ SERVICES ============================ */}
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

    {/* ============================ CUSTOMER SPOTLIGHT ============================ */}
    <section className="bg-[#E0218A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0d8d1]">{t('Customer spotlight')}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{t('Beautiful work, made for every customer.')}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#f2e3df]">{t('Explore real customer styles from Delphine Beauty Studio, then visit us for your own personalized look.')}</p>
            <div className="mt-7 flex items-start gap-3 text-[#f7e8e5]">
              <MapPin size={20} className="mt-1 shrink-0 text-[#f0d8d1]" />
              <span>{businessInfo.address}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
            <img src={locationImage2} alt={t('Customer wearing a finished braided hairstyle')} className="h-72 w-full rounded-[1.25rem] object-cover sm:h-[360px]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* ============================ VISIT THE STUDIO ============================ */}
    <section className="bg-[var(--brand-ivory)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-rose-deep)]">{t('Visit the studio')}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--brand-ink)] sm:text-4xl">{t('A quick look around the salon and how to find us.')}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b3c3a]">{t('Use the video and location photo together to make your visit easier and feel more confident before you arrive.')}</p>
            <div className="mt-7 flex items-start gap-3 text-[var(--brand-ink)]">
              <MapPin size={20} className="mt-1 shrink-0 text-[var(--brand-rose-deep)]" />
              <span>{businessInfo.address}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.7rem] border border-[var(--brand-line)] bg-white p-2 shadow-[0_25px_60px_rgba(16,19,21,0.08)]">
            <video
              src={salonVideo}
              poster={locationImage}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-[1.25rem] bg-black object-cover"
              aria-label={t('Salon tour video')}
            />
          </div>
        </div>
      </div>
    </section>

    {/* ============================ GALLERY ============================ */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Our customers"
        title="Real looks created for our customers."
        description="Browse a selection of styles, color and beauty looks from the Delphine Beauty Studio chair."
      />
      <div className="mt-10">
        <GalleryGrid items={galleryItems.slice(0, 6)} />
      </div>
    </section>

    {/* ============================ WHY CHOOSE US ============================ */}
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
                <h3 className="mt-5 text-xl font-black text-[#2b1b1d]">{t(reason.title)}</h3>
                <p className="mt-3 text-base leading-7 text-[#5d4540]">{t(reason.text)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ============================ REVIEWS ============================ */}
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
            <p className="mt-5 text-lg leading-8 text-[#4b3c3a]">“{t(review.quote)}”</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{review.name}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ============================ BOOKING ============================ */}
    <section className="bg-[#E0218A] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f0d8d1]">{t('Book your appointment')}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{t('Ready to look your best? Book in seconds.')}</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#f2e3df]">
            {t('Pick your service, choose a date and send your appointment request directly to WhatsApp.')}
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
            <a href="https://wa.me/12393991228?text=Hello%20Delphine%20Beauty%20Studio%2C%20I%20want%20to%20book%20an%20appointment." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f0d8d1] px-5 py-3 font-semibold text-[#2b1b1d] hover:bg-[#e6c6c2]">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href="tel:+12393991228" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10">
              {t('Call now')}
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#f7e8e5]">{t('Most popular')}</p>
              <h3 className="mt-2 text-2xl font-black text-white">{t('welcome')}</h3>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f7e8e5]">{t('Availability')}</p>
              <p className="mt-2 text-sm text-[#f0d8d1]">{t('Open Tuesday–Sunday')}</p>
            </div>
          </div>
          <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f0d8d1] px-6 py-3 font-semibold text-[#2b1b1d] transition hover:bg-[#e6c6c2]">
            {t('Book online')}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  </>
  );
};

export default HomePage;