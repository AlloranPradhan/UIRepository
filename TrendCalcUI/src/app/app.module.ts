import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderModule } from 'angular-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Covid19StatsComponent } from './covid19Stats/covid19Stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplacesComponent } from './splaces/splaces.component';
import { HighRiskComponent } from './high-risk/high-risk.component';
import { AngularMaterialModule } from './angular-material.module';
import { SecurityComponent } from './security/security.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtClientService } from './jwt-client.service';
import { CovitourismGuard } from './covitourism.guard';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Covid19StatsComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    SplacesComponent,
    HighRiskComponent,
    SecurityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule

  ],
  providers: [
    JwtClientService,
    CovitourismGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
