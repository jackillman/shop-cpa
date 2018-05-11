import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-silane-method',
  templateUrl: './silane-method.component.html',
  styleUrls: ['./silane-method.component.css']
})
export class SilaneMethodComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
  }
}
