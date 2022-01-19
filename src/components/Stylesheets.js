import React from 'react'
import './myStyle.css'

function Stylesheets(props) {

    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h2 className= {`${className} font-ex` } >Stylesheet</h2>
        </div>
    )
}

export default Stylesheets
