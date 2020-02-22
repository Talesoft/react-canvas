import pixelRatio from './pixelRatio'

export default function fitCanvas(canvas: HTMLCanvasElement) {
    const parentElement = canvas.parentElement
    if (!parentElement) {
        throw new Error('Failed to fit a canvas without a parent element')
    }
    const { clientWidth, clientHeight } = parentElement
    Object.assign(canvas.style, {
        width: `${clientWidth}px`,
        height: `${clientHeight}px`,
    })
    Object.assign(canvas, {
        width: clientWidth * pixelRatio,
        height: clientHeight * pixelRatio,
    })
}
