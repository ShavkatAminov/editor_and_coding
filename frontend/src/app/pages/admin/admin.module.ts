import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProblemComponent} from './problem/problem.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {WidgetsComponent} from "../home/widgets/widgets.component";
import { FormProblemComponent } from './problem/actions/form-problem/form-problem.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ProblemComponent,
        FormProblemComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '',
            component: ProblemComponent,
        }]),
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class AdminModule {
}
