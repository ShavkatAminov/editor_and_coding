import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import BasicInput from "./components/BasicInput";


@NgModule({
  declarations: [
    InputComponent,
    BasicInput
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
