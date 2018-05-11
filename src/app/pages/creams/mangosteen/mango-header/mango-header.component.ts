import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mango-header',
  templateUrl: './mango-header.component.html',
  styleUrls: ['./mango-header.component.css']
})
export class MangoHeaderComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
}
}
