import { Component, OnInit } from '@angular/core';
import { Find } from '../find';
import { CricapiService } from '../cricapi.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  config: any;
  val: string;
  list: Array<Find> = [];

  constructor(private cricapi: CricapiService, private route: RouterService) {
    this.val = "";
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.list.length
    };

  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }

  }

  getData(val) {
    this.cricapi.searchPlayer(val).subscribe(
      res => {
        this.list = res.data;
        for (let obj of this.list) {
          obj.status = true;
        }
      },
      err => {
        console.log(err)
      })
  }

  viewStats(data){
    this.route.tostatOpener(data.pid);
  }

}
