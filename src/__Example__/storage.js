import sttore from 'sttore'
//import { PageState } from '../../config/utils/Constants'

export const initial = {
  pageState: 'LOADING'
}

export const state_main = sttore({
  count: 0
})

state_main.set('count', 5)
state_main.init(state_main)

export const state_controls = {
  count_click: 0,
  user: {
    name: ''
  },
  client: {
    name: ''
  }
}
