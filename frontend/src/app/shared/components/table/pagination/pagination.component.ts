import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  totalPages: number = 1;
  _totalCount = 1;
  @Input() set totalCount(value: number) {
    this._totalCount = value;
    this.totalPages = Math.round((this._totalCount + this.perPage - 1) / this.perPage);
  }
  get totalCount() {
    return this._totalCount;
  }
  perPage = 10;
  @Input() currentPage: number = 1;
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();

  changeCurrentPage(value: number) {
    if(this.currentPage + value <= this.totalPages && this.currentPage + value >= 1) {
      this.currentPage += value;
      this.changePage.emit(this.currentPage);
    }
  }
}
