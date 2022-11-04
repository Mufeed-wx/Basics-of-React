import React from 'react'

// List of states using props
const states = (props) => {
  return (
      <div>
      <h1 className='bg-primary'>{props.name}</h1>
    </div>
  )
}

export default states