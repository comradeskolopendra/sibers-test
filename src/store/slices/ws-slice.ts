import { createReducer } from "@reduxjs/toolkit";
import { wsClose, wsConnecting, wsError, wsOpen, wsMessage } from "../actions/ws-actions";
import { EWSStatus } from "@/types";

interface IMessage {
    sendAt: string;
    sender: string;
    content: string;
}

export interface IInitialWSState {
    status: EWSStatus;
    wsMessage: {
        chats: string[];
        messages: IMessage[]
    };
    connectingError: string;
}

const initialState: IInitialWSState = {
    status: EWSStatus.OFFLINE,
    wsMessage: {
        chats: [],
        messages: []
    },
    connectingError: ""
}

const profileOrdersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(wsConnecting, (state) => {
            state = {
                ...state,
                status: EWSStatus.CONNECTING
            }

            return state;
        })
        .addCase(wsOpen, (state) => {
            state = {
                ...state,
                status: EWSStatus.ONLINE,
                connectingError: ""
            }

            return state;
        })
        .addCase(wsClose, (state) => {
            state = {
                ...state,
                status: EWSStatus.OFFLINE
            }

            return state;
        })
        .addCase(wsError, (state, action) => {
            state = {
                ...state,
                connectingError: action.payload
            }

            return state;
        })
        .addCase(wsMessage, (state, action) => {
            const { payload } = action;
            state = {
                ...state,
                wsMessage: {
                    ...state.wsMessage,
                    ...payload.message
                }
            }

            return state;
        })
});

export default profileOrdersReducer;