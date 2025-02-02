import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UsersTableComponent } from '../users-table/users-table.component';
import { TablePaginationComponent } from '../table-pagination/table-pagination.component';
import { CreatorDataComponent } from '../creator-data/creator-data.component';

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [HeaderComponent, UsersTableComponent,TablePaginationComponent,CreatorDataComponent],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.scss',
})
export class FullLayoutComponent {
  items = [
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '-',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
    {
      companyName: 'الشركة الألمانية للإبادة',
      companyImage: 'images/slogan.png',
      hireDate: '01/12/2024',
      releaseDate: '01/12/2024',
      supervisor: 'عبدالرحيم اسماعيل ناصف',
      localMinutes: 7654,
      globalMinutes: 122,
      cash: 122,
    },
  ];
  currentPage: number = 1;
  itemsPerPage: number = 5; // Display 5 records per page


  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }
  get totalPages(): number {  // Make totalPages a getter
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
  getPaginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }
}
