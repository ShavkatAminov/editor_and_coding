import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BasicForm} from "../../../shared/form/basic.form";
import {FormRequest} from "../../../core/request/FormRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasicForm {
  override request = new FormRequest('users/login');
  override form: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  override saveCallback(result: Object) {
    super.saveCallback(result);
  }

}
