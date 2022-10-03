import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  userData: any = ''


  constructor(public router: Router,
    public restService: RestService,
    public workService: WorkService,
    public platform: Platform) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigate(['tabs/tab1'])

    });


  }


  goToprefrence() {
    this.router.navigate(['prefrence'])
  }

  ionViewDidEnter() {
    console.log('didenter');

  }


  ionViewWillEnter() {
    console.log('ionviewwillenter');
    this.workService.presentLoading()
    var userID = localStorage.getItem('loggedinUserID')
    let data = {
      loginuser: 0,
      otheruser: userID
    }
    this.restService.get_user_dataAPI(data).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('incomming data ===333333333 ', res);
      if (res.status == "success") {
        this.workService.myUserData = res
        this.userData = this.workService.myUserData.data.user_data
        localStorage.setItem('userNotiStatus', this.workService.myUserData.data.user_data.notification_switch)
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }


  goToAccountsetting() {
    this.router.navigate(['accountsetting'])
  }

  goToContactUs() {
    this.router.navigate(['contactus'])
  }

  goToViewProfile() {
    console.log('ok');

    this.router.navigate(['viewprofile'], { replaceUrl: true })
  }



  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }

}
