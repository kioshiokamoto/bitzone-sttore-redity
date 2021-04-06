import { render, useRender, renders } from 'redity'
import { Keys, Indexs } from '../constants'
import { state_controls } from '../storage'

export default function useControls () {
  useRender(Keys.CONTROLS)
  function handleClick () {
    if (state_controls.count_click === 0) {
      state_controls.client.name = 'Mario'
      state_controls.count_click++
      render(Keys.CONTROLS, Indexs.CLIENTS)
    } else {
      state_controls.user.name = 'Jose'
      render(Keys.CONTROLS, Indexs.USERS)
      render(Keys.CONTROLS, Indexs.CLIENTS)
      renders(Keys.CONTROLS)
    }
  }

  return {
    handleClick
  }
}
