import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: any = {
    name: "",
    email: "",
    password: ""
  };

  constructor(
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private httpClient: HttpClient
    ) {}

  // navToExplore(){
  //   this.navCtrl.navigateForward('tabs');
  // }
  
  ngOnInit() {
  }

  submit() {
    console.log("Submitting to the server.");
    console.log(this.user);
    this.httpClient
      .post("http://localhost:3000/users/authentication", this.user)
      .subscribe(
        (response: User) => {
          console.log(response);
          //pass by id / query param and then can get
          const navOptions: NavigationOptions = {
            queryParams: {
              userId: response.id
            }
          };
          
          this.navCtrl.navigateForward('tabs', navOptions);
        },
        (err) => {
          if(err.error.message) {
          
            this.presentAlert();
              // alert(err.error.message);
            
          }
          //could also do
          // alert(err.error.message);
        }
      );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Password and email do not match.',
      message: 'Please try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
