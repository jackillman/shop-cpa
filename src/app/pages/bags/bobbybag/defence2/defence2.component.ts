import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-defence2',
  templateUrl: './defence2.component.html',
  styleUrls: ['./defence2.component.css']
})
export class Defence2Component implements OnInit {
  
  @Output() onCallPopupWindow = new EventEmitter<boolean>();

  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor() { }

  ngOnInit() {
  }

}
