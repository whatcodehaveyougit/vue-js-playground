import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import { nextTick } from 'vue'

describe('App.vue', () => {
  it('user can press button', async () => {
    const wrapper = shallowMount(App)
    // I want to test the logic here in this App components which shows or hides the child components
    // Not working for a number of reasons
    wrapper.find('button').trigger('click')
    await nextTick();
    expect(wrapper.html()).toContain('Click Me to Stop Game')
  })
})
