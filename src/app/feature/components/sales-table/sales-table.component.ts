import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-table',
  standalone: false,
  templateUrl: './sales-table.component.html',
  styleUrl: './sales-table.component.scss'
})
export class SalesTableComponent {
  sales = [
    { product: 'Laptop', price: 1000, quantity: 5 },
    { product: 'Phone', price: 500, quantity: 10 },
    { product: 'Tablet', price: 700, quantity: 7 }
  ];
  filteredSales = [...this.sales];

  sort(field: string) {
    this.filteredSales.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }

  filterData(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredSales = this.sales.filter(sale => sale.product.toLowerCase().includes(query));
  }
}
