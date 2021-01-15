import {NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './Celebrations/Celebrations.component';
import { HomeComponent } from './Home/Home.component';
import { LifestyleComponent } from './Lifestyle/Lifestyle.component';
import { OffersComponent } from './Offers/Offers.component';
import { LoginComponent } from './user/Login/Login.component';
import { RegisterComponent } from './user/Register/Register.component';
import { WeddingsComponent } from './Weddings/Weddings.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'Celebrations', component: CelebrationsComponent},
  {path: 'Lifestyle', component: LifestyleComponent},
  {path: 'Weddings', component: WeddingsComponent},
  {path: 'Offers', component: OffersComponent},
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Join', component: RegisterComponent}
];

@NgModule (
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule{}
