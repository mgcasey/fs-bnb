import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { rentalbnb } from '../models/rentalbnb.model'
import { NavController } from '@ionic/angular';
import { PropertyService } from '../services/property.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  private propertyID: number;
  public nameOfProperty: string;
  public currentProperty: rentalbnb;
  public rental: rentalbnb = new rentalbnb();

  public booking: any = {
    dateTo: "",
    dateFrom: "",
    userId: parseInt(localStorage.getItem("user_id")),
    propertyId: 0
  };

  public rentals: Array<rentalbnb> = [];


  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) { 
      this.propertyService.getAllRentals();
      //this.rentals = this.propertyService.rentals;

  }

  ngOnInit() {
    
    let arrow = (data: any) => {
      // this.nameOfProperty = data.params.propertyLoc;
      this.propertyID = data.params.propertyID;
      this.booking.propertyId = this.propertyID;
      this.httpClient.get("http://localhost:3000/properties/get/" + this.propertyID) //localStorage.getItem("property_id"))
      .subscribe(
        (response: any) => {
          console.log(response);
          this.rental = response;
        }
      );
      // this.currentProperty =
      //   this.propertyService.findRentalByID(this.propertyID);
    };

    this.activatedRoute.queryParamMap.subscribe(
      arrow
    );
  
  }

  navToSaved()
  {
    this.navCtrl.navigateBack('tabs/tab2');
  }

  book(){
    
    console.log("Submitting to the server.");
    console.log(this.booking);
    this.httpClient
      .post("http://localhost:3000/bookings", this.booking)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem("booking_id", response.id);
          
          //pass by id / query param and then can get
          this.navCtrl.navigateForward('tabs', {queryParams: {
            bookingId: response.id
          }}); 
        },
        (err) => {
          console.log(err);
          
        }
      );

  }



}
