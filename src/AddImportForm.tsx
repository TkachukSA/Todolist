import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFormType={
    addItem: (title:string)=> void
}
const AddItemForm=React.memo((props: AddItemFormType)=>{
    console.log('AddItemForm')
    const [title, setTitle] = useState<string>(" ")
    const [error, setError] = useState<string | null>(null)

    const OnKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addItem()
    }
    const OnTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(error !== null){
            setError(null)
        }
        setTitle(e.currentTarget.value)
    }
    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== "") {
            props.addItem(trimmedTitle)

        } else {
            setError('Title is required!')
        }
        setTitle("")
    }
return (
    <div>


<TextField
    label={"Title"}
    helperText={error}
    error={!!error}
    variant={"outlined"}
    value={title}
    onChange={OnTitleChangeHandler}
    onKeyPress={OnKeyPressAddItem}
    className={error ? "error" : ""}/>


<IconButton onClick={addItem}>
    <AddBox/>
</IconButton>
        <Button onClick={addItem} variant="contained" color="inherit" size="small">x</Button>
    {/* //   {error && <div className={"error-message"}>{error}</div>}*/}
    </div>)
})
export default AddItemForm