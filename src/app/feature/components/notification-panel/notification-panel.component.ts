import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notification-panel',
  standalone: false,
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.scss'
})
export class NotificationPanelComponent {
  constructor(private location: Location) {}
  navigateTo() {
    this.location.back();
  }
}
