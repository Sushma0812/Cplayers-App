// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { StatOpenerComponent } from './stat-opener/stat-opener.component';

// declaring the routes here
const routes: Routes = [
  // making the login as the default path of the app
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  //path to load login component
  {
    path: 'login',
    component: LoginComponent
  },
  // path to load the signup component
  {
    path: 'signup',
    component: SignupComponent
  },
  // path to login the dashboard component
  {
    path: 'dashboard',
    component: DashboardComponent,
    //once a user logs in he will be directed to login and will be able to access children paths
    children: [
      // making search as the default path of dashboard
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      // path of search component
      {
        path: 'search',
        component: SearchComponent
      },
      // path of stat component
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      // path of favourites coomponent
      {
        path: 'favs',
        component: FavouritesComponent,
      },
      // path of recommended component
      {
        path: 'recommended',
        component: RecommendedComponent
      },      
      // path of edituser component
      {
        path: 'edit-profile',
        component: EditProfileComponent
      },      
      // path of stats opener with providin the pid of the player clicked
      {
        path: 'statOpener/:pid/view',
        component: StatOpenerComponent,
        outlet: 'statOpener'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
