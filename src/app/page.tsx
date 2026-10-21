import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { ValueProps } from '@/components/home/ValueProps'
import { SellerSection } from '@/components/home/SellerSection'
import { BuyerSection } from '@/components/home/BuyerSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { PaymentsTrust } from '@/components/home/PaymentsTrust'
import { DeliverySection } from '@/components/home/DeliverySection'
import { VisionSection } from '@/components/home/VisionSection'
import { FaqSection } from '@/components/home/FaqSection'
import { ContactSection } from '@/components/home/ContactSection'
import { ui } from '@/content/fr'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {ui.skipToContent}
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <ValueProps />
        <SellerSection />
        <BuyerSection />
        <HowItWorks />
        <PaymentsTrust />
        <DeliverySection />
        <VisionSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
