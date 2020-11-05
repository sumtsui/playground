import {useState} from 'react'

function Button() {
  const [bgColor, setBgColor] = useState('yellow')

  return (
    <button onClick={() => setBgColor(prev => prev === 'yellow' ? 'orange' : 'yellow')} style={{backgroundColor: bgColor}}>
      Click
    </button>
  )
}

export default Button