import { useEffect } from 'react'
import useCanvas2dContext from './useCanvas2dContext'

export default function useCanvas2dEffect(effect: (ctx: CanvasRenderingContext2D) => void) {
    const ctx = useCanvas2dContext()
    useEffect(() => {
        if (!ctx) {
            return
        }
        return effect(ctx)
    })
}
