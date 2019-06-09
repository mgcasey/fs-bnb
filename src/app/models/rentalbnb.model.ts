export class rentalbnb {
    public location: string;
    //public rentReview: string;
    public price: number;
    public name: string;
    public picture: string;
    //public avail: boolean;
    //public rating: number;
    id: number; //public automatically

//need to add address component,
// maybe instead of availability, have dates (somehow format MM/DD/YYYY)
//can export more than one class in same file, can also export values
//also should probably do RATING instead of REVIEW
    constructor(){
        this.location = "";
        //this.rentReview = "";
        this.price;
        //this.accomodation = "";
        this.picture = "";
        //this.avail;
        //this.rating;
        this.id = 0;

    }
}

/**
 * Array of properties - so use index! see how it looks (may not look good 
 * when shrink the browser)
 * 
 * Need to think about view model - rentals may have different data
 * so will need to be rendered differently
 * 
 * 
 */