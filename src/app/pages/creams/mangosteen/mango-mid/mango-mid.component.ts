import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { LogicService } from '../../../../shared/logic.service';

@Component({
  selector: 'app-mango-mid',
  templateUrl: './mango-mid.component.html',
  styleUrls: ['./mango-mid.component.css']
})
export class MangoMidComponent implements OnInit {

  @Input() thread;
  @Input() subid;
  @Output() callPopupThanks = new EventEmitter<boolean>();



  hour;
  minute;
  second;
  resetTimer(){
    this.hour = 2;
    this.second = 59;
    this.minute = 50;
  }
  constructor(private logicService: LogicService){

    this.resetTimer();
    setInterval(()=> this.tick(),1000)
  }
  ngOnInit(): void {
   
  }
  private tick():void{
    if(--this.second < 0 ){
      this.second = 59;
      if(--this.minute < 0){
        this.minute = 59;
        this.second = 59
        --this.hour
      }
    }
  }
  callpopup() {
    this.callPopupThanks.emit();
  }
  submitForm(order){
    this.logicService.postData(order);
    this.callpopup();
  }

}
