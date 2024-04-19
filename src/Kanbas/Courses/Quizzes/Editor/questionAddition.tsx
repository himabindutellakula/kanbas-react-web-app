import React, { useState } from "react";
import MultipleChoiceQuestion from "./QuestionTypes/MultipleChoiceQuestions";
import TrueFalseQuestion from "./QuestionTypes/TrueFalseQuestion";
import FillInMultipleBlanksQuestion from "./QuestionTypes/FillInMultipleBlanksQuestion";
import {FaBold, FaItalic, FaUnderline, FaEllipsisV} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


function QuestionAddition() {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState("");
  const [selectedType, setSelectedType] = useState("multiple-choice");
  const { quizId } = useParams();
  const { courseId } = useParams();


  const handleSaveQuestion = () => {
    // Implement saving question logic here
    console.log({
      title,
      points,
      question,
    });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="d-flex">
          <input className = "form-control"
            type="text"
            value="Question Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <select className = "form-select"
            defaultValue={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ marginLeft: "10px", width: '200px' }}
          >
            <option value="multiple-choice">Multiple Choice</option>
            <option value="true-false">True/False</option>
            <option value="fill-in-multiple-blanks">Fill in Multiple Blanks</option>
          </select>
        </div>
        <div className = "d-flex">
          <label style={{marginRight:'10px', alignContent:'center'}}>Points:</label>
          <input className = "form-control"
            type="number"
            value={points}
            style={{ width: "50px",  }}
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </div>
      </div>
      <hr />
      <div>
        <strong style={{marginBottom:'10px'}}>Question: </strong>
        <p style={{marginBottom:'10px'}}>&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;&nbsp;View&nbsp;&nbsp;&nbsp;&nbsp;Insert&nbsp;&nbsp;&nbsp;&nbsp;Format&nbsp;&nbsp;&nbsp;&nbsp;Tools&nbsp;&nbsp;&nbsp;&nbsp;Table</p>
        <div className="d-flex" style={{marginBottom:'10px'}}>
        <select className = "form-select"
            defaultValue={"12pt"}
            style={{ marginRight: "15px", width: '100px' }}
          >
            <option value="12pt">12pt</option>
            <option value="14pt">14pt</option>
            <option value="16pt">16pt</option>
          </select>
        
          <select className = "form-select"
            defaultValue={"paragraph"}
            style={{ marginRight: "15px", width: '200px' }}
          >
            <option value="paragraph">Paragraph</option>
            <option value="line">Line</option>
          </select>

          <div className="vr" style={{marginRight:'15px'}}></div>

          <button className="btn btn-secondary me-2" style={{ color: "black", backgroundColor:"white"}}> <FaBold/> </button>

          <button className="btn btn-secondary me-2" style={{ color: "black", backgroundColor:"white"}}> <FaItalic/> </button>

          <button className="btn btn-secondary me-3" style={{ color: "black", backgroundColor:"white"}}> <FaUnderline/> </button>

          <div className="vr" style={{marginRight:'15px'}}></div>

          <button className="btn btn-secondary me-2" style={{ color: "black", backgroundColor:"white"}}> <FaEllipsisV/> </button>


        </div>
        <textarea className="form-control" style={{width:'80%', height:'50%', marginBottom:'15px'}}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="d-flex justify-content-end">

        </div>
      </div>
      <hr />
      {selectedType === "multiple-choice" && <MultipleChoiceQuestion />}
      {selectedType === "true-false" && <TrueFalseQuestion />}
      {selectedType === "fill-in-multiple-blanks" && <FillInMultipleBlanksQuestion />}
      <br />
      <div>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions`} className="btn btn-secondary me-2" style={{backgroundColor:"lightgrey", color:"black"}}>
          Cancel
        </Link>
        <button className="btn btn-danger me-2" onClick={handleSaveQuestion}>Save/Update Question</button>
        
      </div>
    </>
  );
}
export default QuestionAddition;