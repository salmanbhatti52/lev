import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termsservice',
  templateUrl: './termsservice.page.html',
  styleUrls: ['./termsservice.page.scss'],
})
export class TermsservicePage implements OnInit {

 
  constructor(public location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }
}
