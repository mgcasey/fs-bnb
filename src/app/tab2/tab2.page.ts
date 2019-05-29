import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { rentalbnb } from '../models/rentalbnb.model'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public rentals: Array<rentalbnb> = [];

  constructor(private navCtrl: NavController ) {

    let rental1 = new rentalbnb();
    rental1.accomodation = "Back to Lisbon";
    rental1.location = "Lisbon, Portugal";
    rental1.price = 100;
    rental1.rentReview = "Best month of my life!"
    rental1.picture = "https://back-to-lisbon.webnode.com/_files/200000035-d03b7d133f/room6-0.jpg";
    rental1.avail = true;

    let rental2 = new rentalbnb();
    rental2.accomodation = "The Plaza";
    rental2.location = "New York City, USA";
    rental2.price = 800;
    rental2.rentReview = "Great week in the Big Apple. Would definitely stay here again."
    rental2.picture = "https://www.theplazany.com/wp-content/uploads/2016/02/Royal-Suite-2-1.jpg";
    rental2.avail = false;


    let rental3 = new rentalbnb();
    rental3.accomodation = "Hiking Abode";
    rental3.location = "Torres del Paine, Chile";
    rental3.price = 200;
    rental3.rentReview = "Loved the cabin. So cozy and great location to go hiking from the place.";
    rental3.picture = "http://static.trip101.com/paragraph_media/pictures/000/708/023/large/2d677f8b-7ac9-482e-ba20-2ce25532016b.jpg?1522643331";
    rental3.avail = false;
    

    this.rentals.push(rental1);
    this.rentals.push(rental2);
    this.rentals.push(rental3);


  }


  navToExplore(){
    this.navCtrl.navigateForward('tabs');
  }

}
