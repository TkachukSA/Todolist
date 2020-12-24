/*import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";
import AddItemForm from "./AddImportForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

export type FilterValuesType = "all" | "active" | "completed"

export type toDoListType = {
    id: string
    title: string
    filter: FilterValuesType

}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    const todolistsID1 = v1()
    const todolistsID2 = v1()

    const [todolists, setTodolists] = useState<Array<toDoListType>>([
        {id: todolistsID1, title: "wont to bye", filter: "all"},
        {id: todolistsID2, title: "wont to milk", filter: "all"},
    ])
    const [tasks, setTasks] = useState<TasksStateType>({
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
        const todolistTasks = tasks[todolistID]
        tasks[todolistID] = todolistTasks.filter(task => task.id !== taskID)
        setTasks({...tasks})
    }

    function addTask(title: string, todolistID: string) {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        const todolistTasks = tasks[todolistID]
        tasks[todolistID] = [newTask, ...todolistTasks]
        setTasks({...tasks})
    }

    function changeFilter(newFilterValue: FilterValuesType, todolistID: string) {
        const todolist = todolists.find(t => t.id === todolistID)
        if (todolist) {
            todolist.filter = newFilterValue
            setTodolists([...todolists])
        }

    }

    function changeTaskstatus(taskID: string, isDone: boolean, todolistID: string) {
        const todolistTasks = tasks[todolistID]
        const task = todolistTasks.find(task => task.id === taskID)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function removeTodolist(todolistID: string) {
        const filteredTodolists = todolists.filter(tl => tl.id !== todolistID)
        setTodolists(filteredTodolists)
        delete tasks[todolistID]
        setTasks({...tasks})
    }


    function AddTodolist(title: string) {
        const NewTodolistId = v1()
        const NewTodolist: toDoListType = {
            title: title,
            id: NewTodolistId,
            filter: "all"
        }
        setTodolists([...todolists, NewTodolist])
        setTasks({...tasks, [NewTodolistId]: []})
    }

    function changeTaskTitle(taskID: string, title: string, todolistID: string) {
        const todolistTasks = tasks[todolistID]
        const task = todolistTasks.find(task => task.id === taskID)
        if (task) {
            task.title = title
            setTasks({...tasks})
        }
    }

    function changeTodolistTitle(title: string, todolistID: string) {
        const todolist = todolists.find(t => t.id === todolistID)
        if (todolist) {
            todolist.title = title
            setTodolists([...todolists])
        }

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

                    export default Ap;*/
