import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';


import {Task, TaskPropsType} from "./Task";

export default {
    title: 'Todolist/Task',
    component: Task,

} as Meta;

const removeCallback = action('Remove button inside task clicked')
const changeStatusCallback = action('Status changed inside task')
const changeTitleCallback = action('Title changed inside task')

const baseArg = {
    removeTask: removeCallback,
    changeTaskStatus: changeStatusCallback,
    changeTaskTitle: changeTitleCallback
}

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

export const TaskIsDone = Template.bind({});
TaskIsDone.args = {
    ...baseArg, task:{isDone: true, title:'react', id:'1'},
    todolisdId: '1'
};

export const TaskIsNoteDone = Template.bind({});
TaskIsNoteDone.args = {
    ...baseArg, task:{isDone: false, title:'js', id:'2'},
    todolisdId: '2'
};