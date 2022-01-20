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
   
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

