import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router){
  }
  ngOnInit(): void {
    if(this.authenticationService.getCurrentUser()){
      this.router.navigate(['about-me']);
    }
  }
}
