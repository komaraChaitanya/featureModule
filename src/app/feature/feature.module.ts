import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { UserAnalyticsComponent } from './components/user-analytics/user-analytics.component';
import { SalesDashboardComponent } from './components/sales-dashboard/sales-dashboard.component';
import { NotificationPanelComponent } from './components/notification-panel/notification-panel.component';
import { SalesTableComponent } from './components/sales-table/sales-table.component';
import { RechartsComponent } from './components/recharts/recharts.component';
import { RealTimeNotificationsComponent } from './components/real-time-notifications/real-time-notifications.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
  { path: 'user-analytics', component: UserAnalyticsComponent },
  { path: 'sales-dashboard', component: SalesDashboardComponent },
  { path: 'notifications', component: NotificationPanelComponent },
  { path: '', component: FeatureComponent }
];

@NgModule({
  declarations: [FeatureComponent, UserAnalyticsComponent, SalesDashboardComponent, NotificationPanelComponent, SalesTableComponent, RechartsComponent, RealTimeNotificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule  
  ]
})
export class FeatureModule { }
