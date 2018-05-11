import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) {
    title.setTitle("Рюкзаки");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Рюкзаки со скидкой"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
   }

  ngOnInit() {
  }

}
