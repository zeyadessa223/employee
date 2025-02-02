import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users-table',
  imports: [CommonModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent {
  @Input() items: any[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5;

  displayedItems: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items'] || changes['currentPage'] || changes['itemsPerPage']) {
      this.updateDisplayedItems();
    }
  }

  private updateDisplayedItems() {
    const currentItemsPerPage = Math.min(this.itemsPerPage, this.items.length);  // Calculate it

    const startIndex = (this.currentPage - 1) * currentItemsPerPage; // Use it here
    let endIndex = startIndex + currentItemsPerPage;                    // And here

    if (endIndex > this.items.length) {
      endIndex = this.items.length;
    }

    this.displayedItems = this.items.slice(startIndex, endIndex);
  }
}
