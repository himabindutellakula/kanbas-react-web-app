import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import {FaPlus, FaTrash, FaPencilAlt} from "react-icons/fa"

const answer = "Possible Answer"

function clickCorrectAnswer(index:number){
  const label: HTMLElement | null = document.getElementById(`correctAnswerLabel-${index}`);
  const radioButton: HTMLInputElement | null = document.getElementById(`possibleAnswer-${index}`) as HTMLInputElement;
  if(label && radioButton){
    if(radioButton.checked){
      label.textContent = "Correct Answer";
      label.style.color = "green";
    }else{
      label.textContent = "Possible Answer";
      label.style.color = "black";
    }
  }
}


function MultipleChoiceQuestion() {
  const [choices, setChoices] = useState([""]);

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleRemoveChoice = (index: any) => {
    const updatedChoices = choices.filter((_, i) => i !== index);
    setChoices(updatedChoices);
  };

  const handleChoiceChange = (index: any, value: any) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  

  return (
    <div>
      <strong>Answers: </strong>
      {choices.map((choice, index) => (
        <div className="d-flex justify-content-between" key={index} style={{marginBottom:'15px'}}>
          <div className ="d-flex">
          <input style={{marginRight:'15px', alignContent:'center'}} type="radio" id={`possibleAnswer-${index}`} name="correct-choice" onClick={() => clickCorrectAnswer(index)}/>
          <label style={{marginRight:'15px', alignContent:'center'}} htmlFor={`possibleAnswer-${index}`} id={`correctAnswerLabel-${index}`}>Possible Answer</label>
          <textarea className = "form-control" style={{width:'300px'}}
            value={choice}
            onChange={(e) => handleChoiceChange(index, e.target.value)}
          />
          </div>
          <div>
          <button className="btn btn-secondary me-2" style={{backgroundColor:"white", color:"darkgray"}}><FaPencilAlt/></button>
          <button className="btn btn-secondary me-2" onClick={() => handleRemoveChoice(index)} style={{backgroundColor:"white", color:"darkgray"}}><FaTrash/></button>
          </div>
          
        </div>
      ))}
      <br />
      <div className="d-flex justify-content-end">
      <button className="btn btn-secondary me-2" onClick={handleAddChoice} style={{backgroundColor:"white", color:"red"}}><FaPlus/> Add Another Answer</button>
      </div>
    </div>
  );
}
export default MultipleChoiceQuestion;