import React, {useCallback} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

import AddItemForm from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistAS,
    ChangeTodolistFilterAS,
    ChangeTodolistTitleAS,
    RemoveTodolistAS,
} from "./state/todolists-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleStatusAC,
    RemoveTaskAC,
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

export function AppWithRedux() {

    let todolists = useSelector<AppRootStateType, toDoListType[]>(state => state.todolists)
    let tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    let dispatch = useDispatch()


    const removeTask = useCallback((taskID: string, todolistID: string) => {
        const action = RemoveTaskAC(taskID, todolistID)
        dispatch(action)
    }, [dispatch])


    const addTask = useCallback((title: string, todolistID: string) => {
        const action = addTaskAC(title, todolistID)
        dispatch(action)
    }, [dispatch])


    const changeTaskstatus = useCallback((taskID: string, isDone: boolean, todolistID: string) => {
        dispatch(changeTaskStatusAC(taskID, isDone, todolistID))
    }, [dispatch])


    const changeTaskTitle = useCallback((taskID: string, title: string, todolistID: string) => {
        dispatch(changeTaskTitleStatusAC(taskID, title, todolistID))
    }, [dispatch])


    const changeFilter = useCallback((newFilterValue: FilterValuesType, todolistID: string) => {
        dispatch(ChangeTodolistFilterAS(newFilterValue, todolistID))
    }, [dispatch])


    const removeTodolist = useCallback((todolistID: string) => {
        dispatch(RemoveTodolistAS(todolistID))
    }, [dispatch])


    const AddTodolist = useCallback((title: string) => {
        const action = AddTodolistAS(title)
        dispatch(action)
    }, [dispatch])


    const changeTodolistTitle = useCallback((title: string, todolistID: string) => {
        dispatch(ChangeTodolistTitleAS(title, todolistID))
    }, [dispatch])


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
                <Grid container spacing={4}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id]


                            return (<Grid item>
                                    <Paper style={{padding: "10px"}}>
                                        <Todolist
                                            _changeTodolistTitle={changeTodolistTitle}
                                            changeTaskTitle={changeTaskTitle}
                                            _removeTodolist={removeTodolist}
                                            key={tl.id}
                                            id={tl.id}
                                            title={tl.title}
                                            tasks={allTodolistTasks}
                                            _addTask={addTask}
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
