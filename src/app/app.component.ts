import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'auth0-angular-sample';

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document){}
    logout(): void {
      this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
