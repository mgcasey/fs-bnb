import { User } from "../models/user.model";


export class email {
    public hasRead: boolean;
    public message: string;
    public sender: User;

    constructor() {
        this.hasRead = false;
        this.message="";
        this.sender;
    }
}