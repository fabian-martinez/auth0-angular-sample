import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  
  getApiMessage() {
    return this.http
      .get(`${env.dev.serverUrl}/api/messages/public-message`)
  }

  getSecureApiMessage() {
    return this.http
      .get(`${env.dev.serverUrl}/api/messages/protected-message`)
  }

}
