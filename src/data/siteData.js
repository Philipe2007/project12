import shortFadeImage from '../images/20 Sharp Short Fade Haircuts for Men Trending Now.jpg';
import permImage from '../images/50 Perm Hair Ideas to Inspire Your Curly Transformation.jpg';
import balayageImage from '../images/Dark Brown Hair with Blonde Highlights Balayage Face Framing.jpg';
import cornrowsImage from '../images/Big Cornrows Bun — Bold, Clean & Low Maintenance Protective Style.jpg';
import boxBraidsImage from '../images/Elegant Box Braids with Top Bun and Beaded Accents.jpg';
import sewInImage from '../images/How Long Does A Sew In Last_.jpg';
import silkPressImage from '../images/Silk Press - Classic Silk Press.jpg';
import facialImage from '../images/The Step-by-Step Protocol for_ a Facial Wax (Eyebrows_Lip_Chin) - The.jpg';
import deepWaveImage from '../images/Amazon_com _ 12A Deep Wave Bundles Human Hair 24….jpg';
import hairCareImage from '../images/The Conditioner Texture That Leaves Hair Silky Without Feeling Heavy.jpg';

const salonImages = {
  haircut: shortFadeImage,
  silkPress: silkPressImage,
  braids: boxBraidsImage,
  boxBraids: boxBraidsImage,
  cornrows: cornrowsImage,
  weave: sewInImage,
  color: balayageImage,
  naturalHair: permImage,
  facial: facialImage,
  hairCare: hairCareImage,
  deepWave: deepWaveImage,
};

const serviceImages = {
  shortCut: salonImages.haircut,
  silkPress: salonImages.silkPress,
  foilColor: salonImages.color,
  dimensionalColor: salonImages.color,
  naturalTexture: salonImages.naturalHair,
  texturedCut: salonImages.haircut,
  sleekFinish: salonImages.braids,
  croppedCut: salonImages.haircut,
  kidsCut: salonImages.haircut,
  classicCut: salonImages.haircut,
  layeredBob: salonImages.haircut,
  colorProcess: salonImages.color,
};

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

const createService = (name, category, duration, priceLabel = callForPricing, image = serviceImages.shortCut, description = '') => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  category,
  description: description || `${name} performed by our experienced Deliphine Beauty Studio team. Contact us to confirm availability and pricing.`,
  price: null,
  priceLabel,
  duration,
  image,
  featured: false,
  active: true,
});

