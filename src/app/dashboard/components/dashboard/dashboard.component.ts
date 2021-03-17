import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private titleService: Title, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.titleService.setTitle('page-title-example');
    this.notificationService.openSnackBar('Welcome!');
  }
}
