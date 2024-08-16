export interface IMessage{
    message:string;
    id: string;
    author: string;
}

export type MessageWithoutId = Omit<IMessage, 'id'>

export interface MessageMutation {
    message: string;
    author: string;
    image: File | null;
}