import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import {fetchMessage} from "./messagesThunk.ts";
import {selectMessages, selectMessagesFetching} from "./messagesSlice.ts";
import {Grid, Typography} from "@mui/material";
import Message from "../messages/components/Message/Message.tsx";
import {IMessage} from "../../types.ts";
import FormMessage from "./components/Form/Form.tsx";

const Messages = ()=>{

    const dispatch = useAppDispatch();
    const message = useAppSelector(selectMessages);
    const loader = useAppSelector(selectMessagesFetching);

    useEffect(()=>{
        dispatch(fetchMessage());
    }, [dispatch]);

    return(
        <>
            <Typography variant="h3">Add message</Typography>
            <FormMessage></FormMessage>
            <Typography marginBottom="60px" variant="h3">Chat</Typography>
            <Grid container spacing={2} justifyContent="center">
                {loader? (message.map((message: IMessage)=>{
                    return(
                        <Message id={message.id} key={message.id} author={message.author} image={message.image} message={message.message}></Message>
                    )
                })) : (<> loading</>)}
                {message[0]? (null):(<h4>No messages</h4>)}
            </Grid>
        </>
    )
}

export default Messages;