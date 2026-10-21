import { Icon } from '@/components/ui/Icon'
import { ui } from '@/content/fr'

/**
 * Illustrative mobile storefront mockup for the hero section.
 *
 * No real application screenshots were available in the repository, so this
 * is an original interface illustration built from verified information
 * (product cards, order status, Mobile Money checkout) rather than a copy of
 * an actual screen. It is labelled as illustrative in the surrounding UI.
 */
export function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-75 select-none">
      {/* Frame + floating cards share this positioning context, kept separate
          from the caption below so "top/bottom" offsets stay relative to the
          frame itself and never drift onto the caption text. */}
      <div className="relative">
        {/* Phone frame */}
        <div className="relative rounded-[2.5rem] border-[6px] border-navy-950 bg-navy-950 p-2.5 shadow-lift">
          <div className="absolute left-1/2 top-3.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" />
          <div className="overflow-hidden rounded-4xl bg-ivory">
            <div className="flex items-center justify-between px-4 pt-6 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-navy-900/70" />
                <span className="text-[0.7rem] font-semibold text-navy-900">Boutique Aline</span>
              </div>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.6rem] font-semibold text-accent-text">
                Vérifiée
              </span>
            </div>

            <div className="px-4">
              <div className="overflow-hidden rounded-2xl bg-linear-to-br from-navy-800 to-navy-950 p-4">
                <p className="text-[0.65rem] font-medium uppercase tracking-wider text-sun">Nouveau</p>
                <p className="mt-1 text-sm font-semibold text-white">Chemise en coton naturel</p>
                <p className="mt-1 text-xs text-navy-100/80">Coupe confortable, finitions soignées</p>
                <p className="mt-3 text-lg font-bold text-white">12 000 FCFA</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5 px-4">
              {[
                { name: 'Sac à dos', price: '18 500 FCFA' },
                { name: 'Sneakers', price: '25 000 FCFA' },
              ].map((item) => (
                <div key={item.name} className="rounded-xl border border-line bg-white p-2.5 shadow-soft">
                  <div className="h-14 rounded-lg bg-navy-50" />
                  <p className="mt-2 text-[0.68rem] font-semibold text-navy-900">{item.name}</p>
                  <p className="text-[0.65rem] text-muted">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="mx-4 mt-4 mb-5 rounded-2xl border border-line bg-white p-3.5 shadow-soft">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                  <Icon name="shield" className="h-3.5 w-3.5" />
                </span>
                <p className="text-[0.7rem] font-semibold text-navy-900">Commande en cours</p>
              </div>
              <p className="mt-2 text-[0.65rem] leading-4 text-muted">
                Payée · en attente de remise. Code de retrait envoyé par SMS.
              </p>
            </div>
          </div>
        </div>

        {/* Floating card: payment confirmation. Anchored above the frame so it
            never covers the mockup's own text. */}
        <div className="animate-float absolute -top-8 -right-6 hidden w-40 rounded-xl border border-line bg-white p-3 shadow-lift sm:block">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sun-soft text-sun-ink">
              <Icon name="phone" className="h-3.5 w-3.5" />
            </span>
            <p className="text-[0.68rem] font-semibold text-navy-900">Mobile Money</p>
          </div>
          <p className="mt-1.5 text-[0.62rem] leading-4 text-muted">Confirmez le paiement sur votre téléphone</p>
        </div>

        {/* Floating card: delivery code. Anchored below the frame for the same reason. */}
        <div className="animate-float absolute -bottom-8 -left-8 hidden w-36 rounded-xl border border-line bg-white p-3 shadow-lift [animation-delay:1.4s] sm:block">
          <p className="text-[0.6rem] font-semibold tracking-wide text-muted uppercase">Code de remise</p>
          <p className="mt-1 text-lg font-bold tracking-[0.2em] text-navy-900">48 21 06</p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted sm:mt-12">{ui.illustrativeNote}</p>
    </div>
  )
}
