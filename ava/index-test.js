import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Image from '../src'

const src = './target.jpg'
const dflt = './default.jpg'

test.beforeEach(t => {
  const image = TestUtils.renderIntoDocument(
    <Image
      src={src}
      dflt={dflt}
    />
  )
  t.context.imageNode = ReactDOM.findDOMNode(image)
})

test('should use src', t => {
  t.is(t.context.imageNode.src, src)
})

test('should use dflt on error', t => {
  const {imageNode} = t.context
  TestUtils.Simulate.error(imageNode)
  t.is(imageNode.src, dflt)
})
