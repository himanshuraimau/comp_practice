import TrafficLight from './TrafficLight'
import './styles.css'

const trafficStates ={
  red:{
    duration:4000,
    backgroundColor:'red',
    next:'green'
  },
  yellow:{
    duration:2000,
    backgroundColor:'yellow',
    next:'red'
  },
  green:{
    duration:3000,
    backgroundColor:'green',
    next:'yellow'
  }
}



function App() {
 

  return (
    <div className='wrapper'> 
      <TrafficLight trafficStates={trafficStates}/>

    </div>
  )
}

export default App
