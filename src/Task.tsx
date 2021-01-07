import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import EdiTableSpan from "./EdiTableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./Todolist";

export type TaskPropsType = {
    task: TaskType
    changeTaskstatus: (taskID: string, isDone: boolean, todolistID: string) => void
    removeTask: (askID: string, todolistID: string) => void
    changeTaskTitle: (taskID: string, title: string, todolistID: string) => void

    todolisdId: string

}
export const Task: React.FC<TaskPropsType> = React.memo(({
                                                             task,
                                                             changeTaskstatus,
                                                             removeTask,
                                                             changeTaskTitle,
                                                             todolisdId,
                                                         }) => {
    const RemoveTask = useCallback(() => {removeTask(task.id, todolisdId)},[removeTask,task.id, todolisdId])
    const cangeTaskstatus = useCallback((e: ChangeEvent<HTMLInputElement>) => {changeTaskstatus(task.id, e.currentTarget.checked, todolisdId)},[changeTaskstatus,task.id,todolisdId])
    const changeTasktitle = useCallback((newValue: string) => {changeTaskTitle(task.id, newValue, todolisdId)},[changeTaskTitle,task.id,todolisdId])


    return <div className={task.isDone ? "is-done" : ""} key={task.id}>
        <Checkbox color={"secondary"}
                  onChange={cangeTaskstatus}
                  checked={task.isDone}/>
        <EdiTableSpan title={task.title} changeValue={changeTasktitle}/>
        <IconButton onClick={RemoveTask}>
            <Delete/>
        </IconButton>

    </div>
})