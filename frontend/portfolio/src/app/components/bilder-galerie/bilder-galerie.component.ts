import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bilder-galerie',
  templateUrl: './bilder-galerie.component.html',
  styleUrls: ['./bilder-galerie.component.css']
})
export class BilderGalerieComponent {
  constructor(private router: Router){}

  ngOnInit(){
    this.router.events.subscribe((event) => { 
      if (!(event instanceof NavigationEnd)) { 
          return; 
      } 
      window.scrollTo(0, 0) 
    }); 
  }
}
