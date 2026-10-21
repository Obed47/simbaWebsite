import { siteConfig } from '@/config/site'

/**
 * Destination for every "Explorer SIMBA / Get started" call to action.
 *
 * The real application URL is not known yet. Rather than rendering a dead
 * link or a disabled button, these CTAs point at the on-page contact section
 * until `NEXT_PUBLIC_APP_URL` is set, so every button stays genuinely useful.
 */
export const appCtaHref = siteConfig.appUrl ?? '#contact'
export const isAppCtaConfigured = siteConfig.appUrl !== null
export const isAppCtaExternal = (href: string) => href.startsWith('http')
