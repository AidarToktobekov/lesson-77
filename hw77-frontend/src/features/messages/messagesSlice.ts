import {IMessage} from '../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import {addMessage, fetchMessage, fetchNewMessages} from './messagesThunk.ts';

export interface ProductsState{
    messages: IMessage[];
    newMessages: IMessage[];
    lastMessages: IMessage[];
    chatFetching: boolean;
}

const initialState: ProductsState = {
    messages: [],
    newMessages: [],
    lastMessages: [],
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
            state.lastMessages = messages.slice(-30).reverse()
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
        builder.addCase(fetchNewMessages.fulfilled, (state, {payload: messages})=>{
            state.newMessages = messages;
        })
    },
    selectors:{
        selectMessages: (state)=> state.messages,
        selectNewMessages: (state)=> state.newMessages,
        selectMessagesFetching: (state)=> state.chatFetching,
        selectLastMessages: (state)=> state.lastMessages,
    }
})

export const messagesReducer = messagesSlice.reducer;

export const {
    selectMessages,
    selectMessagesFetching,
    selectLastMessages,
    selectNewMessages,
} = messagesSlice.selectors;
