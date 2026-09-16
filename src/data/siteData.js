import image01 from '../images/1.jpeg';
import image02 from '../images/2.jpeg';
import image03 from '../images/3.jpeg';
import image04 from '../images/4.jpeg';
import image05 from '../images/5.jpeg';
import image06 from '../images/6.jpeg';
import image07 from '../images/7.jpeg';
import image08 from '../images/8.jpeg';
import image09 from '../images/9.jpeg';
import image10 from '../images/10.jpeg';
import image11 from '../images/11.jpeg';
import image12 from '../images/12.jpeg';


const salonImages = [image01, image02, image03, image04, image05, image06, image07, image08, image09, image10, image11, image12];

export const businessInfo = {
  name: 'Deliphine Beauty Studio',
  shortName: 'Deliphine',
  phone: '+1 239-399-1228',
  whatsapp: '12393991228',
  address: 'J. Lee Salon Suites, 24880 S Tamiami Trl #1, Bonita Springs, FL 34134, United States',
  openingHours: {
    weekdays: 'Open daily · Closes at 5:00 PM',
    sunday: 'Open daily · Closes at 5:00 PM',
  },
};

export const squareBookingUrl = 'https://book.squareup.com/appointments/s1yft75tcgcdhi/location/GQE9Y4QRJVMHH/services?rwg_token=AE37R_iGFJOJzoYtEc7Vh5TL45_Cxz8VqIKqX11aHPtX2ljL-5LYvQ5k67D5eBS21kS5DKZXCKOxfL8dDiJSOSdCJ2dG97Z9Lg%3D%3D';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Shop', to: '/shop' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const heroStats = [
  { value: '5-star', label: 'beauty care' },
  { value: 'Daily', label: 'appointments' },
  { value: 'Local', label: 'Bonita Springs studio' },
  { value: 'Walk-ins', label: 'welcome when available' },
];

const callForPricing = 'Call for pricing';

const createService = (name, category, duration, priceLabel = callForPricing, imageIndex = 0, description = '') => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  category,
  description: description || `${name} performed by our experienced Deliphine Beauty Studio team. Contact us to confirm availability and pricing.`,
  price: null,
  priceLabel,
  duration,
  image: salonImages[imageIndex % salonImages.length],
  featured: false,
  active: true,
});

