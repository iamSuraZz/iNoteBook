import NoteContext from "./noteContext";
import { useState } from "react";

export const NoteState = (props)=>{

    const notesInitial = [
        {
          "_id": "61e3e022d1ce6668f51c20df",
          "user": "61de9abc9d7e1162172b3b3d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-01-16T09:06:42.002Z",
          "__v": 0
        },{
          "_id": "61e3e022d1ce6668f5q1c20df",
          "user": "61de9abc9d7e1162172b3b3d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-01-16T09:06:42.002Z",
          "__v": 0
        },{
          "_id": "61e3e022d1ce6668f51wc20df",
          "user": "61de9abc9d7e1162172b3b3d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-01-16T09:06:42.002Z",
          "__v": 0
        },{
          "_id": "61e3e022d1ce6668f5e1c20df",
          "user": "61de9abc9d7e1162172b3b3d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-01-16T09:06:42.002Z",
          "__v": 0
        },{
          "_id": "61e3e022d1ce6668f5r1c20df",
          "user": "61de9abc9d7e1162172b3b3d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-01-16T09:06:42.002Z",
          "__v": 0
        },{
          "_id": "61e3e022d1ce6668f5t1c20df",
          "user": "61de9abc9d7e1162172b3b3d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "Personal",
          "date": "2022-01-16T09:06:42.002Z",
          "__v": 0
        }
      ]

      const[notes, setNotes] = useState(notesInitial)

    // Add a Note.
    const addNote = (title, description, tag) => {
     // TODO : API Call 
     console.log("Adding a new note");
      const note = {
        "_id": "61e3e022d1ce6668f5t1c20df",
        "user": "61de9abc9d7e1162172b3b3d",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-01-16T09:06:42.002Z",
        "__v": 0
      };
       setNotes(notes.concat(note));
    }

    // Delete a Note.
    const deleteNote = (id) => {
      console.log("Deleting items using id " + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    // Edit Note
    const editNote = () => {
      
    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

