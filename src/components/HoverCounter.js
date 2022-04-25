import React, { Component } from 'react'
import WrappedComponent from '../WithCounter'
class HoverCounter extends Component {
    
  render() {
    const { count , incrementCount } = this.props
    return (
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    )
  }
}

export default WrappedComponent(HoverCounter)