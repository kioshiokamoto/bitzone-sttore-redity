import { state_controls } from './storage'

/**
 * @param {number} value
 */
export function changeCountClick (value) {
  state_controls.count_click = value
}
