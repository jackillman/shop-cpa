import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthGuardService } from '../../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private title:Title, private meta: Meta,private router:Router,private authServive: AuthGuardService) {
    title.setTitle("Log In");
    meta.addTags([
      {name:"author", content: "jackill"},
      {name:"description", content: "Логинимся"},
      {name: "keywords", content: "рюкзаки, кроссовки, экко, биом, акулий жир, крем, крем от растяжек, рюкзак бобби, мангостин, sharkoil,mangosteen,ecco,biom,bobby"}
    ],true)
   }
  ngOnInit() {
  }
  login(form: NgForm){
    
    if (form.value.myname=="jack" && form.value.mypass == "jack"){
      if( this.authServive.canActivate()){
        this.router.navigateByUrl("/admin")
        } 
      } else {
        this.router.navigateByUrl("/")
    }

   
   
    // if(form.name=="jack" && form.password =="jack"){
    //   this.router.navigate(['/admin']
    // }
    
  }

}
