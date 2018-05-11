import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 //import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BiomHeaderComponent } from './biom/biom-header/biom-header.component';
import { BiomAdvComponent } from './biom/biom-adv/biom-adv.component';

import { BiomHowComponent } from './biom/biom-how/biom-how.component';
import { BiomReviewComponent } from './biom/biom-review/biom-review.component';
import { BiomFooterComponent } from './biom/biom-footer/biom-footer.component';
import { BiomComponent } from './biom/biom.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
   BiomComponent,
  BiomHeaderComponent,
  BiomAdvComponent,
  BiomHowComponent,
  BiomReviewComponent,
  BiomFooterComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ScrollToModule.forRoot()
    // AppRoutingModule
   
  ],
  exports:[  
    BiomComponent,
    BiomHeaderComponent,
  BiomAdvComponent,

  BiomHowComponent,
  BiomReviewComponent,
  BiomFooterComponent
]

})
export class SneakersModule { }
