
import { createSlice } from "@reduxjs/toolkit";

const defaultMcqs = () => {
    const res = [];
    for(let i = 0; i < 30; ++i)
    {
        res.push({id:i,val:-1});
    }
    return res;
};

const picsSlice = createSlice({
    name: "narrative",
    initialState: {
        q1: "",
        q2: "",
        q3: "",
        mcqs: defaultMcqs()
    },
    reducers: {
        setQ1_p : (state,action) => {state.q1 = action.payload},
        setQ2_p : (state,action) => {state.q2 = action.payload},
        setQ3_p : (state,action) => {state.q2 = action.payload},
        setMcqVal_p: (state, action) => {state.mcqs[action.payload.id].val = action.payload.val}
    }
});

export const {setQ1_p, setQ2_p, setQ3_p, setMcqVal_p} = picsSlice.actions;
export default picsSlice.reducer;