import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-pollnew',
  templateUrl: './pollnew.page.html',
  styleUrls: ['./pollnew.page.scss'],
})
export class PollnewPage implements OnInit {

  pvalue1 = 0.60;
  pvalue2 = 0.78
  questionNo = 0
  currentQuestion: any = ''
  currentQuestionDesc: any = ''
  currentQuestionID: any = ''

  currentQuestionOption1: any = ''
  currentQuestionOption1ID: any = ''
  percentage1: any = ''
  percentage1percent: any = ''

  currentQuestionOption2: any = ''
  currentQuestionOption2ID: any = ''
  percentage2: any = ''
  percentage2percent: any = ''

  question: any = ''


  commnent: any = '';
  commentStatus = false
  noMoreQuestion = false
  subscriptionIDFree: string;

  constructor(public router: Router,
    public location: Location,
    public restService: RestService,
    public workService: WorkService) { }

  ngOnInit() { }

  ionViewWillEnter() {

this.subscriptionIDFree =   localStorage.getItem('packages_id')


    var stringy = JSON.stringify({
    })

    this.workService.presentLoading()

    this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
      console.log('incomming data----', res)
      this.workService.hideLoading()


      if (res.status == "success") {
        console.log(res.data)
        // console.log('instalgrammm', res.data.system_instagram);

        localStorage.setItem('user_instagram', res.data.system_instagram)

        this.question = res.data.system_polsqs

        console.log('systm pols---', this.question);

        this.currentQuestion = this.question[this.questionNo].name
        this.currentQuestionDesc = this.question[this.questionNo].desc
        this.currentQuestionID = this.question[this.questionNo].system_polsqs_id
        ///////////////////

        this.currentQuestionOption1 = this.question[this.questionNo].options[0].title
        this.currentQuestionOption1ID = this.question[this.questionNo].options[0].system_polsqs_options_id
        this.percentage1 = this.question[this.questionNo].options[0].percentage


        if (this.percentage1 == 100) {
          this.percentage1percent = this.percentage1
        } else {
          this.percentage1percent = '0.' + this.percentage1
        }



        this.currentQuestionOption2 = this.question[this.questionNo].options[1].title
        this.currentQuestionOption2ID = this.question[this.questionNo].options[1].system_polsqs_options_id


        this.percentage2 = this.question[this.questionNo].options[1].percentage

        if (this.percentage2 == 100) {
          this.percentage2percent = this.percentage2
        } else {
          this.percentage2percent = '0.' + this.percentage2
        }




        console.log('percentage2percent---', this.percentage2percent);
        console.log('percentage2---', this.percentage2);

      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })


  }



  goToSubscription(system_polsqs_options_id) {
    console.log('Comment------------', this.commnent);
    this.commnent = "aaaa"
    if (system_polsqs_options_id != '') {

      console.log('system_polsqs_options_id-----', system_polsqs_options_id);

      this.workService.presentLoading()

      var ss = JSON.stringify({

        "users_customers_id": localStorage.getItem('loggedinUserID'),
        "system_polsqs_options_id": system_polsqs_options_id, //id
        "system_polsqs_id": this.currentQuestionID

      })

      console.log('outgoing data---', ss);


      this.restService.create_polsqsAPI(ss).subscribe((res: any) => {
        this.workService.hideLoading()

        console.log('res===>', res)

        if (res.status == 'success') {

          this.commnent = ''


          if (this.question.length == 1) {

            this.noMoreQuestion = true
            // this.router.navigate(['tabs/tab1'], { replaceUrl: true });
          } else {
            this.removeItem(this.questionNo)
            // this.questionNo = this.questionNo + 1

            console.log('question===>', this.question)
            console.log('questionNo===>', this.questionNo)
            this.currentQuestion = this.question[this.questionNo].name
            this.currentQuestionDesc = this.question[this.questionNo].desc
            this.currentQuestionID = this.question[this.questionNo].system_polsqs_id



            this.currentQuestionOption1 = this.question[this.questionNo].options[0].title
            this.currentQuestionOption1ID = this.question[this.questionNo].options[0].system_polsqs_options_id
            this.percentage1 = this.question[this.questionNo].options[0].percentage

            if (this.percentage1 == 100) {
              this.percentage1percent = this.percentage1
            } else {
              this.percentage1percent = '0.' + this.percentage1
            }

            this.currentQuestionOption2 = this.question[this.questionNo].options[1].title
            this.currentQuestionOption2ID = this.question[this.questionNo].options[1].system_polsqs_options_id
            this.percentage2 = this.question[this.questionNo].options[1].percentage

            if (this.percentage2 == 100) {
              this.percentage2percent = this.percentage2
            } else {
              this.percentage2percent = '0.' + this.percentage2
            }


          }

          // 
        }

      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      })

      //this.router.navigate(['subscription']);
    } else {
      this.commentStatus = true

      setTimeout(() => {
        this.commentStatus = false
      }, 3000)
    }

  }

  removeItem(i) {
    this.question.splice(i, 1);

    console.log(this.question);

  }

  goBack() {
    // this.location.back()
    this.router.navigate(['tabs/tab1'], { replaceUrl: true });
  }


  subSttFun(val) {

    // console.log('avvvvvvvvvvvvv', val);

    var vv = "Whats your Name  "
    // console.log('vvv----', vv.length);

    if (val.length > 44) {
      return val.substring(0, 44) + "...";
    }
    else {
      return val
    }

  }

  goToMembership() {
    this.router.navigate(['subscription'])
  }
}

