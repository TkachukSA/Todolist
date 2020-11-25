import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from "./AddImportForm";
import EdiTableSpan from "./EdiTableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Check, CheckBox, Delete} from "@material-ui/icons";


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
    changeTaskTitle: (taskID: string, title: string, todolistID: string) => void
    changeTodolistTitle: (title: string, todolistID: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    const task = props.tasks.map((task) => {
        const RemoveTask = () => {
            props.removeTask(task.id, props.id)
        }
        const cangeTaskstatus = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskstatus(task.id, e.currentTarget.checked, props.id)
        }
        const changeTaskStatus = (newValue: string) => {
            props.changeTaskTitle(task.id, newValue, props.id)
        }


        return <div className={task.isDone ? "is-done" : ""}
                   key={task.id}>
            <Checkbox
                color={"secondary"}
                onChange={cangeTaskstatus}

                checked={task.isDone}
            />


            {/*  <input
                   onChange={cangeTaskstatus}
                   type="checkbox"
                   checked={task.isDone}/>*/}


            <EdiTableSpan title={task.title} changeValue={changeTaskStatus}/>
            <IconButton onClick={RemoveTask}>
                <Delete/>
            </IconButton>

        </div>
    })


    const OnAllClickHander = () => {
        props.changeFilter("all", props.id)
    }
    const OnActiveClickHander = () => {
        props.changeFilter("active", props.id)
    }
    const OnComplatedClickHander = () => {
        props.changeFilter("completed", props.id)
    }

    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(title, props.id)
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    return <div>


        <h3>
            <EdiTableSpan title={props.title} changeValue={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>


        <AddItemForm addItem={addTask}/>

        <div>
            {task}
        </div>
        <div>

            <Button
                color="primary"
                variant={props.filter === "all" ? "outlined" : "text"}
                size="small"

                onClick={OnAllClickHander}>all
            </Button>
            <Button
                color="primary"
                variant={props.filter === "active" ? "outlined" : "text"}
                size="small"

                // className={props.filter === "active" ? "active-filter" : ""}
                onClick={OnActiveClickHander}>Active
            </Button>
            <Button
                color="primary"
                variant={props.filter === "completed" ? "outlined" : "text"}
                size="small"

                //className={props.filter === "completed" ? "active-filter" : ""}
                onClick={OnComplatedClickHander}>Completed
            </Button>
        </div>
    </div>
}
