import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PaymentInfo } from '../../models/payment-info';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  ///TEMP PAYMENT INFO Apy Key for test: 4Vj8eK4rloUd272L48hsrarnUA
   payment_info:PaymentInfo = {
    merchantId:'508029',
    accountId:'512321',
    description:'Test PAYU',
    referenceCode:'TestPayU',
    amount:20000,
    tax:3193,
    taxReturnBase:16806,
    currency:"COP",
    signature:'7ee7cf808ce6a39b17481c54f2c57acc',
    test:1,
    buyerEmail:"test@test.com",
    responseUrl:"http://localhost:4040/profile" ,
    confirmationUrl:"http://localhost:4040/" 
  }
}