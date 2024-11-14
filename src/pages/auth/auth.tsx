import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import styles from "./auth.module.scss";

import { Button, Input } from "@/components";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/login-slice";

const Auth: FC = () => {
    const [email, setEmail] = useState("");
    const dispatch = useAppDispatch();

    const handleChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { currentTarget } = event;

        setEmail(() => currentTarget.value);
    }, [setEmail])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(setUser(email));
    }

    return (
        <main className={styles.main}>
            <section className={styles.wrapper}>
                <h1 className={styles.title}>Вход</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        placeholder="E-mail"
                        onChange={handleChangeEmail}
                        value={email}
                    />

                    <Button type="submit">
                        Авторизоваться
                    </Button>
                </form>
            </section>
        </main>
    )
};

export default Auth;