import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormType={
    addItem: (title:string)=> void
}
function AddItemForm(props: AddItemFormType){
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const OnKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addItem()
    }
    const OnTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const addItem = () => {
        const trimitedTitle = title.trim() // что бьы не вводиласть пустая строка
        if (trimitedTitle !== "") {
            props.addItem(trimitedTitle)
        } else {
            setError("Title is required")
        }
        setTitle("")
    }
return (
    <div>
        <input value={title}
               onChange={OnTitleChangeHandler}
               onKeyPress={OnKeyPressAddItem}
               className={error ? "error" : ""}/>


        <button onClick={addItem}>+</button>
        {error && <div className={"error-message"}>{error}</div>}
    </div>)
}
export default AddItemForm