import * as THREE from './three.module.js'

const iMax = 511
//  state variables
let psiR = new Float64Array(iMax + 1) // Array(iMax + 1).fill(0)
let psiI = new Float64Array(iMax + 1)

const paint3D = (function () {
  // canvas
  // const canvas = document.getElementById('graph')
  const getWidth = () => window.innerWidth
  const getHeight = () => window.innerHeight
  const width = 100
  const deltaW = width / iMax // separation relative to canvas width

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x000000, 0.0)
  renderer.setSize(getWidth(), getHeight())
  document.body.appendChild(renderer.domElement)

  const points = window.points = new Float32Array((iMax + 1) * 3)
  for (let i = 0; i <= iMax; i++) {
    points[i * 3] = deltaW * i
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(points, 3))
  const material = new THREE.LineBasicMaterial({
    color: 0xffffff
  })
  const line = new THREE.Line(geometry, material)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#000000')
  scene.add(line)

  {
    const boxG = new THREE.BoxGeometry(1, 1, 1)
    boxG.translate(0, 0, 0)
    const boxM = new THREE.MeshNormalMaterial()
    const boxMesh = new THREE.Mesh(boxG, boxM)
    scene.add(boxMesh)
  }

  const camera = new THREE.PerspectiveCamera(50, getWidth() / getHeight(), 1, 10000)
  camera.position.set(width / 2, 0, width * 0.6)
  camera.lookAt(width / 2, 0, 0)

  window.addEventListener('resize', function (e) {
    camera.aspect = getWidth() / getHeight()
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(getWidth(), getHeight())
  }, false)

  return function () {
    for (let i = 1; i < iMax; i++) {
      points[i * 3] = deltaW * i
      points[(i * 3) + 1] = psiR[i] * 50
      points[(i * 3) + 2] = psiI[i] * 50
    }
    line.geometry.attributes.position.needsUpdate = true
    renderer.render(scene, camera)
  }
})()

