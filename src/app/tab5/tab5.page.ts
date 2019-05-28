import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {


  constructor(public alertController: AlertController) { }

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
      subHeader: 'Work email',
      message: 'Press button to email Michael.',
      buttons: ['Cancel', 'Email']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
