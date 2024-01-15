import { Component } from '@angular/core';
import { CommonFunctionsService } from 'src/app/services/common-functions.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  dogFact: any;
  constructor(private commonFunctionService: CommonFunctionsService){}

  ngOnInit(){
    this.loadDogFact();
  } 

  public loadDogFact() {
    this.commonFunctionService.getRandomDogFact().subscribe((data) => {
      this.dogFact = data.facts[0];
    });
  }
}
