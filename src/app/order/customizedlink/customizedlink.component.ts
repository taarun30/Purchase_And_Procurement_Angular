import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customizedlink',
  templateUrl: './customizedlink.component.html',
  styleUrls: ['./customizedlink.component.css']
})
export class CustomizedlinkComponent implements OnInit {

  public OrderList = [{InventoryId:'1', Productname: 'Dell Laptop' ,ProductPrice:'20000'},
   {InventoryId:'2', Productname: 'hp Laptop',ProductPrice:'20000' },
  { InventoryId:'3',Productname: 'Acer Laptop',ProductPrice:'20000' },
   { InventoryId:'4',Productname: 'JBL Heaset' ,ProductPrice:'20000'}, 
   { InventoryId:'5',Productname: 'Hp Mouse',ProductPrice:'20000' }]

  public CustomizedList: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Insert(Productname: string) {
    this.OrderList.forEach((elm: any, i: number) => {
      if (elm.InventoryId == Productname) {
        this.CustomizedList.push(elm);


      }
    }

    )
  }

  Custom() {
    this.CustomizedList;
    this.router.navigateByUrl('/Orders/customizedorder')
  }
  AllProducts() {
    this.router.navigate(['/Orders/Order'])
  }

  home() {
    this.router.navigate(['/Homepage/Retailer'])
  }

}

