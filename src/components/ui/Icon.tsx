import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'storefront'
  | 'orders'
  | 'shield'
  | 'phone'
  | 'check'
  | 'link'
  | 'bell'
  | 'history'
  | 'chat'
  | 'arrow-right'
  | 'chevron-down'
  | 'menu'
  | 'close'
  | 'lock'
  | 'map-pin'
  | 'users'
  | 'download'
  | 'play'

const paths: Record<IconName, ReactNode> = {
  storefront: (
    <>
      <path d="M4 10.5 5.2 4.5h13.6l1.2 6" />
      <path d="M4 10.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
      <path d="M5 10.8V19h14v-8.2" />
      <path d="M10 19v-4.5h4V19" />
    </>
  ),
  orders: (
    <>
      <rect x="4.5" y="6.5" width="15" height="13" rx="1.6" />
      <path d="M8.5 6.5V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M8.5 11.5h7" />
      <path d="M8.5 15h4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6v5.3c0 4.2 2.9 6.9 7 9.2 4.1-2.3 7-5 7-9.2V6l-7-2.5Z" />
      <path d="m9.3 12 1.9 1.9 3.5-3.8" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  link: (
    <>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 7.2 13 5.2a3.4 3.4 0 0 1 4.8 4.8l-2 2" />
      <path d="M13 16.8 11 18.8a3.4 3.4 0 0 1-4.8-4.8l2-2" />
    </>
  ),
  bell: (
    <>
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 14 6 10Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </>
  ),
  history: (
    <>
      <path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" />
      <path d="M3.5 4.5v3.2h3.2" />
      <path d="M12 8.5V12l2.6 1.6" />
    </>
  ),
  chat: (
    <>
      <path d="M4.5 6.5h15v9.2H9.8L5.5 19v-3.3h-1Z" />
    </>
  ),
  'arrow-right': <path d="M4.5 12h15M13 6l6.5 6-6.5 6" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="1.8" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 13.7c2.4.3 4 2.3 4 5.3" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v11.5" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </>
  ),
  // A plain triangle — a generic "play" glyph, not a reproduction of any
  // store's trademarked logomark.
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
}

export function Icon({ name, className, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
