import type { TRootState } from "../store";

export const getStateIsCreateChatOpen = (state: TRootState) => state.modal.isCreateChatOpen;
export const getStateIsAboutChatOpen = (state: TRootState) => state.modal.isAboutChatOpen;