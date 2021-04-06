import React from 'react'
import useInitial from '../hooks/useInitial'
import Count from './Controls/Count'
import Controls from './Controls/index'
import { Container, H1 } from './Counter.style'


export default function Counter (){
    const status = useInitial();
    return (
        <Container>
            <H1>Contador: <Count /></H1>
            <Controls />
        </Container>
    )
}