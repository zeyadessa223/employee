import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  imports: [CommonModule],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.scss'
})
export class TablePaginationComponent {
  @Output() pageChange = new EventEmitter<number>();
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5; // Add this input for itemsPerPage

  totalPages: number = 1;

  ngOnChanges(changes: SimpleChanges) {
      // Recalculate total pages on any relevant change:
      if (changes['totalItems'] || changes['itemsPerPage']) {
          this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      }
  }

  changePage(page: number) {
      if (page > 0 && page <= this.totalPages) {
          this.pageChange.emit(page);
      }
  }
}
