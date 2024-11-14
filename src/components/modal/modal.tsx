import { FC, memo, MouseEvent, ReactNode } from "react";
import ReactDOM from "react-dom";

import styles from "./modal.module.scss";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const Modal: FC<ModalProps> = memo(({ children, onClose }) => {
    const handleInnerClick = (event: MouseEvent) => {
        event.stopPropagation();
    }

    return ReactDOM.createPortal(
        <section className={styles.wrapper} onClick={onClose}>
            <div className={styles.inner} onClick={handleInnerClick}>
                {children}
            </div>
        </section>,
        document.getElementById("modals")
    )
});

export default Modal;