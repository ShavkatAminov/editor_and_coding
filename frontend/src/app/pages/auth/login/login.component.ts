import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BasicForm} from "../../../core/basic/basic.form";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasicForm {
  override form: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });
}
