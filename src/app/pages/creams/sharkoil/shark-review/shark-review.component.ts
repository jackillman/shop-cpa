import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-shark-review',
  templateUrl: './shark-review.component.html',
  styleUrls: ['./shark-review.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, showIndicators: false } }
  ]
})
export class SharkReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
