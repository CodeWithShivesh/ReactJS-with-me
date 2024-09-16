import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  {document.body.style.backgroundColor = color}
  
  return (
    <>
     <h1>Welcome in this app</h1>
     <div className="bar">
      <button className="button" onClick={()=>setColor('red')}>Red</button>
      <button className="button" onClick={()=>setColor('green')}>Green</button>
      <button className="button" onClick={()=>setColor('blue')}>Blue</button>
      <button className="button" onClick={()=>setColor('black')}>Black</button>
     </div>
    </>
  )
}

export default App
