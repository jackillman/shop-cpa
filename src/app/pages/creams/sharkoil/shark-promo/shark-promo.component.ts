import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-shark-promo',
  templateUrl: './shark-promo.component.html',
  styleUrls: ['./shark-promo.component.css']
})
export class SharkPromoComponent implements OnInit {

  @Input() thread;
  @Input() subid;
  @Output() callPopupThanks = new EventEmitter<boolean>();


constructor(private logicService: LogicService) { }

  ngOnInit() {
  }
  callpopup() {
    this.callPopupThanks.emit();
  }
  submitForm(order){
    this.logicService.postData(order);
    this.callpopup();
  }
}
