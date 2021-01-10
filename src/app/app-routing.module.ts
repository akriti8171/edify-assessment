import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserinfoComponent} from "./pages/userinfo/userinfo.component"


const routes: Routes = [
  { path: '', component:UserinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
