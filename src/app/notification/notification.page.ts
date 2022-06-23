import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notiArray: any = ''

  noNotiAvailable = false

  constructor(public location: Location,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {

    this.workService.presentLoading()

    var stringy = JSON.stringify({
      "users_customers_id": localStorage.getItem('loggedinUserID')
    })



    this.restService.get_notifications_listAPI(stringy).subscribe((res: any) => {
      console.log('noti====>', res)
      this.workService.hideLoading()

      if (res.status == 'success') {
        this.noNotiAvailable = false
        this.notiArray = res.data

      } else {
        this.noNotiAvailable = true
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

  }

  goBack() {
    this.location.back()
  }

}
