import { Keys } from '../constants';
import { useRender,render } from 'redity'
import { state_count } from '../storage'
import { useEffect } from 'react';


export default function useCount (){
    useRender(Keys.CONTROLS);

    useEffect(() => {
        render(Keys.CONTROLS)
    }, [state_count().count])

    return{
        count:state_count().count
    }
}