import React from 'react'

function Activity(props) {

  return (
    <div>
      <h1>day {props} </h1>
      <h3>workout plan</h3> 
      <ul>
        <li>swimming for 1 hr</li>
        <li>running 2km</li>
        <li>walking 5 miles</li>
      </ul>
    </div>
  )
}

export default Activity;
