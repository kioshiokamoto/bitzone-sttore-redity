import { useEffect } from 'react'
import { useRender,render } from 'redity'
import { Keys } from '../constants'
import loader from '../loader'

export default function useInitial () {
  useRender(Keys.CONTROLS)
  useEffect(() => {
    loader().then(() => {
      render(Keys.CONTROLS)
    })
  }, [])

  return true
}
