 export class User {
    public firstName: string;
    public lastName: string;
    public password: string;
    public rating: number;

    constructor() {
        this.firstName ="";
        this.lastName="";
        this.password = "";
        this.rating;

    }

}

//may need to hide implementation/enforce something 
//like using date of birth to calculate age instead
//of asking age directly