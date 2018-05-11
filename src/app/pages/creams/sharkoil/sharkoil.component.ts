import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { LogicService } from '../../../shared/logic.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sharkoil',
  templateUrl: './sharkoil.component.html',
  styleUrls: ['./sharkoil.component.css']
})
export class SharkoilComponent implements OnInit {

  constructor(private router:Router,private logicService: LogicService,private title:Title, private meta: Meta){
    title.setTitle("Крем Sharkoil");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Крем Sharkoil со скидкой"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
  }
  thread ="mU78";
  subid = "sharkoilru";
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @ViewChild('ModalThanks') ModalThanks: ModalDirective;
  isModalShown: boolean = false;
  isModalShownThanks: boolean = false;

  showModal(): void {
    this.isModalShown = true;
  }
  
  showModalThanks():void {
    this.isModalShownThanks = true;
    setTimeout(()=>this.router.navigateByUrl('/'),3000)
  }
 
  hideModal(): void {
    this.autoShownModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }
  callPopupWindow(inc){
    this.showModal();
  }
  ngOnInit() {
 
  }
  submitFormPop(order){
  
      this.logicService.postData(order);
      this.hideModal();
      this.showModalThanks();
    }
  

}
