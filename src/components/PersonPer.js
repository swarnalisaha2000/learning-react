import React from 'react'

function PersonPer({persons}) {
    return (
        <div>
            <h2>I am {persons.name}. I am {persons.age} years old. I live in {persons.city}</h2>
        </div>
    )
}

export default PersonPer
