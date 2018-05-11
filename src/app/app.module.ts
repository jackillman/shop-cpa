import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';


import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule,Routes } from '@angular/router';

import { SimpleTimer } from 'ng2-simple-timer';
import { LogicService } from './shared/logic.service';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CreamsComponent } from './pages/creams/creams.component';

import { MangosteenComponent } from './pages/creams/mangosteen/mangosteen.component';
import { HomeComponent } from './pages/home/home.component';
import { CreamsModule } from './pages/creams/creams.module';
import { BagsModule } from './pages/bags/bags.module';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { SneakersModule } from './pages/sneakers/sneakers.module';
import { BagsComponent } from './pages/bags/bags.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SilaneComponent } from './pages/for-car/silane/silane.component';
import { ForCarModule } from './pages/for-car/for-car.module';
import { ForCarComponent } from './pages/for-car/for-car.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



 import {environment} from '../environments/environment';
 import { AngularFireModule, FirebaseApp } from 'angularfire2';
 import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './shared/firebase.service';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuardService } from './shared/auth.service';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreamsComponent,
    SneakersComponent,
    MangosteenComponent,
    HomeComponent,
    BagsComponent,
    PrivacyPolicyComponent,
    ForCarComponent,
    SilaneComponent,
    AdminComponent,
    LoginComponent
 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BagsModule,
    ForCarModule,
    CreamsModule,
    SneakersModule,
    HttpClientModule,


    ModalModule.forRoot(), ScrollToModule.forRoot()
   
  ],
  providers: [LogicService,SimpleTimer,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
