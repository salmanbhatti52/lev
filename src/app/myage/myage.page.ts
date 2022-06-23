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


  onSliderChanged(event) {

    console.log('age', event)
    // console.log(this.price.lower)
    // console.log(this.price.upper);


    this.height = event.detail.value.toFixed(1)

    console.log('my height-->>', this.height.substring(0, 1));

    console.log('my height-->>', this.height.substring(2, 3));



    this.height1 = this.height.substring(0, 1)
    this.height2 = this.height.substring(2, 3)


  }


}
