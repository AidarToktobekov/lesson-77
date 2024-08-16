import {useAppDispatch} from "../../app/hooks.ts";
import {useEffect} from "react";
import {fetchMessage} from "./messagesThunk.ts";
import { Typography} from "@mui/material";
import FormMessage from "./components/Form/Form.tsx";

const Messages = ()=>{

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchMessage());
    }, [dispatch])

    return(
        <>
            <Typography variant="h3">Add message</Typography>
            <FormMessage></FormMessage>
        </>
    )
}

export default Messages;