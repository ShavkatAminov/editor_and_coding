import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [
    RouterModule.forChild([
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-in', component: LoginComponent},
    ]),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
