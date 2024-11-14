import type { Middleware } from "redux";
import {
    wsClose,
    wsConnecting,
    wsError,
    wsMessage,
    wsOpen,
    connect,
    disconnect,
    wsSendMessage,
    TWSActions
} from "../actions/ws-actions";

export const socketMiddleware = (): Middleware<{}, any> => {
    return (store) => {
        let socket: WebSocket | null = null;
        return (next) => (action: TWSActions) => {
            const { dispatch } = store;
            const { payload } = action;

            if (connect.match(action)) {
                console.log("connected")
                socket = new WebSocket("ws://127.0.0.1:8081");
                dispatch(wsConnecting());
            }

            if (socket) {
                socket.onopen = () => {
                    dispatch(wsOpen());
                };

                socket.onerror = () => {
                    dispatch(wsError("Ошибка подключения или отправки сообщения"));
                };

                socket.onmessage = (event: MessageEvent) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);

                    console.log(parsedData);

                    dispatch(wsMessage(parsedData));
                };

                socket.onclose = (event: CloseEvent) => {
                    dispatch(wsClose());
                };

                if (wsSendMessage && wsSendMessage.match(action)) {
                    console.log(payload);
                    socket.send(JSON.stringify(payload));
                }

                if (disconnect.match(action)) {
                    console.log("disconnected")
                    socket.close();
                    socket = null;
                }
            }

            next(action);
        };
    };
};