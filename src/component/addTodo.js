import React, { useState } from 'react'


export default function AddTodo(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("title or description can't be empty")
        } else {
            props.addTodo(title, description);
        }
         setTitle("");
         setDescription("");
    }

    return (
        <form className='container' onSubmit={submit}>
            <div className="mb-3 my-3">
                <label htmlFor="input" className="form-label"><h5>Title</h5></label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="input" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="task" className="form-label"><h5>Description</h5></label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="task" />
            </div>

            <button type="submit" id="btn" className="btn btn-success">ADD</button>
        </form>
    )
}
