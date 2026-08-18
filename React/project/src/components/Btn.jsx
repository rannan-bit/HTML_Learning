import React, { useEffect, useState } from 'react'

function Btn() {
    const [name,setName]=useState("XYZ PVT")
    const [count,setCount]=useState(0)

    const display=(data)=>{
        alert(data)
    }
    useEffect(()=>{
        console.log("count rendered");
        
    },[count])
  return (
    <>
    
    <button onClick={()=>setCount(count+1)} className='btn btn-primary'><h1>count:{count}</h1>click me</button>
    </>
  )
}

export default Btn