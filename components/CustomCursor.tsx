'use client'

import { useEffect, useRef } from 'react'

function isDarkColor(color: string) {
  const channels = color.match(/[\d.]+/g)?.map(Number)
  return Boolean(channels && channels.length >= 3 && Math.max(channels[0], channels[1], channels[2]) < 64)
}

function isOverDarkText(element: Element, x: number, y: number) {
  const textNodes = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
  let textNode: Node | null

  while ((textNode = textNodes.nextNode())) {
    if (!textNode.textContent?.trim() || !textNode.parentElement) continue
    if (!isDarkColor(window.getComputedStyle(textNode.parentElement).color)) continue

    const range = document.createRange()
    range.selectNodeContents(textNode)
    const isOverText = Array.from(range.getClientRects()).some((rect) => (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    ))
    range.detach()

    if (isOverText) return true
  }

  return false
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    document.documentElement.classList.add('custom-cursor-enabled')

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
      cursor.style.opacity = '1'

      let element = document.elementFromPoint(event.clientX, event.clientY)
      let isOverDarkSurface = element
        ? isOverDarkText(element, event.clientX, event.clientY)
        : false
      while (element && element !== document.body) {
        const color = window.getComputedStyle(element).backgroundColor
        const channels = color.match(/[\d.]+/g)?.map(Number)

        if (channels && channels.length >= 3) {
          const alpha = channels.length === 4 ? channels[3] : 1
          if (alpha >= 0.8 && Math.max(channels[0], channels[1], channels[2]) < 64) {
            isOverDarkSurface = true
            break
          }
        }

        element = element.parentElement
      }

      cursor.classList.toggle('site-cursor-on-dark', isOverDarkSurface)
    }

    const handlePointerLeave = () => {
      cursor.style.opacity = '0'
    }

    window.addEventListener('pointermove', handlePointerMove)
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled')
      cursor.classList.remove('site-cursor-on-dark')
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <div ref={cursorRef} className="site-cursor" aria-hidden="true" />
}