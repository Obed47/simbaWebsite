/**
 * Central site configuration.
 *
 * Values that are not yet known are `null` on purpose. The website never
 * invents a domain, phone number, e-mail address or social profile: each
 * missing value is shown as a clearly defined fallback in the UI and is
 * filled in through the environment variables listed in `.env.example`.
 */

const emptyToNull = (value: string | undefined): string | null => {
  const trimmed = value?.trim()
  return trimmed ? trimmed : null
}

export const siteConfig = {
  name: 'SIMBA',
  language: 'fr',
  locale: 'fr_CM',
  title: 'SIMBA — Achetez en confiance, vendez avec SIMBA',
  description:
    'SIMBA aide les commerçants du Cameroun à présenter leurs produits en ligne, à gérer leurs commandes et à gagner la confiance de leurs clients. Une plateforme mobile pensée pour le commerce local.',
  mission: 'Digitaliser, simplifier et sécuriser progressivement le commerce local.',

  /** Public URL of the website, e.g. https://example.cm. Unset until the domain is confirmed. */
  siteUrl: emptyToNull(process.env.NEXT_PUBLIC_SITE_URL),

  /**
   * Destination of the "Explorer SIMBA" calls to action (the existing mobile app or its web entry point).
   * While unset, those buttons fall back to the contact section.
   */
  appUrl: emptyToNull(process.env.NEXT_PUBLIC_APP_URL),

  /**
   * HTTPS endpoint that receives contact form submissions (JSON POST).
   * While unset, the form validates input but reports that submission is not yet configured.
   */
  contactEndpoint: emptyToNull(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT),

  /** Verified contact details. Leave null until the project team supplies them. */
  contact: {
    email: null as string | null,
    phone: null as string | null,
  },

  /** Verified social profiles. Leave empty until the project team supplies them. */
  social: [] as { label: string; href: string }[],

  /** Privacy policy and terms pages. Links are only rendered when a path is set. */
  legal: {
    privacyPath: null as string | null,
    termsPath: null as string | null,
  },

  /** Copyright year shown in the footer. */
  copyrightYear: 2026,
} as const

export type SiteConfig = typeof siteConfig
