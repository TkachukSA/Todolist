import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTodolist: (todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    removeTask: (askID: string, todolistID: string) => void
    changeFilter: (newFilterValue: FilterValuesType, todolistID: string) => void
    changeTaskstatus: (taskID: string, isDone: boolean, todolistID: string) => void
}

export function Todolist(props: PropsType) {


    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const task = props.tasks.map((task) => {


        const RemoveTask = () => {
            props.removeTask(task.id, props.id)
        }
        const cangeTaskstatus = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskstatus(task.id, e.currentTarget.checked, props.id)
        }

        return <li className={task.isDone ? "is-done" : ""}
            key={task.id}><input
            onChange={cangeTaskstatus}
            type="checkbox"
            checked={task.isDone}/> <span>{task.title}</span>


            {/* // при нажатии передается айди в функцию фильтр //*/}
            <button onClick={RemoveTask}>x
            </button>

        </li>


    })

    const addTask = () => {
        const trimitedTitle = title.trim() // что бьы не вводиласть пустая строка
        if (trimitedTitle !== "") {
            props.addTask(trimitedTitle, props.id)
        } else {
            setError("Title is required")
        }
        setTitle("")
    }


    const OnKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addTask()
    }
    const OnTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const OnAllClickHander = () => {
        props.changeFilter("all",props.id)
    }
    const OnActiveClickHander = () => {
        props.changeFilter("active",props.id)
    }
    const OnComplatedClickHander = () => {
        props.changeFilter("completed",props.id)
    }

    return <div>
<div>xxx</div>

        <h3>{props.title} <button onClick={()=>{props.removeTodolist(props.id)}} >x</button></h3>
        <div>
            <input value={title}
                   onChange={OnTitleChangeHandler}
                   onKeyPress={OnKeyPressAddTask}
                   className={error ? "error" : ""}/>


            <button onClick={addTask}>+</button>
            {error && <div className={"error-message"}>{error}</div>}
        </div>
        {/* // создается новый список (шаблон) на основе данных в массиве. которые мы создали и прокинули пропсам
        в компоненту тодолист в апп//*/}
        <ul>
            {task}
        </ul>
        <div>
            {/* // передает значиние олл, актив, компл, в функцию changeFilter*/}
            <button
                className={props.filter === "all" ? "active-filter" : ""}
                onClick={OnAllClickHander}>all
            </button>
            <button
                className={props.filter === "active" ? "active-filter" : ""}
                onClick={OnActiveClickHander}>Active
            </button>
            <button
                className={props.filter === "completed" ? "active-filter" : ""}

                onClick={OnComplatedClickHander}>Completed
            </button>
        </div>
    </div>
}
