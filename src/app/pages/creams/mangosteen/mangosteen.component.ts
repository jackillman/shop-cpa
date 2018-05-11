import { Component, OnInit,TemplateRef,ViewChild   } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { LogicService } from '../../../shared/logic.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-mangosteen',
  templateUrl: './mangosteen.component.html',
  styleUrls: ['./mangosteen.component.css']
})
export class MangosteenComponent implements OnInit {

  thread ="mU77";
  subid = "MangoRu";

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @ViewChild('ModalThanks') ModalThanks: ModalDirective;
  isModalShown: boolean = false;
  isModalShownThanks: boolean = false;
  constructor(private router:Router,private logicService: LogicService,private title:Title, private meta: Meta){
    title.setTitle("Крем Mangosteen");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Крем Mangosteen со скидкой"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
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