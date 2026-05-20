import * as THREE from 'three'

export class ThreeManager {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private animationId: number = 0
  private clock: THREE.Clock
  private onTickFns: ((delta: number, elapsed: number) => void)[] = []
  private isLowPerf: boolean = false
  private resizeObserver: ResizeObserver | null = null

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock()

    this.isLowPerf = this.checkPerformance()

    const size = this.getSize(container)

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x05010a, 0.035)

    this.camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000)
    this.camera.position.z = this.isLowPerf ? 8 : 5

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !this.isLowPerf,
      powerPreference: this.isLowPerf ? 'low-power' : 'high-performance',
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isLowPerf ? 1 : 2))
    this.renderer.setSize(size.width, size.height)
    this.renderer.setClearColor(0x000000, 0)
    container.appendChild(this.renderer.domElement)

    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.handleResize(entry.contentRect)
      }
    })
    this.resizeObserver.observe(container)

    this.animate()
  }

  private checkPerformance(): boolean {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const memory = (navigator as any).deviceMemory
    if (isMobile) return true
    if (memory && memory < 4) return true
    return false
  }

  private getSize(container: HTMLElement): { width: number; height: number } {
    return {
      width: container.clientWidth || window.innerWidth,
      height: container.clientHeight || window.innerHeight,
    }
  }

  private handleResize(rect: DOMRectReadOnly) {
    const width = rect.width
    const height = rect.height
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  add(object: THREE.Object3D) {
    this.scene.add(object)
  }

  remove(object: THREE.Object3D) {
    this.scene.remove(object)
    if ((object as any).geometry) (object as any).geometry.dispose()
    if ((object as any).material) {
      if (Array.isArray((object as any).material)) {
        (object as any).material.forEach((m: THREE.Material) => m.dispose())
      } else {
        (object as any).material.dispose()
      }
    }
  }

  onTick(fn: (delta: number, elapsed: number) => void) {
    this.onTickFns.push(fn)
    return () => {
      this.onTickFns = this.onTickFns.filter((f) => f !== fn)
    }
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate)
    const delta = this.clock.getDelta()
    const elapsed = this.clock.getElapsedTime()

    for (const fn of this.onTickFns) {
      fn(delta, elapsed)
    }

    this.renderer.render(this.scene, this.camera)
  }

  getCamera() {
    return this.camera
  }

  getScene() {
    return this.scene
  }

  destroy() {
    cancelAnimationFrame(this.animationId)
    this.resizeObserver?.disconnect()
    this.renderer.dispose()
    this.scene.clear()
    this.onTickFns = []
  }
}
