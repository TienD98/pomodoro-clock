import { createSlice } from "@reduxjs/toolkit";

const initial = { firstClick: true, sectionHr: 25, sectionMin: "00", breakClock: 5, sectionLg: 25, caption: "Session" };
const clockSlice = createSlice({
    name: 'clock',
    initialState: initial,
    reducers: {
        timeMinute(state) {
            if (state.sectionMin === "00") {
                state.sectionMin = 60;
            }
            if (state.sectionMin === 0) {
                state.sectionMin = 60;
            }
            state.sectionMin--;
        },
        sectionIncrease(state) {
            if (state.sectionLg < 60) {
                state.sectionLg++;
                state.sectionHr = state.sectionLg;
            }
        },
        sectionDecree(state) {
            if (state.sectionLg > 1) {
                state.sectionLg--;
                state.sectionHr = state.sectionLg
            }
        },
        reset(state) {
            state.sectionHr = 25;
            state.sectionLg = 25;
            state.sectionMin = "00";
            state.breakClock = 5;
            state.caption = "Session";
            state.firstClick = true;
        },
        breakIncrease(state) {
            if (state.breakClock < 60) {
                state.breakClock++;
            }
        },
        breakDecrease(state) {
            if (state.breakClock > 1) {
                state.breakClock--;
            }
        },
        timeCountDown(state) {
            if (state.sectionHr > 0) {
                state.sectionHr--;
            }
        },
        fetchCaption(state, action) {
            state.caption = action.payload;
        },
        fetchHr(state, action) {
            state.sectionHr = action.payload;
        },
        fetchFirstClick(state, action) {
            state.firstClick = action.payload;
        }
    }
})

export const { fetchFirstClick, fetchHr, fetchCaption, timeMinute, timeCountDown, sectionIncrease, sectionDecree, reset, breakIncrease, breakDecrease } = clockSlice.actions;
export default clockSlice.reducer;