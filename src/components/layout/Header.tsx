'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { nav, ui } from '@/content/fr'
import { appCtaHref } from '@/lib/links'
import { cn } from '@/lib/cn'

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  // Deepen the header's border/shadow once the page has scrolled, so it reads
  // as "lifted" above the content instead of a flat bar from the first pixel.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300',
        scrolled
          ? 'border-line bg-ivory/90 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-ivory/75'
          : 'border-transparent bg-transparent',
      )}
    >
      {/* Slightly wider than the page container: eight links plus the
          "Télécharger l'application" button don't fit max-w-6xl at xl. */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href="#accueil"
          className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-95"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/simba-logo.png"
            alt=""
            width={30}
            height={30}
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-navy-900">SIMBA</span>
        </Link>

        {/* Eight items plus the logo and CTA need xl's extra width to lay out
            on one line without wrapping — lg was too tight once "Aperçu" (the
            product showcase) joined the other seven links. */}
        <nav aria-label={ui.mainNavLabel} className="hidden xl:block">
          <ul className="flex items-center gap-4 2xl:gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-underline text-sm font-medium whitespace-nowrap text-navy-900/80 transition-colors hover:text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button href={appCtaHref} className="px-5 py-2.5 text-sm whitespace-nowrap">
            {ui.exploreApp}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-transform duration-150 active:scale-90 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? ui.closeMenu : ui.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6 transition-transform duration-200" />
        </button>
      </div>

      {/* AnimatePresence only mounts the panel's links while open, so a
          closed menu has nothing in the DOM to accidentally land keyboard
          focus on — a more direct fix than toggling `inert` on an
          always-mounted panel. */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ivory xl:hidden"
          >
            <nav aria-label={ui.menuLabel} className="flex h-full flex-col px-6 py-8">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3.5 text-lg font-medium text-navy-900 transition-colors hover:bg-navy-50"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={itemVariants} className="mt-auto pt-6">
                <Button href={appCtaHref} className="w-full justify-center" onClick={() => setOpen(false)}>
                  {ui.exploreApp}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