function main () {
  // const indices = Float64Array.from([...Array(iMax + 1).keys()])
  const indicesMid1 = Float64Array.from([...Array(iMax - 1).keys()].map(x => x + 1))
  const indicesMid2 = Float64Array.from([...Array(iMax - 3).keys()].map(x => x + 2))

  // units:
  const hBar = 1
  const timePerSecond = 256 // adjust the speed of time here

  // environment:
  const m = 1
  const Lx = 512
  // const U = x => 0 // flat
  // const psi0R = x => Math.sqrt(2 / Lx) * Math.sin(Math.PI * (x / Lx))
  // const psi0R = x => Math.exp(((x - Lx / 2 - Lx / 8) / 8) ** 2 / -2) / Math.sqrt(2 * Math.PI) / 8
  // const U = x => (x / (Lx / 2) - 1) ** 2 * 2 // QHO
  // const U = x => (0 - 10 * x / Lx) // slant
  // const U = x => -1 / (0.1 + Math.abs(x - Lx / 2))

  const offset = Lx * 3 / 4
  const omega = 1 / 256
  const psi0R = x => Math.exp(m * omega * (x - offset) ** 2 / -2 / hBar) / (Math.PI * hBar / (m * omega)) ** (1 / 4)
  const U = x => m * omega ** 2 * (x - Lx / 2) ** 2 / 2 // QHO

  // original environment:
  // const m = (0.005 / 1.054571817E-3)
  // const Lx = 174
  // const U = x => 0
  // const psi0R = x => 2.831851797344554 / 9 * Math.E ** (-Math.sqrt(1 / 1.054571817E-3) * (x - 50) ** 2 / 2000)
  // const psi0R = x => 1.592501982847423 / 9 * Math.E ** (-Math.sqrt(1 / 1.054571817E-3) * (x - 50) ** 2 / 20000)

  const deltaX = Lx / iMax // separation relative to Lx

  // initialize
  for (let i = 0; i <= iMax; ++i) {
    psiR[i] = psi0R(i * deltaX) // 1 / 9 * Math.E ** -(Math.sqrt(1 / hBar) / 20000 * (i - 50) * (i - 50))
    psiI[i] = 0
  }
  psiR[iMax] = 0
  psiI[iMax] = 0

  const squareInt = () => {
    let int = 0
    for (const x of psiR) {
      int += x ** 2
    }
    for (const x of psiI) {
      int += x ** 2
    }
    int *= deltaX
    return deltaX
  }

  const normalize = () => {
    // const int = (psiR.map(x => x ** 2).reduce((a, b) => a + b) +
    //   psiI.map(x => x ** 2).reduce((a, b) => a + b)) * deltaX
    const int = squareInt()
    if (Math.abs(int - 1) > 0.1) {
      psiR = psiR.map(x => x / int)
      psiI = psiI.map(x => x / int)
    }
  }

  // second derivative, by 3-point finite difference with no bounds check
  const d2 = (array, n) => (array[n + 1] + array[n - 1] - 2 * array[n]) / deltaX ** 2
  // Hamiltonian operator, on 1 component
  const Ham = (psiA, j) => -d2(psiA, j) * hBar ** 2 / (2 * m) + psiA[j] * U(j * deltaX)

  // second derivative, by 5-point finite difference with no bounds check
  const d25 = (f, n) =>
    (-f[n + 2] + 16 * f[n + 1] - 30 * f[n] + 16 * f[n - 1] - f[n - 2]) / (deltaX ** 2 * 12)
  const Ham5 = (psiA, j) => -d25(psiA, j) * hBar ** 2 / (2 * m) + psiA[j] * U(j * deltaX)

  // updater
  // keep intermediate arrays outside of loop for performance:
  const y1R = new Float64Array(iMax + 1)
  const y1I = new Float64Array(iMax + 1)
  const y2R = new Float64Array(iMax + 1)
  const y2I = new Float64Array(iMax + 1)
  const y3R = new Float64Array(iMax + 1)
  const y3I = new Float64Array(iMax + 1)
  let psiNextR = new Float64Array(iMax + 1)
  let psiNextI = new Float64Array(iMax + 1)
  const timeEvolveRK4 = dt => {
    for (const j of [1, iMax - 1]) {
      const k1I = dt * Ham(psiR, j) / -hBar
      const k1R = -dt * Ham(psiI, j) / -hBar
      y1R[j] = psiR[j] + k1R / 2
      y1I[j] = psiI[j] + k1I / 2

      psiNextR[j] = psiR[j] + k1R / 6
      psiNextI[j] = psiI[j] + k1I / 6
    }
    for (const j of indicesMid2) {
      const k1I = dt * Ham5(psiR, j) / -hBar
      const k1R = -dt * Ham5(psiI, j) / -hBar
      y1R[j] = psiR[j] + k1R / 2
      y1I[j] = psiI[j] + k1I / 2

      psiNextR[j] = psiR[j] + k1R / 6
      psiNextI[j] = psiI[j] + k1I / 6
    }

    for (const j of [1, iMax - 1]) {
      const k2I = dt * Ham(y1R, j) / -hBar
      const k2R = -dt * Ham(y1I, j) / -hBar
      y2R[j] = psiR[j] + k2R / 2
      y2I[j] = psiI[j] + k2I / 2

      psiNextR[j] += k2R / 3
      psiNextI[j] += k2I / 3
    }
    for (const j of indicesMid2) {
      const k2I = dt * Ham5(y1R, j) / -hBar
      const k2R = -dt * Ham5(y1I, j) / -hBar
      y2R[j] = psiR[j] + k2R / 2
      y2I[j] = psiI[j] + k2I / 2

      psiNextR[j] += k2R / 3
      psiNextI[j] += k2I / 3
    }

    for (const j of [1, iMax - 1]) {
      const k3I = dt * Ham(y2R, j) / -hBar
      const k3R = -dt * Ham(y2I, j) / -hBar
      y3R[j] = psiR[j] + k3R
      y3I[j] = psiI[j] + k3I

      psiNextR[j] += k3R / 3
      psiNextI[j] += k3I / 3
    }
    for (const j of indicesMid2) {
      const k3I = dt * Ham5(y2R, j) / -hBar
      const k3R = -dt * Ham5(y2I, j) / -hBar
      y3R[j] = psiR[j] + k3R
      y3I[j] = psiI[j] + k3I

      psiNextR[j] += k3R / 3
      psiNextI[j] += k3I / 3
    }

    for (const j of [1, iMax - 1]) {
      const k4I = dt * Ham(y3R, j) / -hBar
      const k4R = -dt * Ham(y3I, j) / -hBar

      psiNextR[j] += k4R / 6
      psiNextI[j] += k4I / 6
    }
    for (const j of indicesMid2) {
      const k4I = dt * Ham5(y3R, j) / -hBar
      const k4R = -dt * Ham5(y3I, j) / -hBar

      psiNextR[j] += k4R / 6
      psiNextI[j] += k4I / 6
    }
    ; [psiR, psiNextR] = [psiNextR, psiR]
    ; [psiI, psiNextI] = [psiNextI, psiI]
    normalize()
  }

  const timeEvolveEuler = dt => {
    const psiNextR = new Float64Array(iMax + 1)
    const psiNextI = new Float64Array(iMax + 1)
    for (let j = 1; j < iMax; ++j) {
      psiNextI[j] = psiI[j] + dt * Ham(psiR, j) / -hBar
      psiNextR[j] = psiR[j] - dt * Ham(psiI, j) / -hBar
    }
    psiR = psiNextR
    psiI = psiNextI
    normalize()
  }

  /* const paint = (function () {
    // canvas
    const canvas = document.getElementById('graph')
    const width = canvas.width
    const height = canvas.height
    const aspectRatio = width / height
    const deltaW = width / iMax // separation relative to canvas width
    const yMax = 24 / Lx // gets rooted for amplitudes
    const ctx = canvas.getContext('2d')

    const resize = function (e) {
      const newWidth = (window.innerWidth / window.innerHeight > aspectRatio)
        ? window.innerHeight * aspectRatio
        : window.innerWidth
      canvas.style.width = `${newWidth}px`
    }
    resize()
    window.addEventListener('resize', resize, false)

    return () => {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, width, height)
      // df/dt = (-hbar**2/2m d/dx * df/dx + U f)/i hbar

      ctx.setLineDash([8, 2])
      ctx.beginPath()
      ctx.strokeStyle = '#000000'
      ctx.moveTo(0, (height / 2))
      for (const j of indicesMid1) {
        ctx.lineTo(j * deltaW, (height / 2) - (height / 2) / yMax * (psiR[j] ** 2 + psiI[j] ** 2))
      }
      ctx.lineTo(width, (height / 2))
      ctx.stroke()

      ctx.setLineDash([])
      ctx.beginPath()
      ctx.strokeStyle = '#0000ff'
      ctx.moveTo(0, (height / 2))
      for (const j of indicesMid1) {
        ctx.lineTo(j * deltaW, (height / 2) - (height / 2) / yMax ** 0.5 * psiR[j])
      }
      ctx.lineTo(width, (height / 2))
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = '#ff0000'
      ctx.moveTo(0, (height / 2))
      for (const j of indicesMid1) {
        ctx.lineTo(j * deltaW, (height / 2) - (height / 2) / yMax ** 0.5 * psiI[j])
      }
      ctx.lineTo(width, (height / 2))
      ctx.stroke()

      // for (const j of indicesMid1) {
      //   // ctx.fillRect(j * deltaW, 5, 1, -U(j * deltaX) * 200000)
      // }
    }
  })() */

  const dt = 0.0005 * timePerSecond // time elapsed per step
  let iTime = 0
  setInterval(() => {
    // do 4 loops, to make up for 4ms sleep
    // times 2, to account for minimum acceptable step of 0.0005
    for (const _ of Array(8)) {
      ++iTime
      if (iTime % 2000 === 0) {
        const iMid = Math.round(iMax / 2)
        console.log([iTime * dt, Ham5(psiR, iMid), psiR[iMid], psiI[iMid]])
      }
      timeEvolveRK4(dt)
    }
    paint3D()
  }, 4) // 4 = HTML5 minimum
}
if (document.readyState !== 'ready') main()
else document.addEventListener('DOMContentLoaded', main())
