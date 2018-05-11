import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bobby-reviews',
  templateUrl: './bobby-reviews.component.html',
  styleUrls: ['./bobby-reviews.component.css']
})
export class BobbyReviewsComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();

  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor() { }

  ngOnInit() {
  }

}
