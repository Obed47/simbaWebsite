import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Hero } from '@/components/home/Hero'
import { ValueProps } from '@/components/home/ValueProps'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import { SellerSection } from '@/components/home/SellerSection'
import { BuyerSection } from '@/components/home/BuyerSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { PaymentsTrust } from '@/components/home/PaymentsTrust'
import { VisionSection } from '@/components/home/VisionSection'
import { FaqSection } from '@/components/home/FaqSection'
import { ContactSection } from '@/components/home/ContactSection'
import { AngledDivider } from '@/components/ui/AngledDivider'
import { ui } from '@/content/fr'

// Matches --color-navy-50 / --color-navy-950 / --color-ivory in globals.css —
// kept as literal values here since AngledDivider needs real CSS colours
// (SVG fill / inline background), not Tailwind class names.
const NAVY_50 = '#f1f4fb'
const NAVY_950 = '#071534'
const IVORY = '#f7f6f3'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {ui.skipToContent}
      </a>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <ValueProps />
        <ProductShowcase />
        <AngledDivider from={NAVY_50} to={NAVY_950} direction="into-dark" />
        <SellerSection />
        <AngledDivider from={NAVY_950} to={IVORY} direction="out-of-dark" />
        <BuyerSection />
        <HowItWorks />
        <PaymentsTrust />
        <VisionSection />
        <FaqSection />
        <ContactSection />
      </main>
      <AngledDivider from={IVORY} to={NAVY_950} direction="into-dark" />
      <Footer />
    </>
  )
}
