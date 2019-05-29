import { Component } from '@angular/core';

import { User } from '../models/user.model';  // use .. to go up to parent folder
import { email } from '../models/email.model';  

//could use import { User, Payment } from '../models'
  //would have index.ts with export * from './payment.model' and same for user

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 public emails: Array<email> = [];
  
  constructor() {

  let user1 = new User();
  user1.firstName = "Jane";
  user1.lastName = "Elle";


  let email1 = new email();
  email1.message = "Hey Michael! Just wanted to follow up on my latest booking with" +
  " your property in San Francisco. Contact me when you get a chance!";
  email1.hasRead = false;
  email1.sender = user1;

  
  let user2 = new User();
  user1.firstName = "Bob";
  user1.lastName = "Smith";
  
  let email2 = new email();
  email2.message = "Hey Michael! Thanks again for such a great property. My family and I loved our time in Seattle.";
  email2.hasRead = false;
  email2.sender = user1;
    


  }


}
