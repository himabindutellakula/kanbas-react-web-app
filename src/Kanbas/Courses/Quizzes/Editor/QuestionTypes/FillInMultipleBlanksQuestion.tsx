import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

function FillInMultipleBlanksQuestion() {
    const [blanks, setBlanks] = useState([""]);
  
    const handleAddBlank = () => {
      setBlanks([...blanks, ""]);
    };
  
    const handleRemoveBlank = (index: any) => {
      const updatedBlanks = blanks.filter((_, i) => i !== index);
      setBlanks(updatedBlanks);
    };
  
    const handleBlankChange = (index: any, value: any) => {
      const updatedBlanks = [...blanks];
      updatedBlanks[index] = value;
      setBlanks(updatedBlanks);
    };
  
    return (
      <div>
        <strong>Answers: </strong>
        <br />
        <br />
        {blanks.map((blank, index) => (
          <div className="d-flex justify-content-between" style= {{marginBottom:'15px'}}key={index}>
            <div className="d-flex">
            <label style={{marginRight: '10px'}}> Possible Answer: </label>
            <input className="form-control" type="text" value={blank} onChange={(e) => handleBlankChange(index, e.target.value)} style={{width:'60%'}}/>
            </div>
            <button className ="btn btn-secondary" style ={{backgroundColor:"white", color:"darkgray"}}onClick={() => handleRemoveBlank(index)}> <FaTrash/> </button>
          </div>
        ))}
        <br />
      <div className="d-flex justify-content-end">
      <button className="btn btn-secondary me-2" onClick={handleAddBlank} style={{backgroundColor:"white", color:"red"}}><FaPlus/> Add Another Answer</button>
      </div>
        
        
      </div>
    );
  }
  export default FillInMultipleBlanksQuestion;