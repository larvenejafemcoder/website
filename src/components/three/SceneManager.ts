import { ThreeManager } from './ThreeManager'
import { createNeonGrid } from './NeonGrid'
import { createParticleField } from './ParticleField'

export type SceneType = 'hero' | 'about' | 'projects'

const instances = new Map<string, ThreeManager>()

export function initScene(containerId: string, type: SceneType) {
  const container = document.getElementById(containerId)
  if (!container || instances.has(containerId)) return

  const manager = new ThreeManager(container)
  instances.set(containerId, manager)

  let cleanup: (() => void) | null = null

  switch (type) {
    case 'hero':
      createNeonGrid(manager)
      cleanup = createParticleField(manager, {
        count: 1500,
        colors: [0xb026ff, 0xff2bd6, 0x33d1ff],
        speed: 0.3,
      })
      break
    case 'about':
      cleanup = createParticleField(manager, {
        count: 800,
        colors: [0x8f3bff, 0x33d1ff],
        size: 0.03,
        speed: 0.15,
      })
      break
    case 'projects':
      cleanup = createParticleField(manager, {
        count: 1000,
        colors: [0xb026ff, 0x00ffe1],
        size: 0.015,
        speed: 0.2,
      })
      break
  }

  return () => {
    cleanup?.()
    manager.destroy()
    instances.delete(containerId)
  }
}
