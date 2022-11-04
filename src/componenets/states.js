import React from 'react'

// List of states using props normal method
// const states = (props) => {
//   return (
//     <div className='bg-warning'>
//       <h1 className='bg-primary'>{props.name}</h1>
//       <h4>Language:{props.language}</h4>
//       <h4>Population:{props.population}</h4>
//     </div>
//   )
// }

// List of states using props destructuring method
const states = ({ states }) => {
  return (
    <div>
      {
        states.map((states) => (
          <div className='bg-warning'>
            <h1 className='bg-primary'>{states.name}</h1>
            <h4>Language:{states.language}</h4>
            <h4>Population:{states.population}</h4>
          </div>
        ))
      }
    </div>

  )
}

export default states