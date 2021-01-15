import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCard, MatCardModule} from '@angular/material/card';
import { AngularMaterialModule } from './material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './Lifestyle/Lifestyle.component';
import { WeddingsComponent } from './Weddings/Weddings.component';
import { CelebrationsComponent } from './Celebrations/Celebrations.component';
import { OffersComponent } from './Offers/Offers.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Home/Home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import {RegisterComponent} from './user/Register/Register.component';
import {LoginComponent} from './user/Login/Login.component';
import {UserServiceService} from './Shared/user-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
      FoodBeverageComponent,
      LifestyleComponent,
      WeddingsComponent,
      CelebrationsComponent,
      OffersComponent,
      HomeComponent,
      HeaderComponent,
      SidenavListComponent,
      NavtabsComponent,
      LoginComponent,
      RegisterComponent,

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AngularMaterialModule,
    MatFormFieldModule

  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
