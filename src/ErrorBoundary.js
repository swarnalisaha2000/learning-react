import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
        
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){//1st method of error handling
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){ //2nd method of error handling
        console.log(error)
        console.log(info)
    }
  render() {
   if (this.state.hasError) {
       return <h1>Something went wrong</h1>
   }
   return this.props.children
  }
}

export default ErrorBoundary