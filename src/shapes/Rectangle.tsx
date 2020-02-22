import useCanvas2dContext from '../hooks/useCanvas2dContext'
import useMousePosition from '../hooks/useMousePosition'
import { useMemo } from 'react'

export interface RectangleProps {
    x: number
    y: number
    width: number
    height: number
    fill?: string
    stroke?: string
    onMouseOver?: () => void
}

export default function Rectangle({ x, y, width, height, fill, stroke, onMouseOver }: RectangleProps) {
    const mousePosition = useMousePosition()
    const hover = useMemo(
        () =>
            onMouseOver &&
            mousePosition.x > x &&
            mousePosition.x < x + width &&
            mousePosition.y > y &&
            mousePosition.y <= y + height,
        [mousePosition],
    )

    useCanvas2dContext(ctx => {
        if (fill) {
            ctx.fillStyle = hover ? 'yellow' : fill
            ctx.fillRect(x, y, width, height)
        }
        if (stroke) {
            ctx.strokeStyle = stroke
            ctx.strokeRect(x, y, width, height)
        }
    })
    return null
}
