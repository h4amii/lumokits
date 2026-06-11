import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  name: string
  category: string
  fabric: string
  description: string
  image: string
}

export default function ProductCard({ name, category, fabric, description, image }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-light-silver">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="p-5">
        <span className="inline-block text-label text-brand-violet border border-brand-violet rounded-full px-3 py-1 mb-3">
          {category}
        </span>
        <h3 className="font-display font-semibold text-deep-charcoal text-lg mb-1.5">
          {name}
        </h3>
        <p className="text-cool-gray text-sm mb-2">{fabric}</p>
        <p className="text-near-black text-sm line-clamp-2 mb-4">{description}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-label text-brand-violet hover:underline transition-all"
        >
          Request Quote
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
