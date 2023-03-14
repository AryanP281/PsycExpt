
import { createSlice } from "@reduxjs/toolkit";

const defaultMcqs = () => {
    const res = [];
    for(let i = 0; i < 30; ++i)
    {
        res.push(-1);
    }
    return res;
};

const picsSlice = createSlice({
    name: "narrative",
    initialState: {
        q1: "",
        q2: "",
        mcqs: defaultMcqs()
    },
    reducers: {
        setQ1 : (state,action) => {state.q1 = action.payload},
        setQ2 : (state,action) => {state.q2 = action.payload},
        setMcqVal: (state, action) => {state.mcqs[action.payload.id] = action.payload.val}
    }
});

export const {setQ1, setQ2, setQ3, setMcqVal} = picsSlice.actions;
export default picsSlice.reducer;