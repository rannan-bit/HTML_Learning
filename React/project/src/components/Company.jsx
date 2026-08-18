import React from 'react'
import User from './User'

function Company(dataFromparent) {

  return (
    <>
    <h1 className='title' style={{textAlign:'center'}}>Company component</h1>
    <User dataFromcompany="data from company"/>
    </>
  )
}

export default Company