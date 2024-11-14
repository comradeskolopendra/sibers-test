import type { TRootState } from "../store";

export const getStateStatus = (state: TRootState) => state.ws.status;
export const getStateError = (state: TRootState) => state.ws.connectingError;
export const getStateChats = (state: TRootState) => state.ws.wsMessage.chats;
export const getStateMessages = (state: TRootState) => state.ws.wsMessage.messages;