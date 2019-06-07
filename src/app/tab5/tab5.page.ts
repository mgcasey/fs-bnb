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
    this.actRoute.queryParamMap.subscribe(
      (parameters: ParamMap) => {
        console.log(parameters);
        const userId = localStorage.getItem("user_id");
        console.log("PROFILE USER ID: ", userId);
        // console.log(parameters.get("user_id"));

        // http://localhost:8100/profile?user_id=5&param_2=lol
        // ?
        // variable=value
        // &
        // variable2=value

        // const userId = parameters.get("user_id");

        // Express:
        // app.get("/api/users/:id", (req, res) ...);
        //this.http.get(`http://localhost:3000/api/users/${userId}`);

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

          /*
          Express:
            return res.json({
              id: 123,
              name: "",
              email: ""
            })
          */
        

        
      }
    );
  }
  // ngOnInit() {
      
  //   this.actRoute.queryParamMap.subscribe(
  //     (parameters: ParamMap) => {
  //       console.log(parameters);
  //       console.log(parameters.get("user_Id"));
  //       const userId = parameters.get("user_Id");

  //       this.httpClient
  //         .get("http://localhost:3000/users/" + userId)
  //         .subscribe(
  //           (response: User) => {
  //             console.log(response);
  //             this.user.name = response.name;
  //             this.user.email = response.email;
  //             this.user.id = response.id;
  //           }
  //         );
  //       //this.httpClient.get(`http://localhost:3000/users/get/${userId}`);
  //       //
        
  //       /*
  //       Express:
  //           return res.json({
  //             id:123, 
  //             name: "",
  //             email: ""
  //           })
  //       */
  //     }
  //   );
  //   // const getUser = (data: any) => {
  //   //   console.log(data.params.id);
  //   //   this.id = data.params.id;
  //   //   this.setUser(this.id);

  //   // };
  //   // this.actRoute.queryParamMap.subscribe(getUser);
  // }

  // setUser(id: number) {
  //   this.httpClient.get(`http://localhost:3000/users/get/${id}`)
  //     .subscribe( (response: User) => {
  //       console.log(response[0]);
  //       this.user = response[0];
  //       console.log(this.user);
  //     })
  // };

}
