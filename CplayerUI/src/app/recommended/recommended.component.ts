import { Component, OnInit } from '@angular/core';
import { RecommendedService } from '../recommended.service';
import { RouterService } from '../router.service';
import { window } from 'rxjs/internal/operators/window';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  list: Array<any>;

  constructor(private recomser: RecommendedService, private route: RouterService) { }

  // get all the recommended data from our DB
  ngOnInit(): void {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }

    this.recomser.getData(sessionStorage.getItem('token')).subscribe(
      res => this.list = res
    )
  }

  public removeFromRecom(data){
    let self = this;
   this.list=this.list.filter(function(data1){
     return data.pid != data1.pid;
   });

   
    this.recomser.deleteData(data.pid, sessionStorage.getItem('token')).subscribe(
      res => 
      {
        
      }
    )
  }

}
