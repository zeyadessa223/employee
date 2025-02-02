import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';

@Component({
  selector: 'app-root',
  imports: [ FullLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'company_dashboard';
}
