import { useRef, PropsWithChildren, useState, useEffect } from 'react'
import React from 'react'
import { Canvas2dProvider } from './common/context'
import fitCanvas from './common/fitCanvas'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Canvas2dProps {}

export default function Canvas2d({ children }: PropsWithChildren<Canvas2dProps>) {
    const ref = useRef<HTMLCanvasElement>(null)
    const [context, setContext] = useState<CanvasRenderingContext2D | undefined>(undefined)

    useEffect(() => {
        if (!ref.current) {
            throw new Error('Failed to get canvas ref')
        }
        const ctx = ref.current.getContext('2d')
        if (!ctx) {
            throw new Error('Failed to get 2d context')
        }
        fitCanvas(ref.current)
        setContext(ctx)
    }, [])

    useEffect(() => {
        if (!ref.current) {
            throw new Error('Failed to get canvas ref')
        }
        const canvas = ref.current
        const onResize = () => fitCanvas(canvas)
        addEventListener('resize', onResize)
        return () => removeEventListener('resize', onResize)
    }, [])

    if (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    }

    return (
        <Canvas2dProvider value={context}>
            {children}
            <canvas ref={ref} />
        </Canvas2dProvider>
    )
}
