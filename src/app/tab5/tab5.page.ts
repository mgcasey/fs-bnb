import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  public user: User = new User();
  id: number;

  constructor(
    public alertController: AlertController,
    private actRoute: ActivatedRoute,
    private httpClient: HttpClient
    ) { 

      
    }

  async presentAlertPhone() {
    const alert = await this.alertController.create({
      header: `${this.user.name}'s Phone Number`,
      subHeader: 'Cell',
      message: `Press call to speak with ${this.user.name}.`,
      buttons: ['Cancel', 'Call']
    });

    await alert.present();
  }
  async presentAlertEmail() {
    const alert = await this.alertController.create({
      header: `${this.user.name}'s Email Address`,
      subHeader:`${this.user.email}`,
      message: `Press button below to email ${this.user.name}.`,
      buttons: ['Cancel', 'Email']
    });

    await alert.present();
  }

  ngOnInit() {
    this.actRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const userId = localStorage.getItem("user_id");
        console.log("PROFILE USER ID: ", userId);
        
        this.httpClient
          .get("http://localhost:3000/users/" + userId)
          .subscribe(
            (response: User) => {
              console.log(response);
              this.user.id = response.id;
              this.user.name = response.name;
              this.user.email = response.email;
            }
          );

    

        
      }
    );
  }
  

}
