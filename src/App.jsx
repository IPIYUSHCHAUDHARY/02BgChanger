import { useState } from 'react'
import ColorCard from './components/ColorCard'

const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink' ]

function App() {
  const [background, setBackground] = useState("bg-red-500")

  function handleColorChange(bg) {
    setBackground('bg-'+bg+'-500');    
  }

  return (
    <>
      <div className={`w-screen h-screen ${background}`}></div>
      <ColorCard colors={colorList} OnClick={handleColorChange}/>
    </>
  )
}

export default App
