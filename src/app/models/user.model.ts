 export class User {
    public firstName: string;
    public lastName: string;

    constructor() {
        this.firstName ="";
        this.lastName="";
    }

}

//may need to hide implementation/enforce something 
//like using date of birth to calculate age instead
//of asking age directly