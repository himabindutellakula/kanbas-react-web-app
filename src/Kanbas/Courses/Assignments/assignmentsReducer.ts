import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: { title: "Assignment", description: "Assignment Description", dueDate: "2024-03-31", 
    availableFromDate: "2024-03-18", availableUntilDate: "2024-03-31", points: "100"},
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },

        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },

        addAssignment: (state: any, action) => {
            state.assignments = [action.payload, ...state.modules];
        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (module: { _id: string }) => module._id !== action.payload
            );
        },

        updateAssignment: (state: any, action) => {
            state.assignments = state.assignments.map((assignment: { _id: string }) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;