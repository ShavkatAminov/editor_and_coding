import { Component } from '@angular/core';
import {BasicForm} from "../../../core/basic/basic.form";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends BasicForm {
  override form: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
    password_repeat: new FormControl(),
  });
}
