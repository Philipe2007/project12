import { useEffect, useRef, useState } from 'react';
import { Check, Clock3, MessageCircle, Plus, X, ArrowRight } from 'lucide-react';
import { businessInfo, formatServicePrice, serviceCategoryCoverImages, services, squareBookingUrl } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

/* ---------- Content shown in the pop-up (edit the wording here) ---------- */
// eslint-disable-next-line react-refresh/only-export-components
export const groupInfo = {
  hair: {
    tagline: 'Cuts, color, braids and treatments for every hair type.',
  },
  beauty: {
    tagline: 'Facials, brows and waxing to finish your look.',
  },
  packages: {
    tagline: 'Bundle your color or texture service and save time in the chair.',
  },
  'add-ons': {
    tagline: 'Upgrade any visit with extra care, styling or color.',
  },
};

const categoryInfo = {
  'Haircuts & Styling': 'Precision cuts, blowouts, silk press and event-ready updos.',
  'Hair Color': 'Root touch-ups, gloss and gray coverage for rich, even color.',
  'Highlights & Balayage': 'Foil or hand-painted highlights for soft, natural dimension.',
  'Braids & Protective Styles': 'Neat, long-lasting styles that protect your natural hair. Final price depends on size and length.',
  'Keratin, Relaxer & Perm': 'Smooth, straighten or add curl and texture.',
  Treatments: 'Deep conditioning, repair and scalp care for healthier hair.',
  'Facials & Brows': 'Skin-refreshing facials, eyebrow tint and facial waxing.',
  'Color Packages': 'A complete color service bundled into one visit.',
  'Root Color Packages': 'Root coverage with seamless blending close to the scalp.',
  'Texture Packages': 'Texture treatments for definition, softness and shine.',
  'Treatments Add-ons': 'Add a repair or moisture treatment to any service.',
  'Styling Upgrades': 'A smoother finish, extra shaping or longer-lasting hold.',
  'Additional Color': 'Extra color work for dimension and tone balance.',
};

// eslint-disable-next-line react-refresh/only-export-components
export const getGroupCover = (slug) => serviceCategoryCoverImages[slug];

const toNumber = (label) => {
  const match = /^\$(\d+(?:\.\d+)?)$/.exec(label || '');
  return match ? Number(match[1]) : null;
};

