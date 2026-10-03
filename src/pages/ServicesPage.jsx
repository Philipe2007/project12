import { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, ShieldCheck } from 'lucide-react';
import { serviceCategoryGroups, services, formatServicePrice, squareBookingUrl } from '../data/siteData';
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

  const service = translateService(services.find((item) => item.slug === slug) || services[0]);
  const selectedGroup = serviceCategoryGroups.find((group) => group.slug === categorySlug);
  const visibleCategories = selectedGroup?.categories || [];
  const groupedServices = visibleCategories.map((category) => ({
    category,
    items: services.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);
  const openGroup = serviceCategoryGroups.find((group) => group.slug === openGroupSlug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {slug ? (
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
                <a href={`https://wa.me/12393991228?text=${encodeURIComponent(language === 'fr' ? `Bonjour Delphine Beauty Studio, je souhaite réserver la prestation : ${service.name}` : `Hello Delphine Beauty Studio, I want to book the service: ${service.name}`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d8b7b0] bg-white px-6 py-3 font-semibold text-[#2b1b1d] hover:border-[#c99790]">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <ul className="mt-8 space-y-3 text-[#4b3c3a]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> {t('Walk-ins are welcome when space allows')}</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> {t('Booking online guarantees your slot')}</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> {t('Call us to confirm availability and payment options')}</li>
              </ul>
            </div>
          </div>
        </>
      ) : categorySlug && selectedGroup ? (
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
                <button
                  key={group.slug}
                  type="button"
                  onClick={() => setOpenGroupSlug(group.slug)}
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
                </button>
              );
            })}
          </div>
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
          {services.slice(0, 3).map((item) => (
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