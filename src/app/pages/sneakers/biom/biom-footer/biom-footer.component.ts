import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { NgModel, NgForm} from '@angular/forms';

import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-biom-footer',
  templateUrl: './biom-footer.component.html',
  styleUrls: ['./biom-footer.component.css']
})
export class BiomFooterComponent implements OnInit {
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
