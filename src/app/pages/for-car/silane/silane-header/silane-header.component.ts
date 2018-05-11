import { Component, OnInit, EventEmitter, Output,TemplateRef,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-silane-header',
  templateUrl: './silane-header.component.html',
  styleUrls: ['./silane-header.component.css']
})
export class SilaneHeaderComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  @ViewChild('autoShownModalVideo') autoShownModalVideo: ModalDirective;
  isModalShownVideo: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
  }

  showModal(): void {
    this.isModalShownVideo = true;
  }
  
  hideModal(): void {
    this.autoShownModalVideo.hide();
  }
  
  onHidden(): void {
    this.isModalShownVideo = false;
  }
  callPopupWindowVideo(){
    this.showModal();
  }
}
