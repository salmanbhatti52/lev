import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';
import { UserserviceService } from "../userservice.service";
@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.page.html',
  styleUrls: ['./otherprofile.page.scss'],
})
export class OtherprofilePage implements OnInit {


  viewProfilePopupHidden = false

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

  popupHiddon = true

  promptToReply = ''
  promptReplyID = ''

  prompt1ID = ''
  prompt2ID = ''
  prompt3ID = ''

  otherUserID: any = ''

  promptReply: any = ''

  replyStatus = false

  prompt1UserReply: any = ''
  prompt2UserReply: any = ''
  prompt3UserReply: any = ''



  prompt1Loader = true
  prompt2Loader = true
  prompt3Loader = true

  p = 0
  senderUserID: number;

  constructor(public location: Location,
    public router: Router,
    public workService: WorkService,
    public restService: RestService,
    public userService: UserserviceService,) { }

  ngOnInit() {
  }


  ionViewWillEnter() {

    //this.workService.presentLoading()



    this.workService.presentLoading()

    this.otherUserID = this.workService.myUserData.users_customers_id
    console.log('other user id on otherprofile page line 82', this.otherUserID);

    this.restService.get_user_dataAPI(this.otherUserID).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('incomming data === ', res);
      if (res.status == "success") {



        console.log('other profile ---->>');



        this.userData = res.data.user_data

        this.userSchool = res.data.users_schools
        this.userPrompts = res.data.users_prompts

        console.log('name----------', this.userData);





        try {
          this.prompt1Head = this.userPrompts[0].prompt_name
          this.prompt1Data = this.userPrompts[0].comments
          this.prompt1ID = this.userPrompts[0].users_prompts_id


        } catch (e) {

        }

        try {
          this.prompt2Head = this.userPrompts[1].prompt_name
          this.prompt2Data = this.userPrompts[1].comments
          this.prompt2ID = this.userPrompts[1].users_prompts_id
        } catch (e) {

        }



        try {

          this.prompt3Head = this.userPrompts[2].prompt_name
          this.prompt3Data = this.userPrompts[2].comments
          this.prompt3ID = this.userPrompts[2].users_prompts_id


        } catch (e) {

        }





        this.userHeight = parseFloat(this.userData.height).toFixed(1)

        this.height1 = this.userHeight.substring(0, 1)
        this.height2 = this.userHeight.substring(2, 3)



        //////////////////1111111111111111111111111

        var s1 = JSON.stringify({
          'users_customers_id': localStorage.getItem('loggedinUserID'),
          'other_users_customers_id': this.otherUserID,
          'system_prompt_id': this.prompt1ID
        })


        console.log('ss-----', s1);


        this.restService.get_prompt_repliesAPI(s1).subscribe((res: any) => {
          console.log('res---s1>', res)

          this.prompt1Loader = false

          if (res.status == 'success') {
            this.prompt1UserReply = res.data[0].system_prompt_reply

          }
          console.log('res---s1>', this.prompt1UserReply)
        }, err => {
          this.workService.hideLoading()
          this.workService.presentToast('Network error occured')
        })





        //////////////////22222222222222222222222







        var s2 = JSON.stringify({
          'users_customers_id': localStorage.getItem('loggedinUserID'),
          'other_users_customers_id': this.otherUserID,
          'system_prompt_id': this.prompt2ID
        })

        console.log('ss-----', s2);
        this.restService.get_prompt_repliesAPI(s2).subscribe((res: any) => {
          console.log('res---s2>', res)

          this.prompt2Loader = false
          if (res.status == 'success') {
            this.prompt2UserReply = res.data[0].system_prompt_reply
          }
          console.log('res---s2>', this.prompt1UserReply)
        }, err => {
          this.workService.hideLoading()
          this.workService.presentToast('Network error occured')
        })



        ///////////////3333333333333333333333333




        var s3 = JSON.stringify({
          'users_customers_id': localStorage.getItem('loggedinUserID'),
          'other_users_customers_id': this.otherUserID,
          'system_prompt_id': this.prompt3ID
        })

        console.log('ss-----s3', s3);
        this.restService.get_prompt_repliesAPI(s3).subscribe((res: any) => {
          console.log('res---s3>', res)

          this.prompt3Loader = false

          if (res.status == 'success') {
            this.prompt3UserReply = res.data[0].system_prompt_reply
          }

          console.log('res---s3>', this.prompt1UserReply)
        }, err => {
          this.workService.hideLoading()
          this.workService.presentToast('Network error occured')
        })



      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })




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

