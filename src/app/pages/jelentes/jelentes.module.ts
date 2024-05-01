import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JelentesRoutingModule } from './jelentes-routing.module';
import { JelentesComponent } from './jelentes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AramErtekPipe } from '../../shared/pipes/aram-ertek.pipe';
import { ValasztoeredmenyComponent } from './valasztoeredmeny/valasztoeredmeny.component';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    JelentesComponent,
    AramErtekPipe,
    ValasztoeredmenyComponent
  ],
  imports: [
    CommonModule,
    JelentesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ]
})
export class JelentesModule { }
