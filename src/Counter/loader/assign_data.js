import { state_count } from '../storage'

export default function assign_data () {
    state_count.set('count', 5)
}
