export interface IMessage{
    id: string;
    message: string;
    author: string;
    image: string | null;
}

export interface MessageWithoutId {
    message: string;
    author: string;
    image: string | null;
}