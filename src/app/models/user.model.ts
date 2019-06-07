 export class User {
    //public firstName: string;
    // public lastName: string;
    public name: string;
    public password: string;
    public email: string;
    public id: number;
    //public rating: number;
    

    constructor() {
        this.name="";
        this.password = "";
        this.email = "";
        this.id = 0;

    }

}

//may need to hide implementation/enforce something 
//like using date of birth to calculate age instead
//of asking age directly