import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {


  flags: any = ''
  subscription: any;
  constructor(public router: Router,
    public platform: Platform,
    public workService: WorkService) {

    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   navigator['app'].exitApp();
    // });


  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  goTogettingstart() {
    this.workService.comingForm = 'sigup'
    this.router.navigate(['gettingstart'])
  }


  goToLogin() {
    this.workService.comingForm = 'login'
    this.router.navigate(['gettingstart'])
  }

}
