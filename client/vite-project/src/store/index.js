import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creating Individual Reducer

const userSlice = createSlice({
    name: "user",
    initialState : { isLoggedIn : false},

    reducers : {
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            localStorage.removeItem("userId");
            state.isLoggedIn = false;
        }
    }
});

const adminSlice = createSlice({
    name: "auth",
    initialState : {
        isLoggedIn : false
    },
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            localStorage.removeItem("adminId");
            localStorage.removeItem("token");
            state.isLoggedIn = false;
        }
    }
})

// Creating Action controller for each Reducer.
export const userActions = userSlice.actions;
export const adminActions = adminSlice.actions;

// Creating A Reducer Store to store All Reducers.
export const store = configureStore({
    reducer : {
        user : userSlice.reducer,
        admin: adminSlice.reducer
    },
});


// Flow of Reducer.
// action -> dispatch -> reducer (it is pure function which stores final state).