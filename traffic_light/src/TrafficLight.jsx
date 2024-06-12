import React, { useState,useEffect } from 'react'

const TrafficLight = ({trafficStates}) => {
     const [currentLight, setCurrentLight] = useState('green')
     useEffect(()=>{
                const {duration, next} = trafficStates[currentLight]
                const timer = setTimeout(()=>{
                    setCurrentLight(next)
                },duration)
                return ()=>{
                    clearTimeout(timer)
                }
             },[currentLight])
    return (
    <div className='traffic-light-container'>
        {Object.keys(trafficStates).map((color)=>{
              <div className='traffic-light' 
                    style={{
                        backgroundColor: 
                        color=== currentLight && trafficStates[color].backgroundColor 
                    }}
              />
        })}

        
       
    </div>
  )
}

export default TrafficLight
