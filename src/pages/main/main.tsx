import { FC, useCallback, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SearchChats } from "./components";
import ChatsList from "./components/chats-list/chats-list";
import { Button } from "@/components";

import styles from "./main.module.scss";
import { connect, wsSendMessage } from "@/store/actions/ws-actions";
import { getStateUser } from "@/store/selectors/login-selectors";
import { EWSStatus } from "@/types";
import { setCreateChatOpen } from "@/store/slices/modal-slice";

const Main: FC = ({ }) => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(getStateUser);
    const status = useAppSelector((state) => state.ws.status);

    const handleClickCreate = useCallback(() => {
        dispatch(setCreateChatOpen(true))
    }, [dispatch])

    useEffect(() => {
        if (username) {
            dispatch(connect())
        }
    }, [])

    useEffect(() => {
        if (status === EWSStatus.ONLINE) {
            dispatch(wsSendMessage({
                event: "USER_ENTER"
            }))
        }
    }, [status])

    return (
        <main className={styles.main}>
            <aside className={styles.aside}>
                <Link to={"/profile"} className={styles.link}>Профиль</Link>

                <SearchChats />

                <Button onClick={handleClickCreate}>
                    Создать чат
                </Button>

                <ChatsList />
            </aside>
            <div>
                <Outlet />
            </div>
        </main>
    )
};

export default Main;