import React, { ChangeEvent, useState}  from 'react';
import { KeyboardEvent } from 'react';
import {FilterValuesType} from './App';

type ButtonType={
    name:string
    callBack:()=>void
}

export const Button=(props:ButtonType)=>{
    return(
        
            <button onClick={props.callBack}>{props.name}</button>
        
    )
   
}