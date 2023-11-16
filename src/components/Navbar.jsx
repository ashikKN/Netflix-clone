import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [show,setShow] = useState(false)

  useEffect(()=>{
    
    window.addEventListener("scroll",()=>{
        if(window.scrollY>600){
            setShow(true)
        }else{
            setShow(false)
        }
    })
 })

//  console.log(show);
  return (
    <div className={`${show && 'nav-black'} nav`}>
      
        <img width={'150px'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix logo" />
       
    </div>
  )
}

export default Navbar
