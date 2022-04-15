import React from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  return (
    <div id="main">
      <img
        src={star}
        height="300px"
        width={"300px"}
        style={{transform:'rotate(0deg)'}}
      />
    </div> 
  )
}


export default App;
