import React, { useState, useEffect } from "react";
import { uniqueId } from "../../util/id_util";

const TodoForm = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [done, setDone] = useState(false);
  //   const [id, setId] = useState(null);

  //   useEffect(() => {
  //     setId(uniqueId());
  //     console.log("HERE'S WHAT THE ID LOOKS LIKE", id);
  //   }, []);

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const updateBody = e => {
    setBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      title,
      body,
      done: false
    };
    props.createTodo(todo).then(() => {
      setBody("");
      setTitle("");
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className="input"
          value={title}
          onChange={updateTitle}
          placeholder="buy milk"
          required
        />
      </label>
      <label>
        Body:
        <textarea
          className="input"
          value={body}
          rows="5"
          cols="20"
          onChange={updateBody}
          placeholder="soy, buy flavorless and the cheapest one"
          required
        ></textarea>
      </label>
      <button className="create-button">Create Todo!</button>
    </form>
  );
};

export default TodoForm;
