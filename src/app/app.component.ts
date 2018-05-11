import { Component, OnInit  } from '@angular/core';

import {Router, NavigationEnd, ActivatedRoute, Route} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  prod;
  src;
  comp;
  adv;
  country;
  

  private querySubscription: Subscription;
  constructor( private router:Router,private activeRoute: ActivatedRoute){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

    this.querySubscription = activeRoute.queryParams.subscribe(
      (queryParam: any) => {
          this.prod = queryParam['prod'];
          this.src = queryParam['src'];
          this.comp = queryParam['comp'];
          this.adv = queryParam['adv'];
          this.country = queryParam['country'];
          this.myswitch(this.prod);
    });
  }

  myswitch(prod){
    switch(prod) { 
      case "mangosteen": {
        this.router.navigateByUrl('mangosteen')
        break;
     }
  	
      case "sharkoil": {
        this.router.navigateByUrl('sharkoil')
        break;
     }
  	
     case "biom": {
        this.router.navigateByUrl('biom')
        break;
     }
  	
     case "bobbybag": {
      this.router.navigateByUrl('bobbybag')
      break;
    }
  	
     default: {
        console.log("Invalid choice");
        break;
     }
    }    
  }
  ngOnInit(): void {

  }
  

}
