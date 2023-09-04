import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ListComponent,
    }]),
    CommonModule,
    SharedModule
  ]
})
export class ProblemsModule { }
