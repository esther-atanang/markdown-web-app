import React from 'react'
import toggle from '../icons/hamburger.png'
import file from '../icons/new-document.png'
import save from '../icons/diskette.png'
import deleteIcon from '../icons/delete.png'
import cancel from '../icons/cancel.png'
import '../styles/style.css'

const Navbar = ({noteTitle,onTitle,isOpen,openToggle, onSave, confirmDelete,onDelete, theId, currentWidth}) => {
    
    //add a cursor!!!!

    noteTitle.forEach(note => {
        if(note.id === theId){
          console.log(note.title)
        }
    })
  return (
   <nav>
    <div className='toggle'>
            <div className='files' onClick={openToggle}><img src={isOpen ? cancel : toggle} alt="files"/></div>
        </div>
    { (currentWidth > 1162) ?  <div className='current'>
    <div className='the-file'>
            <div><h2 className='logo'>Markdown</h2></div>
            <div className='desk-file'>
            <div className='desk-inner'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1071 3.39286C13.2738 3.55952 13.4167 3.78571 13.5357 4.07143C13.6548 4.35714 13.7143 4.61905 13.7143 4.85714V15.1429C13.7143 15.381 13.631 15.5833 13.4643 15.75C13.2976 15.9167 13.0952 16 12.8571 16H0.857143C0.619048 16 0.416667 15.9167 0.25 15.75C0.0833333 15.5833 0 15.381 0 15.1429V0.857143C0 0.619048 0.0833333 0.416667 0.25 0.25C0.416667 0.0833333 0.619048 0 0.857143 0H8.85714C9.09524 0 9.35714 0.0595238 9.64286 0.178571C9.92857 0.297619 10.1548 0.440476 10.3214 0.607143L13.1071 3.39286ZM9.14286 1.21429V4.57143H12.5C12.4405 4.39881 12.375 4.27679 12.3036 4.20536L9.50893 1.41071C9.4375 1.33929 9.31548 1.27381 9.14286 1.21429ZM12.5714 5.71429V14.8571H1.14286V1.14286H8V4.85714C8 5.09524 8.08333 5.29762 8.25 5.46429C8.41667 5.63095 8.61905 5.71429 8.85714 5.71429H12.5714Z" fill="white"/>
            </svg> 
             <div>
             <p>Document Name</p>
             {noteTitle.map(note => {
             if (note.id === theId) {
             return  <input  onChange={(e)=>{onTitle(e,theId)}} className='navbar-name' type='text' defaultValue={note.title} />
             }
            return null; // or you can return something else if the condition is not met
            })}
             </div>
            
            </div>
            </div>
    </div>

    <div className='btns'>
                <div className='delete' onClick={confirmDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 4H13V3C13 1.34315 11.6569 0 10 0H8C6.34315 0 5 1.34315 5 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H2V17C2 18.6569 3.34315 20 5 20H13C14.6569 20 16 18.6569 16 17V6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4ZM7 16C7.55228 16 8 15.5523 8 15V9C8 8.44771 7.55228 8 7 8C6.44772 8 6 8.44771 6 9V15C6 15.5523 6.44772 16 7 16ZM8 2C7.44772 2 7 2.44772 7 3V4H11V3C11 2.44772 10.5523 2 10 2H8ZM14 17C14 17.5523 13.5523 18 13 18H5C4.44772 18 4 17.5523 4 17V6H14V17ZM12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V9C10 8.44771 10.4477 8 11 8C11.5523 8 12 8.44771 12 9V15Z" fill="#7C8187"/>
                    </svg></div>
                    
                <div className='save' onClick={()=>{onSave(theId)}}>
                 <button className='save-btn'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5759 0.597622L15.9092 5.93095C16.0756 6.0987 16.1684 6.3258 16.167 6.56207V13.6732C16.167 15.1459 14.9731 16.3398 13.5003 16.3398H2.83366C1.3609 16.3398 0.166992 15.1459 0.166992 13.6732V3.00651C0.166992 1.53375 1.3609 0.339844 2.83366 0.339844H9.94477C10.0637 0.342064 10.1812 0.36617 10.2914 0.410955C10.3974 0.454282 10.494 0.517665 10.5759 0.597622ZM9.05588 2.11762H5.50033V3.8954H9.05588V2.11762ZM10.8337 14.5621H5.50033V11.8954C5.50033 11.4045 5.89829 11.0065 6.38921 11.0065H9.94477C10.4357 11.0065 10.8337 11.4045 10.8337 11.8954V14.5621ZM13.5003 14.5621C13.9912 14.5621 14.3892 14.1641 14.3892 13.6732V6.92651L10.8337 3.37095V4.78429C10.8337 5.27521 10.4357 5.67318 9.94477 5.67318H4.61144C4.12052 5.67318 3.72255 5.27521 3.72255 4.78429V2.11762H2.83366C2.34274 2.11762 1.94477 2.51559 1.94477 3.00651V13.6732C1.94477 14.1641 2.34274 14.5621 2.83366 14.5621H3.72255V11.8954C3.72255 10.4226 4.91646 9.22873 6.38921 9.22873H9.94477C11.4175 9.22873 12.6114 10.4226 12.6114 11.8954V14.5621H13.5003Z" fill="white"/>
                </svg>
                <p>Save Changes</p>
                 </button>
                
                </div>
        </div>
    </div> :  <div className='current'>
        <div className='the-file'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1071 3.39286C13.2738 3.55952 13.4167 3.78571 13.5357 4.07143C13.6548 4.35714 13.7143 4.61905 13.7143 4.85714V15.1429C13.7143 15.381 13.631 15.5833 13.4643 15.75C13.2976 15.9167 13.0952 16 12.8571 16H0.857143C0.619048 16 0.416667 15.9167 0.25 15.75C0.0833333 15.5833 0 15.381 0 15.1429V0.857143C0 0.619048 0.0833333 0.416667 0.25 0.25C0.416667 0.0833333 0.619048 0 0.857143 0H8.85714C9.09524 0 9.35714 0.0595238 9.64286 0.178571C9.92857 0.297619 10.1548 0.440476 10.3214 0.607143L13.1071 3.39286ZM9.14286 1.21429V4.57143H12.5C12.4405 4.39881 12.375 4.27679 12.3036 4.20536L9.50893 1.41071C9.4375 1.33929 9.31548 1.27381 9.14286 1.21429ZM12.5714 5.71429V14.8571H1.14286V1.14286H8V4.85714C8 5.09524 8.08333 5.29762 8.25 5.46429C8.41667 5.63095 8.61905 5.71429 8.85714 5.71429H12.5714Z" fill="white"/>
            </svg> 
            {noteTitle.map(note => {
             if (note.id === theId) {
             return  <input  onChange={(e)=>{onTitle(e,theId)}} className='navbar-name' type='text' defaultValue={note.title} />
             }
            return null; // or you can return something else if the condition is not met
            })}
            </div>
        <div className='btns'>
                <div className='delete'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 4H13V3C13 1.34315 11.6569 0 10 0H8C6.34315 0 5 1.34315 5 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H2V17C2 18.6569 3.34315 20 5 20H13C14.6569 20 16 18.6569 16 17V6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4ZM7 16C7.55228 16 8 15.5523 8 15V9C8 8.44771 7.55228 8 7 8C6.44772 8 6 8.44771 6 9V15C6 15.5523 6.44772 16 7 16ZM8 2C7.44772 2 7 2.44772 7 3V4H11V3C11 2.44772 10.5523 2 10 2H8ZM14 17C14 17.5523 13.5523 18 13 18H5C4.44772 18 4 17.5523 4 17V6H14V17ZM12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V9C10 8.44771 10.4477 8 11 8C11.5523 8 12 8.44771 12 9V15Z" fill="#7C8187"/>
                    </svg></div>
                    
                <div className='save' onClick={()=>{onSave(theId)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="4" fill="#E46643"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4089 12.2578L27.7422 17.5911C27.9086 17.7589 28.0014 17.986 28 18.2222V25.3333C28 26.8061 26.8061 28 25.3333 28H14.6667C13.1939 28 12 26.8061 12 25.3333V14.6667C12 13.1939 13.1939 12 14.6667 12H21.7778C21.8967 12.0022 22.0142 12.0263 22.1244 12.0711C22.2304 12.1144 22.327 12.1778 22.4089 12.2578ZM20.8889 13.7778H17.3333V15.5556H20.8889V13.7778ZM22.6667 26.2222H17.3333V23.5556C17.3333 23.0646 17.7313 22.6667 18.2222 22.6667H21.7778C22.2687 22.6667 22.6667 23.0646 22.6667 23.5556V26.2222ZM25.3333 26.2222C25.8243 26.2222 26.2222 25.8243 26.2222 25.3333V18.5867L22.6667 15.0311V16.4444C22.6667 16.9354 22.2687 17.3333 21.7778 17.3333H16.4444C15.9535 17.3333 15.5556 16.9354 15.5556 16.4444V13.7778H14.6667C14.1757 13.7778 13.7778 14.1757 13.7778 14.6667V25.3333C13.7778 25.8243 14.1757 26.2222 14.6667 26.2222H15.5556V23.5556C15.5556 22.0828 16.7495 20.8889 18.2222 20.8889H21.7778C23.2505 20.8889 24.4444 22.0828 24.4444 23.5556V26.2222H25.3333Z" fill="white"/>
                </svg>
                </div>
        </div>
        </div>}
   </nav>
  )
}

export default Navbar