import { RestService } from './../rest.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-prompt2',
  templateUrl: './prompt2.page.html',
  styleUrls: ['./prompt2.page.scss'],
})
export class Prompt2Page implements OnInit {

  prompt: any = ''
  promptTitle: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public restService: RestService) { }
  ionViewWillEnter() {
    this.promptTitle = this.signupService.prompt2User
  }

  goToProfile() {
    localStorage.setItem('prompt2Val', this.prompt)
    this.signupService.prompt2Val = this.prompt
    this.location.back()
  }

  ngOnInit() {
  }


  changeFunction(ev) {

    this.prompt = this.restService.removebadwords(ev.detail.value);
  }

  goBack() {
    this.location.back()
  }

}
