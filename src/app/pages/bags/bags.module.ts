import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 //import { AppRoutingModule } from './app-routing.module';




import { BobbyMainComponent } from './bobbybag/bobby-main.component';
import { BobbyHeaderComponent } from './bobbybag/bobby-header/bobby-header.component';
import { AdvantagesComponent } from './bobbybag/advantages/advantages.component';
import { DefenceComponent } from './bobbybag/defence/defence.component';
import { Defence2Component } from './bobbybag/defence2/defence2.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Defence3Component } from './bobbybag/defence3/defence3.component';
import { BobbyMidComponent } from './bobbybag/bobby-mid/bobby-mid.component';
import { Defence4Component } from './bobbybag/defence4/defence4.component';
import { Defence5Component } from './bobbybag/defence5/defence5.component';
import { BobbyReviewsComponent } from './bobbybag/bobby-reviews/bobby-reviews.component';
import { BobbyHowComponent } from './bobbybag/bobby-how/bobby-how.component';
import { BobbyFooterComponent } from './bobbybag/bobby-footer/bobby-footer.component';
@NgModule({
  declarations: [
    BobbyHeaderComponent,
    AdvantagesComponent,
    DefenceComponent,
    Defence2Component,
    BobbyMainComponent,
    Defence3Component,
    BobbyMidComponent,
    Defence4Component,
    Defence5Component,
    BobbyReviewsComponent,
    BobbyHowComponent,
    BobbyFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot()
    // AppRoutingModule
   
  ],
  exports:[  
    BobbyHeaderComponent,
    AdvantagesComponent,
    DefenceComponent,
    Defence2Component,
    BobbyMainComponent,
    Defence3Component,
    BobbyMidComponent,
    Defence4Component,
    Defence5Component,
    BobbyReviewsComponent,
    BobbyHowComponent,
    BobbyFooterComponent]

})
export class BagsModule { }
