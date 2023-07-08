import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    RouterModule.forChild([
      {path: 'sign-up', component: SignUpComponent},
    ]),
    CommonModule,
  ]
})
export class AuthModule { }
