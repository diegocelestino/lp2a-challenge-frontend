import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import {CoreModule} from "../core/core.module";
import { DetailComponent } from './detail/detail.component';
import {ClientType} from "../core/pipes/client-type";
import {Gender} from "../core/pipes/gender";


@NgModule({
  declarations: [
    MainComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    ClientType,
    Gender
  ]
})
export class PagesModule { }
