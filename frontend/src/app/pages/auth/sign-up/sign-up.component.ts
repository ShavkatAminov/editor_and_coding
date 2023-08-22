import { Component } from '@angular/core';
import {BasicForm} from "../../../shared/form/basic.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormRequest} from "../../../core/request/FormRequest";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends BasicForm {

  override request = new FormRequest('users/sign-up');
  override form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    password_repeat: new FormControl(null, [Validators.required]),
  });

  override saveCallback(result: Object) {
    super.saveCallback(result);
    console.log(result);
  }
}
