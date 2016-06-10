import debug from 'debug'
import React, {Component} from 'react'
const dbg = debug('app:shared:image')

export default class extends Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    dflt: React.PropTypes.any.isRequired
  }

  render() {
    dbg('render: props=%o', this.props)

    return (
      <img
        className = {this.props.className}
        src = {this.props.src}
        ref = {
          (r) => {
            this.image = r
          }
        }
        onError = {
          () => {
            this.image.onerror = null
            this.image.src = this.props.dflt
          }
        }
      />
    )
  }
}
