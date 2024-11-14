import { FC, useId, memo } from "react";

import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { };

const Input: FC<InputProps> = memo(({
    placeholder,
    onChange,
    value,
}) => {
    const inputId = useId();

    return (
        <div className={styles.wrapper}>
            <label htmlFor={inputId} className={styles.placeholder}>{placeholder}</label>
            <input
                onChange={onChange}
                value={value}
                type="text"
                id={inputId}
                className={styles.input}
            />
        </div>
    )
})

export default Input;