  changeFunction(ev) {

    this.promptReply = this.restService.removebadwords(ev.detail.value);
  }

  goToEditProfile() {
    this.router.navigate(['editprofile'])
  }


  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }



  hidePopup() {
    this.promptReply = ''
    this.popupHiddon = true
  }

  prompt1ShareClick() {

    this.p = 1

    if (this.prompt1UserReply != '') {
      this.workService.presentToast('You have already replied to this prompt')
    } else {
      this.promptReplyID = this.prompt1ID
      this.promptToReply = this.prompt1Head
      this.popupHiddon = false
      console.log('prompot 1 clcik');
    }



  }

  prompt2ShareClick() {

    this.p = 2
    if (this.prompt2UserReply != '') {
      this.workService.presentToast('You have already replied to this prompt')
    } else {
      this.promptReplyID = this.prompt2ID
      this.promptToReply = this.prompt2Head
      this.popupHiddon = false
      console.log('prompot 2 clcik');
    }
  }
  prompt3ShareClick() {
    this.p = 3
    if (this.prompt3UserReply != '') {
      this.workService.presentToast('You have already replied to this prompt')
    } else {
      this.promptReplyID = this.prompt3ID
      this.promptToReply = this.prompt3Head
      this.popupHiddon = false
      console.log('prompot 3 clcik');
    }
  }

  replyPrompt() {

    if (this.promptReply != '') {
      var stringy = JSON.stringify({
        'users_customers_id': localStorage.getItem('loggedinUserID'),
        'other_users_customers_id': this.otherUserID,
        'system_prompt_id': this.promptReplyID,
        'system_prompt_reply': this.promptReply
      })


      console.log(stringy);

      this.workService.presentLoading()

      this.restService.save_prompt_repliesAPI(stringy).subscribe((res: any) => {

        this.workService.hideLoading()

        if (res.status == 'success') {



          console.log('p----------', this.p);


          if (this.p == 1) {
            this.prompt1UserReply = this.promptReply
            this.startchat(this.prompt1UserReply);
          }

          if (this.p == 2) {
            this.prompt2UserReply = this.promptReply
            this.startchat(this.prompt2UserReply);
          }

          if (this.p == 3) {
            this.prompt3UserReply = this.promptReply
            this.startchat(this.prompt3UserReply);
          }

          this.workService.presentToast(res.message)
          this.popupHiddon = true
          this.promptReply = ''

        } else {
          this.workService.presentToast(res.message)
          this.popupHiddon = true
        }

        console.log('resssss', res);


      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      })

    } else {
      this.replyStatus = true

      setTimeout(() => {
        this.replyStatus = false
      }, 3000)

    }

  }
  startchat(promptUserReply) {
    var ss = JSON.stringify({
      "request_type": "startChat",
      "users_customers_id": localStorage.getItem('loggedinUserID'),
      "reciever_users_customers_id": this.otherUserID
    })
    this.restService.chat_messagesAPI(ss).subscribe((res: any) => {
      console.log('res--->>chat-->>', res);
      this.sendMessage(promptUserReply)
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }
  sendMessage(promptUserReply) {


    var data = JSON.stringify({
      request_type: "sendMessage",
      sender_users_customers_id: localStorage.getItem('loggedinUserID'),
      // sender_users_customers_id: 15,
      reciever_users_customers_id: this.otherUserID,
      msgType: "text",
      chatMsg: this.promptToReply + '\n \n' + promptUserReply
    })


    this.restService.chat_messagesAPI(data)
      .subscribe(async (res: any) => {
        console.log("response", res);

      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      });
  }

  hidePopupViewProfile() {
    this.viewProfilePopupHidden = true
  }
}
