import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  
  currentUrl:String;

  constructor(private router:Router) { 
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        //console.log("current url",event.url); // event.url has current url
        this.currentUrl = event.url;
        // your code will goes here
      }
    });
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }
  ngOnChanges(): void {
    this.currentUrl = this.router.url;
  }
  


}
