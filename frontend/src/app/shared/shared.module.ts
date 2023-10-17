import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import BasicInput from "./components/BasicInput";
import {ButtonComponent} from './components/button/button.component';
import {ErrorPopoverComponent} from "./components/error-popover/error-popover.component";
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/table/pagination/pagination.component';
import {HostDirective} from "./modal/host.directive";
import {ModalComponent} from "./modal/modal.component";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import {MatDialogModule} from "@angular/material/dialog";
import { TextareaComponent } from './components/textarea/textarea.component';
import { EditorComponent } from './components/editor/editor.component';
import {CodeEditorModule} from "@ngstack/code-editor";
import { AlertComponent } from './components/alert/alert.component';

export let InjectorInstance: Injector;
@NgModule({
  declarations: [
    InputComponent,
    BasicInput,
    ButtonComponent,
    ErrorPopoverComponent,
    TableComponent,
    PaginationComponent,
    HostDirective,
    ModalComponent,
    TextareaComponent,
    EditorComponent,
    AlertComponent
  ],
    exports: [
        InputComponent,
        ButtonComponent,
        TableComponent,
        TextareaComponent,
        EditorComponent,
        AlertComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkDrag,
    CdkDragHandle,
    MatDialogModule,
    CodeEditorModule
  ]
})
export class SharedModule {
  constructor(public injector:Injector) {
    InjectorInstance = injector
  }
}
