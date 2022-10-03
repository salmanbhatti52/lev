import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';


@Component({
  selector: 'app-viewprofileother',
  templateUrl: './viewprofileother.page.html',
  styleUrls: ['./viewprofileother.page.scss'],
})
export class ViewprofileotherPage implements OnInit {

  userData: any = ''

  userPrompts: any = ''
  userSchool: any = ''

  prompt1Head: any = ''
  prompt1Data: any = ''

  prompt2Head: any = ''
  prompt2Data: any = ''

  prompt3Head: any = ''
  prompt3Data: any = ''

  userHeight: any = ''


  height1 = ''
  height2 = ''


  constructor(public location: Location,
    public router: Router,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
  }


  ionViewWillEnter() {

    //this.workService.presentLoading()


    this.userData = this.workService.myUserData.data.user_data

    this.userSchool = this.workService.myUserData.data.users_schools
    this.userPrompts = this.workService.myUserData.data.users_prompts

    console.log('name----------', this.userPrompts[0].prompt_name);

    this.prompt1Head = this.userPrompts[0].prompt_name
    this.prompt1Data = this.userPrompts[0].comments

    this.prompt2Head = this.userPrompts[1].prompt_name
    this.prompt2Data = this.userPrompts[1].comments

    this.prompt3Head = this.userPrompts[2].prompt_name
    this.prompt3Data = this.userPrompts[2].comments

    console.log('rrrrrrrrrr------', this.workService.myUserData.data.user_data.height);


    this.userHeight = parseFloat(this.workService.myUserData.data.user_data.height).toFixed(1)

    this.height1 = this.userHeight.substring(0,1)
    this.height2 = this.userHeight.substring(2,3)





    // this.restService.get_user_dataAPI(5).subscribe((res: any) => {
    //   this.workService.hideLoading()
    //   console.log('incomming data === ', res);

    //   if (res.status == "success") {
    //     this.userData = res.data.user_data
    //     this.userSchool = res.data.users_schools
    //     this.userPrompts = res.data.users_prompts

    //     console.log('name----------', this.userPrompts[0].prompt_name);

    //     this.prompt1Head = this.userPrompts[0].prompt_name
    //     this.prompt1Data = this.userPrompts[0].comments

    //     this.prompt2Head = this.userPrompts[1].prompt_name
    //     this.prompt2Data = this.userPrompts[1].comments

    //     this.prompt3Head = this.userPrompts[2].prompt_name
    //     this.prompt3Data = this.userPrompts[2].comments

    //     console.log('rrrrrrrrrr------', res.data.user_data.height);


    //     this.userHeight =parseFloat(res.data.user_data.height).toFixed(1)




    //   }


    // })


  }

  goBack() {
    this.location.back()

    // this.router.navigate(['tabs/tab3'], { replaceUrl: true })
  }


  goToEditProfile() {
    this.router.navigate(['editprofile'])
  }


  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }

}

