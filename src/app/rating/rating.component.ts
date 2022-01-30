import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  InventoryList: any = [];
  public Product: any = {};

  qty: any;
  Rating?: any;

  constructor(private service: SharedService) {
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


  Search(Productname: string) {
    console.log(this.InventoryList);

    this.InventoryList.forEach((val: any, i: number) => {
      if (val.InventoryId == Productname) {
        this.Product = val;
      }
    }

    )
  }

  incrementQty() {
    
    
    if(this.qty<5){
      this.qty += 1;
    }
    console.log(this.qty);

  }

  decrementQty() {
    if (this.qty - 1 < 1) {
      this.qty = 1
      console.log('1->' + this.qty);
    } else {
      this.qty -= 1;
      console.log('2->' + this.qty);
    }
  }


  Rate() {
    //alert('Rating has been done');
    let data = {
      
    }
  }

}
