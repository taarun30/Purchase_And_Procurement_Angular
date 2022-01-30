import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service: SharedService,private router:Router,private actRoute: ActivatedRoute) { }
  
 id?:any;
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

  ActivateEditComp?:boolean=false;

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id')
    this.service.retrieveManufacturer(this.id).subscribe(res=>{
      this.ManufacturerID = res.ManufacturerID;
      this.CompanyName = res.CompanyName;
      this.Firstname = res.Firstname;
      this.Lastname =res.Lastname;
      this.Address =res.Address;
      this.City = res.City;
      this.State = res.State;
      this.PostalCode = res.PostalCode;
      this.Country = res.Country;
      this.Phone = res.Phone;
      this.Email = res.Email;

    })

      
   
  }
  updateclick() {
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
    this.service.updateManufacturer(data).subscribe(res => { this.router.navigate(['/Manufacturer/Read']) });
 
  }

}
