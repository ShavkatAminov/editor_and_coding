import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();

  changeCurrentPage(value: number) {
    if(this.currentPage + value <= this.totalPages && this.currentPage + value >= 1) {
      this.currentPage += value;
      this.changePage.emit(this.currentPage);
    }
  }
}
