import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44354"

  constructor( private http:HttpClient) {}

  getManList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ManufacturerDetails');
  }

  addManufacturer(val:any){
    return this.http.post(this.APIUrl+'/AddManufacturer',val);
  }

  updateManufacturer(val:any){
    return this.http.put(this.APIUrl+'/EditManufacturer',val);

    
  }
  deleteManufacturer(val:any){
    return this.http.delete(this.APIUrl+'/DeleteManufacturer/'+val);
  }

  retrieveManufacturer(val:any){
    return this.http.get<any>(this.APIUrl+'/GetManufacturerDetailsById/'+val)
  }

  getInvList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/api/Orders');
  }

  getList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Invoice');
  }
  
  updateInv(val:any){
    return this.http.put(this.APIUrl+'/EditInventory',val);
  
  }
}
