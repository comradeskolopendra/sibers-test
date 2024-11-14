import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialModalSlice {
    isCreateChatOpen: boolean;
    isAboutChatOpen: boolean;
}

const initialState: IInitialModalSlice = {
    isCreateChatOpen: false,
    isAboutChatOpen: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        setCreateChatOpen(state, action: PayloadAction<boolean>) {
            state.isCreateChatOpen = action.payload;
        },
        setInfoAboutChatOpen(state, action: PayloadAction<boolean>) {
            state.isAboutChatOpen = action.payload;
        }
    }
})


export type TModalActions = ReturnType<typeof modalSlice.actions.setCreateChatOpen>
    | ReturnType<typeof modalSlice.actions.setInfoAboutChatOpen>

export const { setCreateChatOpen, setInfoAboutChatOpen } = modalSlice.actions;
export default modalSlice.reducer;
