import type { SVGProps } from 'react'

const stroke = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function IconSchedule(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function IconDissatisfied(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01M9 15c1.5 1 4.5 1 6 0" />
    </svg>
  )
}

export function IconInventory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M21 8l-9-4-9 4v10l9 4 9-4V8z" />
      <path d="M3.27 6.96L12 12l8.73-5.04M12 22V12" />
    </svg>
  )
}

export function IconPersonOff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M18 19a4 4 0 00-4-4H8a4 4 0 00-4 4M15 8a3 3 0 10-3 3M5 5l14 14" />
    </svg>
  )
}

export function IconArrowForward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M4 6h16v12H4V6zm0 0 8 6 8-6" />
    </svg>
  )
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M8 10h8M8 14h4M5 18l2-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v5a3 3 0 01-3 3h-7l-3 3z" />
    </svg>
  )
}

export function IconTarget(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <circle cx="12" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none" />
      <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
      <path d="M12 8v4M10 14l-3 3m7-3 3 3" />
    </svg>
  )
}

export function IconPayments(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  )
}

export function IconTrendingUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...stroke} {...props}>
      <path d="M4 18V6m4 10V10m4 6V8m4 8v-4m4 4V4" />
      <path d="M4 18h16" />
    </svg>
  )
}
