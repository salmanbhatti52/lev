import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heightrange',
  templateUrl: './heightrange.page.html',
  styleUrls: ['./heightrange.page.scss'],
})
export class HeightrangePage implements OnInit {

  constructor(public location: Location) { }

  max_price: number = 10;
  min_price: number = 40;

  public price: any = {
    upper: 18,
    lower: 35
  }

  ngOnInit() {


  }

  goBack() {
    this.location.back()
  }


  onSliderChanged(event) {

    console.log(event)
    // console.log(this.price.lower)
    // console.log(this.price.upper);


  }


}
