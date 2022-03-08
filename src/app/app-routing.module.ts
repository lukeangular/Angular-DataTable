import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatatableComponent } from './components/adatatable/adatatable.component';
import { HomeComponent } from './components/home/home.component';
import { NdatableComponent } from './components/ndatable/ndatable.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'ndatatable', component:NdatableComponent},
  {path:'adatatable', component:AdatatableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
