import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-defence3',
  templateUrl: './defence3.component.html',
  styleUrls: ['./defence3.component.css']
})
export class Defence3Component implements OnInit {
  
  @Output() onCallPopupWindow = new EventEmitter<boolean>();

  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor() { }

  ngOnInit() {
  }

}
