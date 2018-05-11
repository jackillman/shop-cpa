import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-silane-spec',
  templateUrl: './silane-spec.component.html',
  styleUrls: ['./silane-spec.component.css']
})
export class SilaneSpecComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
}
}
