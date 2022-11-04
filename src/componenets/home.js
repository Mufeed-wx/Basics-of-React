import React from 'react'
import Child from './child'
import homeCss from './home.module.css'
const home = () => {
    return (
        <div>
        <h1 className={homeCss.header}>Home component</h1>
            <Child />
        </div>
    )
}

export default home