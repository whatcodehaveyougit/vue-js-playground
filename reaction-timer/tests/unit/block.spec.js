import { shallowMount } from '@vue/test-utils'
import Block from '@/components/Block.vue'

describe('Block.vue', () => {
  it('should render component', () => {
    Date.now = jest.fn(() => .37);
    const wrapper = shallowMount(Block)
    expect(wrapper).toMatchSnapshot()
  })
})
