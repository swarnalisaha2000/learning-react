import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './Usercontext'

export class ComponentE extends Component {

  static contextType = UserContext
  render() {
    return (
      <div>Component E renders {this.context}
        <ComponentF /> 
      </div>
    )
  }
}

//ComponentE.contextType = UserContext
export default ComponentE