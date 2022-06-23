import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.page.html',
  styleUrls: ['./showimage.page.scss'],
})
export class ShowimagePage implements OnInit {


  cahtImg: any = ''

  constructor(public platform: Platform,
    public workSertvice: WorkService,
    public location: Location) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });


    this.cahtImg = workSertvice.chatImage
  }

  goBack() {
    this.location.back()
  }
  ngOnInit() {
  }

}
