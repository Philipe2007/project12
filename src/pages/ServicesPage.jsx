import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { services, formatServicePrice, squareBookingUrl } from '../data/siteData';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {slug ? (
        <>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <img src={service.image} alt={service.name} className="h-[460px] w-full rounded-[1.8rem] object-cover shadow-[0_30px_60px_rgba(32,25,24,0.12)]" loading="lazy" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7a4d46]">{service.category}</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#201918] sm:text-5xl">{service.name}</h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#5d4540]">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f6e5e1] px-3 py-2 font-semibold text-[#7a4d46]">
                  <Clock3 size={16} /> {service.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ecd9d4] bg-white px-3 py-2 font-semibold text-[#201918]">
                  <MapPin size={16} /> 
                </span>
              </div>

              <p className="mt-6 text-lg leading-8 text-[#4b3c3a]">{service.description}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-[#efd9d2] bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">Price</p>
                  <p className="mt-2 text-2xl font-black text-[#201918]">{formatServicePrice(service)}</p>
                </div>
                <div className="rounded-[1.25rem] border border-[#efd9d2] bg-white p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">Duration</p>
                  <p className="mt-2 text-2xl font-black text-[#201918]">{service.duration}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-6 py-3 font-semibold text-white hover:bg-[#4b2d2f]">
                  Book this service
                  <ArrowRight size={18} />
                </a>
                <a href={`https://wa.me/12393991228?text=${encodeURIComponent(`Hello Deliphine Beauty Studio, I want to book the service: ${service.name}`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d8b7b0] bg-white px-6 py-3 font-semibold text-[#2b1b1d] hover:border-[#c99790]">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <ul className="mt-8 space-y-3 text-[#4b3c3a]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> Walk-ins are welcome when space allows</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> Booking online guarantees your slot</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#7a4d46]" /> Call us to confirm availability and payment options</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <SectionHeader
            eyebrow="Our services"
            title="A complete menu for cuts, color, treatments and styling."
            description="Browse services by category. Fixed prices are shown where available; otherwise call us for a personalized quote."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((serviceItem) => (
              <ServiceCard key={serviceItem.id} service={serviceItem} />
            ))}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{item.category}</p>
              <h3 className="mt-2 text-xl font-black text-[#201918]">{item.name}</h3>
              <p className="mt-3 text-base leading-7 text-[#5d4540]">{formatServicePrice(item)}</p>
              <Link to={`/services/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7a4d46]">
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-[2rem] border border-[#efd9d2] bg-[#2b1b1d] p-8 text-white">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f0d8d1]">Book with us</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">Ready to book your next look?</h3>
          </div>
          <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f0d8d1] px-6 py-3 font-semibold text-[#2b1b1d] hover:bg-[#e6c6c2]">
            Book now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
