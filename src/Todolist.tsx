import React, { ChangeEvent, useState}  from 'react';
import {FilterValuesType} from './App';
import { KeyboardEvent } from 'react';
import { Button } from './Button';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    setTasks:(tasks: Array<TaskType>)=>void
    addTask:(newTitle:string)=>void
}


export function Todolist(props: PropsType) {

    let [newTitle,setNewTitle]=useState('')
    const onChangeClickHandler=(event:ChangeEvent<HTMLInputElement>)=>{
         setNewTitle(event.currentTarget.value)    
    }

    const onKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
             props.addTask(newTitle)
             setNewTitle('')}

    }

    const onClickHandler=()=>{
        props.addTask(newTitle)
        setNewTitle('')
    }

    const changeFilter=(filter:FilterValuesType)=>{
        props.changeFilter(filter)
    }

    const removeTask=(t:TaskType)=>{
        props.removeTask(t.id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onKeyDown={onKeyDownHandler} onChange={onChangeClickHandler}/>
            <Button name='+' callBack={onClickHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button name="x" callBack={()=>removeTask(t)}/>
                </li>)
            }
        </ul>
        <div>
            <Button name={"All"} callBack={()=>changeFilter("all")}/>
            <Button name={"Active"} callBack={()=>changeFilter("active")}/>
            <Button name={"Completed"} callBack={()=>changeFilter("completed")}/>
        </div>
    </div>
}

