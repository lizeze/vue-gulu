import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import GButtonGroup from './g-button-group'
 import GInput from './input'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', GButtonGroup)
Vue.component('g-input', GInput)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})
import chai from 'chai'

const expect = chai.expect
{
    const obj = Vue.extend(Button)
    const button = new obj({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq('#i-settings')
}