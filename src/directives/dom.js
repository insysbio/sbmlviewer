import Vue from 'vue'

Vue.directive('dom', {
  bind (el, binding, vnode) {
    el.appendChild(binding.value)
  },
  update (el, binding, vnode) {
    el.removeChild(el.children[0])
    el.appendChild(binding.value)
  }
})
