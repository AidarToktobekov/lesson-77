import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import {IMessage, MessageMutation} from '../../types.ts';

export const fetchMessage = createAsyncThunk<IMessage[]>(
    'message/fetchAll',
    async () =>{
        const {data: messages} = await axiosApi.get<IMessage[]>('/message');
        return messages;
    }
)
export const fetchNewMessages = createAsyncThunk<IMessage[], string>(
    'message/fetchNewMessages',
    async (date: string) =>{
        const {data: messages} = await axiosApi.get<IMessage[]>(`/message?dateTime=${date}`);
        if (date === undefined){
            return [];
        }
        return messages;
    }
)


export const addMessage = createAsyncThunk<void, MessageMutation>(
    'message/create',
    async (messageMutation: MessageMutation) =>{
        const formData = new FormData();
        formData.append('message', messageMutation.message);
        formData.append('author', messageMutation.author);
        if (messageMutation.image){
            formData.append('image', messageMutation.image);
        }

        await axiosApi.post('/message', formData);
    }
)