import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';

const routes: Routes = [
  { path: '', component: NewProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProjectsRoutingModule {}
