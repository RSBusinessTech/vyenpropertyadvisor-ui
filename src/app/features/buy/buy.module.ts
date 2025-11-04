import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RentRoutingModule } from './buy-routing.module';
import { BuyComponent } from './components/buy/buy.component';

@NgModule({
  declarations: [BuyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RentRoutingModule ,
    HttpClientModule           //Http Client module in order to call Rest-APIs.
  ],
  // providers: [ContactService]  //Services (Dependency Injection).
})
export class BuyModule { }
