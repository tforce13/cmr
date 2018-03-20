import { Component, OnInit, AfterViewInit } from '@angular/core';

import { NotificationService } from './notification.service';
import { ToastService } from '../../../typescripts/pro/alerts/toast/toast.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, AfterViewInit {

  notifications: object[];
  private currentIndex = 0;

  constructor(
    public notificationService: NotificationService,
    public toastService: ToastService
  ) { }

  ngOnInit() {
    this.notifications = this.notificationService.getAds();
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.currentIndex = this.currentIndex === this.notifications.length ? 0 : this.currentIndex;

      const notification: any = this.notifications[this.currentIndex++];
      this.toastService.info(notification.body, notification.title, notification.options);
    }, 15000);
  }

}
