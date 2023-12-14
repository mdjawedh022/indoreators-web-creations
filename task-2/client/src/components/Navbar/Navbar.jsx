import React from 'react'
import "./navbar.css"
import { MdOutlineNotes } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <MdOutlineNotes className='icons'/><h1>Notes</h1>
    </div>
  );
}

export default Navbar
