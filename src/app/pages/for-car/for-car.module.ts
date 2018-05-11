import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule }   from '@angular/forms';

import { SilaneHeaderComponent } from './silane/silane-header/silane-header.component';
import { SilaneAdvComponent } from './silane/silane-adv/silane-adv.component';
import { SilaneResComponent } from './silane/silane-res/silane-res.component';
import { SilaneSpecComponent } from './silane/silane-spec/silane-spec.component';
import { SilaneAboutComponent } from './silane/silane-about/silane-about.component';
import { SilaneReviewComponent } from './silane/silane-review/silane-review.component';
import { SilanePhotoComponent } from './silane/silane-photo/silane-photo.component';
import { SilaneMethodComponent } from './silane/silane-method/silane-method.component';
import { SilaneBeforeAfterComponent } from './silane/silane-before-after/silane-before-after.component';
import { SilaneFaqComponent } from './silane/silane-faq/silane-faq.component';
import { SilaneFooterComponent } from './silane/silane-footer/silane-footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({

  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  declarations: [
    SilaneHeaderComponent,
    SilaneAdvComponent,
    SilaneResComponent,
    SilaneSpecComponent,
    SilaneAboutComponent,
    SilaneReviewComponent,
    SilanePhotoComponent,
    SilaneMethodComponent,
    SilaneBeforeAfterComponent,
    SilaneFaqComponent,
    SilaneFooterComponent

  ],
  exports:[ 
    SilaneHeaderComponent,
    SilaneAdvComponent,
    SilaneResComponent,
    SilaneSpecComponent,
    SilaneAboutComponent,
    SilaneReviewComponent,
    SilanePhotoComponent,
    SilaneMethodComponent,
    SilaneBeforeAfterComponent,
    SilaneFaqComponent,
    SilaneFooterComponent
  ]
})
export class ForCarModule { }
