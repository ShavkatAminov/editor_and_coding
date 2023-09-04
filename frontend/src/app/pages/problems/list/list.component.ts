import {Component, ViewChild} from '@angular/core';
import {AbstractSearch} from "../../../shared/components/table/AbstractSearch";
import {ColumnDefinition} from "../../../shared/components/table/ColumnDefinition";
import {TableComponent} from "../../../shared/components/table/table.component";
import {ModalClass} from "../../../shared/modal/modal.component";
import {FormProblemComponent} from "../../admin/problem/actions/form-problem/form-problem.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
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
  ];

  @ViewChild('table') table!: TableComponent;

  openForm(id: number = 0) {
    ModalClass.showModal(FormProblemComponent, 'Problem', id).subscribe(res => {
      if(res) {
        this.table.load();
      }
    });
  }
}
