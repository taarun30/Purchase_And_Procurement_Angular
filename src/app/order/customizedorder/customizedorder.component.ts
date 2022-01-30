import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customizedorder',
  templateUrl: './customizedorder.component.html',
  styleUrls: ['./customizedorder.component.css']
})
export class CustomizedorderComponent implements OnInit {

  public CustOrderList = [{InventoryId:'1', Productname: 'Dell Laptop' ,ProductPrice:'20000'},
   {InventoryId:'2', Productname: 'hp Laptop',ProductPrice:'20000' },
  { InventoryId:'3',Productname: 'Acer Laptop',ProductPrice:'20000' }]

  constructor(private service: SharedService,private router: Router) { }

  ngOnInit(): void {
    
  }

  home() {
    this.router.navigate(['/Homepage/Retailer'])
  }
  Order() {
    alert('Order Has Been Successfully Placed');
  }
 

}
