import { Component } from '@angular/core';
import {BasicForm} from "../../../shared/form/basic.form";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends BasicForm {
  override form: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password_repeat: new FormControl(null, [Validators.required]),
  });
}
