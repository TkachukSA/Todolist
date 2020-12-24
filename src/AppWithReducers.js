/*
import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import AddItemForm from "./AddImportForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistAS,
    ChangeTodolistFilterAS,
    ChangeTodolistTitleAS,
    RemoveTodolistAS,
    TodolistsReducer
} from "./state/todolists-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleStatusAC,
    RemoveTaskAC,
    tasksReducer
} from "./state/tasks-reducer";

export type FilterValuesType = "all" | "active" | "completed"

export type toDoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithReducers() {
    const todolistsID1 = v1()
    const todolistsID2 = v1()

    const [todolists, dispathTodolists] = useReducer(TodolistsReducer,[
        {id: todolistsID1, title: "wont to bye", filter: "all"},
        {id: todolistsID2, title: "wont to milk", filter: "all"},
    ])
    const [tasks, dispathTasks] = useReducer(tasksReducer,{
        [todolistsID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "ReactJS", isDone: false},
        ],
        [todolistsID2]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "eggs", isDone: false},
            {id: v1(), title: "popi", isDone: false},
        ]})

    function removeTask(taskID: string, todolistID: string) {
        const action = RemoveTaskAC(taskID, todolistID)
        dispathTasks(action)

    }
    function addTask(title: string, todolistID: string) {
        const action=addTaskAC(title, todolistID)
        dispathTasks(action)
    }
    function changeTaskstatus(taskID: string, isDone: boolean, todolistID: string) {
        dispathTasks(changeTaskStatusAC(taskID, isDone, todolistID))

    }
    function changeTaskTitle(taskID: string, title: string, todolistID: string) {
        dispathTasks(changeTaskTitleStatusAC(taskID, title,todolistID))
    }


    function changeFilter(newFilterValue: FilterValuesType, todolistID: string) {
        dispathTodolists(ChangeTodolistFilterAS(newFilterValue, todolistID))

    }


    function removeTodolist(todolistID: string) {
        dispathTodolists(RemoveTodolistAS(todolistID))
        dispathTasks(RemoveTodolistAS(todolistID))

    }


    function AddTodolist(title: string) {
        const action= AddTodolistAS(title)
        dispathTodolists(action)
        dispathTasks(action)
    }



    function changeTodolistTitle(title: string, todolistID: string) {
        dispathTodolists(ChangeTodolistTitleAS(title, todolistID))
    }


    return (
        <div className="App">
            <AppBar position="static">

                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed={true}>
                <Grid container style={{padding: "40px 0"}}>
                    <AddItemForm addItem={AddTodolist}/>
                </Grid>
                <Grid container spacing={4} >
                {
                    todolists.map(tl => {
                            let tasksForTodolist = tasks[tl.id]
                            if (tl.filter === "active") {
                                tasksForTodolist = tasks[tl.id].filter(task => task.isDone === false)
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = tasks[tl.id].filter(task => task.isDone === true)
                            }
                            return (<Grid item>
                                    <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        _changeTodolistTitle={changeTodolistTitle}
                                        changeTaskTitle={changeTaskTitle}
                                        _removeTodolist={removeTodolist}
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        addTask={addTask}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        filter={tl.filter}
                                        changeTaskstatus={changeTaskstatus}/>
                                    </Paper>
                                </Grid>

                            )
                        })

                }
                    </Grid>
                    </Container>
                    </div>
                    );
                    }

                    export default AppWithReducers;
*/
