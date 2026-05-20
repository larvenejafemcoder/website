import * as THREE from 'three'
import { ThreeManager } from './ThreeManager'

export function createNeonGrid(manager: ThreeManager) {
  const group = new THREE.Group()

  const gridHelper = new THREE.GridHelper(30, 40, 0xb026ff, 0x8f3bff)
  gridHelper.position.y = -2
  group.add(gridHelper)

  const gridGeo = new THREE.PlaneGeometry(30, 30, 40, 40)
  const gridMat = new THREE.MeshBasicMaterial({
    color: 0xb026ff,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  })
  const gridPlane = new THREE.Mesh(gridGeo, gridMat)
  gridPlane.rotation.x = -Math.PI / 2
  gridPlane.position.y = -1.8
  group.add(gridPlane)

  const pillars: THREE.Mesh[] = []
  const pillarMat = new THREE.MeshBasicMaterial({
    color: 0xb026ff,
    transparent: true,
    opacity: 0.2,
    wireframe: true,
  })

  for (let i = 0; i < 20; i++) {
    const pillarGeo = new THREE.BoxGeometry(0.05, 0.5 + Math.random() * 2, 0.05)
    const pillar = new THREE.Mesh(pillarGeo, pillarMat)
    const angle = Math.random() * Math.PI * 2
    const radius = 2 + Math.random() * 8
    pillar.position.set(Math.cos(angle) * radius, -1.5 + Math.random() * 2, Math.sin(angle) * radius)
    group.add(pillar)
    pillars.push(pillar)
  }

  manager.add(group)

  manager.onTick((_delta, elapsed) => {
    gridPlane.rotation.z = Math.sin(elapsed * 0.05) * 0.02
    group.position.y = Math.sin(elapsed * 0.1) * 0.1

    pillars.forEach((p, i) => {
      p.position.y += Math.sin(elapsed * 0.5 + i) * 0.001
      const scale = 0.8 + Math.sin(elapsed * 0.3 + i * 0.5) * 0.2
      p.scale.y = Math.max(0.2, scale)
    })
  })

  return () => {
    manager.remove(group)
    pillarMat.dispose()
    gridMat.dispose()
  }
}
