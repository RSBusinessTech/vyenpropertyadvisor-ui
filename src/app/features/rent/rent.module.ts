import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RentComponent } from './components/rent/rent.component';
import { RentRoutingModule } from './rent-routing.module';

@NgModule({
  declarations: [RentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RentRoutingModule ,
  ],
})
export class RentModule { }
