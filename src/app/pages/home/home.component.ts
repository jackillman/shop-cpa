import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) {
    title.setTitle("Интернет магазин");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Товары со скидкой"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
   }
  ngOnInit() {
  }

}
