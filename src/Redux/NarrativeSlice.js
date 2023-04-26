
import { createSlice } from "@reduxjs/toolkit";

const defaultMcqs = () => {
    const res = [];
    for(let i = 0; i < 30; ++i)
    {
        res.push({id:i, val:-1});
    }
    return res;
};

const narrativeSlice = createSlice({
    name: "narrative",
    initialState: {
        q1: "",
        q2: "",
        q3: "",
        mcqs: defaultMcqs()
    },
    reducers: {
        setQ1 : (state,action) => {state.q1 = action.payload},
        setQ2 : (state,action) => {state.q2 = action.payload},
        setQ3 : (state,action) => {state.q3 = action.payload},
        setMcqVal: (state, action) => {state.mcqs[action.payload.id].val = action.payload.val}
    }
});


export const {setQ1, setQ2, setQ3, setMcqVal} = narrativeSlice.actions;
export default narrativeSlice.reducer;