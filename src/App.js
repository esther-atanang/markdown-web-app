import {useEffect, useState} from 'react'
import Navbar from './Components/Navbar';
import View from './Components/View';
import Sidebar from './Components/Sidebar';
import Preview from './Components/Preview'
import Markdown from './Components/Markdown'
import { marked } from 'marked';
import welcome from './welcome.txt'
let currentId = 0;
function App(){
  const[width, setWidth] = useState(window.innerWidth)
  const[open, setOpen] = useState(false)
  const[openPreview, setOpenPreview] = useState(false)
  const[preview, setPreview] = useState('')
  const[notes, setNotes] = useState([])
  const[currentValue,setValue] = useState()
  const[currentNoteId, setCurrentId] = useState(0)
  const[deleteClick, setClick] = useState(false)
  const[theme, setTheme] = useState(false)
  useEffect(()=>{
     window.addEventListener("resize", ()=>{
        setWidth(window.innerWidth)
     })
      fetch(welcome)
      .then(r=>r.text())
      .then(data=>{
        setNotes([{id:0,time:new Date().toDateString(),title:"welcome.md",text:data}])
        setValue(data)
      })   
  },[])

  console.log(width)
  //open the preview in desktop mode
  function handleOpenPreview(){
      setOpenPreview(value=>!value);
  }
  
  //change the theme
  function handleToggle(){
     setTheme(value=>!value)
  }
//Change the note name
function handleTitle(e,id){
   const newNote = notes.map(note=>{
      if(note.id === id){
        return{
           ...note,
           title: e.target.value
        }
      }else{
        return note
      }
   })
   setNotes(newNote)
}

//Confirm delete
function confirmDelete()
{
  setClick(true);
}
//To open Toggle
  function handleOpen(){
      setOpen(value=>!value)
  }
  function handleChange(e){
    setValue(e.target.value)
  }

   //Let's try saving the  note

   function handleSave(id)
   {
      const newNote = notes.map(note=>{
         if(note.id === id){
         
            return{
              ...note,
              text: currentValue,
            }
         }else{
            return note;
         }
      })
     setNotes(newNote)
   }

   function OpenNote(id){
    notes.filter((value)=>{
     if(value.id === id){
      setPreview('')
       setValue(value.text)
       setCurrentId(id)
       setOpenPreview(false)
     }
    })
 }
 //For the sidebar
 function addNote(){
  currentId++
  const currentTime = new Date().toDateString()
 
  const newNote= [
     {id:currentId,time: currentTime, title:"untitled-document.md", text:""},
     ...notes
  ]
   setNotes(newNote)
}

//Delete Note
function deleteNote(id){
  const newNote =  notes.filter((note)=>{
      if(note.id !== id){
          return note;
      }
   })
  setClick(false)
  setValue("")
  setNotes(newNote);
}

function handlePreview(id){
  notes.filter((note)=>{
     if(note.id === id){
       const markedNote = marked.parse(note.text)
       setPreview(markedNote)
     }
  })
}



function handlePreviewClose(){
  setPreview('')
}
return (
  <div className="App" data-theme={theme ? "" : "dark"}>

   <div className={open ? "inner-app" : ""}>
   {open && <Sidebar changeTheme={handleToggle} theTheme={theme} currentWidth={width} noteId={currentId} value={notes} addNewNote={addNote} handleOpen={OpenNote}/>}
   <div className='inner-markdown'>
   <Navbar  onTitle={handleTitle} noteId={currentId} currentWidth={width} noteTitle={notes} openToggle={handleOpen} isOpen={open} confirmDelete={confirmDelete} onDelete={deleteNote} onSave={handleSave} theId={currentNoteId}/>
   <div className={(openPreview && width > 1162) ? "openPreview" : ((preview && width > 1141) ? 'normal pre-mark':'normal')}>
   {(width < 1141) ? (!(preview) && <div className='mark-view'>
    <View  isPreview={preview} onPreview={handlePreview} currentNote={currentNoteId}/>
    <Markdown onHandlechange={handleChange} current={currentValue}/> 
    </div>) : <div className='mark-view'>
    <View  isPreview={preview} onPreview={handlePreview} currentNote={currentNoteId}/>
    <Markdown onHandlechange={handleChange} current={currentValue}/> 
    </div> }
   {preview && <Preview previewText={preview} isdesktopPreview={openPreview} currentWidth={width} ondesktopPreview={handleOpenPreview} onPreview={handlePreviewClose}/>}
   </div>
   
   </div>
   
   </div>
{deleteClick && <div className='overlay'>
          <div className={open ? 'card move' : 'card'}>
               <div><h3>Delete this document?</h3></div>
               <div><p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p></div>
               <div><button type="button" onClick={()=>{deleteNote(currentId)}}>Confirm & Delete</button></div>
          </div>
   </div>}
   
  
  </div>
);
}

export default App;