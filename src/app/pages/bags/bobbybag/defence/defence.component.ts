import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-defence',
  templateUrl: './defence.component.html',
  styleUrls: ['./defence.component.css']
})
export class DefenceComponent implements OnInit {

  @Output() onCallPopupWindow = new EventEmitter<boolean>();

  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor() { }

  ngOnInit() {
  }

}
