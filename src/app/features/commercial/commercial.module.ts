import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommercialComponent } from './components/commercial/commercial.component';
import { CommercialRoutingModule } from './commercial-routing.module';


@NgModule({
  declarations: [CommercialComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommercialRoutingModule ,
    HttpClientModule           //Http Client module in order to call Rest-APIs.
  ],
  // providers: [ContactService]  //Services (Dependency Injection).
})
export class CommercialModule { }
