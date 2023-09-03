import { Component } from '@angular/core';
import {AbstractSearch} from "../../../shared/components/table/AbstractSearch";
import {ModalClass} from "../../../shared/modal/modal.component";
import {FormProblemComponent} from "./actions/form-problem/form-problem.component";
import {ColumnDefinition} from "../../../shared/components/table/ColumnDefinition";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent {
  request = new AbstractSearch('admin/problem');
  columns: ColumnDefinition[] = [
    {
      header: 'id',
      value: 'id',
    },
    {
      header: 'Full Name',
      value: 'fullName',
    },
    {
      header: 'Action',
      type: 'edit',
    },
  ];
  openForm(id: number = 0) {
    ModalClass.showModal(FormProblemComponent, 'Problem', id);
  }

}
