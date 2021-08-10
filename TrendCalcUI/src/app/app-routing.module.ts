import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Covid19StatsComponent } from './covid19Stats/covid19Stats.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighRiskComponent } from './high-risk/high-risk.component';
import { SplacesComponent } from './splaces/splaces.component';
import { SecurityComponent } from './security/security.component';
import { CovitourismGuard } from './covitourism.guard';

const routes: Routes = [
  {path: '', component: SecurityComponent},
  {path: 'home', component: HomeComponent},
  {path: 'covidStats', component: Covid19StatsComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [CovitourismGuard]},
  {path: 'covidStats/splaces', component:SplacesComponent},
  {path: 'covidStats/highrisk', component: HighRiskComponent},
  {path: 'dashboard/splaces', component:SplacesComponent},
  {path: 'dashboard/highrisk', component: HighRiskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
