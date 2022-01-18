import React, { Component } from 'react'


class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    


    render() {

        return(
            this.state.isLoggedIn?
            <div>Welcome Swarnali</div>:
            <div>Welcome Guest</div>
        )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>WelCome Swarnali</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return(
        //         <div>
        //             Welcome Swarnali
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome guest
        //         </div>
        //     )
        // }
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
