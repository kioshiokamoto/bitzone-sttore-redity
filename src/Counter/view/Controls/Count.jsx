import React from 'react'
import useCount from '../../hooks/useCount';

export default function Count(){
    const {count} = useCount();
    return (
        <span>
            {count}
        </span>
    )
}


