import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor(private router: Router, public http: HttpClient) { }

  public getCurrentRoute(){    
    return this.afterLastOccurrence(this.router.url, '/');
  }

  public checkNavbar(){
    if(this.getCurrentRoute() === '' || this.getCurrentRoute() === 'login'){
      return false;
    }
    return true;
  }

  private afterLastOccurrence(string: string, char: string,) {
    return string.slice(string.lastIndexOf(char) + 1);
  }

  public getRandomDogFact() {
    return this.http.get<any>("https://dog-api.kinduff.com/api/facts");
  }
}
