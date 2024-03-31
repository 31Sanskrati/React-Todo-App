"use client"
import React, { useState } from 'react';

const Page = () => {
  
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTaskList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (item !== "") {
      setTaskList([...taskList, { item, desc }]);
    }
    setItem("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  const markAsChecked = (index) => {
    const updatedList = taskList.map((task, i) => {
      if (i === index) {
        return { ...task, checked: true };
      }
      return task;
    });
    setTaskList(updatedList);
  };

  let renderedTask = <h4 className="no-task">No Mission?</h4>;
  if (taskList.length > 0) {
    renderedTask = taskList.map((task, index) => {
      return (
        <li key={index} className={task.checked ? "checked" : ""}>
          <div className="text">
            <h5>{task.item}</h5>
            <p>{task.desc}</p>
          </div>
          <button onClick={() => markAsChecked(index)} className="check-button">
            Done
          </button>
          <button onClick={() => deleteHandler(index)} className="delete-button">
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div id="main">
      <div id="todo-app">
        <h1>Mission: Conquer the Chaos</h1>
        <form onSubmit={submitHandler}>
          <input type="text" name="todo-item" placeholder="What's the mission, Captain?" value={item} onChange={(e) => setItem(e.target.value)} />
          <input type="text" name="item-description" placeholder="Add description for the mission" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <button>Add</button>
        </form>
        <div id="container">
          <ul id="list-container">
            {renderedTask}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
