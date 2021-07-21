import { shallowMount } from '@vue/test-utils'
import Home from '@/components/pages/Home.vue'

describe('Home.vue', () => {
  it('test in home', () => {
    const msg = '¡Bienvenido a Mobilender!'
    const wrapper = shallowMount(Home, {
      data() {
        return {
          message: msg,
        }
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
