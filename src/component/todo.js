import React from 'react'

export default function todo(props) {
    return (
        props.list.map((e)=>{
           return(
            <div key={e.sno} className="container list">
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <button type="button" id='btn' className="btn  btn-sm btn-danger" onClick={()=>{props.ondelete(e)}}>Delete</button>
            <hr/>
            </div>
           ) 
        })
    )
}


