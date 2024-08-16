import {IMessage} from "../../../../types.ts";
import {CardMedia, Grid, Typography} from "@mui/material";


const Message:React.FC<IMessage> =({message, author, image})=>{

    let cardImage = `http://localhost:8000/images/${image}`;

    return(
        <>
            <Grid container borderRadius="12px" spacing={2} padding={1} marginBottom={3} bgcolor="#000" color="#fff">

                    {image?(
                        <Grid padding={1} item>
                            <CardMedia image={cardImage} title="title" sx={{width: "100px", height: '100px'}}></CardMedia>
                        </Grid>):(<></>)
                    }
                <Grid item justifyContent="space-between" padding={1} borderRight="1px solid #fff" paddingBottom={1} display="flex" alignItems="center">
                    <Typography variant='h5' width={"fit-content"}>{author}</Typography>
                </Grid>
                <Grid item margin="0 auto">
                    {message}
                </Grid>
            </Grid>
        </>
    )
}

export default Message;