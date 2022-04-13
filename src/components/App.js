import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <div>
        <label>
          Red Value
          <input type={'number'} id="r-input"/>
        </label>
        <label>
          Green Value
          <input type={'number'} id="g-input"  />
        </label>

        <label>
          Blue
          <input type={'number'} id="b-input" />
        </label>
      </div>
      <div id="background" style={{width:'90vw',height:'90vh',backgroundColor:`rgb(255,255,255)`}}></div>
    </div>
  )
}


export default App;
