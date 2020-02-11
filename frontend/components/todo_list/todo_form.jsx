import React, { useState, useEffect } from "react";
import { uniqueId } from "../../util/id_util";

const TodoForm = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [done, setDone] = useState(false);
  const [tag_names, settag_names] = useState([]);
  const [newTag, setNewTag] = useState("");

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

  const updateNewTag = e => {
    setNewTag(e.target.value);
  };

  const addNewTag = e => {
    if (newTag.length > 0) {
      let tags = [...tag_names, newTag];
      settag_names(tags);
      setNewTag("");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      title,
      body,
      done: false,
      tag_names
    };
    props.createTodo(todo).then(() => {
      setBody("");
      setTitle("");
      settag_names([]);
    });
    props.clearErrors();
  };

  const removeTag = idx => {
    let newTags = tag_names.filter((_, index) => index !== idx);
    settag_names(newTags);
  };

  let titleError = props.errors.includes("Title can't be blank")
    ? "Title can't be blank"
    : null;

  let bodyError = props.errors.includes("Body can't be blank")
    ? "Body can't be blank"
    : null;

  let tags = tag_names.map((tag, idx) => {
    const clickHandler = () => removeTag(idx);
    return (
      <li key={idx} onClick={clickHandler}>
        {tag}
      </li>
    );
  });

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className="input"
          value={title}
          onChange={updateTitle}
          placeholder="buy milk"
          // required
        />
      </label>
      {titleError}
      <label>
        Body:
        <textarea
          className="input"
          value={body}
          rows="5"
          cols="20"
          onChange={updateBody}
          placeholder="soy, buy flavorless and the cheapest one"
          // required
        ></textarea>
      </label>
      <label>
        Tags
        <input
          placeholder="Enter a new tag"
          value={newTag}
          onChange={updateNewTag}
        />
        <button type="button" onClick={addNewTag}>
          Add Tag
        </button>
      </label>
      <ul>{tags}</ul>
      {bodyError}
      <button className="create-button">Create Todo!</button>
    </form>
  );
};

export default TodoForm;
