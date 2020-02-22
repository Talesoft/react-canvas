import { useContext } from 'react'
import { Canvas2dContext } from '../common/context'

export default function useCanvas2dContext(effect?: (ctx: CanvasRenderingContext2D) => void) {
    const ctx = useContext(Canvas2dContext)
    if (ctx && effect) {
        effect(ctx)
    }
    return ctx
}
