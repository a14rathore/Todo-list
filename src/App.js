import Navbar from './component/navbar';
import Todos from './component/todos'
import React, { useState, useEffect } from 'react';
import AddTodo from './component/addTodo';
import Footer from './component/footer';

function App() {
  let initTodo;
  if (localStorage.getItem("Todolist") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("Todolist"));
  }
  const onDelete = (e) => {
    console.log("i am delete");
    setTodolist(Todolist.filter((todo) => {
      return todo !== e;
    }));


  }
  const [Todolist, setTodolist] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("Todolist", JSON.stringify(Todolist));

  }, [Todolist]);

  const addTodo = (title, description) => {
    //last todolist sno. +1 for new todo sno
    let sno = !Todolist.length ? 0 : Todolist[Todolist.length - 1].sno + 1;
    const myTodolist = {
      sno: sno,
      title,
      description,
    }
    setTodolist([...Todolist, myTodolist]);
    console.log(myTodolist);
    if (localStorage.getItem("Todolist")) {
      localStorage.setItem("Todolist", JSON.stringify(Todolist));
    }

  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <AddTodo addTodo={addTodo} />
      <Todos list={Todolist} ondelete={onDelete} ></Todos>
      <Footer />
    </div>



  );
}

export default App;
