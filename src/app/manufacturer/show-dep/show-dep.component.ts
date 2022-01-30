import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService,private ar:ActivatedRoute, private router:Router) { }
  ManufacturerList:any=[];
  //ManufacturerListWithoutFilter:any=[];

  ModalTitle?:string ;
  ActivateRetrieveComp?:boolean=false;
  ActivateEditComp?:boolean=false;
  man:any;

  ngOnInit(): void {
    this.refreshManList();
  }

  

  

  AddMft()
  {
  this.router.navigate(['/Manufacturer/Add']);

  }

  DeleteMft(item:any)
  {
    if(confirm('Do you want to Delete this Manufacturer??')){
      this.service.deleteManufacturer(item.ManufacturerID).subscribe(data=>{
        
        this.refreshManList();
      })
    }
  }

  EditMft(item:any)
  {
    this.man=item;
    this.ModalTitle="Edit Department";
    this.ActivateEditComp=true;
    this.router.navigate([`Manufacturer/Edit/${item.ManufacturerID}`]);
  

  }

  RetrieveMft(item:any){
    this.man=item;
    this.ModalTitle="Retreive Department";
    this.ActivateRetrieveComp=true;
    this.router.navigate([`Manufacturer/Retrieve/${item.ManufacturerID}`]);
    

    
  }



 

  closeClick(){
    this.ActivateRetrieveComp=false;
    this.refreshManList();
  }
 home(){
  this.router.navigate(['/Homepage/Admin'])
 }
  refreshManList(){
    this.service.getManList().subscribe(data=>{
      this.ManufacturerList=data;
    });
  }


}
