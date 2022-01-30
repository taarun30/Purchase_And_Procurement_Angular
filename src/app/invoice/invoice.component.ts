import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private service:SharedService,private actRoute: ActivatedRoute) { }
  
  public Id=[{RetailerId:'1',OrderId:'1',OrderDate:'2021-11-05'}];
  List:any=[];

  ngOnInit(): void {
    this.refreshInvList();
  }
  refreshInvList(){
    this.service.getList().subscribe(data=>{
      this.List=data;
    });
  }
}



