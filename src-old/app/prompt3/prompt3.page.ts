import { RestService } from './../rest.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-prompt3',
  templateUrl: './prompt3.page.html',
  styleUrls: ['./prompt3.page.scss'],
})
export class Prompt3Page implements OnInit {



  prompt: any = ''
  promptTitle: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public restService: RestService) { }


  ionViewWillEnter() {
    this.promptTitle = this.signupService.prompt3User
  }

  goToProfile() {
    localStorage.setItem('prompt3Val', this.prompt)
    this.signupService.prompt3Val = this.prompt
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
