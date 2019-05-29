import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { rentalbnb } from '../models/rentalbnb.model'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public rentals: Array<rentalbnb>;


  constructor(private navCtrl: NavController ) {

    let rental1 = new rentalbnb();
    rental1.accomodation = "Back to Lisbon";
    rental1.location = "Lisbon, Portugal";
    rental1.price = 100;
    rental1.rentReview = "Best month of my life!"
    rental1.picture = "https://www.cac.es/va/hemisferic/descubre-el-hemisferic/descubre-el-hemisferic.html";
 

    let rental2 = new rentalbnb();
    rental2.accomodation = "The Plaza";
    rental2.location = "New York City, USA";
    rental2.price = 800;
    rental2.rentReview = "Great week in the Big Apple. Would definitely stay here again."
    rental2.picture = "https://www.theplazany.com/wp-content/uploads/2016/02/Royal-Suite-2-1.jpg";

    let rental3 = new rentalbnb();
    rental3.accomodation = "Hiking Abode";
    rental3.location = "Torres del Paine, Chile";
    rental3.price = 200;
    rental3.rentReview = "Loved the cabin. So cozy and great location to go hiking from the place";
    rental3.picture = "http://static.trip101.com/paragraph_media/pictures/000/708/023/large/2d677f8b-7ac9-482e-ba20-2ce25532016b.jpg?1522643331";
 






  }

  navToExplore(){
    this.navCtrl.navigateForward('tabs');
  }
  
  ngOnInit() {
  }

}
