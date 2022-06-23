import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  searchValue: any;
  badwords: any;
  lowercasearray: any
  replacevalue: any;
  constructor(public rest: RestService) { }

  ngOnInit() {

  }

  changeFunction(ev) {

    this.searchValue = this.rest.removebadwords(ev.detail.value);
    // let strtoarray = ev.detail.value.split(' ')
    // console.log('strtoarray=', strtoarray);

    // this.badwords = this.rest.newarr
    // console.log('new array of bad words==', this.badwords);
    // // this.lowercasearray = this.badwords.map(element => {
    // //   return element.toLowerCase();
    // // });
    // this.badwords.map(element => {
    //   var lowBadWord = element.toLowerCase();

    //   if (strtoarray.includes(lowBadWord)) {
    //     console.log("have bad word ", lowBadWord);
    //     let str1 = strtoarray.indexOf(lowBadWord)
    //     console.log('str get--', str1);
    //     strtoarray.splice(str1, 1)
    //     console.log('str get--after', strtoarray);
    //     this.searchValue = strtoarray.toString()

    //     this.replacevalue = this.searchValue.replaceAll(',', ' ')
    //     console.log('replace afreter==', this.replacevalue);

    //   }
    //   else {
    //     console.log("Pak saf word ");
    //   }
    // });



  }

}
