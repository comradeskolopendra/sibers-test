import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialLoginState {
    username: string;
    userSid: string;
}

const initialState: IInitialLoginState = {
    username: "",
    userSid: ""
}

const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.username = action.payload;

            return state;
        },
        setUserSid(state, action: PayloadAction<string>) {
            state.userSid = action.payload;

            return state;
        }
    }
});

export type TLoginActions = ReturnType<typeof loginSlice.actions.setUser>;

export const { setUser } = loginSlice.actions;

export default loginSlice.reducer;