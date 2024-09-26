import { useState } from 'react'
import ColorCard from './components/ColorCard'

const colorList = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500' ]

function App() {
  const [background, setBackground] = useState("bg-red-500")

  function handleColorChange(bg) {
    setBackground(bg);    
  }

  return (
    <>
      <div className={`w-screen h-screen ${background}`}></div>
      <ColorCard colors={colorList} OnClick={handleColorChange}/>
    </>
  )
}

export default App
