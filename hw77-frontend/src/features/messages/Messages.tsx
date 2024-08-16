import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import {fetchMessage} from "./messagesThunk.ts";
import {selectLastMessages, selectMessagesFetching} from "./messagesSlice.ts";
import {Grid, Typography} from "@mui/material";
import Message from "../messages/components/Message/Message.tsx";
import {IMessage} from "../../types.ts";
import FormMessage from "./components/Form/Form.tsx";

const Messages = ()=>{

    const dispatch = useAppDispatch();
    const lastMessage = useAppSelector(selectLastMessages);
    const loader = useAppSelector(selectMessagesFetching);

    useEffect(()=>{
        dispatch(fetchMessage());
    }, [dispatch]);

    return(
        <>
            <Typography variant="h3">Add message</Typography>
            <FormMessage></FormMessage>
            <Typography marginBottom="60px" variant="h3">Chat</Typography>
            <Grid container spacing={2}>
                {loader? (lastMessage.map((message: IMessage)=>{
                    return(
                        <Message id={message.id} key={message.id} author={message.author} image={message.image} message={message.message}></Message>
                    )
                })) : (<> loading</>)}
            </Grid>
        </>
    )
}

export default Messages;