import { Component, OnInit,TemplateRef,ViewChild, EventEmitter, Output} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-silane-before-after',
  templateUrl: './silane-before-after.component.html',
  styleUrls: ['./silane-before-after.component.css']
})
export class SilaneBeforeAfterComponent implements OnInit {
  @ViewChild('autoShownModalAuto') autoShownModalAuto: ModalDirective;
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  isModalShownAuto: boolean = false;
 currentImage;
  effectImages = [{photo:"./assets/images/silane/1.jpg"},
                {photo:"./assets/images/silane/2.jpg"},
                {photo:"./assets/images/silane/3.jpg"},
                {photo:"./assets/images/silane/4.jpg"},
               
              ]
  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.isModalShownAuto = true;
  }
  hideModal(): void {
    this.autoShownModalAuto.hide();
  }
 
  onHidden(): void {
    this.isModalShownAuto = false;
  }
  popupba(inputImage){
    this.currentImage = inputImage;
    this.showModal();
  }
  popupWindow() {
    this.hideModal();
    this.onCallPopupWindow.emit();
}
}
