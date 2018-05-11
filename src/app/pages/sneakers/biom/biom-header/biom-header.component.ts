import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-biom-header',
  templateUrl: './biom-header.component.html',
  styleUrls: ['./biom-header.component.css']
})
export class BiomHeaderComponent implements OnInit {

  @Input() thread;
  @Input() subid;
  @Output() callPopupThanks = new EventEmitter<boolean>();

constructor(private logicService: LogicService) { }

ngOnInit() {}
callpopup() {
  this.callPopupThanks.emit();
}
submitForm(order){
  this.logicService.postData(order);
  this.callpopup();
}
}
