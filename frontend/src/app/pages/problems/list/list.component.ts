import {Component, ViewChild} from '@angular/core';
import {AbstractSearch} from "../../../shared/components/table/AbstractSearch";
import {ColumnDefinition} from "../../../shared/components/table/ColumnDefinition";
import {TableComponent} from "../../../shared/components/table/table.component";
import {ModalClass} from "../../../shared/modal/modal.component";
import {FormProblemComponent} from "../../admin/problem/actions/form-problem/form-problem.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private router: Router) {
  }
  request = new AbstractSearch('problems');
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
      type: 'view',
    },
  ];

  view(id: number) {
    this.router.navigate(['problems/view'], {queryParams: {id: id}});
  }

  @ViewChild('table') table!: TableComponent;
}
