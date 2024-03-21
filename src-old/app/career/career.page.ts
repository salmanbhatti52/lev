import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss'],
})
export class CareerPage implements OnInit {

  constructor(public location:Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
