import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { SearchComponent } from './search/search.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    RecommendedComponent,
    SearchComponent,
    FavouritesComponent,
    StatisticsComponent,
    HeaderComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
