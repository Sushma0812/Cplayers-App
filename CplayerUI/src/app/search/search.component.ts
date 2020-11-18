import { Component, OnInit } from '@angular/core';
import { CricapiService } from '../cricapi.service';
import { Find } from '../find';
import { FavouritesService } from '../favourites.service';
import { Favourites } from '../favourite';
import { Recommended } from '../recommended';
import { RecommendedService } from '../recommended.service';
import { RouterService } from '../router.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

// search player by name functionality
export class SearchComponent implements OnInit {
  public recommendedPlayers;
  //public recommend: boolean;

  stat: boolean;
  config: any;
  val: string;
  fav: Favourites;
  recom: Recommended
  list:any = [];

  // Dependency Injection of cric api, fav service and recommended service
  constructor(private cricapi: CricapiService, private favser: FavouritesService,
    private recomser: RecommendedService, private route: RouterService) {
    this.val = "";
    // paginantion
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.list.length
    };

  }

  // Page events are stored in config
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }
    this.recomser.getData(sessionStorage.getItem('token')).subscribe(
      res => this.recommendedPlayers = res
    )

  }

  // It will call cric api service and get list of players
  getData(val) {
    
    console.log(val);
    this.cricapi.searchPlayer(val).subscribe(
      res => {
        this.list = res.data;
        for (let obj of this.list) {
          obj.status = true;
         this.recommendedPlayers.forEach(element => {
           if(obj.pid===element.pid)
           {
             obj.recommend=element.recommend;
           }
           
         });
            
         
        }
      },
      err => {
        console.log(err)
      })
  }

  // it will add a player into recommended as well as the favourites by calling there respective services
  addToFav(data) {
    data.status = false;
    this.cricapi.statsPlayer(data.pid).subscribe(
      res => {
        this.fav = res;
        this.recom = res;
        this.fav.status = false;
        this.fav.username = sessionStorage.getItem('username');
       
        this.favser.addData(this.fav, sessionStorage.getItem('token')).subscribe(
          res => console.log("added to recom"),
          err => console.log(err)
          )
      },
      err => console.log(err)
    )
  }




  addToRecom(data) {

    let self = this;
    data.recommend = true;

    //data.status = false;
    this.cricapi.statsPlayer(data.pid).subscribe(
      res => {
        this.fav = res;
        this.recom = res;
        //this.fav.status = false;
        this.fav.username = sessionStorage.getItem('username');
        this.recomser.addData(this.recom, sessionStorage.getItem('token')).subscribe(
          res => console.log("added to recommend"),
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }



  // it will remove a player from recommended as well as the favourites by calling there respective services
  removeFromFav(data) {
    data.status = true;
    this.recomser.deleteData(data.pid, sessionStorage.getItem('token')).subscribe(
      res => console.log("removed from fav"),
      err => console.log(err)
    )
    this.favser.deleteDataUser(sessionStorage.getItem('username'), data.pid, sessionStorage.getItem('token')).subscribe(
      res => console.log("removed from recom"),
      err => console.log(err)
    )
  }

  removeFromRecom(data) {
    data.recommend = false;
   // data.status = true;
    this.recomser.deleteData(data.pid, sessionStorage.getItem('token')).subscribe(
      res => console.log("removed from fav"),
      err => console.log(err)
    )
    
  }

}
