import { useMemo, useState } from 'react';

const filters = ['All', 'Braids', 'Weaves', 'Wigs', 'Color', 'Bridal', 'Natural Hair'];

const GalleryGrid = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${
              activeFilter === filter
                ? 'border-[#dbaea4] bg-[#2b1b1d] text-white'
                : 'border-[#efd9d2] bg-white text-[#4f3c3a] hover:border-[#dbaea4]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImage({ item, index })}
            className="group overflow-hidden rounded-[1.75rem] border border-[#efd9d2] bg-white text-left shadow-[0_18px_35px_rgba(48,34,34,0.04)]"
            aria-label={`Open gallery image ${item.title}`}
          >
            <div className="overflow-hidden">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-[#7a4d46]">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#120f10]/80 p-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-[#fffaf8]">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/80 px-3 py-2 text-sm font-bold text-[#2b1b1d]"
            >
              Close
            </button>
            <img src={selectedImage.item.image} alt={selectedImage.item.title} className="max-h-[80vh] w-full object-cover" />
            <div className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a4d46]">{selectedImage.item.category}</p>
                <p className="mt-1 text-lg font-black text-[#201918]">{selectedImage.item.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.item.id);
                    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                    setSelectedImage({ item: filteredItems[prevIndex], index: prevIndex });
                  }}
                  className="rounded-full border border-[#efd9d2] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.item.id);
                    const nextIndex = (currentIndex + 1) % filteredItems.length;
                    setSelectedImage({ item: filteredItems[nextIndex], index: nextIndex });
                  }}
                  className="rounded-full bg-[#2b1b1d] px-4 py-2 text-sm font-semibold text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GalleryGrid;
