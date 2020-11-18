import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type EdiTableSpanType={
    title: string
}
function EdiTableSpan(props: EdiTableSpanType){
    const [editMode, setEditMode]=useState<boolean>(false)

    const activatedEditMode = ()=>{setEditMode(true)}
    const deActivatedEditMode = ()=>{setEditMode(false)}

    return (
        editMode
            ? <input onBlur={activatedEditMode} autoFocus={true}/>
            : <span onDoubleClick={deActivatedEditMode}>{props.title}</span>

    )
}


export default EdiTableSpan