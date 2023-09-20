import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicModalForm} from "../../../../../shared/form/basic.modal.form";
import {FormRequest} from "../../../../../core/request/FormRequest";
import {HttpClientService} from "../../../../../core/http/http.client.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-form-problem',
  templateUrl: './form-problem.component.html',
})
export class FormProblemComponent extends BasicModalForm {

  constructor(private fb: FormBuilder, public override http: HttpClientService) {
    super(http);
  }

  override request = new FormRequest('admin/problem');

  override form: FormGroup = new FormGroup({
    fullName: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    timeLimit: new FormControl(null, [Validators.required]),
    memoryLimit: new FormControl(null, [Validators.required]),
    tests: this.fb.array([]),
  });

  get tests() {
    return this.form.controls["tests"] as FormArray<FormGroup>;
  }

  override setData(data: any) {
    super.setData(data, (res: any) => {
      if(res && res.tests) {
        res.tests.forEach(() => {
          this.addTest();
        })
      }
    });
  }

  addTest() {
    let testForm = new FormGroup({
      id: new FormControl(null),
      input: new FormControl(null, [Validators.required]),
      output: new FormControl(null, [Validators.required]),
    });
    this.tests.push(testForm);
  }

  deleteTest(lessonIndex: number) {
    this.tests.removeAt(lessonIndex);
  }
}
