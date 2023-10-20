import React from 'react'
import '../styles/style.css'
import darksun from '../icons/sun.png'
import lightmoon from '../icons/moon (2).png'
import lightsun from "../icons/sun (1).png"
import darkmoon from "../icons/moon (4).png"
import file from '../icons/new-document.png'

const Sidebar = ({value,addNewNote,handleOpen,changeTheme, theTheme, currentWidth}) => {
  return (
    <aside>
       <div className='first'>
            {currentWidth < 1162 && <div><h1>MARKDOWN</h1></div>}
            <div className='inner'>
                <div><h2>MY DOCUMENTS</h2></div>
                <div><button type='button' onClick={addNewNote}>+ New Document</button></div>
                <div className='files'>
                    {value.map((note)=><div key={note.id}  onClick={()=>{handleOpen(note.id)}} className='file'>
                        <div><img src={file} alt="theFile"/></div>
                        <div>
                            <p className='time'>{note.time ? note.time : "some"}</p>
                            <h2 className='name'>{note.title}</h2>
                        </div>
                    </div>)}
                </div>
            </div>
       </div>
       <div className='second' onClick={changeTheme}>
         <div>
            <img src={theTheme ? darkmoon : lightmoon} alt="light"/>
         </div>
         <div className='toggle'><div className={theTheme ? 'circle move-circle':'circle'}></div></div>
         <div>
            <img src={theTheme ? lightsun : darksun} alt="dark"/>
         </div>
       </div>
    </aside>
  )
}

export default Sidebar