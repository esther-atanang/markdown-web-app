import React from 'react'
import { useState } from 'react'
import "../styles/style.css"

const Markdown = ({onHandlechange, current}) => {
  
  return (
    <div className='markdown'>
      <div className='inner-text'>
      <textarea onChange={(e)=>{onHandlechange(e)}} value={current}/>
      </div>
      
    </div>
  )
}

export default Markdown