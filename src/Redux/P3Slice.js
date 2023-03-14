
import { createSlice } from "@reduxjs/toolkit";

const getDefaultAns = (n) => {
    const ans = [];
    for(let i = 0; i < n; ++i)
    {
        ans.push("");
    }
    return ans;
};

const p3Slice = createSlice({
    name: "part3",
    initialState: {
        ans : getDefaultAns(7)
    },
    reducers: {
        setAns: (state, action) => {state.ans[action.payload.id] = action.payload.val}
    }
});


export const {setAns} = p3Slice.actions;
export default p3Slice.reducer;