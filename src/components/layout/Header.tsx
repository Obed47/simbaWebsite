'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { nav, ui } from '@/content/fr'
import { appCtaHref } from '@/lib/links'
import { cn } from '@/lib/cn'

export function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on route-level navigation (anchor clicks) and on escape.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ivory/90 backdrop-blur supports-[backdrop-filter]:bg-ivory/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="#accueil" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/brand/simba-logo.png" alt="SIMBA" width={30} height={30} className="h-8 w-auto" priority />
          <span className="text-lg font-semibold tracking-tight text-navy-900">SIMBA</span>
        </Link>

        <nav aria-label={ui.mainNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-navy-900/80 transition-colors hover:text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={appCtaHref} className="px-5 py-2.5 text-sm">
            {ui.exploreApp}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? ui.closeMenu : ui.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 z-40 bg-ivory lg:hidden',
          'transition-opacity duration-200',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
      >
        <nav aria-label={ui.menuLabel} className="flex h-full flex-col px-6 py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3.5 text-lg font-medium text-navy-900 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Button href={appCtaHref} className="w-full justify-center" onClick={() => setOpen(false)}>
              {ui.exploreApp}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
