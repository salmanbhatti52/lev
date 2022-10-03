import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myage',
  templateUrl: './myage.page.html',
  styleUrls: ['./myage.page.scss'],
})
export class MyagePage implements OnInit {

  constructor(public location: Location) { }

  max_price: number = 4;
  min_price: number = 7;


  height: any = ''

  height1 = ''
  height2 = ''



  // @Component({
  //   selector: 'float-range',
  //   template: `<ion-range #range [min]="min" [max]="max" [pin]="pin" [step]="step" [snaps]="snaps" [(ngModel)]="_ngModel" (ionBlur)="onValueChange($event);" ngDefaultControl></ion-range>`
  // })


  // @Input() max: 8;
  // @Input() min: 3;
  // @Input() pin: true;
  // @Input() step: 0.1;
  // @Input() snaps: true;
  // @Input() _ngModel: any;


  ngOnInit() {


  }

  goBack() {
    localStorage.setItem('height', this.height)
    console.log(localStorage.getItem('height'));


    this.location.back()
  }

  ionViewWillEnter() {
    this.height = parseFloat(localStorage.getItem('height'))
    console.log('height====', this.height, localStorage.getItem('height'));

    if (localStorage.getItem('height') == '' || isNaN(parseFloat(localStorage.getItem('height'))) || localStorage.getItem('height') == null || localStorage.getItem('height') == "N'N" || localStorage.getItem('height') == "Enter Height") {
      this.height = '0'
    }
  }


  onSliderChangedFeet(event) {
    console.log('age--------', event.detail.value * 100 / 100)
    this.height = event.detail.value.toFixed(6)
    console.log('my height-->>', this.height.substring(0, 2));
    console.log('my height22222-->>', this.height.substring(2, 4))
    this.height1 = event.detail.value

    if(this.height2 ){

    }else[
      this.height2 = "0" 
    ]


  }

  onSliderChangedInch(event) {
    console.log('age--------', event.detail.value * 100 / 100)
    this.height = event.detail.value.toFixed(6)
    console.log('my height-->>', this.height.substring(0, 2));
    console.log('my height22222-->>', this.height.substring(2, 4))
    this.height2 = event.detail.value


  }


}
