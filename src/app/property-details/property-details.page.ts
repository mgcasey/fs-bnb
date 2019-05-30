import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { rentalbnb } from '../models/rentalbnb.model'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  public nameOfProperty: string;
  private propertyID: number;
  public currentProperty: rentalbnb;

  public rentals: Array<rentalbnb> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { 
    let rental1 = new rentalbnb();
    rental1.accomodation = "Back to Lisbon";
    rental1.location = "Lisbon, Portugal";
    rental1.price = 100;
    rental1.rentReview = "Best month of my life!"
    rental1.picture = "https://back-to-lisbon.webnode.com/_files/200000035-d03b7d133f/room6-0.jpg";
    rental1.avail = true;
    rental1.rating = 4.9;
    rental1.id = 1;

    let rental2 = new rentalbnb();
    rental2.accomodation = "The Plaza";
    rental2.location = "New York City, USA";
    rental2.price = 800;
    rental2.rentReview = "Great week in the Big Apple. Would definitely stay here again."
    rental2.picture = "https://www.theplazany.com/wp-content/uploads/2016/02/Royal-Suite-2-1.jpg";
    rental2.avail = false;
    rental2.rating = 4.7;
    rental2.id = 2;


    let rental3 = new rentalbnb();
    rental3.accomodation = "Hiking Abode";
    rental3.location = "Torres del Paine, Chile";
    rental3.price = 200;
    rental3.rentReview = "Loved the cabin. So cozy and great location to go hiking from the place.";
    rental3.picture = "http://static.trip101.com/paragraph_media/pictures/000/708/023/large/2d677f8b-7ac9-482e-ba20-2ce25532016b.jpg?1522643331";
    rental3.avail = false;
    rental3.rating = 4.2;
    rental2.id = 3;

    
    

    this.rentals.push(rental1);
    this.rentals.push(rental2);
    this.rentals.push(rental3);



  }

  ngOnInit() {
    let receivedQueryParams = function(data) {
      console.log(data);
      console.log(data.params.propertyLoc);

      // /* will not work */ this.nameOfProperty = data.params.propertyLoc;
    }

    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyLoc;
      this.propertyID = data.params.propertyID;

      //find right property by ID
      this.rentals.forEach(
        (rental: rentalbnb) => {
          if(rental.id === this.propertyID) {
            //display this property
            this.currentProperty = rental;

          }
    
        }
      )
    }

    this.activatedRoute.queryParamMap.subscribe(
      //receivedQueryParams
      // (data: any) => console.log(data.params.propertyLoc)
      arrow
    );
  }

  navToSaved(){
    this.navCtrl.navigateForward('tabs/tab2');
  }

}
