import { state_main } from '../storage'

export default function assign_data () {
  state_main.set('count', 1)
  state_main.init(state_main)
}
