import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignaturePadModule } from 'angular2-signaturepad';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamComponent } from './cam/cam.component';
import { SignatureComponent } from './signature/signature.component';
import { VideoComponent } from './video/video.component';

@NgModule({ 
  declarations: [
    AppComponent,
    CamComponent,
    SignatureComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SignaturePadModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
