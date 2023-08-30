import { Component } from '@angular/core';
import {AbstractSearch} from "../../../shared/components/table/AbstractSearch";
import {ModalClass} from "../../../shared/modal/modal.component";
import {FormProblemComponent} from "./actions/form-problem/form-problem.component";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent {
  request = new AbstractSearch('admin/problem');

  openForm(id: number = 0) {
    ModalClass.showModal(FormProblemComponent, 'Problem')
  }
}
