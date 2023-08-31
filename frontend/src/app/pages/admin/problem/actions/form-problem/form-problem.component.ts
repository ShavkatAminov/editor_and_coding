import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../shared/form/basic.modal.form";
import {FormRequest} from "../../../../../core/request/FormRequest";

@Component({
  selector: 'app-form-problem',
  templateUrl: './form-problem.component.html',
})
export class FormProblemComponent extends BasicModalForm {

  override request = new FormRequest('admin/problem');

  override form: FormGroup = new FormGroup({
    fullName: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    timeLimit: new FormControl(null, [Validators.required]),
    memoryLimit: new FormControl(null, [Validators.required]),
  });
}
