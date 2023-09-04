import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ColumnDefinition} from "./ColumnDefinition";
import {BehaviorSubject} from "rxjs";
import {AbstractSearch, Pageable} from "./AbstractSearch";
import {HttpClientService} from "../../../core/http/http.client.service";
import {PaginationComponent} from "./pagination/pagination.component";

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

  @ViewChild('pagination') pagination!: PaginationComponent;

  ngOnInit(): void {
    this.load();
  }


  changePage(page: number) {
    this.request.setPage(page);
    this.load();
  }

  load() {
    this.http.request(this.request).subscribe((result: any) => {
      this.data.next(result.data);
      this.pagination.totalCount = result.count;
    })
  }
}
