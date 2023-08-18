import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import BasicInput from "./components/BasicInput";
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    InputComponent,
    BasicInput,
    ButtonComponent
  ],
    exports: [
        InputComponent,
        ButtonComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
