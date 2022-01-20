import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Swarnali'
      }
      console.log('LifecycleA')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    changeState = () => {
        this.setState ({
            names : 'Saha'
        })
    }

  render() {
      console.log('render')
    return <div>LifecycleA
        <LifecycleB />
        <button onClick={this.changeState}>Change State</button>
    </div>
  }
}

export default LifecycleA;
