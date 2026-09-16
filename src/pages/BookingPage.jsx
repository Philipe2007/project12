import { useMemo, useState } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock3, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { bookingDates, formatPrice, formatServicePrice, services, squareBookingUrl, timeSlots } from '../data/siteData';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedDate, setSelectedDate] = useState(bookingDates[0]);
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    notes: '',
  });
  const submitted = false;

  const stepTitle = useMemo(() => {
    if (step === 1) return 'What can we do for you?';
    if (step === 2) return 'When works for you?';
    if (step === 3) return 'Your details';
    return 'Booking summary';
  }, [step]);

  const nextStep = () => setStep((value) => Math.min(value + 1, 4));
  const prevStep = () => setStep((value) => Math.max(value - 1, 1));

  const currentDateLabel = new Date(selectedDate).toLocaleDateString('en-US', {
    weekday: 'short', day: 'numeric', month: 'short',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Booking" title="Book your next salon appointment" description="Easy online booking for braids, weaves, bridal styling and hair care." align="center" />

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#efd9d2] bg-white shadow-[0_20px_40px_rgba(48,34,34,0.04)]">
        <div className="flex items-center justify-between border-b border-[#efd9d2] bg-[#f9efe9] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${step >= item ? 'bg-[#2b1b1d] text-white' : 'border border-[#d7b8b1] bg-white text-[#7a4d46]'}`}>
                  {item}
                </div>
                {item < 4 ? <div className="hidden h-px w-8 bg-[#d7b8b1] sm:block" /> : null}
              </div>
            ))}
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a4d46]">{stepTitle}</div>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="rounded-[1.8rem] border border-[#dfe9d6] bg-[#f3fbf3] p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#dff7e2] text-[#1f7a46]">
                <Check size={28} />
              </div>
              <h3 className="mt-5 text-3xl font-black text-[#201918]">Booking requested</h3>
              <p className="mt-3 text-lg text-[#4b3c3a]">Your request has been prepared in WhatsApp. We will confirm your appointment soon.</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-6 py-3 font-semibold text-white hover:bg-[#4b2d2f]">
                Explore services
                <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <>
              {step === 1 ? (
                <div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`overflow-hidden rounded-[1.5rem] border text-left transition ${selectedService.id === service.id ? 'border-[#d9968b] bg-[#fff8f6] shadow-[0_18px_35px_rgba(48,34,34,0.04)]' : 'border-[#efd9d2] bg-white'}`}
                      >
                        <img src={service.image} alt={service.name} className="h-36 w-full object-cover" loading="lazy" />
                        <div className="p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{service.category}</p>
                          <h3 className="mt-2 text-lg font-black text-[#201918]">{service.name}</h3>
                          <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                            <span className="font-semibold text-[#201918]">{formatServicePrice(service)}</span>
                            <span className="text-[#5d4540]">{service.duration}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.3rem] border border-dashed border-[#edd7d1] bg-[#fffaf8] p-4">
                    <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a4d46]">
                      <Sparkles size={16} /> Not sure yet — help me decide
                    </button>
                    <p className="mt-2 text-sm text-[#5d4540]">Book a free 15-minute consultation with our team.</p>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="space-y-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {bookingDates.map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`rounded-[1.1rem] border px-4 py-4 text-left transition ${selectedDate === date ? 'border-[#d9968b] bg-[#2b1b1d] text-white' : 'border-[#efd9d2] bg-white text-[#201918]'}`}
                      >
                        {new Date(date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </button>
                    ))}
                  </div>

                  <div className="grid gap-6 lg:grid-cols-3">
                    {Object.entries(timeSlots).map(([label, slots]) => (
                      <div key={label}>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7a4d46]">{label}</p>
                        <div className="space-y-2">
                          {slots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`w-full rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${selectedTime === slot ? 'border-[#d9968b] bg-[#f9e7e2] text-[#201918]' : 'border-[#efd9d2] bg-white text-[#5d4540]'}`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#201918]">Full name</label>
                    <input type="text" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#201918]">Phone / WhatsApp number</label>
                    <input type="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]" placeholder="+250..." />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[#201918]">Notes</label>
                    <textarea rows="4" value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]" placeholder="Tell us the look you want or any special requests" />
                  </div>
                </div>
              ) : null}

              {step === 4 ? (
                <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-[1.6rem] border border-[#efd9d2] bg-[#fffaf8] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7a4d46]">Booking summary</p>
                    <div className="mt-5 space-y-4 text-[#4b3c3a]">
                      <div className="flex items-center justify-between gap-4">
                        <span>Service</span>
                        <span className="font-bold text-[#201918]">{selectedService.name}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Duration</span>
                        <span className="font-bold text-[#201918]">{selectedService.duration}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Date</span>
                        <span className="font-bold text-[#201918]">{currentDateLabel}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Time</span>
                        <span className="font-bold text-[#201918]">{selectedTime}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Price</span>
                        <span className="font-bold text-[#201918]">{formatServicePrice(selectedService)}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Deposit</span>
                        <span className="font-bold text-[#201918]">{formatPrice(10000)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-[#efd9d2] bg-[#f9efe9] p-5">
                    <h3 className="text-xl font-black text-[#201918]">Payment options</h3>
                    <div className="mt-4 space-y-3 text-sm text-[#4b3c3a]">
                      <div className="flex items-center gap-2"><Phone size={16} className="text-[#7a4d46]" /> Card payment</div>
                      <div className="flex items-center gap-2"><Phone size={16} className="text-[#7a4d46]" /> Contact the studio</div>
                      <div className="flex items-center gap-2"><Clock3 size={16} className="text-[#7a4d46]" /> Cash at salon</div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-[#5d4540]">Applied toward your service total at the salon.</p>
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 border-t border-[#efd9d2] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-sm text-[#5d4540]">
                  {step > 1 ? (
                    <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 rounded-full border border-[#efd9d2] bg-white px-4 py-2.5 font-semibold text-[#201918]">
                      <ChevronLeft size={16} /> Prev
                    </button>
                  ) : null}
                </div>

                <div className="flex items-center gap-3">
                  {step < 4 ? (
                    <button type="button" onClick={nextStep} className="inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-6 py-3 font-semibold text-white hover:bg-[#4b2d2f]">
                      Next step
                      <ChevronRight size={18} />
                    </button>
                  ) : (
                    <a href={squareBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-6 py-3 font-semibold text-white hover:bg-[#4b2d2f]">
                      <MessageCircle size={18} />
                      Continue to Square booking
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
