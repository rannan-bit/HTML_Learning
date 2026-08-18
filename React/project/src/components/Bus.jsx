import React from 'react'
import { useState } from 'react'

function Bus() {

    const [name,setName]=useState("polo")
    // const update = (data)=>{
    //     name=data
    // }
    return (
        <div>
            <div className='m-5'>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter a car name' className='form-control m-5' />
            </div>
            <div className='p-5 bg-warning'>
                <h3>Bus Name:{name}</h3>
            </div>
        </div>
    )
}

export default Bus