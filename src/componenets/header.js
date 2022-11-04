import React from 'react'
import headerCss from "./header.module.css"

const header = () => {
  return (
      <div>
          <h1 className={headerCss.header}>Header</h1>
    </div>
  )
}

export default header