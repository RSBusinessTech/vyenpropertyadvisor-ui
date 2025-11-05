import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mm2hComponent } from './components/mm2h/mm2h.component';
import { Mm2hRoutingModule } from './mm2hRoutingModule';

@NgModule({
  declarations: [Mm2hComponent],
  imports: [
    CommonModule,
    Mm2hRoutingModule,
    FormsModule  // <-- add this
  ]
})
export class Mm2hModule { }
