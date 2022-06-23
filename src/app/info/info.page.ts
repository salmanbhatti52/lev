import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(public location: Location,
    public router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    // this.location.back()
    this.router.navigate(['profile1'])
  }

  letsBegin() {
    this.router.navigate(['youprofile1'])
  }

}
