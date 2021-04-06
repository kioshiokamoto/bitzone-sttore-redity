
import { useRender, render} from 'redity'
import { Keys } from '../constants'
import { state_count } from '../storage'

export default function useControls (){
    useRender(Keys.CONTROLS)

    const handleIncrement = ()=>{
        state_count.set('count',state_count().count+1)
        render(Keys.CONTROLS);
    }
    const handleDecrement = ()=>{
        state_count.set('count',state_count().count-1)
        render(Keys.CONTROLS);
    }
    const handleReset = ()=>{
        state_count.init();
        render(Keys.CONTROLS)
    }
    return  {
        handleDecrement,
        handleIncrement,
        handleReset
    }
}
