import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/siteData';

const ProductCard = ({ product, onAddToCart }) => (
  <article className="group overflow-hidden rounded-[1.7rem] border border-[#efd9d2] bg-white shadow-[0_18px_35px_rgba(48,34,34,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(48,34,34,0.05)]">
    <img src={product.image} alt={product.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
    <div className="p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a4d46]">{product.category}</p>
      <h3 className="mt-2 text-xl font-black text-[#201918]">{product.name}</h3>
      <p className="mt-3 text-base leading-7 text-[#5d4540]">{product.description}</p>

      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-lg font-black text-[#201918]">{formatPrice(product.price)}</span>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="inline-flex items-center gap-2 rounded-full bg-[#2b1b1d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4b2d2f]"
        >
          <ShoppingBag size={15} />
          Add to cart
        </button>
      </div>

      <Link to={`/products/${product.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7a4d46]">
        View product
        <ArrowRight size={16} />
      </Link>
    </div>
  </article>
);

export default ProductCard;
