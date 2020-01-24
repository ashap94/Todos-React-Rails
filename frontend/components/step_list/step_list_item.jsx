import React, { useState, useEffect } from "react";
import StepList from "./step_list";

const StepListItem = props => {
  const [done, setDone] = useState(props.step.done);

  const toggleDone = () => {
    let step = Object.assign({}, props.step);
    if (done === true) {
      step["done"] = false;
      props.recieveStep(step);
      setDone(false);
    } else {
      step["done"] = true;
      props.recieveStep(step);
      setDone(true);
    }
  };

  const deleteStep = () => {
    props.removeStep(props.step.id);
  };

  return (
    <li>
      <h2>{props.step.title}</h2>
      <p>{props.step.body}</p>
      <button onClick={toggleDone}>{done ? "Undo" : "Done"}</button>
      <button onClick={deleteStep}>Delete</button>
    </li>
  );
};

export default StepListItem;
