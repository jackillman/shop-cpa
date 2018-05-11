import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-shark-footer',
  templateUrl: './shark-footer.component.html',
  styleUrls: ['./shark-footer.component.css']
})
export class SharkFooterComponent implements OnInit {
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
