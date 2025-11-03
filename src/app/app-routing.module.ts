import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'rent', loadChildren: () => import('./features/rent/rent.module').then(m => m.RentModule) },
  // { path: 'services', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',  // when clicked on a hyperlink, sometimes it will be landed at botton of next page, so to fix that issue we need to enable scrollPositionRestoration.
    anchorScrolling: 'enabled' // optional, only if you use fragment anchors
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
