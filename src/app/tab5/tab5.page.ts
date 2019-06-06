import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  user: User = new User();
  id: number;

  constructor(
    public alertController: AlertController,
    private actRoute: ActivatedRoute,
    private httpClient: HttpClient
    ) { }

  async presentAlertPhone() {
    const alert = await this.alertController.create({
      header: "Michael's Phone Number",
      subHeader: 'Cell',
      message: 'Press call to speak with Michael.',
      buttons: ['Cancel', 'Call']
    });

    await alert.present();
  }
  async presentAlertEmail() {
    const alert = await this.alertController.create({
      header: "Michael's Email Address",
      subHeader:"hi", //`${user.email}`,
      message: 'Press button to email Michael.',
      buttons: ['Cancel', 'Email']
    });

    await alert.present();
  }

  ngOnInit() {
    const getUser = (data: any) => {
      console.log(data.params.id);
      this.id = data.params.id;
      this.setUser(this.id);

    };
    this.actRoute.queryParamMap.subscribe(getUser);
  }

  setUser(id: number) {
    this.httpClient.get(`http://localhost:3000/users/get/${id}`)
      .subscribe( (response: User) => {
        console.log(response[0]);
        this.user = response[0];
        console.log(this.user);
      })
  };

}
