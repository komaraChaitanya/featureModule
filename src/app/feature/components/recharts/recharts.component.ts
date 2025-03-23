import { Component } from '@angular/core';

@Component({
  selector: 'app-recharts',
  standalone: false,
  templateUrl: './recharts.component.html',
  styleUrl: './recharts.component.scss'
})
export class RechartsComponent {
  data = [
    { name: 'January', value: 120 },
    { name: 'February', value: 200 },
    { name: 'March', value: 150 },
  ];
}