export const services = [
  createService("Gentlemen's Cut / Trim", 'Cuts & Styling', '30 min', callForPricing, 0),
  createService('Hair Cut / Deluxe Blowout', 'Cuts & Styling', '55 min', callForPricing, 1),
  createService("Kid's Hair Cut (under 10)", 'Cuts & Styling', '30 min', callForPricing, 2),
  createService("Kid's Hair Cut (under 10) - Blowout", 'Cuts & Styling', '45 min', callForPricing, 3),
  createService('Value Package Cut / Blowout', 'Cuts & Styling', '1 hr 5 min', callForPricing, 4),
  createService('Anti-Stress Relaxing Scalp Massage', 'Treatments', '35 min', callForPricing, 5),
  createService('Value Package Hair Cut / Deluxe Blowout', 'Cuts & Styling', '1 hr 20 min', callForPricing, 6),
  createService('Edge Up, Beard, Hairline & Neck Shape-Up', 'Cuts & Styling', '20 min', callForPricing, 7),
  createService('Roots Touch Up Color', 'Color', '1 hr 30 min', callForPricing, 8),
  createService('Full Foil', 'Highlights & Balayage', '2 hr 20 min', callForPricing, 0),
  createService('Platinum Card Highlights', 'Highlights & Balayage', '3 hr', callForPricing, 1, 'All the hair is placed in the foil for a bright, comprehensive highlight.'),
  createService('Partial Foil (7-12 foils)', 'Highlights & Balayage', '1 hr', callForPricing, 2),
  createService('Full Balayage', 'Highlights & Balayage', '2 hr 30 min', callForPricing, 3),
  createService('Specialty Highlights', 'Highlights & Balayage', '2 hr 30 min', callForPricing, 4, 'A combination of highlight techniques including balayage, babylights and foilayage.'),
  createService('Partial Balayage (up to 5 sections)', 'Highlights & Balayage', '1 hr 30 min', callForPricing, 5),
  createService('Root Touch Up Bleach / Gloss', 'Color', '1 hr 35 min', callForPricing, 6),
  createService('Gloss / Toner / Fashion / Clear Glaze', 'Color', '45 min', callForPricing, 7),
  createService('Color Camo Gray Blending', 'Color', '15 min', callForPricing, 8, 'Gray blending on three inches or less of hair length.'),
  createService('Value Package Roots Touch Up Color', 'Color Packages', '2 hr', callForPricing, 0),
  createService('Value Package Roots Touch Up Color & Partial Foil', 'Color Packages', '3 hr 10 min', callForPricing, 1),
  createService('Value Package Partial Foil', 'Color Packages', '2 hr 30 min', callForPricing, 2),
  createService('Value Package Full Foil', 'Color Packages', '3 hr', callForPricing, 3),
  createService('Value Package Roots Touch Up Color / Full Foil', 'Color Packages', '3 hr 40 min', callForPricing, 4),
  createService('Value Package Gray Blending Color Camo', 'Color Packages', '1 hr', callForPricing, 5),
  createService('Value Package Root Touch-Up with a Gloss', 'Color Packages', '2 hr 30 min', callForPricing, 6),
  createService('Value Package Roots Touch Up Color / Partial Balayage', 'Color Packages', '3 hr 10 min', callForPricing, 7),
  createService('Value Package Full Balayage', 'Color Packages', '3 hr 10 min', callForPricing, 8),
  createService('Value Package Partial Balayage', 'Color Packages', '2 hr 30 min', callForPricing, 0),
  createService('Keratin Treatment - Smoothes & Straightens Hair', 'Treatments', '2 hr', callForPricing, 1),
  createService('Kera Treatment - Mid Back Length', 'Treatments', '2 hr 30 min', '$268.00', 2),
  createService('Keratin Treatment - Mid Back or Longer', 'Treatments', '3 hr', callForPricing, 3, 'For hair at the bottom of the underarm or longer.'),
  createService('Perm', 'Perms & Relaxers', '2 hr', callForPricing, 4),
  createService('Specialty Perm', 'Perms & Relaxers', '2 hr', callForPricing, 5, 'Spiral or other specialty wrap technique to achieve the desired curl formation.'),
  createService('Value Package Perm', 'Perms & Relaxers', '2 hr', '$210.00', 6),
  createService('Relaxer - Texturizer', 'Perms & Relaxers', '1 hr', callForPricing, 7),
  createService('Retouch Relaxer - Texturizer', 'Perms & Relaxers', '1 hr', callForPricing, 8),
  createService('Value Package Relaxer-Texturizer', 'Perms & Relaxers', '1 hr 30 min', callForPricing, 0, 'Includes a treatment, cut, deluxe style upgrade and iron service.'),
  createService('Value Package Relaxer Retouch', 'Perms & Relaxers', '1 hr 30 min', callForPricing, 1),
  createService('Classic Blowout', 'Cuts & Styling', '30 min', callForPricing, 2),
  createService('Classic Updo', 'Special Occasion', '30 min', callForPricing, 3, 'Up style such as bun, French twist or braid on clean and dry hair.'),
  createService('Special Occasion Design', 'Special Occasion', '30 min', callForPricing, 4, 'Complex up-styles with braids, multiple buns and iron finish.'),
  createService('Curling or Flat Iron Set', 'Cuts & Styling', '30 min', callForPricing, 5),
  createService('Clarifying Treatment', 'Treatments', '25 min', callForPricing, 6, 'Removes impurities including excess product build-up and minerals.'),
  createService('Bang Trim', 'Cuts & Styling', '15 min', callForPricing, 7),
  createService('Each Additional Color', 'Color', '30 min', callForPricing, 8),
  createService('Olaplex', 'Treatments', '30 min', callForPricing, 0, 'Added in color to help protect hair from breakage.'),
  createService('Curling / Straightening Iron Quick Finish', 'Cuts & Styling', '15 min', callForPricing, 1),
  createService('Curling / Straightening Iron - Short Hair', 'Cuts & Styling', '20 min', '$20.00', 2),
  createService('Curling / Straightening Iron - Medium Length Hair', 'Cuts & Styling', '30 min', callForPricing, 3),
  createService('Facials', 'Facials & Waxing', '1 hr', callForPricing, 4),
  createService('Lighten & Color', 'Color', '2 hr', '$150.00', 5, 'Decolorizing the entire head, then applying gloss, tone and/or fashion color.'),
  createService('Roots Touch Up Color / Partial Foil', 'Highlights & Balayage', '1 hr 35 min', callForPricing, 6),
  createService('4 to 6 Foils', 'Highlights & Balayage', '30 min', callForPricing, 7),
  createService('Deep Conditioner Treatment (with heat)', 'Treatments', '20 min', callForPricing, 8),
  createService('Mask (instant)', 'Treatments', '30 min', callForPricing, 0),
  createService('Eyebrows / Lip / Sideburns / Cheeks / Chin Waxing', 'Facials & Waxing', '20 min', callForPricing, 1),
  createService('Single Braids (Box Braids)', 'Braids & Extensions', '1 hr', callForPricing, 2),
  createService('Sewing', 'Braids & Extensions', '4 hr', callForPricing, 3),
  createService('Upgrade Style', 'Cuts & Styling', '30 min', callForPricing, 4),
  createService('Eyebrows Color', 'Facials & Waxing', '20 min', callForPricing, 5),
  createService('Facials - When You Get Another Service', 'Facials & Waxing', '1 hr', callForPricing, 6),
  createService('Hair Cut & Blowdry - Short to Medium Length', 'Cuts & Styling', '1 hr', callForPricing, 7),
  createService('Classic Set with Dry Wrap', 'Cuts & Styling', '30 min', callForPricing, 8),
  createService('Face Framing / Accent Foil', 'Highlights & Balayage', '1 hr', callForPricing, 0),
  createService('Lips Waxing', 'Facials & Waxing', '30 min', '$20.00', 1),
  createService('Value Package Roots Touch Up Color / Full Balayage', 'Color Packages', '30 min', callForPricing, 2),
  createService('Value Package Color Express', 'Color Packages', '1 hr 30 min', callForPricing, 3),
  createService('Goldwell Value Package Single Color', 'Color Packages', '2 hr', callForPricing, 4),
  createService('Goldwell Roots Touch Up', 'Color', '1 hr 30 min', callForPricing, 5),
  createService('Express Color', 'Color', '1 hr', callForPricing, 6),
  createService('Medium Knotless Single Braids', 'Braids & Extensions', '30 min', callForPricing, 7),
  createService('Shampoo', 'Cuts & Styling', '30 min', callForPricing, 8, 'Washing with shampoo and conditioning.'),
  createService('Consultation', 'Consultations', '15 min', 'Free', 0),
  createService('Hair Cut & Shampoo', 'Cuts & Styling', '45 min', callForPricing, 1),
  createService('Silk Press - Straightening Only', 'Cuts & Styling', '30 min', '$43.00', 2),
  createService('Root Touch Up - Full Foil', 'Highlights & Balayage', '2 hr 30 min', '$235.00', 3),
  createService('Braids (Cornrows, Single Braids, Boho, Crochet, Twist, Dreadlocks)', 'Braids & Extensions', '1 hr', '$65.00', 4),
  createService('Deep Conditioner (10 min)', 'Treatments', '30 min', '$18.00', 5),
  createService('Roots Touch Up Color - No Blowout', 'Color', '30 min', '$80.00', 6),
  createService('Keratin Treatment - Up to 2 Inches Shoulder Length', 'Treatments', '2 hr 30 min', '$244.00', 7),
  createService("Ladies' Signature Cuts", 'Cuts & Styling', '30 min', '$45.00', 8),
  createService('Upgrade Style - 2', 'Cuts & Styling', '30 min', '$30.00', 0),
];

