/* eslint-env mocha */

const { expect } = require('chai')
const { shallow, mount } = require('enzyme') // mount is slower than shallow

const React = require('react')
const Landing = require('../app/components/Landing')

describe('<Landing />', () => {
  it('should render text', () => {
    const wrapper = shallow(<Landing />)
    expect(wrapper.contains(<h1>Landing</h1>))
  })
})
