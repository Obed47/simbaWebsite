import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  // A sitemap <loc> must be an absolute URL. Until the domain is confirmed,
  // return an empty (but valid) sitemap rather than a relative, invalid one.
  if (!siteConfig.siteUrl) return []

  return [
    {
      url: `${siteConfig.siteUrl}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
