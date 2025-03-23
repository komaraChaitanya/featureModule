import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-analytics',
  standalone: false,
  templateUrl: './user-analytics.component.html',
  styleUrl: './user-analytics.component.scss'
})
export class UserAnalyticsComponent {
  constructor(private location: Location) {}
  navigateTo() {
    this.location.back();
  }
}
