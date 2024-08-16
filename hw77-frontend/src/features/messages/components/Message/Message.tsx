import { MessageWithoutId} from "../../../../types.ts";
import {Grid, Typography} from "@mui/material";


const Message:React.FC<MessageWithoutId> =({message, author, image})=>{

    console.log(image)

    return(
        <>
            <Grid container borderRadius="12px" spacing={2} padding={1} marginBottom={3} bgcolor="#000" color="#fff" direction="column">
                <Grid item justifyContent="space-between" borderBottom="1px solid #fff" paddingBottom={1} display="flex" alignItems="center">
                    <Typography variant='h5' width={"fit-content"}>{author}</Typography>
                </Grid>
                <Grid item>
                    {message}
                </Grid>
            </Grid>
        </>
    )
}

export default Message;