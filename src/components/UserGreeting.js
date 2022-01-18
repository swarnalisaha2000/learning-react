import React, { Component } from 'react'


class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    


    render() {
        if (this.state.isLoggedIn) {
            return(
                <div>
                    Welcome Swarnali
                </div>
            )
        }
        else{
            return(
                <div>
                    Welcome guest
                </div>
            )
        }
        // return (
        //     <div>
        //     <div>
        //         Welcome Swarnali
        //     </div>
        //     <div>
        //         Welcome Agni
        //     </div>
        //     </div>
            
        // )
    }
}

export default UserGreeting
