import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sales-dashboard',
  standalone: false,
  templateUrl: './sales-dashboard.component.html',
  styleUrl: './sales-dashboard.component.scss'
})
export class SalesDashboardComponent {
  constructor(private location: Location) {}
  navigateTo() {
    this.location.back();
  }
}
