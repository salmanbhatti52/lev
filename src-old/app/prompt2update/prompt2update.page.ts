import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-prompt2update',
  templateUrl: './prompt2update.page.html',
  styleUrls: ['./prompt2update.page.scss'],
})
export class Prompt2updatePage implements OnInit {
  prompt: any = '';

  promptTitle: any = ''
  user_prompts_array: any = ''
  prompts1show = true

  prompt1Name: any = ''
  prompt1Data: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public restService: RestService,
    public router: RouterModule,
    public workService: WorkService) { }


  ionViewWillEnter() {

    this.prompt1Name = localStorage.getItem('prompt2Name')
    this.prompt1Data = localStorage.getItem('prompt2Data')

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

  changeFunction(ev) {

    this.prompt1Data = this.restService.removebadwords(ev.detail.value);
  }

  goToProfile() {
    localStorage.setItem('prompt2Data', this.prompt1Data)

    localStorage.setItem('prompt1Val', this.prompt)

    this.signupService.prompt1Val = this.prompt;
    this.location.back();
  }

  prompt1(item, i) {

    console.log('prompt1Name', item.name);

    this.prompt1Name = item.name

    localStorage.setItem('prompt2Name', item.name)

    localStorage.setItem('prompt2ValHead', item.system_prompt_id)
    this.prompts1show = true
    //this.router.navigate(['prompt1']);
  }
}
