import { createSlice } from "@reduxjs/toolkit";

const getDefaultAns = (n) => {
    const ans = [];
    for(let i = 0; i < n; ++i)
    {
        ans.push(-1);
    }
    return ans;
};

const p2Slice = createSlice({
    name: "part2",
    initialState: {
        ans : getDefaultAns(22)
    },
    reducers: {
        setAns: (state, action) => {state.ans[action.payload.id] = action.payload.val}
    }
});


export const {setAns} = p2Slice.actions;
export default p2Slice.reducer;