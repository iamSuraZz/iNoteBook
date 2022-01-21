import React,{useContext} from 'react';
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';

export const Notes = () => {
    
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  return (
    <>
    <div className="row my-3">
    <h1>Your notes.</h1>
    {notes.map ((note)=>{
        return <Noteitem key={note._id} note={note} />
    })}
    </div>
     </>
      )
};
