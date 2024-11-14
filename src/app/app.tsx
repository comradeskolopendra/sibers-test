import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getStateIsCreateChatOpen } from "@/store/selectors/modal-selectors";
import { Button, Modal, Input, Notify } from "@/components";
import { setCreateChatOpen } from "@/store/slices/modal-slice";

import styles from "./app.module.scss";
import { wsSendMessage } from "@/store/actions/ws-actions";
import { getStateError } from "@/store/selectors/ws-selectors";

const App: FC = () => {
    const [chatName, setChatName] = useState("");
    const dispatch = useAppDispatch();
    const isCreateChatOpen = useAppSelector(getStateIsCreateChatOpen);
    const error = useAppSelector(getStateError);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        handleCloseModal();

        dispatch(wsSendMessage({
            event: "CREATE_CHAT",
            name: chatName
        }))
    };

    const handleCloseModal = useCallback(() => {
        dispatch(setCreateChatOpen(false))
    }, [])

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { currentTarget } = event;
        setChatName(() => currentTarget.value);
    }, [setChatName])

    return (
        <>
            <RouterProvider router={router} />
            {isCreateChatOpen &&
                <Modal
                    onClose={handleCloseModal}
                >
                    <h1 className={styles.title}>Создание чата</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            placeholder="Название чата"
                            value={chatName}
                            onChange={handleChange}
                        />
                        <Button type="submit">Создать</Button>
                    </form>
                </Modal>
            }
            {!!error && <Notify error={error} />}
        </>
    )
};

export default App;