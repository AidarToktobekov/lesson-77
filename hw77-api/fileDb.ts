import { promises as fs } from 'fs';
import { IMessage, MessageWithoutId } from './types';
import { randomUUID } from 'crypto';
const fileName = './db.json';
let data:IMessage[] = []

const fileDb = {
    async init(){
        try{
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString());
        }catch(e){
            data = [];
        }
    },
    async getMessages(){
        return data;
    },
    async addMessage(item: MessageWithoutId){
        const message:IMessage = {
            ...item,
            id: randomUUID(),
        }

        data.push(message);
        await this.save();
        return message;
    },
    async save(){
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    }
}

export default fileDb;