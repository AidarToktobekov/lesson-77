export interface IMessage{
    message:string;
    id: string;
    author: string;
    image: string | null;
}


export interface MessageMutation {
    message: string;
    author: string;
    image: File | null;
}