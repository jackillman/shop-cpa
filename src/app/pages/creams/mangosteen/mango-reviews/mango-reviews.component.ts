import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-mango-reviews',
  templateUrl: './mango-reviews.component.html',
  styleUrls: ['./mango-reviews.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, showIndicators: false } }
  ]
})

export class MangoReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
