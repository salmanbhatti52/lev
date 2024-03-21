import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userpreferencesmodal',
  templateUrl: './userpreferencesmodal.page.html',
  styleUrls: ['./userpreferencesmodal.page.scss'],
})
export class UserpreferencesmodalPage implements OnInit {
  data: any;
  userpreferencesethinicity: any;
  constructor(private navParams: NavParams, private modalController: ModalController,
    public restService: RestService, public workService: WorkService, public router: Router) { }

  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.data);

    this.Userpreferences()
  }
  Userpreferences() {
    this.workService.presentLoading()

    var userID = localStorage.getItem('loggedinUserID')
    this.restService.get_user_preferencesAPI(userID).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('userPref--->', res);
      this.userpreferencesethinicity = res.data.user_preferences_ethinicity
      if (res.status == "success") {

      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  goTo() {
    this.modalController.dismiss();
    this.router.navigate(['prefrence']);
  }
}
