import { createContext } from 'react'

export const Canvas2dContext = createContext<CanvasRenderingContext2D | undefined>(undefined)
export const Canvas2dProvider = Canvas2dContext.Provider
export const Canvas2dConsumer = Canvas2dContext.Consumer
