import { useMemo, useState } from 'react';
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { formatPrice, products } from '../data/siteData';
import { useCart } from '../context/CartContext';

const ShopPage = () => {
  const { items, addToCart, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    location: '',
    notes: '',
  });

  const total = useMemo(() => subtotal, [subtotal]);

  const groupedProducts = useMemo(() => {
    const groups = [
      'Color Packages',
      'Root Color Packages',
      'Texture Packages',
      'Treatments',
      'Styling upgrades',
      'Additional color',
    ];

    return groups
      .map((groupName) => ({
        name: groupName,
        items: products.filter((product) => product.category === groupName),
      }))
      .filter((group) => group.items.length > 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const orderLines = items.map((item) => `${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}`).join('\n');

    return [
      'Hello Deliphine Beauty Studio,',
      '',
      'I would like to place an order. Please confirm the details below.',
      '',
      `Customer: ${formData.fullName || 'Not provided'}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `WhatsApp: ${formData.whatsapp || 'Not provided'}`,
      `Location: ${formData.location || 'Not provided'}`,
      '',
      'Order items:',
      orderLines,
      '',
      `Subtotal: ${formatPrice(total)}`,
      formData.notes ? `Notes: ${formData.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Shop"
        title="Take the look home"
        description="Salon-quality hair care — order online or shop in-store."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-10">
          {groupedProducts.map((group) => (
            <section key={group.name}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#efdad5]" />
                <h2 className="text-sm font-black uppercase tracking-[0.22em] text-[#7a4d46]">{group.name}</h2>
                <span className="h-px flex-1 bg-[#efdad5]" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="rounded-[1.8rem] border border-[#efd9d2] bg-white p-6 shadow-[0_18px_35px_rgba(48,34,34,0.04)]">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-2xl font-black text-[#201918]">Cart</h3>
            {items.length > 0 ? (
              <button type="button" onClick={clearCart} className="text-sm font-semibold text-[#7a4d46]">
                Clear all
              </button>
            ) : null}
          </div>

          {items.length === 0 ? (
            <div className="mt-6 rounded-[1.4rem] border border-dashed border-[#eed7d2] bg-[#fffaf8] p-6 text-center">
              <ShoppingCart className="mx-auto text-[#7a4d46]" size={28} />
              <p className="mt-4 text-lg font-bold text-[#201918]">Your cart is empty</p>
              <p className="mt-2 text-sm text-[#5d4540]">Add salon products to continue.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="rounded-[1.2rem] border border-[#efd9d2] p-3">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover" loading="lazy" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-[#201918]">{item.name}</p>
                      <p className="mt-1 text-xs text-[#5d4540]">{formatPrice(item.price)}</p>
                    </div>
                    <button type="button" onClick={() => removeFromCart(item.id)} className="text-[#7a4d46]">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-[#efd9d2] bg-[#fffaf8] px-2 py-1">
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full p-1 text-[#201918]">
                        <Minus size={14} />
                      </button>
                      <span className="min-w-[20px] text-center text-sm font-semibold">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full p-1 text-[#201918]">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-[#201918]">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 ? (
            <div className="mt-6 border-t border-[#efd9d2] pt-4">
              <div className="flex items-center justify-between text-sm text-[#5d4540]">
                <span>Subtotal</span>
                <span className="font-bold text-[#201918]">{formatPrice(total)}</span>
              </div>
              <button
                type="button"
                onClick={() => setCheckoutOpen(true)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2b1b1d] px-5 py-3 font-semibold text-white transition hover:bg-[#4b2d2f]"
              >
                Proceed to order
                <ArrowRight size={18} />
              </button>
            </div>
          ) : null}
        </aside>
      </div>

      {checkoutOpen ? (
        <div className="mt-10 rounded-[1.8rem] border border-[#efd9d2] bg-[#f9efe9] p-6">
          <h3 className="text-2xl font-black text-[#201918]">Checkout</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#201918]">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#201918]">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]"
                placeholder="+250..."
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#201918]">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]"
                placeholder="+250..."
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#201918]">Delivery / location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]"
                placeholder="Bonita Springs"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-[#201918]">Notes</label>
            <textarea
              rows="4"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#ead9d4] bg-white px-4 py-3 outline-none focus:border-[#c9988e]"
              placeholder="Add any instructions"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              const message = encodeURIComponent(buildWhatsAppMessage());
              window.open(`https://wa.me/12393991228?text=${message}`, '_blank', 'noopener,noreferrer');
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-6 py-3 font-semibold text-white hover:bg-[#4b2d2f]"
          >
            Confirm order via WhatsApp
            <ArrowRight size={18} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ShopPage;
