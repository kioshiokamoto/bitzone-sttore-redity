import { useRender } from 'redity'
import { state_controls } from '../storage'
import { Keys, Indexs } from '../constants'

export default function useUsers () {
  useRender(Keys.CONTROLS, Indexs.USERS)

  return {
    name: state_controls.user.name
  }
}
