import { useAppSelector } from "@/store/hooks";
import { getStateMessages } from "@/store/selectors/ws-selectors";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

// import 

const Chat: FC = () => {
    const { id } = useParams()
    const messages = useAppSelector(getStateMessages)

    const handleSendMessage = () => { }

    console.log(id);

    return (
        <section>
            { }
        </section>
    )
};

export default Chat;