import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { rentalbnb } from '../models/rentalbnb.model'
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public rentals: Array<rentalbnb> = [];
  

  constructor(private navCtrl: NavController,
    private propertyService: PropertyService ) {

    this.propertyService.getAllRentals();
    this.rentals = this.propertyService.rentals;
  }


  navToExplore(){
    this.navCtrl.navigateForward('tabs');
  }

  navToProperty(property: rentalbnb){
    

    this.navCtrl
      .navigateForward('property-details', {
        queryParams: {
          q: "ionic",
          propertyLoc: property.location,
          propertyID: property.id
        }
      } );

          /* 
        Another way to code above
    */
    // let navOptions: NavigationOptions = {
    //   queryParams: {
    //     q: "ionic",
    //     propertyLoc: property.location 
    //   }
    // }
    // this.navCtrl.navigateForward("abc", navOptions);

  }

}
