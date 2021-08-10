import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-risk',
  templateUrl: './high-risk.component.html',
  styleUrls: ['./high-risk.component.css']
})
export class HighRiskComponent implements OnInit {

  constructor(private loc: Location) { }

  ngOnInit(): void {
  }
  back(){
    this.loc.back();
  }
}
