import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hiii'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message:'Good Bye'
        })
        console.log(this)
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                 {/* <button onClick={this.clickHandler.bind(this)}> Click</button> Method-1 By binding in render method */}
                 {/* <button onClick={() => this.clickHandler()}  > Click</button> Method-2 By using arrow functions */}
                 <button onClick={this.clickHandler}  > Click</button>
            </div>
        )
    }
}

export default EventBind
