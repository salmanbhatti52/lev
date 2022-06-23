import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

import { NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';




import { google } from '@google/maps';
import { Platform } from '@ionic/angular';

declare var google;




@Component({
  selector: 'app-youprofile1',
  templateUrl: './youprofile1.page.html',
  styleUrls: ['./youprofile1.page.scss'],
})
export class Youprofile1Page implements OnInit {



  GoogleAutocomplete: google.maps.places.AutocompleteService;
  autocompleteItems: any[];
  placeid: any;
  listishidden = true
  latitude: any = '';
  longitude: any = '';

  listishiddenFrom = true

  locationinputishidden = true
  locationishidden = true

  location: any = '';


  userData: any


  fname: any = ''
  lname: any = ''
  email: any = ''
  dobDay: any = ''
  dobMonth: any = ''
  dobYear: any = ''
  instaHandle: any = ''
  lives: any = ''
  from: any = ''


  fnameStatus: boolean = false
  lnameStatus: boolean = false
  emailStatus: boolean = false
  dobStatus: boolean = false

  instaHandleStatus: boolean = false
  livesStatus: boolean = false
  fromStatus: boolean = false

  constructor(public router: Router,
    public restService: RestService,
    public workService: WorkService,
    public locationBk: Location,
    private nativeGeocoder: NativeGeocoder,
    private zone: NgZone,
    public platform: Platform) {

    var aa = this.filterSchool('AIzaSyA7ks8X2YnLcxTuEC3qydL2adzA0NYbl6c', 'school')

    console.log('schools---->>>>', aa);


    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');


    });
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
  }

  ngOnInit() {
  }

  goBack() {
    this.locationBk.back()
  }

  ionViewWillEnter() {

    this.fname = localStorage.getItem('fname')
    this.lname = localStorage.getItem('lname')
    this.email = localStorage.getItem('email')


    this.dobDay = localStorage.getItem('dobDay')
    this.dobMonth = localStorage.getItem('dobMonth')
    this.dobYear = localStorage.getItem('dobYear')
    this.instaHandle = localStorage.getItem('instaHandle')
    this.lives = localStorage.getItem('lives')
    this.from = localStorage.getItem('from')


    if (this.fname == 'null') {
      this.fname = ''
    }
    if (this.lname == 'null') {
      this.lname = ''
    }
    if (this.email == 'null') {
      this.email = ''
    }
    if (this.dobDay == 'null') {
      this.dobDay = ''
    }
    if (this.dobMonth == 'null') {
      this.dobMonth = ''
    }
    //
    if (this.dobYear == 'null') {
      this.dobYear = ''
    }
    if (this.instaHandle == 'null' || this.instaHandle == null) {
      this.instaHandle = ''
    }
    if (this.lives == 'null') {
      this.lives = ''
    }

    if (this.from == 'null') {
      this.from = ''
    }



  }


  // Continue() { this.router.navigate(['yourprofile2']) }
  changename(ev) {
    this.fname = this.restService.removebadwords(ev.detail.value)
  }
  changelname(ev) {
    this.lname = this.restService.removebadwords(ev.detail.value)
  }
  changeemail(ev) {
    this.email = this.restService.removebadwords(ev.detail.value)
  }
  changeevent(ev) {
    this.instaHandle = this.restService.removebadwords(ev.detail.value)
  }
  changeevent2(ev) {
    this.lives = this.restService.removebadwords(ev.detail.value)
  }
  changeevent3(ev) {
    this.from = this.restService.removebadwords(ev.detail.value)
  }

  Continue() {


    localStorage.setItem('dobDay', this.dobDay)
    localStorage.setItem('dobMonth', this.dobMonth)
    localStorage.setItem('dobYear', this.dobYear)
    localStorage.setItem('instaHandle', this.instaHandle)
    localStorage.setItem('lives', this.lives)
    localStorage.setItem('from', this.from)



    this.fname = localStorage.getItem('fname')
    this.lname = localStorage.getItem('lname')
    this.email = localStorage.getItem('email')


    this.dobDay = localStorage.getItem('dobDay')
    this.dobMonth = localStorage.getItem('dobMonth')
    this.dobYear = localStorage.getItem('dobYear')
    this.instaHandle = localStorage.getItem('instaHandle')
    this.lives = localStorage.getItem('lives')
    this.from = localStorage.getItem('from')


    if (this.fname == 'null') {
      this.fname = ''
    }
    if (this.lname == 'null') {
      this.lname = ''
    }
    if (this.email == 'null') {
      this.email = ''
    }
    if (this.dobDay == 'null') {
      this.dobDay = ''
    }
    if (this.dobMonth == 'null') {
      this.dobMonth = ''
    }
    //
    if (this.dobYear == 'null') {
      this.dobYear = ''
    }
    if (this.instaHandle == 'null') {
      this.instaHandle = ''
    }
    if (this.lives == 'null') {
      this.lives = ''
    }

    if (this.from == 'null') {
      this.from = ''
    }


    console.log(JSON.parse(localStorage.getItem('userData')));

    if (this.fname == '') {
      this.fnameStatus = true
    }

    if (this.lname == '') {
      this.lnameStatus = true
    }

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!re.test(this.email)) {
      this.emailStatus = true
      this.workService.presentToast('Enter Valid Email.')
    }

    if (this.email == '') {
      this.emailStatus = true
    }

    if (this.dobDay == '' || this.dobMonth == '' || this.dobYear == '') {
      this.dobStatus = true
    }

    // if (this.instaHandle == '') {
    //   this.instaHandleStatus = true
    // }

    if (this.lives == '' || this.lives == 'null') {
      this.livesStatus = true
    }

    if (this.from == '' || this.from == 'null') {
      this.fromStatus = true
    }

    setInterval(() => {

      this.fnameStatus = false
      this.lnameStatus = false
      this.emailStatus = false
      this.dobStatus = false

      this.instaHandleStatus = false
      this.livesStatus = false
      this.fromStatus = false
    }, 4000);

    if (this.fname != '' && this.lname != '' && this.email != '' && re.test(this.email) &&
      this.dobDay != '' && this.dobMonth != '' && this.dobYear != ''
      && (this.lives != '' || this.lives == 'null') && (this.from != '' || this.from == 'null')) {


      if (this.dobDay > 31) {
        this.workService.presentToast('Invalid Date')

      }
      else if (this.dobMonth > 12) {
        this.workService.presentToast('Invalid Month')

      }
      else if (this.dobYear > 2021) {
        this.workService.presentToast('Invalid Year')


      } else {
        localStorage.setItem('dobDay', this.dobDay)
        localStorage.setItem('dobMonth', this.dobMonth)
        localStorage.setItem('dobYear', this.dobYear)
        localStorage.setItem('instaHandle', this.instaHandle)
        localStorage.setItem('lives', this.lives)
        localStorage.setItem('from', this.from)


        console.log('mychk');

        console.log(localStorage.getItem('lives'));
        console.log(localStorage.getItem('from'));

        console.log('222');

        console.log(localStorage.getItem('dobDay'));
        console.log(localStorage.getItem('dobMonth'));
        console.log(localStorage.getItem('dobYear'));



        this.router.navigate(['yourprofile2'])

      }



      // var data = JSON.stringify({
      //   requestType: "profile_detail",
      //   users_id: this.userData.data.user.users_id,
      //   dob: this.dobYear + "-" + this.dobMonth + "-" + this.dobDay,
      //   instagram: this.instaHandle,
      //   lives: this.lives,
      //   from: this.from
      // })

      // console.log(data);

      // this.workService.presentLoading()

      // this.restService.profileAPI(data).subscribe((res: any) => {
      //   this.workService.hideLoading()
      //   console.log(res);

      //   if (res.status == 'success') {
      //     this.router.navigate(['yourprofile2'])
      //   }

      // }, err => {
      //   this.workService.presentToast('Some error occured.')
      //   this.workService.hideLoading()
      // })



    }


    //console.log(JSON.parse(JSON.stringify(localStorage.getItem('userData'))));

    //this.router.navigate(['yourprofile2'])

  }







  updateSearchResultsEvent(ev) {

    console.log(ev);




    if (ev.target.value.length > 0) {
      console.log('greatrtt    00000000000', ev.detail.value, ev.target.value.length)

      this.listishidden = false
      this.GoogleAutocomplete.getPlacePredictions({ input: this.lives },
        (predictions, status) => {
          this.autocompleteItems = [];
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        });

    } else {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeee', ev.detail.value)

      this.listishidden = true

      console.log('khaallllllooiiiiiiiiiii')
      this.locationishidden = false
      this.location = ''
      this.autocompleteItems = [];
      console.log('lllllllllllllllll', this.location)
    }



  }


  selectSearchResult(item) {

    this.listishidden = true

    this.locationishidden = true

    this.autocompleteItems = [];

    console.log('itemmmmmmmmmmmmmmmmmmmmmmmmm', item)
    this.location = item

    this.lives = this.location.description;

    this.listishidden = true

    console.log('location', this.location.latitude)
    this.placeid = this.location.place_id
    console.log('placeid' + this.placeid)

    this.location = item.description

    console.log('aaaaaaaaaaaaaaaaaaa', this.location)



    this.nativeGeocoder.forwardGeocode(this.location)
      .then((result: NativeGeocoderResult[]) => {

        this.latitude = result[0].latitude
        this.longitude = result[0].longitude




        console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude)

      })
      .catch((error: any) => console.log(error));


  }



  updateSearchResultsEventFrom(ev) {

    console.log(ev);




    if (ev.target.value.length > 0) {
      console.log('greatrtt    00000000000', ev.detail.value, ev.target.value.length)

      this.listishiddenFrom = false
      this.GoogleAutocomplete.getPlacePredictions({ input: this.from },
        (predictions, status) => {
          this.autocompleteItems = [];
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        });

    } else {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeee', ev.detail.value)

      this.listishiddenFrom = true

      console.log('khaallllllooiiiiiiiiiii')
      this.locationishidden = false
      this.location = ''
      this.autocompleteItems = [];
      console.log('lllllllllllllllll', this.location)
    }



  }


  selectSearchResultFrom(item) {

    this.listishiddenFrom = true


    this.autocompleteItems = [];

    console.log('itemmmmmmmmmmmmmmmmmmmmmmmmm', item)
    this.location = item

    this.from = this.location.description;

    this.listishiddenFrom = true

    console.log('location', this.location.latitude)
    this.placeid = this.location.place_id
    console.log('placeid' + this.placeid)

    this.location = item.description

    console.log('aaaaaaaaaaaaaaaaaaa', this.location)



    this.nativeGeocoder.forwardGeocode(this.location)
      .then((result: NativeGeocoderResult[]) => {

        this.latitude = result[0].latitude
        this.longitude = result[0].longitude




        console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude)

      })
      .catch((error: any) => console.log(error));


  }


  checkDay() {
    if (this.dobDay > 31) {
      this.workService.presentToast('Invalid Date')
      this.dobDay = 31
    }


  }

  checkMinDay() {
    if (parseInt(this.dobDay) < 1) {
      this.workService.presentToast('Invalid Date')
      this.dobDay = 1
    }
  }

  checkMonth() {
    if (this.dobMonth > 12) {
      this.workService.presentToast('Invalid Month')
      this.dobMonth = 12
    }


  }


  checkMinMonth() {
    if (parseInt(this.dobMonth) < 1) {
      this.workService.presentToast('Invalid Month')
      this.dobMonth = 1
    }
  }

  checkYear() {
    if (this.dobYear > 2021) {
      this.workService.presentToast('Invalid Year')
      this.dobYear = 2021
    }


  }


  minYearCehck() {
    if (parseInt(this.dobYear) < 1950) {
      this.workService.presentToast('Invalid Year')
      this.dobYear = 1950
    }
  }









  // types used in filtering autocomplete results


  // input event handler
  // DEBOUNCE THIS
  async filterSchool(key, query) {

    const schoolPlaceTypes = [
      'school',
      'secondary_school',
      'university',
    ]


    const requestUrl = encodeURI(`https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${key}&language=fr&input=${query}`)

    try {
      // fetch all predictions for a given input
      const response = await fetch(requestUrl, { method: 'POST' })
      const { predictions } = await response.json()
      // get all predictions that match at least on of the targeted types
      const results = predictions
        .filter(({ types }) => types.some(type => schoolPlaceTypes.includes(type)))
        // OPTIONAL: format filtered places to return only what is needed.
        .map(({ structured_formatting, place_id, types }) => ({
          place_id,
          name: structured_formatting.main_text,
          address: structured_formatting.secondary_text,
          types,
        }))

      return results
    }
    catch (e) {
      console.error(e)
      return []
    }
  }



  myInstaClick() {
    console.log('ciccc', this.instaHandle.length);
    if (this.instaHandle.length < 1)
      this.instaHandle = '@'
  }
}
