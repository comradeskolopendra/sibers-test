import { useAppDispatch } from "@/store/hooks";
import { FC, useEffect } from "react";

import styles from "./notify.module.scss"
import { createPortal } from "react-dom";
import { wsError } from "@/store/actions/ws-actions";

interface NotifyProps {
    error: string;
}

const Notify: FC<NotifyProps> = ({ error }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(wsError(""));
            }, 3000)
        }
    }, [error])

    return createPortal(
        <>{!!error && <section className={styles.notify}>{error}</section>}</>,
        document.getElementById("notify")
    )
}

export default Notify;