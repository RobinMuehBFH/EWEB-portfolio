import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { LoginComponent } from './components/login/login.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BilderGalerieComponent } from './components/bilder-galerie/bilder-galerie.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'bilder-galerie', component: BilderGalerieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
