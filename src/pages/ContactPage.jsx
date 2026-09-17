import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { businessInfo } from '../data/siteData';
import locationPhoto from '../images/location1.jpeg';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name') || 'Customer';
    const phone = form.get('phone') || 'Not provided';
    const message = form.get('message') || 'Booking request';
    const text = encodeURIComponent(
      `Hello Deliphine Beauty Studio,\n\nI would like to contact the salon.\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    );
    window.open(`https://wa.me/12393991228?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact us"
        title="Book a visit, ask about a style, or order a product."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.8rem] border border-[#efd9d2] bg-white p-6 shadow-[0_18px_35px_rgba(48,34,34,0.04)]">
          <div className="space-y-5 text-[#4b3c3a]">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-[#7a4d46]" size={18} />
              <span>{businessInfo.address}</span>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#efd9d2] bg-[#f9efe9] p-2">
              <img
                src={locationPhoto}
                alt="J. Lee Salon Suites building at 24880 South Tamiami Trail"
                className="h-64 w-full rounded-[1rem] object-cover"
                loading="lazy"
              />
              <p className="px-2 pb-1 pt-3 text-sm font-semibold text-[#7a4d46]">Look for the Salon Suites building and clock near the entrance.</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-[#7a4d46]" size={18} />
              <a href="tel:+12393991228" className="hover:text-[#7a4d46]">{businessInfo.phone}</a>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 text-[#7a4d46]" size={18} />
              <span>
                {businessInfo.openingHours.weekdays}
                <br />
                {businessInfo.openingHours.sunday}
              </span>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#efd9d2] bg-[#f9efe9] p-2">
            <iframe
              title="Salon location map"
              src="https://www.google.com/maps?q=J.+Lee+Salon+Suites,+24880+S+Tamiami+Trl+%231,+Bonita+Springs,+FL+34134&output=embed"
              className="h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=J.+Lee+Salon+Suites,+24880+S+Tamiami+Trl+%231,+Bonita+Springs,+FL+34134"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-[#2b1b1d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4b2d2f]"
          >
            Get directions
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[1.8rem] border border-[#efd9d2] bg-[#f9efe9] p-6 shadow-[0_18px_35px_rgba(48,34,34,0.04)]">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#201918]">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#201918]">Phone</label>
              <input id="phone" name="phone" type="tel" required className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]" placeholder="+1..." />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#201918]">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]" placeholder="Tell us what you need" />
          </div>

          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-6 py-3 font-semibold text-white hover:bg-[#4b2d2f]">
            <MessageCircle size={18} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
