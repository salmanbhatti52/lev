import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-prompt3update',
  templateUrl: './prompt3update.page.html',
  styleUrls: ['./prompt3update.page.scss'],
})
export class Prompt3updatePage implements OnInit {
  prompt: any = '';

  promptTitle: any = ''
  user_prompts_array: any = ''
  prompts1show = true

  prompt1Name: any = ''
  prompt1Data: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public restService: RestService,
    public router: Router,
    public workService: WorkService) { }


  ionViewWillEnter() {

    this.prompt1Name = localStorage.getItem('prompt3Name')
    this.prompt1Data = localStorage.getItem('prompt3Data')

  }

  showprompt1() {

    if (this.prompts1show) {
      this.prompts1show = false
    } else {
      this.prompts1show = true
    }
  }

  ngOnInit() {

    this.user_prompts_array = this.workService.systemData.system_prompt

    console.log('user Prompts', this.user_prompts_array);

    // var stringy = JSON.stringify({
    // })

    // // this.workService.presentLoading()

    // this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
    //   console.log('incomming data----', res)
    //   // this.workService.hideLoading()


    //   if (res.status == "success") {
    //     console.log(res.data)
    //     console.log('user dataaaa', res.data.system_prompt);

    //     this.user_prompts_array = res.data.system_prompt


    //   }


    // })

  }

  goBack() {
    this.location.back();
  }

  goToProfile() {
    localStorage.setItem('prompt1Val', this.prompt)
    localStorage.setItem('prompt3Data', this.prompt1Data)

    this.signupService.prompt1Val = this.prompt;
    this.location.back();
  }

  changeFunction(ev) {

    this.prompt1Data = this.restService.removebadwords(ev.detail.value);
  }
  prompt1(item, i) {

    console.log('prompt1Name', item.name);

    this.prompt1Name = item.name

    localStorage.setItem('prompt3Name', item.name)

    localStorage.setItem('prompt3ValHead', item.system_prompt_id)
    this.prompts1show = true
    //this.router.navigate(['prompt1']);
  }
}
