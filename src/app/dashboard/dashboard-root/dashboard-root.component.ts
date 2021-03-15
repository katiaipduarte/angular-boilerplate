import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-dashboard-root',
  templateUrl: './dashboard-root.component.html',
  styleUrls: ['./dashboard-root.component.scss'],
})
export class DashboardRootComponent implements OnInit {
  constructor(private titleService: Title, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.titleService.setTitle('page-title-example');
    this.notificationService.openSnackBar('Welcome!');
  }
}
