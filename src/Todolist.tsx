import React, {useCallback} from 'react';
import AddItemForm from "./AddItemForm";
import EdiTableSpan from "./EdiTableSpan";
import {Button, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./Task";
import {FilterValuesType} from "./AppWithRedux";


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
    _removeTodolist: (todolistID: string) => void
    _addTask: (title: string, todolistID: string) => void
    removeTask: (askID: string, todolistID: string) => void
    changeFilter: (newFilterValue: FilterValuesType, todolistID: string) => void
    changeTaskstatus: (taskID: string, isDone: boolean, todolistID: string) => void
    changeTaskTitle: (taskID: string, title: string, todolistID: string) => void
    _changeTodolistTitle: (title: string, todolistID: string) => void
}

export const Todolist: React.FC<PropsType>=React.memo(({
                                                           id,
                                                           title,
                                                           tasks,
                                                           filter,
                                                           _removeTodolist,
                                                           _addTask,
                                                           removeTask,
                                                           changeFilter,
                                                           changeTaskstatus,
                                                           changeTaskTitle,
                                                           _changeTodolistTitle,


                                                       }) =>{
    console.log('todolist')



    let tasksForTodolist= tasks

    if (filter === "active") {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    const task = tasksForTodolist.map((t) => <Task
                                                      removeTask={removeTask}
                                                      changeTaskTitle={changeTaskTitle}
                                                      changeTaskstatus={changeTaskstatus}
                                                      task={t}
                                                      todolisdId={id}
                                                      key={t.id}
    />)


    const addTask = useCallback((title: string) => {_addTask(title, id)},[_addTask,id])
    const removeTodolist = useCallback(() => {_removeTodolist(id)},[_removeTodolist, id])
    const changeTodolistTitle = useCallback((title: string) => {_changeTodolistTitle(title, id)},[_changeTodolistTitle, id])

    const OnAllClickHander = useCallback(() => {changeFilter("all", id)},[changeFilter, id])
    const OnActiveClickHander = useCallback(() => {changeFilter("active", id)},[changeFilter, id])

    const OnComplatedClickHander = useCallback(() => {changeFilter("completed", id)},[changeFilter, id])





    return <div>


        <h3>
            <EdiTableSpan title={title} changeValue={changeTodolistTitle}/>
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
                variant={filter === "all" ? "outlined" : "text"}
                size="small"
                onClick={OnAllClickHander}>all
            </Button>
              <Button
                color="primary"
                variant={filter === "active" ? "outlined" : "text"}
                size="small"
                onClick={OnActiveClickHander}>Active
              </Button>
            <Button
                color="primary"
                variant={filter === "completed" ? "outlined" : "text"}
                size="small"
                onClick={OnComplatedClickHander}>Completed
            </Button>
        </div>
    </div>
})


