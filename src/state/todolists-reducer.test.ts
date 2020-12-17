import {
    AddTodolistActionType, ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType, RemoveTodolistAS,
    RemoveTodolistActionType,
    TodolistsReducer, AddTodolistAS, ChangeTodolistTitleAS, ChangeTodolistFilterAS
} from './todolists-reducer';
import {v1} from 'uuid';
import {FilterValuesType, toDoListType} from '../AppWithReducers';

let todolistId1: string
let todolistId2: string
let startState: Array<toDoListType>=[]
beforeEach(()=>{
     todolistId1 = v1();
     todolistId2 = v1();
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
})



test('correct todolist should be removed', () => {
   /* let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<toDoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]*/
    /*const action: RemoveTodolistActionType = {
        type: "REMOVE-TODOLIST" as const,
        id: todolistId1
    }*/

    const endState = TodolistsReducer(startState, RemoveTodolistAS(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
   /* let todolistId1 = v1();
    let todolistId2 = v1();
*/
    let newTodolistTitle = "New Todolist";

    /*const startState: Array<toDoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]*/


    const endState = TodolistsReducer(startState, AddTodolistAS(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should change its name', () => {
   /* let todolistId1 = v1();
    let todolistId2 = v1();
*/
    let newTodolistTitle = "New Todolist";

    /*const startState: Array<toDoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]*/
   /* const action: ChangeTodolistTitleActionType = {
        type: 'CHANGE-TODOLIST-TITLE' as const,
        id: todolistId2,
        title: newTodolistTitle
    };*/

    const endState = TodolistsReducer(startState, ChangeTodolistTitleAS(newTodolistTitle,todolistId2 ));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {
    /*let todolistId1 = v1();
    let todolistId2 = v1();*/

    let newFilter: FilterValuesType = "completed";

    /*const startState: Array<toDoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
*/
   /* const action: ChangeTodolistFilterActionType = {
        type: 'CHANGE-TODOLIST-FILTER' as const,
        id: todolistId2,
        filter: newFilter
    };*/

    const endState = TodolistsReducer(startState, ChangeTodolistFilterAS(newFilter,todolistId2 ));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});

