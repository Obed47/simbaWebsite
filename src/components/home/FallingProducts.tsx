import Image from 'next/image'
import { Icon, type IconName } from '@/components/ui/Icon'

/**
 * Placeholder product photos for the hero's falling-products animation.
 *
 * No real product photography exists yet, so each entry renders a coloured
 * placeholder tile (gradient + icon) instead of a fabricated photo. To swap
 * in a real image once available, add `image: '/products/your-file.jpg'`
 * to that entry — the tile switches to `next/image` (cropped to fill the
 * same card) automatically, and the gradient/icon placeholder disappears.
 * Nothing else needs to change.
 */
interface Product {
  name: string
  price: string
  badge: string
  icon: IconName
  tone: 'accent' | 'sun' | 'navy' | 'rose'
  image?: string
}

const toneGradients: Record<Product['tone'], string> = {
  accent: 'from-accent to-accent-ink',
  sun: 'from-sun to-sun-ink',
  navy: 'from-navy-800 to-navy-950',
  rose: 'from-rose-400 to-rose-700',
}

const columnA: Product[] = [
  { name: 'Sac à dos', price: '18 500 FCFA', badge: 'Bestseller', icon: 'storefront', tone: 'accent' },
  { name: 'Montre', price: '15 000 FCFA', badge: 'Édition limitée', icon: 'phone', tone: 'navy' },
  { name: 'Sneakers', price: '25 000 FCFA', badge: 'Très apprécié', icon: 'check', tone: 'rose' },
]

const columnB: Product[] = [
  { name: 'Chemise coton', price: '12 000 FCFA', badge: 'Nouveau', icon: 'storefront', tone: 'sun' },
  { name: 'Sac tissé', price: '9 500 FCFA', badge: 'Fait main', icon: 'check', tone: 'rose' },
  { name: 'Bijoux', price: '7 000 FCFA', badge: 'Populaire', icon: 'phone', tone: 'accent' },
]

// Rendered twice back-to-back so the loop can jump from the end of the
// second copy back to the start of the first without any visible seam —
// see the `marquee-down` keyframes in globals.css for how that lines up.
const trackA = [...columnA, ...columnA]
const trackB = [...columnB, ...columnB]

// Alternating a touch of rotation per card reads as a loose scattered-photo
// stack rather than a rigid, mechanical list.
const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div
      className={`group relative aspect-[4/5] w-full flex-none overflow-hidden rounded-2xl shadow-lift transition-transform duration-300 hover:z-10 hover:scale-105 hover:rotate-0 ${rotations[index % rotations.length]}`}
    >
      {product.image ? (
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="200px" />
      ) : (
        <div className={`flex h-full w-full items-center justify-center bg-linear-to-br ${toneGradients[product.tone]}`}>
          <Icon name={product.icon} className="h-9 w-9 text-white/70" />
        </div>
      )}

      <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[0.56rem] font-semibold text-navy-900 shadow-soft">
        {product.badge}
      </span>

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-2.5 pt-6 pb-2">
        <p className="line-clamp-1 text-[0.68rem] font-semibold text-white">{product.name}</p>
        <p className="text-[0.62rem] text-white/85">{product.price}</p>
      </div>
    </div>
  )
}

function Column({ track, speed }: { track: Product[]; speed: 'normal' | 'slow' }) {
  return (
    <div
      className="relative h-full flex-1 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div className={`flex flex-col gap-3 ${speed === 'slow' ? 'animate-marquee-down-slow' : 'animate-marquee-down'}`}>
        {track.map((product, index) => (
          // Index-keyed on purpose: this is a decorative, duplicated,
          // order-fixed loop, not a list that's ever reordered or edited.
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}

export function FallingProducts() {
  return (
    <div className="falling-products-pause flex h-full gap-3">
      <Column track={trackA} speed="normal" />
      <Column track={trackB} speed="slow" />
    </div>
  )
}
