import { useState, ChangeEvent } from "react";
import useDebounce from "@/hooks/use-debounce";

import styles from "./search-chats.module.scss";

const SearchChats = () => {
    const [search, setSearchValue] = useState("");

    const debouncedSearchUser = useDebounce(() => {
        console.log(search);
    }, 500);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;

        debouncedSearchUser();
        setSearchValue(() => target.value);
    };

    return (
        <input
            className={styles.input}
            value={search}
            onChange={handleChange}
            placeholder="Поиск"
        />
    )
}

export default SearchChats;