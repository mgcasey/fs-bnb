 export class User {
    //public firstName: string;
    // public lastName: string;
    public name: string;
    public password: string;
    public email: string;
    //public rating: number;
    

    constructor() {
        this.name="";
        this.password = "";
        this.email = "";

    }

}

//may need to hide implementation/enforce something 
//like using date of birth to calculate age instead
//of asking age directly