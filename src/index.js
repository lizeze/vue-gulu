import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import GButtonGroup from './g-button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})