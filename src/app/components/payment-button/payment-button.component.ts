import { Component, Input, OnInit } from '@angular/core';
import { PaymentInfo } from '../../models/payment-info';

@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.component.html',
  styles: [
  ]
})
export class PaymentButtonComponent implements OnInit {

  @Input() payment_info:PaymentInfo
 
//  payment_info = {
//     merchantId:this.merchantId,
//     accountId:this.accountId,
//     description:'Test PAYU',
//     referenceCode:this.referenceCode,
//     amount:20000,
//     tax:3193,
//     taxReturnBase:16806,
//     currency:"COP",
//     signature:this.generateSignature('20000','COP'),
//     test:1,
//     buyerEmail:"test@test.com",
//     responseUrl:"http://localhost:4040/profile" ,
//     confirmationUrl:"http://localhost:4040/" 
//   }

  constructor() { }

  ngOnInit(): void {
  }

  send(form){
    form.submit()
  }
}
