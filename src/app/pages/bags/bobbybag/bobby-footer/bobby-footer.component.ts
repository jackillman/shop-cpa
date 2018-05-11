import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-bobby-footer',
  templateUrl: './bobby-footer.component.html',
  styleUrls: ['./bobby-footer.component.css']
})
export class BobbyFooterComponent implements OnInit {
   @Output() onCallPopupWindow = new EventEmitter<boolean>();
	@Input() thread;
  @Input() subid;
	@Output() callPopupThanks = new EventEmitter<boolean>();
  popupWindow() {
        this.onCallPopupWindow.emit();
    }
  constructor(private logicService: LogicService) {}

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
