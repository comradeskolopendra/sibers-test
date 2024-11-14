import { FC } from "react";

import { useAppSelector } from "@/store/hooks";

import styles from "./chats-list.module.scss";
import { useNavigate } from "react-router-dom";
import { getStateChats } from "@/store/selectors/ws-selectors";

const ChatsList: FC = () => {
    const navigate = useNavigate();
    const chats = useAppSelector(getStateChats);

    const handleClickChat = (chat: string) => {
        navigate(chat)
    };

    return (
        <ul className={styles.list}>
            {chats.map((chat) => {
                return (
                    <li className={styles.chat} onClick={() => handleClickChat(chat)}>
                        <div className={styles.image} />
                        <div className={styles.texts}>
                            <h4 className={styles.name}>{chat}</h4>
                            <p className={styles.lastMessage}>last message</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
};

export default ChatsList;