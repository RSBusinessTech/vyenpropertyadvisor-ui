import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';
import { NewProjectsRoutingModule } from './newProjects-routing.module';


@NgModule({
  declarations: [NewProjectsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewProjectsRoutingModule ,
    HttpClientModule           //Http Client module in order to call Rest-APIs.
  ],
  // providers: [ContactService]  //Services (Dependency Injection).
})
export class NewProjectsModule { }
