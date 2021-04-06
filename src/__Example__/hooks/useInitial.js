import { useEffect } from 'react'
import { useRender } from 'redity'
import loader from '../loader'
import { initial } from '../storage'

export default function useInitial () {
  const render = useRender()
  useEffect(() => {
    loader().then(pageState => {
      initial.pageState = pageState
      render()
    })
  }, [])

  return {
    pageState: initial.pageState
  }
}
