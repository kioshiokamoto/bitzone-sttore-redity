import React from 'react'
import useControls from '../../hooks/useControls'
import { Button } from '../Counter.style'

export default function Controls (){
    
    const {handleDecrement, handleIncrement,handleReset} = useControls()

    return (
        <div>
            <Button onClick={handleDecrement}>Disminuir</Button>
            <Button onClick={handleIncrement}>Incrementar</Button>
            <Button onClick={handleReset}>Resetear</Button>
        </div>
    )
}