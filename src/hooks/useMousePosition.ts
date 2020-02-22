import useCanvas2dEffect from './useCanvas2dEffect'
import { useState } from 'react'

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    useCanvas2dEffect(ctx => {
        const onMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.offsetX, y: event.offsetY })
        }
        ctx.canvas.addEventListener('mousemove', onMouseMove)
        return () => ctx.canvas.removeEventListener('mousemove', onMouseMove)
    })
    return mousePosition
}
