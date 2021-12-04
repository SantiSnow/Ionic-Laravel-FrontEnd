export class Task{
    "id": number;
    "title": string;
    "user_id": number;
    "created_at": string;
    "updated_at": string;
    "done": number
 
    constructor(id: number, title: string, user_id: number, created_at: string, updated_at: string, done: number){
        this.id = id;
        this.title = title;
        this.user_id = user_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.done = done;
    }
}