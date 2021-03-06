import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchComponent } from './search/search.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { CalendarComponent } from './calendar/calendar.component';
import { SignupComponent } from './signup/signup.component';
//import { ContactComponent } from './contact/contact.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { RecommendedComponent } from './recommended/recommended.component';
import { StatOpenerComponent } from './stat-opener/stat-opener.component';
import { StatviewComponent } from './statview/statview.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    StatisticsComponent,
    FavouritesComponent,
    EdituserComponent,
    DashboardComponent,
  //  CalendarComponent,
    SignupComponent,
    //ContactComponent,
    RecommendedComponent,
    StatOpenerComponent,
    StatviewComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents :[StatviewComponent]
})
export class AppModule { }
