import {IMessage} from '../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import {addMessage, fetchMessage} from './messagesThunk.ts';

export interface ProductsState{
    messages: IMessage[];
    chatFetching: boolean;
}

const initialState: ProductsState = {
    messages: [],
    chatFetching: false,
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchMessage.pending, (state)=>{
            state.chatFetching = true;
        }).addCase(fetchMessage.fulfilled, (state, {payload: messages})=>{
            state.chatFetching = true;
            state.messages = messages;
        }).addCase(fetchMessage.rejected, (state)=>{
            state.chatFetching = false;
        })
        builder.addCase(addMessage.pending, (state)=>{
            state.chatFetching = true;
        }).addCase(addMessage.fulfilled, (state)=>{
            state.chatFetching = true;
        }).addCase(addMessage.rejected, (state)=>{
            state.chatFetching = false;
        })
    },
    selectors:{
        selectMessages: (state)=> state.messages,
        selectMessagesFetching: (state)=> state.chatFetching,
    }
})

export const messagesReducer = messagesSlice.reducer;

export const {
    selectMessages,
    selectMessagesFetching,
} = messagesSlice.selectors;
