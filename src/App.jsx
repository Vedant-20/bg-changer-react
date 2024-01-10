import { useState } from "react"


function App() {
  
    const [color,setColor]=useState("olive")

    const btnArr=[
      {
      name:"Red",
      color:"red"
      },
      {
        name:"Green",
        color:"green"
      },
      {
        name:"Orange",
        color:"orange"
      },
      {
        name:"Violet",
        color:"violet"
      },
      {
        name:"Lavender",
        color:"lavender"
      },
      {
        name:"Purple",
        color:"purple"
      },
      {
        name:"Indigo",
        color:"indigo"
      },
      {
        name:"Lime",
        color:"lime"
      },
  ]

  return (
    <div style={{backgroundColor:color}} className="w-full h-screen duration-200">
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
                {btnArr.map((e)=>(
                  <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:e.color}} onClick={()=>setColor(e.color)}>{e.name}</button>
                ))
                  
                
                  
                }
            </div>
        </div>
    </div>
  )
}

export default App
