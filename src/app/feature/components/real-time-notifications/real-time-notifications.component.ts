import { Component } from '@angular/core';

@Component({
  selector: 'app-real-time-notifications',
  standalone: false,
  templateUrl: './real-time-notifications.component.html',
  styleUrl: './real-time-notifications.component.scss'
})
export class RealTimeNotificationsComponent {
  notifications: string[] = [];

  addNotification() {
    this.notifications.push(`New notification at ${new Date().toLocaleTimeString()}`);
  }
}
