import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private title:Title, private meta: Meta) {
    title.setTitle("Политика конфиденциальности");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Политика конфиденциальности"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
   }
  ngOnInit() {
  }

}
