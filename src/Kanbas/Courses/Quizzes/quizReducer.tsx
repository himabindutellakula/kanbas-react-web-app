import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";


const initialState = {
    quizzes: quizzes,
    quiz:     {
        "title": "React Component Quiz State",
        "points": "100",
        "description": "Quiz Description",
        "dueDate": "2024-03-31",
        "availableFromDate": "2024-03-18",
        "availableUntilDate": "2024-03-31",
        "published": false,
        "quizType": "Graded Quiz",
        "assignmentGroup": "QUIZZES",
        "shuffleAnswers": false,
        "timeLimit": "30",
        "multipleAttempts": false,
        "viewResponses": "Always",
        "showCorrectAnswers": "immediately",
        "oneQuestionAtATime": true,
        "requireRespondousLockDownBrowser": false,
        "requiredToViewQuizResults": false,
        "webcamRequired": false,
        "lockQuestionsAfterAnswering": false,
        "quizFor": "Everyone",
        "accessCode": ""
    }
};


const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.quizzes,
            ];
        },
        deleteQuiz: (state, action) => {
            state.quizzes = state.quizzes.filter(
                (quiz) => quiz._id !== action.payload
            );
        },
        updateQuiz: (state, action) => {
            state.quizzes = state.quizzes.map((quiz) => {
                if (quiz._id === action.payload._id) {
                    return action.payload;
                } else {
                    return quiz;
                }
            });
        },
        setQuiz: (state, action) => {
            state.quiz = action.payload;
        },
    },
});


export const { addQuiz, deleteQuiz,
    updateQuiz, setQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;