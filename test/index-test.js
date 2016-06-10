import {expect} from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Image from '../src'

describe('Image', () => {
  const src = './target.jpg'
  const dflt = './default.jpg'
  let imageNode = null

  beforeEach(() => {
    const image = TestUtils.renderIntoDocument(
      <Image
        src={src}
        dflt={dflt}
      />
    )
    imageNode = ReactDOM.findDOMNode(image)
  })

  it('should use src', () => {
    expect(imageNode.src).to.equal(src)
  })

  it('should use dflt on error', () => {
    TestUtils.Simulate.error(imageNode)
    expect(imageNode.src).to.equal(dflt)
  })

})
