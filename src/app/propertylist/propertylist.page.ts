import { Component, OnInit } from '@angular/core';
import { rentalbnb } from '../models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.page.html',
  styleUrls: ['./propertylist.page.scss'],
})
export class PropertylistPage implements OnInit {

  public rentalList:  Array<rentalbnb> = [];
  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController
    ) { }
  

  ngOnInit(){
    console.log("Getting properties");
    this.httpClient.get("http://localhost:3000/properties/get/all")
      .subscribe(
        (response: any) => {
          console.log(response);
          this.rentalList = response;
        }
      );
          

  }

  navToProperty(property: rentalbnb){
    this.navCtrl
      .navigateForward('property-details', {
        queryParams: {
          // q: "ionic",
          // propertyLoc: property.location,
          propertyID: property.id
        }
      } );
}
}
