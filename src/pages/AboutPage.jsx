import { CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import salonImage from '../images/Silk Press - Classic Silk Press.jpg';

const AboutPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div>
        <SectionHeader
          eyebrow="About us"
          title="A women’s salon built around comfort, beauty and trust."
          description="Deliphine Beauty Studio is a Bonita Springs beauty studio focused on professional hair styling, quality products, comfort and customer experience."
        />

        <div className="mt-8 space-y-5 text-lg leading-8 text-[#4b3c3a]">
          <p>
            We believe every woman deserves a salon experience that feels polished, calm and personal. Our team focuses on premium hair care, beautiful finishes and honest guidance to help you choose the look that best suits you.
          </p>
          <p>
            From braids and weaves to bridal styling and hair colour, we combine modern techniques with warm customer care in a clean, welcoming environment.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[#efd9d2] bg-[#f9efe9] p-3 shadow-[0_30px_60px_rgba(32,25,24,0.12)]">
        <img src={salonImage} alt="Salon interior and stylists" className="h-[520px] w-full rounded-[1.5rem] object-cover" loading="lazy" />
      </div>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[
        { title: 'Our mission', text: 'To deliver confident, beautiful results in a calm and professional environment.', icon: HeartHandshake },
        { title: 'Our values', text: 'Honesty, comfort, quality and care in every appointment.', icon: CheckCircle2 },
        { title: 'Professional stylists', text: 'Skilled specialists delivering polished work with attention to detail.', icon: Sparkles },
        { title: 'Clean environment', text: 'A hygienic, women-only space where you can relax and feel safe.', icon: ShieldCheck },
      ].map(({ title, text, icon: Icon }) => (
        <div key={title} className="rounded-[1.7rem] border border-[#efd9d2] bg-white p-6 shadow-[0_18px_35px_rgba(48,34,34,0.04)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f9e7e2] text-[#7a4d46]">
            <Icon size={22} />
          </div>
          <h3 className="mt-5 text-xl font-black text-[#201918]">{title}</h3>
          <p className="mt-3 text-base leading-7 text-[#5d4540]">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutPage;
