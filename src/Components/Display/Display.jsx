import React from 'react'
import "./Display.css"


const Display = () => {

  return (
      <div className="container">
        <div className="hour">
          00
        </div>
        <div className="separator">
          :
        </div>
        <div className="minute">
          00
        </div>
        <div className="separator">
          :
        </div>
        <div className="second">
          00
        </div>
      </div>
  )
}

export default Display