import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-defence4',
  templateUrl: './defence4.component.html',
  styleUrls: ['./defence4.component.css']
})
export class Defence4Component implements OnInit {
  
  @Output() onCallPopupWindow = new EventEmitter<boolean>();

  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor() { }

  ngOnInit() {
  }

}
