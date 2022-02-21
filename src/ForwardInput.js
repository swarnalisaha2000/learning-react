import React from 'react'

// function ForwardInput() {
//   return (
//     <div>
//         <input type="" />
//     </div>
//   )
// }

const ForwardInput = React.forwardRef( (props, ref) => {
    return (
      <div>
          <input type="" ref={ref}/>
      </div>
    )
  })

export default ForwardInput