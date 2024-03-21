import { RestService } from './../rest.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-prompt1',
  templateUrl: './prompt1.page.html',
  styleUrls: ['./prompt1.page.scss'],
})
export class Prompt1Page implements OnInit {
  prompt: any = '';

  promptTitle: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public restService: RestService) { }


  ionViewWillEnter() {
    this.promptTitle = this.signupService.prompt1User
  }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

  changeFunction(ev) {

    this.prompt = this.restService.removebadwords(ev.detail.value);
  }
  goToProfile() {
    localStorage.setItem('prompt1Val', this.prompt)

    this.signupService.prompt1Val = this.prompt;
    this.location.back();
  }


}
