import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import { LogicService } from '../../shared/logic.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private title:Title, private meta: Meta,private logicService:LogicService) {
    title.setTitle("Adminka");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Политика конфиденциальности"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
   }
   list
  ngOnInit() {
    this.list = this.logicService.getOrders();
    
    console.log(this.list)
  }

}
