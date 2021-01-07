import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './Lifestyle/Lifestyle.component';
import { WeddingsComponent } from './Weddings/Weddings.component';
import { CelebrationsComponent } from './Celebrations/Celebrations.component';
import { OffersComponent } from './Offers/Offers.component';
import { AuthComponent } from './Auth/Auth.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
      FoodBeverageComponent,
      LifestyleComponent,
      WeddingsComponent,
      CelebrationsComponent,
      OffersComponent,
      AuthComponent,
      HomeComponent,
      HeaderComponent,
      SidenavListComponent,
      NavtabsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
