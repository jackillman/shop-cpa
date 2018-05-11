import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) {
    title.setTitle("Кроссовки");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Кроссовки со скидкой"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
   }

  ngOnInit() {
  }

}
