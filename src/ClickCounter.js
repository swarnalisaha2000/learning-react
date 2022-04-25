import React, { Component } from 'react'
import WrappedComponent from './WithCounter'
export class ClickCounter extends Component {
  
  render() {
    console.log(this.props.name)
    const { count, incrementCount} = this.props
    return <button onClick={incrementCount}>
    {this.props.name}  Click {count} times</button>
    
  }
}

export default WrappedComponent(ClickCounter)