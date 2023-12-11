import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(public authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    if(this.authenticationService.getCurrentUser()){
      this.router.navigate(['about-me']);
    }
  }

  public login(){
    if(this.checkoutForm.value.email === 'test' && this.checkoutForm.value.password === 'test'){
      this.router.navigate(['about-me']);
    }
    
    // commented because backend for login will not be deployed
    //this.authenticationService.login(this.checkoutForm).subscribe((_ : any) => {
    //  this.router.navigate(['about-me']);
    //});
  }
}