export const products = [
  {
    id: 'shine-styling',
    name: 'L’UODAIS No.5 Shine Styling',
    slug: 'luodais-no5-shine-styling',
    category: 'Hair Care',
    description: 'Lightweight shine styling spray that gives a sleek finish and smooth movement.',
    price: 8000,
    image: salonImages[2],
    stock: 12,
    active: true,
  },
  {
    id: 'argan-serum',
    name: 'Foisoner Argan Oil Serum',
    slug: 'foisoner-argan-oil-serum',
    category: 'Hair Care',
    description: 'Nourishing serum for softness, shine and manageable styling.',
    price: 15000,
    image: salonImages[1],
    stock: 8,
    active: true,
  },
  {
    id: 'brazilian-22',
    name: 'Brazilian 22 inch',
    slug: 'brazilian-22-inch',
    category: 'Weaves',
    description: 'Soft and full-bodied Brazilian weave for versatile styling and a glossy finish.',
    price: 85000,
    image: salonImages[0],
    stock: 5,
    active: true,
  },
  {
    id: 'indian-10',
    name: 'Indian 10 inch',
    slug: 'indian-10-inch',
    category: 'Human Hair',
    description: 'A short volume option with a comfortable natural feel and polished look.',
    price: 65000,
    image: salonImages[4],
    stock: 7,
    active: true,
  },
  {
    id: 'indian-16',
    name: 'Indian 16 inch',
    slug: 'indian-16-inch',
    category: 'Human Hair',
    description: 'Beautifully soft and healthy-looking with smooth movement for premium styling.',
    price: 115000,
    image: salonImages[3],
    stock: 6,
    active: true,
  },
  {
    id: 'brazilian-hair',
    name: 'Brazilian',
    slug: 'brazilian',
    category: 'Weaves',
    description: 'High-quality Brazilian hair with a rich texture and flexible styling range.',
    price: 65000,
    image: salonImages[5],
    stock: 11,
    active: true,
  },
  {
    id: 'brazilian-20',
    name: 'Brazilian 20 inch',
    slug: 'brazilian-20-inch',
    category: 'Weaves',
    description: 'A flattering medium-long look known for volume, shine and easy styling.',
    price: 75000,
    image: salonImages[1],
    stock: 9,
    active: true,
  },
];

