import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route: RouterService){ }

  ngOnInit(): void {
  }
  tologin(){
    this.route.tologin()
  }
  tosignup(){
    this.route.tosignup()
  }
  collapsed(){
    document.querySelector("#navbarSupportedContent").classList.toggle("collapse");
  }    

}