export const services = [
  createService("Ladies' Signature Haircut", 'Haircuts & Styling', '45-60 min', '$40', serviceImages.silkPress),
  createService("Gentlemen's Cut", 'Haircuts & Styling', '30-45 min', '$40', serviceImages.kidsCut),
  createService('Classic Blowout', 'Haircuts & Styling', '30-45 min', '$40', serviceImages.silkPress),
  createService('Silk Press', 'Haircuts & Styling', '45-60 min', '$83', serviceImages.silkPress),
  createService('Special Occasion Updo', 'Haircuts & Styling', '45-60 min', '$54', serviceImages.shortCut),

  createService('Root Touch-Up', 'Hair Color', '60-90 min', '$93', serviceImages.colorProcess),
  createService('Root Touch-Up + Gloss', 'Hair Color', '90-120 min', '$185', serviceImages.colorProcess),
  createService('Express Color', 'Hair Color', '60-90 min', '$103', serviceImages.foilColor),
  createService('Gray Blending / Color Camo', 'Hair Color', '30-60 min', '$49', serviceImages.dimensionalColor),

  createService('Partial Foil', 'Highlights & Balayage', '60-90 min', '$104', serviceImages.foilColor),
  createService('Full Foil', 'Highlights & Balayage', '90-120 min', '$140', serviceImages.dimensionalColor),
  createService('Partial Balayage', 'Highlights & Balayage', '60-90 min', '$112', serviceImages.dimensionalColor),
  createService('Full Balayage', 'Highlights & Balayage', '90-120 min', '$149', serviceImages.dimensionalColor),
  createService('Specialty Highlights', 'Highlights & Balayage', '90-120 min', '$166', serviceImages.foilColor),
  createService('Platinum Card Highlights', 'Highlights & Balayage', '120-180 min', '$220', serviceImages.foilColor),
  createService('Face-Framing / Accent Foil', 'Highlights & Balayage', '45-60 min', '$92', serviceImages.foilColor),

  createService('Knotless Braids', 'Braids & Protective Styles', 'Variable', 'Variable', serviceImages.sleekFinish),
  createService('Box Braids', 'Braids & Protective Styles', 'Variable', 'Variable', serviceImages.sleekFinish),
  createService('Cornrows', 'Braids & Protective Styles', '45-60 min', '$65', salonImages.cornrows),
  createService('Crochet', 'Braids & Protective Styles', 'Variable', 'Variable', serviceImages.naturalTexture),
  createService('Boho Braids', 'Braids & Protective Styles', 'Variable', 'Variable', serviceImages.naturalTexture),
  createService('Sew-In / Sewing', 'Braids & Protective Styles', 'Variable', '$200', salonImages.weave),

  createService('Relaxer', 'Relaxer, Texturizer & Perm', '60-90 min', '$94', serviceImages.naturalTexture),
  createService('Texturizer', 'Relaxer, Texturizer & Perm', '60-90 min', '$94', serviceImages.naturalTexture),
  createService('Perm', 'Relaxer, Texturizer & Perm', '90-120 min', '$150', serviceImages.layeredBob),
  createService('Specialty Perm', 'Relaxer, Texturizer & Perm', '120-150 min', '$195', serviceImages.layeredBob),

  createService('Deep Conditioning Treatment', 'Treatments', '30-45 min', '$45', serviceImages.naturalTexture),
  createService('Olaplex Treatment', 'Treatments', '30-45 min', '$40', serviceImages.silkPress),
  createService('Anti-Stress Scalp Massage', 'Treatments', '30-45 min', '$40', serviceImages.silkPress),

  createService('Facial', 'Facials & Brows', '60 min', '$75', salonImages.facial),
  createService('Eyebrow Tint', 'Facials & Brows', '20 min', '$20', salonImages.facial),
  createService('Facial Waxing', 'Facials & Brows', '20 min', '$20', salonImages.facial),

  createService('Color Packages', 'Packages', 'Variable', 'Call for pricing', serviceImages.foilColor),
  createService('Root Color Packages', 'Packages', 'Variable', 'Call for pricing', serviceImages.colorProcess),
  createService('Texture Packages', 'Packages', 'Variable', 'Call for pricing', serviceImages.naturalTexture),

  createService('Treatments', 'Add-ons', 'Variable', 'Call for pricing', serviceImages.naturalTexture),
  createService('Styling Upgrades', 'Add-ons', 'Variable', 'Call for pricing', serviceImages.silkPress),
  createService('Additional Color', 'Add-ons', 'Variable', 'Call for pricing', serviceImages.foilColor),
];

export const products = [
  {
    id: 'shine-styling',
    name: 'L’UODAIS No.5 Shine Styling',
    slug: 'luodais-no5-shine-styling',
    category: 'Hair Care',
    description: 'Lightweight shine styling spray that gives a sleek finish and smooth movement.',
    price: 8000,
    image: salonImages.hairCare,
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
    image: salonImages.hairCare,
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
    image: salonImages.deepWave,
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
    image: salonImages.deepWave,
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
    image: salonImages.deepWave,
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
    image: salonImages.deepWave,
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
    image: salonImages.deepWave,
    stock: 9,
    active: true,
  },
];

export const galleryItems = [
  { id: 1, title: 'Braided elegance', category: 'Braids', image: salonImages.boxBraids },
  { id: 2, title: 'Soft wave finish', category: 'Weaves', image: salonImages.deepWave },
  { id: 3, title: 'Bridal glam', category: 'Bridal', image: salonImages.silkPress },
  { id: 4, title: 'Fresh color refresh', category: 'Color', image: salonImages.color },
  { id: 5, title: 'Natural shine', category: 'Natural Hair', image: salonImages.naturalHair },
  { id: 6, title: 'Luxury wig finish', category: 'Wigs', image: salonImages.deepWave },
  { id: 7, title: 'Soft glam set', category: 'Braids', image: salonImages.cornrows },
  { id: 8, title: 'Event-ready look', category: 'Weaves', image: salonImages.weave },
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
  'Haircuts & Styling',
  'Hair Color',
  'Highlights & Balayage',
  'Braids & Protective Styles',
  'Relaxer, Texturizer & Perm',
  'Treatments',
  'Facials & Brows',
  'Packages',
  'Add-ons',
];

export const homepageGallery = galleryItems.slice(0, 6);

export const formatPrice = (value) => new Intl.NumberFormat('en-US').format(value) + ' RWF';

export const formatServicePrice = (service) => service.priceLabel || formatPrice(service.price);

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug);
