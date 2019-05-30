import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { rentalbnb } from '../models/rentalbnb.model'
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  private propertyID: number;
  public nameOfProperty: string;
  public currentProperty: rentalbnb;

  public rentals: Array<rentalbnb> = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private navCtrl: NavController
  ) { 
      this.propertyService.getAllRentals();
      //this.rentals = this.propertyService.rentals;

  }

  ngOnInit() {
    // let receivedQueryParams = function(data) {
    //   console.log(data);
    //   console.log(data.params.propertyLoc);

      // /* will not work */ this.nameOfProperty = data.params.propertyLoc;
    //}

  
    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyLoc;
      this.propertyID = data.params.propertyID;

      //find right property by ID
      // this.rentals.forEach(
      //   (rental: rentalbnb) => {
      //     if(rental.id === this.propertyID) {
      //       //display this property
      //       this.currentProperty = rental;

      //     }
    
      //   }
      // )

      this.currentProperty = 
        this.propertyService.findRentalByID(this.propertyID);

      // if(!this.currentProperty) {
      //   alert("Property not found!");
      //   this.navCtrl.navToSaved();
      // }
    };

    this.activatedRoute.queryParamMap.subscribe(
      //receivedQueryParams
      // (data: any) => console.log(data.params.propertyLoc)
      arrow
    );
  
  }



}
