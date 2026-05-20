import * as THREE from 'three'
import { ThreeManager } from './ThreeManager'

interface ParticleFieldConfig {
  count?: number
  colors?: number[]
  size?: number
  speed?: number
}

export function createParticleField(
  manager: ThreeManager,
  config: ParticleFieldConfig = {}
) {
  const {
    count = 2000,
    colors = [0xb026ff, 0xff2bd6, 0x33d1ff, 0x8f3bff],
    size = 0.02,
    speed = 0.2,
  } = config

  const positions = new Float32Array(count * 3)
  const colorsArr = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  const velocities: { x: number; y: number; z: number }[] = []

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20

    const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
    colorsArr[i * 3] = color.r
    colorsArr[i * 3 + 1] = color.g
    colorsArr[i * 3 + 2] = color.b

    sizes[i] = size * (0.5 + Math.random())

    velocities.push({
      x: (Math.random() - 0.5) * speed * 0.1,
      y: (Math.random() - 0.5) * speed * 0.1,
      z: (Math.random() - 0.5) * speed * 0.1,
    })
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colorsArr, 3))
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const mat = new THREE.PointsMaterial({
    size,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  })

  const points = new THREE.Points(geo, mat)
  manager.add(points)

  const mouse = { x: 0, y: 0 }
  const onMouseMove = (e: MouseEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
  }
  window.addEventListener('mousemove', onMouseMove)

  manager.onTick((_delta, elapsed) => {
    const pos = geo.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i].x
      pos[i * 3 + 1] += velocities[i].y
      pos[i * 3 + 2] += velocities[i].z

      if (Math.abs(pos[i * 3]) > 10) velocities[i].x *= -1
      if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i].y *= -1
      if (Math.abs(pos[i * 3 + 2]) > 10) velocities[i].z *= -1
    }

    geo.attributes.position.needsUpdate = true

    const camera = manager.getCamera()
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)

    mat.size = size * (1 + Math.sin(elapsed * 0.5) * 0.2)
  })

  return () => {
    window.removeEventListener('mousemove', onMouseMove)
    manager.remove(points)
    mat.dispose()
  }
}
