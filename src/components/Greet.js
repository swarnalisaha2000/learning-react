import React from 'react'

// function Greet(){
// 	return <h1> Hello World </h1>
// }

const Greet = ({name,age,children}) => 
{
return(
	<div>
	<h1>Hello {name}, age are {age}</h1>
	{children}
	</div>
)
}

export default Greet;