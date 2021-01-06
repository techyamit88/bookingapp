import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
      FoodBeverageComponent,
      LifestyleComponent,
      WeddingsComponent,
      CelebrationsComponent,
      OffersComponent,
      AuthComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
