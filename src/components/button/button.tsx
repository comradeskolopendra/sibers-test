import { FC, ButtonHTMLAttributes, memo } from "react"
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<ButtonProps> = memo(({ children, onClick }) => {

    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
})

export default Button;