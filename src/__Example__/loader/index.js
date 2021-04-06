import { PageState } from '../../../config/utils/Constants'
import sleep from '../../../config/utils/sleep'
import { data, list } from '../data'
import assign_data from './assign_data'

export default async function loader () {
  // peticiones
  await sleep(2000)
  data.user = {
    name: 'Luisa',
    age: 19
  }
  list.clients = [
    { name: 'Coca Cola', id: 50 }
  ]

  assign_data()
  return PageState.SUCCESS
}
