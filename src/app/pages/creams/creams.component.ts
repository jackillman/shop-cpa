import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-creams',
  templateUrl: './creams.component.html',
  styleUrls: ['./creams.component.css']
})
export class CreamsComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) {
    title.setTitle("Крема");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Крема со скидкой"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)

   }

  ngOnInit() {
  }

}
