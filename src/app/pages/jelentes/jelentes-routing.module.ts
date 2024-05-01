import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JelentesComponent } from './jelentes.component';

const routes: Routes = [
  { path: '', component: JelentesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JelentesRoutingModule { }
