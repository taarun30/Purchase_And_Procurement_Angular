import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service: SharedService, private router: Router) { }

  ManufacturerID?: string;
  CompanyName?: string;
  Firstname?: string;
  Lastname?: string;
  Address?: string;
  City?: string;
  State?: string;
  PostalCode?: string;
  Country?: string;
  Phone?: string;
  Email?: string;


  ngOnInit(): void {

  }


  addclick() {
    let data = {
      ManufacturerID: this.ManufacturerID,
      CompanyName: this.CompanyName,
      Firstname: this.Firstname,
      Lastname: this.Lastname,
      Address: this.Address,
      City: this.City,
      State: this.State,
      PostalCode: this.PostalCode,
      Country: this.Country,
      Phone: this.Phone,
      Email: this.Email
    }
    this.service.addManufacturer(data).subscribe(res => { this.router.navigate(['/Manufacturer/Read']) })

  }


}


