/**
 * Custom cursor trail effect using a canvas overlay
 */
export function initCursor() {
  const canvas = document.createElement('canvas')
  canvas.id = 'cursor-canvas'
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9998;
  `
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')!
  let w = window.innerWidth
  let h = window.innerHeight

  const resize = () => {
    w = window.innerWidth
    h = window.innerHeight
    canvas.width = w
    canvas.height = h
  }
  window.addEventListener('resize', resize)
  resize()

  const trail: { x: number; y: number; age: number }[] = []
  let mx = 0
  let my = 0

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
    trail.push({ x: mx, y: my, age: 0 })
  })

  const maxTrail = 20

  let animId = 0
  const draw = () => {
    ctx.clearRect(0, 0, w, h)

    for (let i = 0; i < trail.length; i++) {
      const p = trail[i]
      p.age++
      const alpha = 1 - p.age / maxTrail
      const size = Math.max(1, 6 * alpha)

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3)
      gradient.addColorStop(0, `rgba(176, 38, 255, ${alpha * 0.6})`)
      gradient.addColorStop(0.5, `rgba(255, 43, 214, ${alpha * 0.3})`)
      gradient.addColorStop(1, `rgba(176, 38, 255, 0)`)

      ctx.beginPath()
      ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    while (trail.length > maxTrail) trail.shift()
    while (trail.length > 0 && trail[0].age > maxTrail) trail.shift()

    animId = requestAnimationFrame(draw)
  }
  draw()

  return () => {
    cancelAnimationFrame(animId)
    canvas.remove()
    window.removeEventListener('resize', resize)
  }
}
