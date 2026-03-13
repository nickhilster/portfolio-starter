import { useEffect, useRef } from 'react'

const TRAIL_INTERVAL_MS = 80
const TRAIL_DISTANCE_PX = 26
const MAX_RIPPLES = 12

function spawnRipple(container: HTMLDivElement, x: number, y: number, variant: 'trail' | 'tap') {
  const ripple = document.createElement('span')
  ripple.className = `cursor-ripple cursor-ripple--${variant}`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  container.appendChild(ripple)

  if (container.childElementCount > MAX_RIPPLES) {
    container.firstElementChild?.remove()
  }

  ripple.addEventListener(
    'animationend',
    () => {
      ripple.remove()
    },
    { once: true }
  )
}

export default function CursorRippleTrail() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotionQuery.matches) return

    let lastX = -1000
    let lastY = -1000
    let lastSpawnTime = 0
    let rafId = 0
    let pendingPoint: { x: number; y: number } | null = null

    const flushTrail = () => {
      rafId = 0
      if (!pendingPoint) return

      const { x, y } = pendingPoint
      pendingPoint = null

      const distance = Math.hypot(x - lastX, y - lastY)
      const now = performance.now()

      if (distance < TRAIL_DISTANCE_PX || now - lastSpawnTime < TRAIL_INTERVAL_MS) {
        return
      }

      lastX = x
      lastY = y
      lastSpawnTime = now
      spawnRipple(container, x, y, 'trail')
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      pendingPoint = { x: event.clientX, y: event.clientY }

      if (!rafId) {
        rafId = window.requestAnimationFrame(flushTrail)
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') return
      spawnRipple(container, event.clientX, event.clientY, 'tap')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)

      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }

      container.replaceChildren()
    }
  }, [])

  return <div ref={containerRef} aria-hidden="true" className="cursor-ripple-layer" />
}
