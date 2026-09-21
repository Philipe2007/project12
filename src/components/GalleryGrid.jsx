import { useState } from 'react';

const GalleryGrid = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImage({ item, index })}
            className="group overflow-hidden rounded-[1.75rem] border border-[#efd9d2] bg-white text-left shadow-[0_18px_35px_rgba(48,34,34,0.04)]"
            aria-label={`Open gallery image ${item.title || 'customer look'}`}
          >
            <div className="overflow-hidden">
              <img src={item.image} alt={item.title || 'Customer beauty look'} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-[#7a4d46]">{item.title || 'Customer look'}</p>
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
                <p className="text-lg font-black text-[#201918]">{selectedImage.item.title || 'Customer look'}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = items.findIndex((item) => item.id === selectedImage.item.id);
                    const prevIndex = (currentIndex - 1 + items.length) % items.length;
                    setSelectedImage({ item: items[prevIndex], index: prevIndex });
                  }}
                  className="rounded-full border border-[#efd9d2] bg-white px-4 py-2 text-sm font-semibold text-[#2b1b1d]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const currentIndex = items.findIndex((item) => item.id === selectedImage.item.id);
                    const nextIndex = (currentIndex + 1) % items.length;
                    setSelectedImage({ item: items[nextIndex], index: nextIndex });
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
