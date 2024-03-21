import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.page.html',
  styleUrls: ['./prompts.page.scss'],
})
export class PromptsPage implements OnInit {


  questionNo = 0
  currentQuestion: any = ''
  currentQuestionDesc: any = ''
  currentQuestionID: any = ''

  question: any = ''


  commnent: any = '';
  commentStatus = false
  noMoreQuestion = false

  constructor(public router: Router,
    public location: Location,
    public restService: RestService,
    public workService: WorkService) { }

  ngOnInit() { }

  ionViewWillEnter() {




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


      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })


  }

  goToAppy() {
    this.router.navigate(['apply'], { replaceUrl: true });
  }

  changeFunction(ev) {

    this.commnent = this.restService.removebadwords(ev.detail.value);
  }

  goToSubscription() {






    if (this.commnent != '') {



      console.log('Comment', this.commnent);

      this.workService.presentLoading()

      var ss = JSON.stringify({

        "users_customers_id": localStorage.getItem('loggedinUserID'),
        "answer": this.commnent,
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

            //this.router.navigate(['apply'], { replaceUrl: true });
          } else {
            this.questionNo = this.questionNo + 1

            this.currentQuestion = this.question[this.questionNo].name
            this.currentQuestionDesc = this.question[this.questionNo].desc
            this.currentQuestionID = this.question[this.questionNo].system_polsqs_id


            this.removeItem(this.questionNo)
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
    this.router.navigate(['apply'], { replaceUrl: true });
  }
}
