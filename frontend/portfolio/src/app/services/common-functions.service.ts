import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor(private router: Router) { }

  public getCurrentRoute(){    
    return this.afterLastOccurrence(this.router.url, '/');
  }

  private afterLastOccurrence(string: string, char: string,) {
    return string.slice(string.lastIndexOf(char) + 1);
  }
}
