import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RentComponent } from './components/rent/rent.component';
import { RentRoutingModule } from './rent-routing.module';


@NgModule({
  declarations: [RentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RentRoutingModule ,
    HttpClientModule           //Http Client module in order to call Rest-APIs.
  ],
  // providers: [ContactService]  //Services (Dependency Injection).
})
export class RentModule { }
