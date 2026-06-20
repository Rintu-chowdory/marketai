import { initScrollAnimations } from './scrollObserver.js'

let _observer = null

export function refreshScrollAnimations() {
  if (_observer) _observer.disconnect()
  setTimeout(() => { _observer = initScrollAnimations() }, 80)
}
