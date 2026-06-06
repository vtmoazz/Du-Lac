'use client'
import { useEffect } from 'react'

/**
 * Chạy IntersectionObserver toàn trang — khi element.reveal vào viewport
 * thì thêm class "is-visible" để trigger CSS transition fade-up.
 */
export default function ScrollRevealProvider() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
