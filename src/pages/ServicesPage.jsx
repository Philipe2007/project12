import { useCallback, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessInfo, serviceCategoryGroups, services, formatServicePrice, squareBookingUrl } from '../data/siteData';
import { SITE_NAME, SITE_URL } from '../seoConfig';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ServiceCategoryModal, { getGroupCover, groupInfo } from './ServiceCategoryModal';
import { useLanguage } from '../context/LanguageContext';

const ServicesPage = () => {
  const { slug, categorySlug } = useParams();
  const { language, t, translateService } = useLanguage();
  const [openGroupSlug, setOpenGroupSlug] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  const closeModal = useCallback(() => setOpenGroupSlug(null), []);
  const toggleService = useCallback(
    (id) => setSelectedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id])),
    []
  );
  const clearSelection = useCallback(() => setSelectedIds([]), []);

  const rawService = slug ? services.find((item) => item.slug === slug) : null;
  const selectedGroup = categorySlug ? serviceCategoryGroups.find((group) => group.slug === categorySlug) : null;

  // Unknown service or category URLs used to show the first service (a duplicate page).
  // Send them to the main services page instead.
  if (slug && !rawService) return <Navigate to="/services" replace />;
  if (categorySlug && !selectedGroup) return <Navigate to="/services" replace />;

  const service = rawService ? translateService(rawService) : null;
  const visibleCategories = selectedGroup?.categories || [];
  const groupedServices = visibleCategories.map((category) => ({
    category,
    items: services.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);
  const openGroup = serviceCategoryGroups.find((group) => group.slug === openGroupSlug);

  // Related services: same category first, never the current service.
  const relatedServices = rawService
    ? [
        ...services.filter((item) => item.category === rawService.category && item.id !== rawService.id),
        ...services.filter((item) => item.category !== rawService.category),
      ].slice(0, 3)
    : services.slice(0, 3);

  // Structured data for service pages (Service + breadcrumb)
  const priceMatch = rawService ? /^\$(\d+(?:\.\d+)?)$/.exec(rawService.priceLabel || '') : null;
  const serviceUrl = rawService ? `${SITE_URL}/services/${rawService.slug}` : null;
  const serviceSchema = rawService
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name: rawService.name,
            description: rawService.description,
            serviceType: rawService.category,
            url: serviceUrl,
            areaServed: { '@type': 'City', name: businessInfo.city },
            provider: { '@type': 'HairSalon', name: SITE_NAME, url: `${SITE_URL}/` },
            ...(priceMatch
              ? { offers: { '@type': 'Offer', price: priceMatch[1], priceCurrency: 'USD', url: serviceUrl } }
              : {}),
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
              { '@type': 'ListItem', position: 3, name: rawService.name, item: serviceUrl },
            ],
          },
        ],
      }
    : null;

  // Open the category popup on a normal click, but keep the card a real link
  // (crawlable, and "open in new tab" still works).
  const handleGroupClick = (event, groupSlug) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setOpenGroupSlug(groupSlug);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {serviceSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        </Helmet>
      )}

      {service ? (
        <>
          <div className="mx-auto max-w-3xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7a4d46]">{service.category}</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#201918] sm:text-5xl">{service.name}</h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#5d4540]">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f6e5e1] px-3 py-2 font-semibold text-[#7a4d46]">
                  <Clock3 size={16} /> {service.duration}
                </span>
              </div>

              <p className="mt-6 text-lg leading-8 text-[#4b3c3a]">{service.description}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[#efd9d2] bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{t('Price')}</p>
                  <p className="mt-2 text-2xl font-black text-[#201918]">{formatServicePrice(service)}</p>
                </div>
                <div className="rounded-[1.25rem] border border-[#efd9d2] bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{t('Duration')}</p>
                  <p className="mt-2 text-2xl font-black text-[#201918]">{service.duration}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#E0218A] px-6 py-3 font-semibold text-white hover:bg-[#c21a76]">
                  {t('Book this service')}
                  <ArrowRight size={18} />
                </a>
                <a href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(language === 'fr' ? `Bonjour Delphine Beauty Studio, je souhaite réserver la prestation : ${service.name}` : `Hello Delphine Beauty Studio, I want to book the service: ${service.name}`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d8b7b0] bg-white px-6 py-3 font-semibold text-[#2b1b1d] hover:border-[#c99790]">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <ul className="mt-8 space-y-3 text-[#4b3c3a]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> {t('Walk-ins are welcome when space allows')}</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> {t('Booking online guarantees your slot')}</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> {t('Call us to confirm availability and payment options')}</li>
              </ul>

              <p className="mt-8 text-sm text-[#5d4540]">
                {SITE_NAME} · {businessInfo.address}
                {' · '}
                <a href={`tel:+${businessInfo.whatsapp}`} className="font-semibold text-[#7a4d46] underline">{businessInfo.phone}</a>
              </p>

              <p className="mt-4 text-sm">
                <Link to="/services" className="font-semibold text-[#7a4d46] underline">{t('All services')}</Link>
              </p>
            </div>
          </div>
        </>
      ) : selectedGroup ? (
        <>
          <SectionHeader
            eyebrow="Service category"
            title={selectedGroup.name}
            description="Choose from the services in this category, then book online or contact us to confirm your appointment."
          />

          <div className="mt-10 space-y-12">
            {groupedServices.map((group) => (
              <section key={group.category}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-[#efdad5]" />
                  <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#7a4d46]">{group.category}</h2>
                  <span className="h-px flex-1 bg-[#efdad5]" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((serviceItem) => <ServiceCard key={serviceItem.id} service={serviceItem} />)}
                </div>
              </section>
            ))}
          </div>
        </>
      ) : (
        <>
          <SectionHeader
            eyebrow="Our services"
            title="Choose the kind of services you need."
            description="Tap a category to see every service, pick what you want and book in seconds."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCategoryGroups.map((group) => {
              const count = services.filter((item) => group.categories.includes(item.category)).length;
              const preview = group.categories.slice(0, 3);
              const extra = group.categories.length - preview.length;

              return (
                <Link
                  key={group.slug}
                  to={`/services/category/${group.slug}`}
                  onClick={(event) => handleGroupClick(event, group.slug)}
                  aria-haspopup="dialog"
                  className="group flex flex-col overflow-hidden rounded-[1.7rem] border border-[#efd9d2] bg-white text-left shadow-[0_18px_35px_rgba(48,34,34,0.05)] transition hover:-translate-y-1 hover:border-[#E0218A]/50 hover:shadow-[0_24px_45px_rgba(224,33,138,0.12)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E0218A]/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={getGroupCover(group.slug)} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f14]/85 via-[#1a0f14]/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                      <h3 className="text-3xl font-semibold text-white" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>{t(group.name)}</h3>
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#7a4d46]">{count} {t('services')}</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm leading-6 text-[#5d4540]">{t(groupInfo[group.slug]?.tagline)}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {preview.map((category) => (
                        <span key={category} className="rounded-full bg-[#f9efe9] px-3 py-1 text-xs font-semibold text-[#7a4d46]">{t(category)}</span>
                      ))}
                      {extra > 0 && <span className="rounded-full bg-[#f9efe9] px-3 py-1 text-xs font-semibold text-[#7a4d46]">+{extra} {t('more')}</span>}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#E0218A]">
                      {t('View & book')} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Full menu: real text links to every service page, with prices (good for Google) */}
          <section className="mt-16" aria-labelledby="full-service-menu">
            <h2 id="full-service-menu" className="text-2xl font-black tracking-[-0.03em] text-[#201918]">
              {t('Full service menu')}
            </h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {serviceCategoryGroups.map((group) => (
                <div key={group.slug}>
                  <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#7a4d46]">
                    <Link to={`/services/category/${group.slug}`} className="hover:text-[#E0218A]">{t(group.name)}</Link>
                  </h3>
                  <ul className="mt-3 divide-y divide-[#efdad5] rounded-[1.25rem] border border-[#efd9d2] bg-white px-4">
                    {services
                      .filter((item) => group.categories.includes(item.category))
                      .map((item) => (
                        <li key={item.id} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                          <Link to={`/services/${item.slug}`} className="font-medium text-[#2b1b1d] hover:text-[#E0218A]">
                            {translateService(item).name}
                          </Link>
                          <span className="shrink-0 font-semibold text-[#7a4d46]">{formatServicePrice(item)}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <div className="mt-20 rounded-[2rem] border border-[#efd9d2] bg-[#f9efe9] p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7a4d46]">Why choose us</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#201918]">Professional care, premium results.</h2>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[#4b3c3a]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#edd7d1] bg-white px-3 py-2"><ShieldCheck size={16} className="text-[#7a4d46]" /> Hygienic salon</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#edd7d1] bg-white px-3 py-2"><CheckCircle2 size={16} className="text-[#7a4d46]" /> Trusted stylists</span>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeader eyebrow="Related services" title="More beauty options for your next visit." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {relatedServices.map((item) => (
            <div key={item.id} className="rounded-[1.7rem] border border-[#efd9d2] bg-white p-5 shadow-[0_18px_35px_rgba(48,34,34,0.04)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{t(item.category)}</p>
                <h3 className="mt-2 text-xl font-black text-[#201918]">{translateService(item).name}</h3>
              <p className="mt-3 text-base leading-7 text-[#5d4540]">{formatServicePrice(item)}</p>
              <Link to={`/services/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7a4d46]">
                {t('Explore')} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-[2rem] border border-[#efd9d2] bg-[#E0218A] p-8 text-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f0d8d1]">Book with us</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">Ready to book your next look?</h3>
          </div>
          <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f0d8d1] px-6 py-3 font-semibold text-[#2b1b1d] hover:bg-[#e6c6c2]">
            {t('Book now')} <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {openGroup && (
        <ServiceCategoryModal
          group={openGroup}
          selectedIds={selectedIds}
          onToggle={toggleService}
          onClear={clearSelection}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ServicesPage;