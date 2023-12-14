import React from 'react'
import { MdDelete } from "react-icons/md";
import "./notesCard.css";
import { deleteNotes } from '../../redux/action';
import { useDispatch } from 'react-redux';
const NotesCard = ({notes}) => {
  const dispatch=useDispatch();
  const {_id,note,date}=notes;
  const handleDelete=(id)=>{
     dispatch(deleteNotes(id));
  }
  return (
    <div key={_id} className="notesCard-wrapper">
      <div className="notes-inner">
        {" "}
        <h4>{note}</h4>
        <p>{date}</p>
      </div>
      <div className='div-delete'>
        <MdDelete className="deleteIcon" onClick={() => handleDelete(_id)} />
      </div>
    </div>
  );
}

export default NotesCard
