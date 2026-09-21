import GalleryGrid from '../components/GalleryGrid';
import SectionHeader from '../components/SectionHeader';
import { galleryItems } from '../data/siteData';

const GalleryPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <SectionHeader
      eyebrow="Our customers"
      title="Real looks created in our salon."
      description="Explore customer-inspired looks in braids, weaves, color, bridal styling and everyday glam."
      align="center"
    />

    <div className="mt-10">
      <GalleryGrid items={galleryItems} />
    </div>
  </div>
);

export default GalleryPage;
