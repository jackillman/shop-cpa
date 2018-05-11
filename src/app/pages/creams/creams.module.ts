import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 //import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule }   from '@angular/forms';
import { MangoHeaderComponent } from './mangosteen/mango-header/mango-header.component';
import { MangoWhyComponent } from './mangosteen/mango-why/mango-why.component';
import { MangoFunctionsComponent } from './mangosteen/mango-functions/mango-functions.component';
import { MangoOpinionComponent } from './mangosteen/mango-opinion/mango-opinion.component';
import { MangoMidComponent } from './mangosteen/mango-mid/mango-mid.component';
import { MangoSertificateComponent } from './mangosteen/mango-sertificate/mango-sertificate.component';

import { MangoFooterComponent } from './mangosteen/mango-footer/mango-footer.component';
import { MangoReviewsComponent } from './mangosteen/mango-reviews/mango-reviews.component';

import { SharkoilComponent } from './sharkoil/sharkoil.component';
import { SharkHeaderComponent } from './sharkoil/shark-header/shark-header.component';
import { SharkAdvComponent } from './sharkoil/shark-adv/shark-adv.component';
import { SharkPromoComponent } from './sharkoil/shark-promo/shark-promo.component';
import { SharkReviewComponent } from './sharkoil/shark-review/shark-review.component';
import { SharkSertComponent } from './sharkoil/shark-sert/shark-sert.component';
import { SharkAdv2Component } from './sharkoil/shark-adv2/shark-adv2.component';
import { SharkUseComponent } from './sharkoil/shark-use/shark-use.component';
import { SharkFooterComponent } from './sharkoil/shark-footer/shark-footer.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  declarations: [

    MangoHeaderComponent,
    MangoWhyComponent,
    MangoFunctionsComponent,
    MangoOpinionComponent,
    MangoMidComponent,
    MangoSertificateComponent,
    MangoReviewsComponent,
    MangoFooterComponent,

    SharkoilComponent,
    SharkHeaderComponent,
    SharkAdvComponent,
    SharkPromoComponent,
    SharkReviewComponent,
    SharkSertComponent,
    SharkAdv2Component,
    SharkUseComponent,
    SharkFooterComponent
  ],
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

    MangoHeaderComponent,
    MangoWhyComponent,
    MangoFunctionsComponent,
    MangoOpinionComponent,
    MangoMidComponent,
    MangoSertificateComponent,
    MangoReviewsComponent,
    MangoFooterComponent,
  
    SharkoilComponent,
    SharkHeaderComponent,
    SharkAdvComponent,
    SharkPromoComponent,
    SharkReviewComponent,
    SharkSertComponent,
    SharkAdv2Component]

})
export class CreamsModule { }
