import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServDashboardService } from '../serv-dashboard.service';
import {AngularMaterialModule} from '../angular-material.module';
import { StatusData } from '../StatusData';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns : string[] = ['state','confCurr','newCurr','trend','lastUpdatedTime'];
  statusData: StatusData[]=[];
  dataSource = new MatTableDataSource<StatusData>();
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  constructor(private serv : ServDashboardService, private router: Router) {
    serv.getStatus()
    .subscribe(d=> {
      this.dataSource.data = d 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort= this.sort;
    })
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
  
  saferPlaces(){
    this.router.navigateByUrl('/splaces');
  }
  onSelect(item: any){
    console.log("Selected item is :", item);
  }
}
