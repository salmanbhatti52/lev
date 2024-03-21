import { WorkService } from './../work.service';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.page.html',
  styleUrls: ['./deleteaccount.page.scss'],
})
export class DeleteaccountPage implements OnInit {
  Checkboxes = [{ question: 'I concerned about my personal data', isItemChecked: false }, { question: 'I have another  Lev account', isItemChecked: false },
  { question: 'I want to remove app from my mobile', isItemChecked: false }, { question: 'I get too many emails from Lev', isItemChecked: false }, { question: 'Other', isItemChecked: false }];

  selectquestions = [];
  constructor(public rest: RestService,
    public basicmsg: WorkService,
    public loacton: Location,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.loacton.back()
  }
  verifyEvent(ev) {
    console.log(ev);
    if (ev.isItemChecked == true) {
      this.selectquestions.push(ev.question)
      console.log('selectquestions aray', this.selectquestions)
    }
    if (ev.isItemChecked == false) {

      const index = this.selectquestions.indexOf(ev.question);
      if (index > -1) {
        this.selectquestions.splice(index, 1); // 2nd parameter means remove one item only
        console.log('job aray', this.selectquestions)
      }

    }
  }

  delete() {
    console.log('adasdsadsadsa', this.selectquestions.length);

    if (this.selectquestions.length == 0) {
      this.basicmsg.presentToast('Choose one option atleast');
    } else {
      let data = {
        "user_id": localStorage.getItem('loggedinUserID')
      }
      this.rest.deluser(data).subscribe((res: any) => {
        console.log('report user result==', res);
        if (res.status == 'success') {
          alert(res.message)
          this.basicmsg.presentToast(res.message);
          this.navCtrl.navigateRoot('tabs/tab1')
        } if (res.status == 'error') {
          this.basicmsg.presentToast(res.message);
        }
      })
    }
  }

}
