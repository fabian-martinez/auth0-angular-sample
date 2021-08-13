import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  message:string = null;

  constructor(private server: ServerService) {}

  ngOnInit(): void {}

  getMessage(): void {
    this.server.getApiMessage().subscribe((result: Message) => {
      this.message = result.message;
     });
  }

  getSecuredMessage(): void {
    this.server.getSecureApiMessage().subscribe((result: Message) => {
      this.message = result.message;
     });
  }
}
