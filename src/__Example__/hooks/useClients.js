import { useRender } from 'redity'
import { state_controls } from '../storage'
import { Keys, Indexs } from '../constants'

export default function useClients () {
  useRender(Keys.CONTROLS, Indexs.CLIENTS)

  return {
    name: state_controls.client.name
  }
}
