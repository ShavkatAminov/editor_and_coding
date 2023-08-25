import {Component, Input, OnInit} from '@angular/core';
import {ColumnDefinition} from "./ColumnDefinition";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columns: ColumnDefinition[] = [];

  data: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  ngOnInit(): void {

  }
}
