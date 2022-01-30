import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  InventoryList: any = [];

  data: any[] | undefined;
  qty: any;
  public ProductDetails: any = [];


  //public departments:Array<IDepartment>=[];

  //public InventoryId:any=null;
  //public Productname:any;
  //public ProductDescription:any;
  //public ProductPrice:any;



  constructor(private service: SharedService, private ar: ActivatedRoute, private router: Router) {
    this.qty = 1;
  }

  ngOnInit(): void {
    this.refreshInvList();
  }
  refreshInvList() {
    this.service.getInvList().subscribe(data => {
      this.InventoryList = data;
    });
  }

  /*incrementQty() {
    console.log(this.qty + 1);
    this.qty += 1;

  }

  decrementQty() {
    if (this.qty - 1 < 1) {
      this.qty = 1
      console.log('1->' + this.qty);
    } else {
      this.qty -= 1;
      console.log('2->' + this.qty);
    }
  }*/
  Order() {
    alert('Order Has Been Successfully Placed');
  }

  SearchProduct(Productname: string) {
    console.log(this.InventoryList);

    this.InventoryList.forEach((elm: any, i: number) => {
      if (elm.InventoryId == Productname) {
        this.ProductDetails.push(elm);
        

      }
    }
    )
  }
  



}







