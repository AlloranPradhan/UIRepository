import { Component, OnInit } from '@angular/core';
import { ServDashboardService } from '../serv-dashboard.service';
import { StatusData } from '../StatusData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid19Stats',
  templateUrl: './covid19Stats.component.html',
  styleUrls: ['./covid19Stats.component.css']
})
export class Covid19StatsComponent implements OnInit {
  headers = ["STATE/UNION TERRITORY","TOTAL CONFIRMED CASES","NEW CASE(S)","TREND","LAST UPDATED TIME"];
  flag: string = "";
  public data: any;
  constructor(private dashserv : ServDashboardService ,private router : Router) { }

  ngOnInit(): void {
   
    this.dashserv.getStatus()
      .subscribe((d : StatusData[])=>{
        this.data=d})   
  }

  saferPlaces(){
    this.router.navigateByUrl('/splaces');
  }
  onSelect(item: any){
    console.log("Selected item is :", item);
  }
}
