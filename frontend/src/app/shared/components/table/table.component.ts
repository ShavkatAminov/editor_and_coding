import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnDefinition} from "./ColumnDefinition";
import {BehaviorSubject} from "rxjs";
import {AbstractSearch} from "./AbstractSearch";
import {HttpClientService} from "../../../core/http/http.client.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private http: HttpClientService) {}
  @Input() columns: ColumnDefinition[] = [];
  @Input() request!: AbstractSearch;
  @Output() editClicked: EventEmitter<number> = new EventEmitter<number>();

  data: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.http.request(this.request).subscribe((result) => {
      this.data.next(result);
    })
  }
}
