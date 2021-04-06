import { Keys } from '../constants';
import { useRender,render } from 'redity'
import { state_count } from '../storage'
import { useEffect } from 'react';


export default function useCount (){
    useRender(Keys.CONTROLS);
    const count = state_count().count
    useEffect(() => {
        render(Keys.CONTROLS)
    }, [count])

    return{
        count
    }
}