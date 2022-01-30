import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './homepage/admin-homepage/admin-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RetailerHomepageComponent } from './homepage/retailer-homepage/retailer-homepage.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddComponent } from './manufacturer/add/add.component';
import { DeleteComponent } from './manufacturer/delete/delete.component';
import { EditComponent } from './manufacturer/edit/edit.component';

import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { RetrieveComponent } from './manufacturer/retrieve/retrieve.component';
import { ShowDepComponent } from './manufacturer/show-dep/show-dep.component';
import { CustomizedlinkComponent } from './order/customizedlink/customizedlink.component';
import { CustomizedorderComponent } from './order/customizedorder/customizedorder.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './order/orders/orders.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [
  {
    path: 'Manufacturer', component: ManufacturerComponent, children: [
      { path: 'Read', component: ShowDepComponent },
      { path: 'Edit/:id', component: EditComponent },
      { path: 'Add', component: AddComponent },
      { path: 'Delete', component: DeleteComponent },
    {path:'Retrieve/:id',component:RetrieveComponent}]

    
  },
  {
    path:'Orders', component:OrderComponent, children:[
        
      {path:'link',component:CustomizedlinkComponent},
      {path:'Order',component:OrdersComponent},
    {path:'customizedorder',component:CustomizedorderComponent}]
  },
  {
    path:'Homepage',component:HomepageComponent,children:[
      {path:'Admin',component:AdminHomepageComponent},
      {
        path:'Retailer',component:RetailerHomepageComponent
      }
    ]
  },
  {
    path:'rating',component:RatingComponent
  },
  {
    path:'invoice',component:InvoiceComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
