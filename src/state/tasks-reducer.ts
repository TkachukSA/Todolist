
import {v1} from "uuid";
import {TaskType} from "../Todolist";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";
import {TasksStateType} from "../AppWithRedux";







export type RemoveTaskActionType ={
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string

}
export type AddTaskActionType ={
    title: string
    todolistID: string
    type: 'ADD-TASK'

}

export type changeTaskStatusActionType ={
    taskID: string
    isDone: boolean
    todolistID: string
    type: 'CHANGE-TASK-STATUS'

}
export type changeTaskTitleStatusACActionType ={
    taskID: string
    title: string
    todolistID: string
    type: 'CHANGE-TASK-TITLE'

}


type ActionsType= AddTaskActionType
    | RemoveTaskActionType
    | changeTaskStatusActionType
    | changeTaskTitleStatusACActionType
|RemoveTodolistActionType
|AddTodolistActionType

let initialState:TasksStateType ={}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(t => t.id !== action.taskId)

            return copyState
        }
        case "ADD-TASK":
            let copyState = {...state}
            const newTask: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false
            }
            copyState[action.todolistID]=[newTask, ...copyState[action.todolistID]]

            return copyState
        case "CHANGE-TASK-STATUS": {


            /*let copyState = {...state}
            let tasks = copyState[action.todolistID]
            const task = tasks.find(task => task.id === action.taskID)
            if (task) {
                task.isDone = action.isDone
            }*/
            let tasks = state[action.todolistID]
            state[action.todolistID]=tasks
                .map(t=>t.id === action.taskID?
                    {...t, isDone: action.isDone}: t)

            return ({...state})
        }
        case "CHANGE-TASK-TITLE":{
            /*return {...state, [action.todolistID]: state[action.todolistID].map(task=>{
                if(task.id !== action.taskID) return task
                    else return {...task, title: action.title}
                })}*/
            let tasks=state[action.todolistID]
            state[action.todolistID]=tasks
                .map(t=>t.id === action.taskID?
                {...t, title: action.title}: t)
            return ({...state})
        }
        case "REMOVE-TODOLIST": {
            let copyState = {...state}
            delete copyState[action.id]
            return copyState
        }
        case "ADD-TODOLIST":{
            return {...state, [action.todolistId]:[]}

        }

        default:
           return state
    }
}
export const RemoveTaskAC=(taskId: string ,todolistId: string):RemoveTaskActionType=>{
 return    { type: 'REMOVE-TASK', taskId: taskId, todolistId}}

export const addTaskAC=(title: string, todolistID: string):AddTaskActionType=>({
    type: "ADD-TASK", title, todolistID})

export const changeTaskStatusAC=(taskID: string, isDone: boolean, todolistID: string):changeTaskStatusActionType=>({
    type: "CHANGE-TASK-STATUS", taskID, isDone, todolistID})

export const changeTaskTitleStatusAC=(taskID: string, title: string, todolistID: string):changeTaskTitleStatusACActionType=>({
    type: "CHANGE-TASK-TITLE", taskID, title, todolistID})



