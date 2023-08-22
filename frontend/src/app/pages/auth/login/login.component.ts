import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BasicForm} from "../../../shared/form/basic.form";
import {FormRequest} from "../../../core/request/FormRequest";
import {HttpClientService} from "../../../core/http/http.client.service";
import {UserService} from "../../../core/user/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BasicForm {
  constructor(public override http: HttpClientService, private userService: UserService, private router: Router) {
    super(http);
  }

  override request = new FormRequest('users/login');
  override form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  override saveCallback(result: any) {
    super.saveCallback(result);
    this.userService.login(result['access_token']);
    this.router.navigate(['home']);
  }

}
