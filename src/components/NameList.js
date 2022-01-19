import React from 'react'
import PersonPer from './PersonPer'

function NameList() {
    const name = ['Bruce', 'Ammer', 'Diana','Riya']
    const names = name.map((x,index) => <h2 key={index}>{index} {x}</h2>)
    return (
        <div>{names}</div>
    )

    // const person = [
    //     {
    //         name:"John",
    //         age:31, 
    //         city:"New York"
    //     },
    //     {
    //         name:"Mark",
    //         age:45, 
    //         city:"New Jersey"
    //     },
    //     {
    //         name:"Michael",
    //         age:30, 
    //         city:"UK"
    //     },
    //     {
    //         name:"Sam",
    //         age:23, 
    //         city:"Zambia"
    //     }
    // ]
    // const personList = person.map( persons => 
    // <PersonPer key={persons.age} persons={persons}/>
    // )
    // return (<div>{personList}</div>)
}

export default NameList
