import { Component, OnInit } from '@angular/core';
import { ServsplacesService } from '../servsplaces.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-splaces',
  templateUrl: './splaces.component.html',
  styleUrls: ['./splaces.component.css']
})
export class SplacesComponent implements OnInit {
  greenFlag: boolean= false;
  touristPlaces: any;
  safeState: any
  warnState: any
  safe: any;
  warn: any;
  item: any
  displayedColumns :string[]= ['position', 'name', 'weight']
  constructor(private serv: ServsplacesService, private loc: Location) { }

  ngOnInit(): void {
  
    this.serv.getSafeStates()
    .subscribe(s=> this.safeState = s)
    this.serv.getWarnStates()
    .subscribe(ws=> this.warnState = ws)
  }
  onSelect(item: any){
    this.serv.getTouristPlaces(item)
    .subscribe(t=> this.touristPlaces= t);
    
    // console.log(this.safeState);
  }
  back(){
    this.loc.back();
  }
}


