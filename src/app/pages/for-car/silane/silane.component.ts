import { Component, OnInit,TemplateRef,ViewChild   } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { LogicService } from '../../../shared/logic.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-silane',
  templateUrl: './silane.component.html',
  styleUrls: ['./silane.component.css']
})
export class SilaneComponent implements OnInit {


  thread ="mU9q";
  subid = "silane-guard";

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @ViewChild('ModalThanks') ModalThanks: ModalDirective;
  isModalShown: boolean = false;
  isModalShownThanks: boolean = false;
  constructor(private router:Router,private logicService: LogicService,private title:Title, private meta: Meta){
    title.setTitle("Silane guard");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Средство от царапин со скидкой"},
      {name: "keywords", content: "жидкое стекло, средство от царапин, авто, царапины, silane, ws-guard, silane guard"}
    ],true)

  }

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
