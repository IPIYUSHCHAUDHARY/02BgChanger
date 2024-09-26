function ColorCard({colors, OnClick}) {
  return (        
    <div className="flex justify-center gap-2 rounded-lg border border-gray-100 bg-gray-100 p-2 absolute bottom-3 left-3 right-3">
        {colors.map(color => 
          <button className={`inline-block rounded-md px-4 py-2 text-sm text-white hover:text-gray-700 bg-gray-300 focus:relative capitalize ${color}`} key={color} onClick={() => OnClick(color)}>{color.split('-')[1]}</button>
        )}
    </div>
  )
}

export default ColorCard