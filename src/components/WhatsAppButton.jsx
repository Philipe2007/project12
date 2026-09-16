import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hello Deliphine Beauty Studio, I would like to book an appointment or ask about a service.',
    );

    window.open(`https://wa.me/250781216840?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      aria-label="Chat on WhatsApp"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#9ee6b3] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;
