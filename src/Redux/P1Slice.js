import { createSlice } from "@reduxjs/toolkit";

const getDefaultAns = (n) => {
    const ans = [];
    for(let i = 0; i < n; ++i)
    {
        ans.push(-1);
    }
    return ans;
};

const p1Slice = createSlice({
    name: "part1",
    initialState: {
        ans : getDefaultAns(44)
    },
    reducers: {
        setAns: (state, action) => {state.ans[action.payload.id] = action.payload.val}
    }
});


export const {setAns} = p1Slice.actions;
export default p1Slice.reducer;