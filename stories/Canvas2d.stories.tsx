import React, { useEffect, useState } from 'react'
import Canvas2d from '../src/Canvas2d'
import Rectangle from '../src/shapes/Rectangle'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Canvas2d',
    component: Canvas2d,
}

function BasicExampleComponent() {
    const [x, setX] = useState(10)
    console.log('Render BasicExample')
    useEffect(() => {
        const iv = setInterval(() => {
            console.log('setting x', x + 10)
            setX(x + 10)
        }, 1000)
        return () => clearInterval(iv)
    }, [x])
    return <Canvas2d>
        <Rectangle x={x} y={10} width={100} height={50} fill="red" onMouseOver={action('onMouseOver')} />
    </Canvas2d>
}

export const BasicExample = () => <BasicExampleComponent />
