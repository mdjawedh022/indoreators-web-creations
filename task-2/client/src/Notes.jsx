import React, { useEffect, useState } from "react";
import NotesCard from "./components/NotesCard/NotesCard";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, postNotes } from "./redux/action";
import Loading from "./components/Loading";

const Notes = () => {
  const {notes,isLoading} = useSelector((state) => state);
  const dispatch = useDispatch();
 const [newNote, setNewNote] = useState("");

 useEffect(() => {
   dispatch(getNotes());
 }, [dispatch]);

 const handlePostNote = () => {
   if (newNote.trim() !== "") {
     dispatch(postNotes({ note: newNote }));
     setNewNote(""); 
   }
 };

 const handleKeyPress = (e) => {
   if (e.key === "Enter") {
     handlePostNote();
   }
 };

  return (
    <>
      <Navbar />
      <div className="notes-wrapper">
        <div className="input-notes">
          <input
            type="text"
            placeholder="Take a note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handlePostNote}></button>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="notes-data">
            {notes.map((el) => {
              return <NotesCard key={el._id} notes={el} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
