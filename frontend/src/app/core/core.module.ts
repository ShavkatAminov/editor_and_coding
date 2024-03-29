import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './layout/main/main.component';
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
  ]
})
export class CoreModule { }
