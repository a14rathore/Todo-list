import React from 'react'
import Todo from './todo';
export default function todos(props) {
    return (
        <div style={{minHeight: '45vh'}} className="container">  
            <h2 style={{ textAlign: 'center', }} >TODOS</h2>
            {props.list.length===0 ? "No todos to display":
             <Todo list={props.list} ondelete={props.ondelete}></Todo>
            }
           

        </div>
    )
}
