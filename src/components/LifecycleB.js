import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Swarnali'
      }
      console.log('LifecycleB')
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

  render() {
      console.log('render')
    return <div>LifecycleB</div>
    
  }
}

export default LifecycleB;
