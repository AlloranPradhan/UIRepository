import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CamComponent } from './cam/cam.component';
import { SignatureComponent } from './signature/signature.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  // {path: 'home', component: AppComponent},
  {path: '', pathMatch: 'full', component: SignatureComponent},
  {path: 'cam', component: VideoComponent},
  {path: 'sign', component: SignatureComponent},
  // {path: 'cam', component: CamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
