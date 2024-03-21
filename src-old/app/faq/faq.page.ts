import { WorkService } from './../work.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  faqArr: any;
  faqArrsorted: any;

  constructor(public location: Location,
    public restService:RestService,
    public workService:WorkService) { }

  ionViewWillEnter(){
   
    this.workService.presentLoading()
    this.restService.getFAQ().subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('incom8ing arr====', res );
      if(res.status == "success"){
        this.faqArr = res.data
      }else{
        this.faqArr = "" 
      }

      console.log('incom8ing arr====', this.faqArr );

      this.faqArr.sort((a,b)=> a.sort_order-b.sort_order);

      console.log('incom8ing arr sorted====', this.faqArr );

      


    })
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }
}
