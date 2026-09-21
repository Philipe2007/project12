import { ArrowRight, Clock3 } from 'lucide-react';
import { formatServicePrice, squareBookingUrl } from '../data/siteData';

const ServiceCard = ({ service }) => (
  <article className="rounded-[1.7rem] border border-[#f0d9d4] bg-white p-5 shadow-[0_18px_40px_rgba(63,39,38,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(63,39,38,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{service.category}</p>
          <h3 className="mt-2 text-xl font-black text-[#201918]">{service.name}</h3>
        </div>
        <span className="rounded-full bg-[#f6e5e1] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7a4d46]">
          {formatServicePrice(service)}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-[#5d4540]">
        <Clock3 size={16} className="text-[#7a4d46]" />
        {service.duration}
      </div>

      <p className="mt-4 text-base leading-7 text-[#5d4540]">{service.description}</p>

      <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7a4d46]">
        Book this service
        <ArrowRight size={16} />
      </a>
  </article>
);

export default ServiceCard;
