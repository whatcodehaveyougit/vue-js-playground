import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import { nextTick } from 'vue'

describe('App.vue', () => {
  it('user can press button', async () => {
    const wrapper = shallowMount(App)
    wrapper.find('button').trigger('click')
    await nextTick();
    expect(wrapper.html()).toContain('Click Me to Stop Game')
  })
})
