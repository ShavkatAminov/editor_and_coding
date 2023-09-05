import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ViewComponent} from './view/view.component';
import {CodeEditorModule} from "@ngstack/code-editor";


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [

    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'view',
        component: ViewComponent,
      }
    ]),

    CommonModule,
    SharedModule,
    CodeEditorModule
  ]
})
export class ProblemsModule {
}
