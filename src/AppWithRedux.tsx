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
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type FilterValuesType = "all" | "active" | "completed"

export type toDoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {


    let todolists=useSelector<AppRootStateType, toDoListType[]>(state=> state.todolists)
    let tasks=useSelector<AppRootStateType, TasksStateType>(state=> state.tasks)
    let dispatch= useDispatch()



    function removeTask(taskID: string, todolistID: string) {
        const action = RemoveTaskAC(taskID, todolistID)
        dispatch(action)

    }
    function addTask(title: string, todolistID: string) {
        const action=addTaskAC(title, todolistID)
        dispatch(action)
    }
    function changeTaskstatus(taskID: string, isDone: boolean, todolistID: string) {
        dispatch(changeTaskStatusAC(taskID, isDone, todolistID))

    }
    function changeTaskTitle(taskID: string, title: string, todolistID: string) {
        dispatch(changeTaskTitleStatusAC(taskID, title,todolistID))
    }


    function changeFilter(newFilterValue: FilterValuesType, todolistID: string) {
        dispatch(ChangeTodolistFilterAS(newFilterValue, todolistID))

    }


    function removeTodolist(todolistID: string) {
        dispatch(RemoveTodolistAS(todolistID))


    }


    function AddTodolist(title: string) {
        const action= AddTodolistAS(title)
        dispatch(action)

    }



    function changeTodolistTitle(title: string, todolistID: string) {
        dispatch(ChangeTodolistTitleAS(title, todolistID))
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
                                        changeTodolistTitle={changeTodolistTitle}
                                        changeTaskTitle={changeTaskTitle}
                                        removeTodolist={removeTodolist}
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





                    export default AppWithRedux;
