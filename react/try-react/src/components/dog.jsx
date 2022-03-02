import React, {useState} from 'react'
import {getDog} from '../utils/apis'

export default function Dog() {
  const [dog, setDog] = useState()  

  function handleClick() { 
    getDog().then(setDog)
  }
  
  return <div>
    {dog ? <img src={dog.message} alt="dog" /> : <p>No dog:(</p>}
    <div>
      <button onClick={handleClick}>New Dog!</button>
    </div>
  </div>
}