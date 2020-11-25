import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EdiTableSpanType={
    title: string
    changeValue: (newValue: string)=> void
}
function EdiTableSpan(props: EdiTableSpanType){
    const [editMode, setEditMode]=useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.title)

    const activatedEditMode = ()=>{setEditMode(true)}
    const deActivatedEditMode = ()=>{setEditMode(false); props.changeValue(title)}
    const onChangeTitle= (e: ChangeEvent<HTMLInputElement>)=>{setTitle(e.currentTarget.value)}

    return (
        editMode
/*
            ? <input onBlur={deActivatedEditMode} autoFocus={true} value={title} onChange={onChangeTitle}/>
*/
            ?<TextField onBlur={deActivatedEditMode} autoFocus={true} value={title} onChange={onChangeTitle} variant={"outlined"}/>
            : <span onDoubleClick={activatedEditMode}>{props.title}</span>

    )
}


export default EdiTableSpan