/* ---------- Component ---------- */
const ServiceCategoryModal = ({ group, selectedIds, onToggle, onClear, onClose }) => {
  const { language, t, translateService } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const closeButtonRef = useRef(null);
  // Lock page scroll, close on Escape, and return focus when closed
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const info = groupInfo[group.slug] || {};
  const cover = getGroupCover(group.slug);

  const sections = group.categories
    .map((category) => ({ category, items: services.filter((item) => item.category === category) }))
    .filter((section) => section.items.length > 0);

  const visibleSections = activeCategory === 'all' ? sections : sections.filter((section) => section.category === activeCategory);

  // Selected services (kept across categories)
  const selected = services.filter((item) => selectedIds.includes(item.id));
  const pricedTotal = selected.reduce((sum, item) => sum + (toNumber(item.priceLabel) || 0), 0);
  const unpricedCount = selected.filter((item) => toNumber(item.priceLabel) === null).length;

  const message = selected.length
    ? `${language === 'fr' ? `Bonjour ${businessInfo.name}, je souhaite réserver :` : `Hello ${businessInfo.name}, I would like to book:`}\n${selected
        .map((item) => {
          const translated = translateService(item);
          return `• ${translated.name} (${formatServicePrice(translated)}, ${translated.duration})`;
        })
        .join('\n')}\n\n${language === 'fr' ? 'Merci de me communiquer vos disponibilités.' : 'Please let me know your available times.'}`
    : language === 'fr' ? `Bonjour ${businessInfo.name}, je souhaite prendre rendez-vous.` : `Hello ${businessInfo.name}, I want to book an appointment.`;
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="category-modal-title">
      <style>{`
        @keyframes dlpFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes dlpRise { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: none } }
        .dlp-fade { animation: dlpFade .2s ease-out }
        .dlp-rise { animation: dlpRise .28s cubic-bezier(.2,.8,.2,1) }
        @media (prefers-reduced-motion: reduce) { .dlp-fade, .dlp-rise { animation: none } }
      `}</style>

      {/* Backdrop */}
      <div className="dlp-fade absolute inset-0 bg-[#1a0f14]/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="dlp-rise relative flex max-h-[94svh] w-full flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:max-h-[90svh] sm:max-w-3xl sm:rounded-[2rem]">
        {/* Header */}
        <div className="relative shrink-0">
          <img src={cover} alt="" className="h-36 w-full object-cover sm:h-44" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f14]/90 via-[#1a0f14]/45 to-[#1a0f14]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,33,138,0.35),transparent_55%)]" />

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t('Close')}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#201918] transition hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            <X size={20} />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <h2 id="category-modal-title" className="text-3xl font-semibold text-white sm:text-4xl" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
              {t(group.name)}
            </h2>
            <p className="mt-1 max-w-lg text-sm text-white/85 sm:text-base">{t(info.tagline)}</p>
          </div>
        </div>

        {/* Sub-category tabs */}
        {sections.length > 1 && (
          <div className="shrink-0 border-b border-[#efd9d2] bg-white px-4 py-3 sm:px-7">
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
              {[{ category: 'all', label: 'All' }, ...sections.map((section) => ({ category: section.category, label: section.category }))].map((tab) => {
                const active = activeCategory === tab.category;
                return (
                  <button
                    key={tab.category}
                    type="button"
                    onClick={() => setActiveCategory(tab.category)}
                    aria-pressed={active}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E0218A]/30 ${
                      active ? 'border-[#E0218A] bg-[#E0218A] text-white' : 'border-[#efd9d2] bg-white text-[#5d4540] hover:border-[#d9ada5]'
                    }`}
                  >
                    {t(tab.label)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Services list */}
        <div className="flex-1 space-y-8 overflow-y-auto px-4 py-6 sm:px-7">
          {visibleSections.map((section) => (
            <section key={section.category}>
              <h3 className="text-xl font-bold text-[#201918]">{t(section.category)}</h3>
              {categoryInfo[section.category] && <p className="mt-1 text-sm leading-6 text-[#5d4540]">{t(categoryInfo[section.category])}</p>}

              <ul className="mt-4 space-y-3">
                {section.items.map((item) => {
                  const isSelected = selectedIds.includes(item.id);
                  const translated = translateService(item);
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onToggle(item.id)}
                        aria-pressed={isSelected}
                        className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E0218A]/30 sm:gap-4 ${
                          isSelected ? 'border-[#E0218A] bg-[#fff1f8]' : 'border-[#efd9d2] bg-white hover:border-[#d9ada5]'
                        }`}
                      >
                        {item.image && <img src={item.image} alt="" loading="lazy" className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20" />}
                        <span className="min-w-0 flex-1">
                          <span className="block font-bold leading-snug text-[#201918]">{translated.name}</span>
                          <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-[#5d4540]">
                            <Clock3 size={14} /> {translated.duration}
                          </span>
                        </span>
                        <span className="shrink-0 text-right">
                          <span className="block text-lg font-black text-[#201918]">{formatServicePrice(translated)}</span>
                          <span
                            className={`mt-1 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                              isSelected ? 'bg-[#E0218A] text-white' : 'bg-[#f6e5e1] text-[#7a4d46]'
                            }`}
                          >
                            {isSelected ? <Check size={12} /> : <Plus size={12} />}
                            {isSelected ? 'Added' : 'Add'}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* Booking footer */}
        <div className="shrink-0 border-t border-[#efd9d2] bg-[#fdf7f4] px-4 py-4 sm:px-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-[#201918]">
                {selected.length
                  ? language === 'fr' ? `${selected.length} prestation${selected.length > 1 ? 's' : ''} sélectionnée${selected.length > 1 ? 's' : ''}` : `${selected.length} service${selected.length > 1 ? 's' : ''} selected`
                  : t('Tap the services you want to book')}
              </p>
              {selected.length > 0 && (
                <p className="mt-0.5 text-sm text-[#5d4540]">
                  {pricedTotal > 0 ? `${t('Estimated total')}: $${pricedTotal}` : t('Price confirmed by the salon')}
                  {pricedTotal > 0 && unpricedCount > 0 ? ` + ${unpricedCount} ${t('to be quoted')}` : ''}
                </p>
              )}
            </div>
            {selected.length > 0 && (
              <button type="button" onClick={onClear} className="text-sm font-semibold text-[#7a4d46] underline underline-offset-4">
                {t('Clear')}
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#E0218A] px-6 py-3.5 font-semibold text-white shadow-[0_10px_26px_rgba(224,33,138,0.35)] transition hover:bg-[#c21a76] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E0218A]/40"
            >
              <MessageCircle size={18} /> {t('Book on WhatsApp')}
            </a>
            <a
              href={squareBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#d8b7b0] bg-white px-6 py-3.5 font-semibold text-[#2b1b1d] transition hover:border-[#c99790] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E0218A]/30"
            >
              {t('Book online')} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoryModal;
