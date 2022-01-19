import NoteContext from "./noteContext";
import { useState } from "react";

export const NoteState = (props)=>{
    const s1 = {
        "name": "Suraj",
        "branch": "CSE"
    }
    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Samuel",
                "branch": "CSIT"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

