import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login-slice";
import wsReducer from "./slices/ws-slice"
import modalReducer from "./slices/modal-slice";

import type { TWSActions } from "./actions/ws-actions";
import type { TLoginActions } from "./slices/login-slice";
import type { TModalActions } from "./slices/modal-slice";

import { socketMiddleware } from "./middleware/ws-middleware";

const wsMiddleware = socketMiddleware();

const reducer = combineReducers({
    login: loginReducer,
    modal: modalReducer,
    ws: wsReducer
})

const store = configureStore({
    devTools: true,
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(wsMiddleware)
})

type TAppActions = TWSActions | TLoginActions | TModalActions;

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch<TReturn = void> = (action: TAppActions) => TReturn

export default store;