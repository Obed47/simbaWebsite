import Image from 'next/image'
import Link from 'next/link'
import { nav, ui, footer as footerContent } from '@/content/fr'
import { siteConfig } from '@/config/site'

export function Footer() {
  const hasLegal = siteConfig.legal.privacyPath || siteConfig.legal.termsPath
  const hasSocial = siteConfig.social.length > 0
  const hasContact = siteConfig.contact.email || siteConfig.contact.phone

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-navy-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1">
                <Image src="/brand/simba-logo.png" alt="" width={24} height={24} className="h-6 w-auto" />
              </span>
              <span className="text-lg font-semibold text-white">SIMBA</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-navy-100/85">
              {footerContent.missionLabel} : {siteConfig.mission}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{footerContent.navTitle}</h3>
            <nav aria-label={ui.footerNavLabel}>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-navy-100/85 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{footerContent.contactTitle}</h3>
            <div className="mt-4 space-y-2.5 text-sm text-navy-100/85">
              {hasContact ? (
                <>
                  {siteConfig.contact.email ? <p>{siteConfig.contact.email}</p> : null}
                  {siteConfig.contact.phone ? <p>{siteConfig.contact.phone}</p> : null}
                </>
              ) : (
                <p>{footerContent.contactFallback}</p>
              )}
              {hasSocial ? (
                <ul className="flex flex-wrap gap-3 pt-1">
                  {siteConfig.social.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="text-sm text-navy-100/85 hover:text-white">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          {hasLegal ? (
            <div>
              <h3 className="text-sm font-semibold text-white">{footerContent.legalTitle}</h3>
              <ul className="mt-4 space-y-2.5">
                {siteConfig.legal.privacyPath ? (
                  <li>
                    <Link href={siteConfig.legal.privacyPath} className="text-sm text-navy-100/85 hover:text-white">
                      {footerContent.privacy}
                    </Link>
                  </li>
                ) : null}
                {siteConfig.legal.termsPath ? (
                  <li>
                    <Link href={siteConfig.legal.termsPath} className="text-sm text-navy-100/85 hover:text-white">
                      {footerContent.terms}
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-navy-100/70">
          © {siteConfig.copyrightYear} {siteConfig.name}. {footerContent.rights}
        </div>
      </div>
    </footer>
  )
}
