import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ShowDepComponent } from './manufacturer/show-dep/show-dep.component';

import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './manufacturer/edit/edit.component';
import { AddComponent } from './manufacturer/add/add.component';
import { DeleteComponent } from './manufacturer/delete/delete.component';
import { RetrieveComponent } from './manufacturer/retrieve/retrieve.component';
import { OrderComponent } from './order/order.component';
import { CustomizedlinkComponent } from './order/customizedlink/customizedlink.component';
import { OrdersComponent } from './order/orders/orders.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminHomepageComponent } from './homepage/admin-homepage/admin-homepage.component';
import { RetailerHomepageComponent } from './homepage/retailer-homepage/retailer-homepage.component';
import { CustomizedorderComponent } from './order/customizedorder/customizedorder.component';
import { RatingComponent } from './rating/rating.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerComponent,
    ShowDepComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
    RetrieveComponent,
    OrderComponent,
    CustomizedlinkComponent,
    OrdersComponent,
    HomepageComponent,
    AdminHomepageComponent,
    RetailerHomepageComponent,
    CustomizedorderComponent,
    RatingComponent,
    InvoiceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
