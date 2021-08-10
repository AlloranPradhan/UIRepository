import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  response: any;
  errorMessage: any;
  successMessage: any;
  loginForm: FormGroup
  response1: boolean;
  constructor(private fb: FormBuilder, private serv: JwtClientService, private router: Router) { }
  login(){
    this.serv.login(this.loginForm.value).subscribe(data=>this.response1=data);
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })    
  }
  /*public getAccessToken(authRequest: any){
    console.log(authRequest);
    let resp = this.serv.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data))
  }

  public accessApi(token:any){
    let resp= this.serv.welcome(token);
    resp.subscribe(data=>this.response=data);
  }*/
}


