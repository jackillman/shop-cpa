import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-silane-res',
  templateUrl: './silane-res.component.html',
  styleUrls: ['./silane-res.component.css']
})
export class SilaneResComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
}
}
