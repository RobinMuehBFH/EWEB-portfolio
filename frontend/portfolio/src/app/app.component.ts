import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CommonFunctionsService } from './services/common-functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  constructor(public authenticationService: AuthenticationService, public commonFunctionsService: CommonFunctionsService) { }
}

