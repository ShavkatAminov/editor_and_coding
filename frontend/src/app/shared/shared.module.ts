import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import BasicInput from "./components/BasicInput";
import {ButtonComponent} from './components/button/button.component';
import {ErrorPopoverComponent} from "./components/error-popover/error-popover.component";
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/table/pagination/pagination.component';


@NgModule({
  declarations: [
    InputComponent,
    BasicInput,
    ButtonComponent,
    ErrorPopoverComponent,
    TableComponent,
    PaginationComponent,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
