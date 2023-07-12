import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: WidgetsComponent,
    }]),
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
