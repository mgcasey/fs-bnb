import { Injectable } from '@angular/core';
import { rentalbnb } from '../models/rentalbnb.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //make available across all pages by providing in root app
})


//singleton so that have central space for data and don't need to 
//keep repeating as array
export class PropertyService {

  public rentals: Array<rentalbnb> = [];


  constructor(private httpClient: HttpClient) { }

  
  //responsible for getting all data
  getAllRentals() {
    this.httpClient
      .get("http://localhost:3000/properties/get/all");
    // this.rentals = [];


  }

  //Returns null if not found.
  findRentalByID(id: number) {
    let foundRental: rentalbnb = null;

    this.httpClient
      .get("http://localhost:3000/properties/get/" + id);
   // return foundRental;
  }

}
