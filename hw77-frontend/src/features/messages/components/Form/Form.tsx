import {Button, Grid, TextField} from "@mui/material";
import {useAppDispatch} from "../../../../app/hooks.ts";
import {FormEvent, useState} from "react";
import {addMessage, fetchMessage} from "../../messagesThunk.ts";
import {MessageMutation} from "../../../../types.ts";
import FileInput from "../UI/FileInput/FileInput.tsx";

const FormMessage =()=>{

    const dispatch = useAppDispatch();
    const [stateForm, setStateForm] = useState<MessageMutation>({author: '', message: '', image: null});

    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(stateForm.image);
        setStateForm({author: '', message: '', image: null})
        dispatch(addMessage(stateForm));
        dispatch(fetchMessage());
    }

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setStateForm((prev)=>({...prev, [event.target.name]: event.target.value}));
    }

    const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        console.log(files);
        const value = files && files[0] ? files[0] : null;
        setStateForm((prev)=>({
            ...prev,
            [name]: value,
        }));
    }

    return(
        
        <Grid onSubmit={onSubmit} marginBottom="60px" container spacing={2} direction="column" component="form">
            <Grid item>
                <TextField value={stateForm.author} onChange={onChange} label="Author" name="author" multiline variant="standard"/>
            </Grid>
            <Grid item>
                <TextField value={stateForm.message} onChange={onChange} required label="Message" name="message" multiline variant="standard"/>
            </Grid>
            <FileInput label="Image" name='image' onChange={fileInputChangeHandler}></FileInput>
            <Grid item>
                <Button type="submit" variant="contained" color="secondary">Save</Button>
            </Grid>
        </Grid>
        
    )
}

export default FormMessage