import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-defence5',
  templateUrl: './defence5.component.html',
  styleUrls: ['./defence5.component.css']
})
export class Defence5Component implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();

  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor() { }

  ngOnInit() {
  }

}
