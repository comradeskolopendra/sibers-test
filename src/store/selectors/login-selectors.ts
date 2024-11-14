import { TRootState } from "../store";

export const getStateUser = (state: TRootState) => state.login.username;