import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-biom-adv',
  templateUrl: './biom-adv.component.html',
  styleUrls: ['./biom-adv.component.css']
})
export class BiomAdvComponent implements OnInit {
  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  slides = [
    {image: './assets/images/biom/408-11.jpg'},
    {image: './assets/images/biom/404.jpg'},
    {image: './assets/images/biom/401.jpg'},
    {image: './assets/images/biom/405.jpg'},
    {image: './assets/images/biom/407.jpg'}
  ];
  showIndicator = true;
 
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
}
}
