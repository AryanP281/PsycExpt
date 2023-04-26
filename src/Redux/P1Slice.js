import { createSlice } from "@reduxjs/toolkit";

const getDefaultAns = (n) => {
    const ans = [];
    for(let i = 0; i < n; ++i)
    {
        ans.push({id:i,val:-1});
    }
    return ans;
};

const p1Slice = createSlice({
    name: "part1",
    initialState: {
        ans : getDefaultAns(10)
    },
    reducers: {
        setAns: (state, action) => {state.ans[action.payload.id].val = action.payload.val}
    }
});


export const {setAns} = p1Slice.actions;
export default p1Slice.reducer;