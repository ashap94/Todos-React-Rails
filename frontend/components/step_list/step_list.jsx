import React, { useState, useEffect } from "react";
import StepListItemContainer from "./step_list_item_container";

const StepList = props => {
  // steps for specific todo, utilize prop todo_id to

  let stepItems = props.steps.map(step => (
    <StepListItemContainer key={step.id} step={step} />
  ));

  return (
    <div>
      <ul>{stepItems}</ul>
      <form action="">
        <label>
          Title:
          <input />
        </label>
        <label>
          Body:
          <textarea cols="30" rows="10"></textarea>
        </label>
        <button>Create Step!</button>
      </form>
    </div>
  );
};

export default StepList;
