import { Component, OnInit,TemplateRef,ViewChild   } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-silane-photo',
  templateUrl: './silane-photo.component.html',
  styleUrls: ['./silane-photo.component.css']
})
export class SilanePhotoComponent implements OnInit {
  @ViewChild('autoShownModalAuto') autoShownModalAuto: ModalDirective;
  isModalShownAuto: boolean = false;
 currentImage;
  carsImages = [{photo:"./assets/images/silane/img11.jpg"},
                {photo:"./assets/images/silane/img21.jpg"},
                {photo:"./assets/images/silane/img31.jpg"},
                {photo:"./assets/images/silane/img41.jpg"},
                {photo:"./assets/images/silane/img6.jpg"},
                {photo:"./assets/images/silane/img7.jpg"},
                {photo:"./assets/images/silane/img8.jpg"},
                {photo:"./assets/images/silane/img9.jpg"}
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
  popupAuto(inputImage){
    this.currentImage = inputImage;
    this.showModal();
  }
}
