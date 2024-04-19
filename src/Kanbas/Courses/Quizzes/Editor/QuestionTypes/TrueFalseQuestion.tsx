import React, { useState } from "react";

function TrueFalseQuestion() {
  return (
    <div className="d-flex">
      <label style={{marginRight: '15px', alignItems: "center"}}>True/False: </label>
      <select className="form-select" style={{width: '10%'}}>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
}

export default TrueFalseQuestion;