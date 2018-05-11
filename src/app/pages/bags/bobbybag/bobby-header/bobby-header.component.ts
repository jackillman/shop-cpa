import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-bobby-header',
  templateUrl: './bobby-header.component.html',
  styleUrls: ['./bobby-header.component.css']
})
export class BobbyHeaderComponent implements OnInit {

  @Output() onCallPopupWindow = new EventEmitter<boolean>();
  @Input() thread;
  @Input() subid;
  @Output() callPopupThanks = new EventEmitter<boolean>();

    constructor(private logicService: LogicService) {}


  popupWindow() {
    this.onCallPopupWindow.emit();
}
ngOnInit() {}
callpopup() {
  this.callPopupThanks.emit();
}
submitForm(order){
  this.logicService.postData(order);
  this.callpopup();
}
 
}