export const galleryItems = [
  { id: 1, title: 'Braided elegance', category: 'Braids', image: salonImages[0] },
  { id: 2, title: 'Soft wave finish', category: 'Weaves', image: salonImages[1] },
  { id: 3, title: 'Bridal glam', category: 'Bridal', image: salonImages[2] },
  { id: 4, title: 'Fresh color refresh', category: 'Color', image: salonImages[4] },
  { id: 5, title: 'Natural shine', category: 'Natural Hair', image: salonImages[3] },
  { id: 6, title: 'Luxury wig finish', category: 'Wigs', image: salonImages[5] },
  { id: 7, title: 'Soft glam set', category: 'Braids', image: salonImages[1] },
  { id: 8, title: 'Event-ready look', category: 'Weaves', image: salonImages[0] },
];

export const reasons = [
  {
    title: 'Experienced stylists',
    text: 'Years of expertise in braids, weaves, colour and natural hair styling.',
  },
  {
    title: 'Transparent prices',
    text: 'Clear prices in RWF with no hidden costs and easy payment options.',
  },
  {
    title: 'Clean, welcoming space',
    text: 'A calm and hygienic salon designed around your comfort and style.',
  },
  {
    title: 'Women-only & private',
    text: 'Built to give every woman a relaxing, respectful and safe experience.',
  },
  {
    title: 'Easy online booking',
    text: 'Reserve your chair quickly and get confirmation through WhatsApp.',
  },
  {
    title: 'Salon-grade products',
    text: 'Trusted products for healthy-looking hair and long-lasting results.',
  },
];

export const testimonials = [
  {
    quote: 'The style was beautiful, neat and exactly what I wanted. I felt confident the whole day.',
    name: 'Aisha M.',
  },
  {
    quote: 'I booked a bridal look and the finish was elegant and natural. It felt luxurious and personal.',
    name: 'Nadine R.',
  },
  {
    quote: 'The salon feels so warm and professional. My weave looked amazing and lasted beautifully.',
    name: 'Claire K.',
  },
];

export const bookingDates = [
  '2026-09-12',
  '2026-09-13',
  '2026-09-14',
  '2026-09-15',
  '2026-09-16',
  '2026-09-17',
  '2026-09-18',
  '2026-09-19',
];

export const timeSlots = {
  Morning: ['09:00', '10:00', '11:00'],
  Afternoon: ['12:00', '13:00', '14:00', '15:00'],
  Evening: ['16:00', '17:00', '18:00', '19:00'],
};

export const serviceCategories = [
  'All',
  'Cuts & Styling',
  'Color',
  'Color Packages',
  'Highlights & Balayage',
  'Treatments',
  'Perms & Relaxers',
  'Special Occasion',
  'Facials & Waxing',
  'Braids & Extensions',
  'Consultations',
];

export const homepageGallery = galleryItems.slice(0, 6);

export const formatPrice = (value) => new Intl.NumberFormat('en-US').format(value) + ' RWF';

export const formatServicePrice = (service) => service.priceLabel || formatPrice(service.price);

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug);
