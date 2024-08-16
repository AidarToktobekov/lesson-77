export interface IMessage{
    message:string;
    id: string;
    author: string;
    image: File | null;
}

export type MessageWithoutId = Omit<IMessage, 'id'>

export interface MessageMutation {
    message: string;
    author: string;
    image: File | null;
}