import React, { useEffect, useState } from "react";
import { uniqueId } from "../../util/id_util";

const StepForm = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const updateTitle = e => {
    setTitle(e.target.value);
  };

  const updateBody = e => {
    setBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let step = {
      id: uniqueId(),
      title,
      body,
      todo_id: props.todo_id,
      done: false
    };
    props.recieveStep(step);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className="input"
          onChange={updateTitle}
          value={title}
          placeholder="walk to store"
          required
        />
      </label>
      <label>
        Body:
        <input
          className="input"
          onChange={updateBody}
          value={body}
          placeholder="google store directions"
          required
        />
      </label>
      <button className="create-button">Create Step!</button>
    </form>
  );
};

export default StepForm;
