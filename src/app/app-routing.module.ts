import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SignInComponent } from './Auth/SignIn/SignIn.component';
import { SignUpComponent } from './Auth/SignUp/SignUp.component';
import { CelebrationsComponent } from './Celebrations/Celebrations.component';
import { HomeComponent } from './Home/Home.component';
import { LifestyleComponent } from './Lifestyle/Lifestyle.component';
import { OffersComponent } from './Offers/Offers.component';
import { WeddingsComponent } from './Weddings/Weddings.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'Celebrations', component: CelebrationsComponent},
  {path: 'Lifestyle', component: LifestyleComponent},
  {path: 'Weddings', component: WeddingsComponent},
  {path: 'Offers', component: OffersComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Home', component: HomeComponent}
];

@NgModule (
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule{}
