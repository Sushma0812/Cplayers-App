import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { Favourites } from '../favourite';
import { RecommendedService } from '../recommended.service';
import { Recommended } from '../recommended';
import { CricapiService } from '../cricapi.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
// favourite component will show favourite players and will have the option to remove Players from favs
export class FavouritesComponent implements OnInit {

  list : Array<Favourites>;
  fav: Favourites;
  recom: Recommended

  // dependency injection of required services
  constructor(private favser : FavouritesService, private recomser : RecommendedService, private cricapi : CricapiService) { }

  // load all the favs of a particular user at the time of initialization
  ngOnInit(): void {
    this.favser.getData(sessionStorage.getItem('username'),sessionStorage.getItem('token')).subscribe(
      res => {
        this.list = res;
      },
      err => console.log(err)
    )    
  }

  // remove a player from favs of the particular user as well as send a decrease couter request to frontend
  removeFromFav(data){
    data.status = true;
    this.recomser.deleteData(data.pid, sessionStorage.getItem('token')).subscribe(
      res => this.favser.deleteDataUser(sessionStorage.getItem('username'), data.pid, sessionStorage.getItem('token')).subscribe(
        res => console.log(res),
        err => console.log(err)
      ),
      err => {
        if (err.statusText === "OK") {
          this.favser.deleteDataUser(sessionStorage.getItem('username'), data.pid, sessionStorage.getItem('token')).subscribe(
            res => location.reload(),
            err => console.log(err)
          )
        }
      }
    )
  }

}
