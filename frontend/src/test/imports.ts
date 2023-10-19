import {SharedModule} from "../app/shared/shared.module";
import {CoreModule} from "../app/core/core.module";
import {AppModule} from "../app/app.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";


export const imports: any = [
  SharedModule,
  CoreModule,
  AppModule,
  RouterModule,
  HttpClientModule,
  CommonModule,
  ReactiveFormsModule,
]
