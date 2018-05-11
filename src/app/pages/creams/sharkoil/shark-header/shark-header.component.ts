import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogicService } from '../../../../shared/logic.service';
import { NgModel, NgForm} from '@angular/forms';

@Component({
  selector: 'app-shark-header',
  templateUrl: './shark-header.component.html',
  styleUrls: ['./shark-header.component.css']
})
export class SharkHeaderComponent implements OnInit {

  @Input() thread;
  @Input() subid;
  @Output() callPopupThanks = new EventEmitter<boolean>();
  @Output() onCallPopupWindow = new EventEmitter<boolean>();

constructor(private logicService: LogicService) { }

  ngOnInit() {
  }
  callpopup() {
    this.callPopupThanks.emit();
  }
  popupWindow() {
    this.onCallPopupWindow.emit();
}
  submitForm(order){
    this.logicService.postData(order);
    this.callpopup();
  }
}
