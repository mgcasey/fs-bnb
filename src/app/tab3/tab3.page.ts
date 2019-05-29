import { Component } from '@angular/core';

import { User } from '../models/user.model';  // use .. to go up to parent folder
import { Payment } from '../models/Payment.model'; 
//could use import { User, Payment } from '../models'
  //would have index.ts with export * from './payment.model' and same for user

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //new stuff 
  public users: Array<User>;
  public payments: Array<Payment>
  public loggedIn: boolean;
  //
  
  constructor() {

    //new stuff
    let user1 = new User();
    user1.firstName = "Mike";
    user1.lastName = "Case";

    let user2 = new User();
    user1.firstName = "Jane";
    user1.lastName = "Doe";

    this.users.push(user1);
    this.users.push(user2);

    loggedIn: false;
    


  }


}
