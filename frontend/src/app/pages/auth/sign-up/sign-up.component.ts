import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormRequest} from "../../../core/request/FormRequest";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent extends LoginComponent {

  override request = new FormRequest('users/sign-up');
  override form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    lastname: new FormControl(null, [Validators.required]),
    password_repeat: new FormControl(null, [Validators.required]),
  });

}
