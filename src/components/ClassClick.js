import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Button click me clicked')
    }
    render() {
        return (
            <div>
                 <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
