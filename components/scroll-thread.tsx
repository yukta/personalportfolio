'use client'

import { useEffect, useRef } from 'react'

const PATH = 'M 8 0 V 11 H 92 V 23 H 8 V 36 H 92 V 49 H 8 V 62 H 92 V 75 H 8 V 88 H 92 V 1000'
const NODE_POINTS = [11, 23, 36, 49, 62, 75, 88]

export function ScrollThread() {
  const pathRef = useRef<SVGPathElement>(null)
  const headRef = useRef<SVGCircleElement>(null)
  const nodesRef = useRef<SVGCircleElement[]>([])

  useEffect(() => {
    const path = pathRef.current
    const head = headRef.current
    if (!path || !head) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    let frame = 0
    const update = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      const drawn = length * progress
      path.style.strokeDashoffset = `${length - drawn}`
      const point = path.getPointAtLength(drawn)
      head.setAttribute('cx', `${point.x}`)
      head.setAttribute('cy', `${point.y}`)
      head.style.opacity = progress > 0.005 && progress < 0.995 ? '1' : '0'
      nodesRef.current.forEach((node, index) => {
        const nodeProgress = NODE_POINTS[index] / 100
        node.style.opacity = progress >= nodeProgress ? '1' : '.16'
        node.classList.toggle('reached', progress >= nodeProgress)
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <svg className="scroll-thread" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
      <path ref={pathRef} className="scroll-thread-path" d={PATH} />
      {NODE_POINTS.map((y, index) => (
        <circle ref={(node) => { if (node) nodesRef.current[index] = node }} className="scroll-thread-node" key={y} cx={index % 2 === 0 ? 92 : 8} cy={y} r="0.65" />
      ))}
      <circle ref={headRef} className="scroll-thread-head" cx="8" cy="0" r="1.15" />
    </svg>
  )
}

export default ScrollThread
