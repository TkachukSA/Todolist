import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from "./AddImportForm";
import EdiTableSpan from "./EdiTableSpan";


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

    const addTask = (title: string) => {props.addTask(title, props.id)}

    const task = props.tasks.map((task) => {
        const RemoveTask = () => {props.removeTask(task.id, props.id)}
        const cangeTaskstatus = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskstatus(task.id, e.currentTarget.checked, props.id)
        }

        return <li className={task.isDone ? "is-done" : ""}
                   key={task.id}><input
                   onChange={cangeTaskstatus}
                   type="checkbox"
                   checked={task.isDone}/>
                   <EdiTableSpan title={task.title}/>
            <button onClick={RemoveTask}>x</button>
        </li>
    })


    const OnAllClickHander = () => {props.changeFilter("all", props.id)}
    const OnActiveClickHander = () => {props.changeFilter("active", props.id)}
    const OnComplatedClickHander = () => {props.changeFilter("completed", props.id)}

    return <div>


        <h3>{props.title}
            <button onClick={() => {props.removeTodolist(props.id)}}>x</button>
        </h3>


        <AddItemForm addItem={addTask}/>

        <ul>
            {task}
        </ul>
        <div>

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
