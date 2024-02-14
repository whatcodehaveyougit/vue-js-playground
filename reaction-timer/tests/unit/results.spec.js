import { shallowMount } from '@vue/test-utils'
import Results from '@/components/Results.vue'

describe('Results.vue', () => {
  it('renders props when passed', () => {
    const timeTakenToClick = 800;
    const userMessage = "Hello here"
    const wrapper = shallowMount(Results, {
      props: { timeTakenToClick, userMessage }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
