import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mm2hComponent } from './components/mm2h/mm2h.component';

const routes: Routes = [
  { path: '', component: Mm2hComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mm2hRoutingModule { }
