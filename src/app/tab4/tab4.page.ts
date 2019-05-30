import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { rentalbnb } from '../models/rentalbnb.model'
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public rentals: Array<rentalbnb> = [];
  private propertyService: PropertyService;

  constructor(private navCtrl: NavController ) {

    this.propertyService.getAllRentals();
    this.rentals = this.propertyService.rentals;
  }

  
  navToExplore(){
    this.navCtrl.navigateForward('tabs');
  }
  
  ngOnInit() {
  }

}
