import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';




@Component({
  selector: 'app-requestsubmitted',
  templateUrl: './requestsubmitted.page.html',
  styleUrls: ['./requestsubmitted.page.scss'],
})
export class RequestsubmittedPage implements OnInit {

  user_instagram: any = ''
  subscription;

  constructor(public location: Location,
    public router: Router,
    public platform: Platform,
    public inAppBrowser: InAppBrowser,
    private appAvailability: AppAvailability) {

    this.subscription = this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigate(['promptnew']);

    });
  }


  ionViewWillEnter() {
    this.subscription = this.user_instagram = localStorage.getItem('user_instagram') + "/"

    console.log('userrrrrrrrrrrrrrr', this.user_instagram);

  }


  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }


  ngOnInit() { }

  goBack() {
    // this.location.back();
    this.router.navigate(['promptnew']);
  }

  goToPromts() {
    this.router.navigate(['promptnew']);
  }



  async goToInstagram(val): Promise<void> {

    console.log('uuu', this.user_instagram);


    let app: string;

    if (this.platform.is('ios')) {
      app = 'instagram://';

    } else if (this.platform.is('android')) {
      app = 'com.instagram.android';
    }

    const isAppAvailable: boolean = await this.appAvailability.check(app);

    isAppAvailable ?
      this.inAppBrowser.create(`instagram://user?username=${this.user_instagram}`, '_system') :
      this.inAppBrowser.create(`https://www.instagram.com/${this.user_instagram}`, '_system');
  }



  openInstagram(name) {
    let app;

    if (this.platform.is('ios')) {
      app = 'instagram://';
    } else if (this.platform.is('android')) {
      app = 'com.instagram.android';
    } else {
      console.log('webbb');

      const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram);
      return;
    }

    this.appAvailability.check(app)
      .then(
        (yes: boolean) => {
          console.log(app + ' is available')
          // Success
          // App exists
          // const browser: InAppBrowserObject = this.inAppBrowser.create('instagram://user?username=' + this.user_instagram, '_system');

          // alert('user instagram------,' + this.user_instagram)
          // const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram, '_system');
          this.platform.ready().then(() => {
            let browser = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram, "_system");

          })
        },
        (no: boolean) => {
          // Error
          // App does not exist
          // Open Web URL

          console.log('webbb');
          // alert('user instagram------,' + this.user_instagram)

          this.platform.ready().then(() => {
            let browser = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram, "_system");

          })
        }
      );
  }
}
