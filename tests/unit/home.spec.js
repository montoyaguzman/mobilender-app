import { shallowMount } from '@vue/test-utils'
import Home from '@/components/pages/Home.vue'

describe('Home.vue', () => {
  it('test in home', () => {
    const msg = '¡Bienvenido a Mobilender!'
    const wrapper = shallowMount(Home, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
