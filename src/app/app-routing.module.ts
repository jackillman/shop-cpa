import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BobbyMainComponent } from './pages/bags/bobbybag/bobby-main.component';

import { AppComponent } from './app.component';
import { CreamsComponent } from './pages/creams/creams.component';

import { MangosteenComponent } from './pages/creams/mangosteen/mangosteen.component';
import { HomeComponent } from './pages/home/home.component';
import { SharkoilComponent } from './pages/creams/sharkoil/sharkoil.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { BiomComponent } from './pages/sneakers/biom/biom.component';
import { BagsComponent } from './pages/bags/bags.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SilaneComponent } from './pages/for-car/silane/silane.component';
import { ForCarComponent } from './pages/for-car/for-car.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuardService } from './shared/auth.service';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'creams', component: CreamsComponent},
  { path: 'sharkoil', component: SharkoilComponent},
  { path: 'mangosteen', component: MangosteenComponent},
  { path: 'creams', component: CreamsComponent},
  { path: 'bags', component: BagsComponent},
  { path: 'bobbybag', component: BobbyMainComponent},
  { path: 'sneakers', component: SneakersComponent},
  { path: 'biom', component: BiomComponent},
  { path: 'for-car', component: ForCarComponent},
  { path: 'silane', component: SilaneComponent},
  { path: 'policy', component: PrivacyPolicyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent,canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/'}
	// { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
