import React, { useState, useEffect } from 'react'
import './Timer.css'
import { RiTimer2Fill } from 'react-icons/ri'

const Timer = () => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timer = null
    if (isActive) {
      timer = setInterval(() => {
        setSecond(prevSecond => {
          if (prevSecond === 59) {
            setMinute(prevMinute => {
              if (prevMinute === 59) {
                setHour(prevHour => prevHour + 1)
                return 0
              }
              return prevMinute + 1
            })
            return 0
          }
          return prevSecond + 1
        })
      }, 1000)
    } else if (!isActive) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [isActive])

  const handleStart = () => {
    setIsActive(true)
  }

  const handleStop = () => {
    setIsActive(false)
  }

  const handleClear = () => {
    setHour(0)
    setMinute(0)
    setSecond(0)
    setIsActive(false)
  }

  return (
    <>
      <div className="icon">
        <RiTimer2Fill />
      </div>
      <div className="timer">
        <div className="hour">{hour.toString().padStart(2, '0')}</div>
        <div className="separator">:</div>
        <div className="minute">{minute.toString().padStart(2, '0')}</div>
        <div className="separator">:</div>
        <div className="second">{second.toString().padStart(2, '0')}</div>
      </div>
      <div className="buttons">
        <button className="button start" onClick={handleStart}>
          Start
        </button>
        <button className="button stop" onClick={handleStop}>
          Stop
        </button>
        <button className="button clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  )
}

export default Timer
