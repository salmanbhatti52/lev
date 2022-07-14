import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, NgZone, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

import { google } from '@google/maps';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';

declare var google;



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {


  GoogleAutocomplete: google.maps.places.AutocompleteService;
  autocompleteItems: any[];
  lives: any = ''
  placeid: any;
  listishidden = true
  latitude: any = '';
  longitude: any = '';


  userData: any = ''

  userPrompts: any = ''
  userSchool: any = ''

  ageStatus = false
  age: any = ''

  heightStatus = false
  height: any = ''

  locationStatus = false
  location: any = ''

  statusStatus = false
  status: any = 'Please Select'

  religionStatus = false
  religion: any = 'Please Select'

  schoolStatus = false
  school: any = ''


  schoolsArray: any = []
  school_id = 0


  popupHidden: boolean = true

  select_image: any = ''


  img1SelectedFromCamera1 = ''
  img2SelectedFromCamera2 = ''
  imgArr = [{ id: 0, img: 'assets/imgs/chooseimg.png' }, { id: 1, img: 'assets/imgs/chooseimg.png' }]
  coverImg: any = ''
  base64ImageCover: any = ''


  coverImg2: any = ''
  base64ImageCover2: any = ''



  prompt1Head: any = ''
  prompt1Data: any = ''

  prompt2Head: any = ''
  prompt2Data: any = ''

  prompt3Head: any = ''
  prompt3Data: any = ''

  userHeight: any = ''

  short_bio: any = ''



  locationishidden = true

  shortBioDisabled = true


  dobDay: any = ''
  dobMonth: any = ''
  dobYear: any = ''


  first_name: any = ''
  last_name: any = ''
  profile_pic_1: any = ''
  profile_pic_2: any = ''
  system_maritalstatus_name: any = ''
  system_religions_name: any = ''



  minType1: any = ''
  fleName1: any = ''

  minType2: any = ''
  fleName2: any = ''

  uploadedCOverImage: any = ''
  uploadedCOverImage2: any = ''



  height1 = ''
  height2 = ''


  searchData: any = ''
  incommingDataSystem: any = ''

  listishiddenSchool = false

  autoresp: any = ''
  agediff: any;


  constructor(public locationPlugin: Location,
    public router: Router,
    public restService: RestService,
    public workService: WorkService,
    private DomSanitizer: DomSanitizer,
    public locationBk: Location,
    private nativeGeocoder: NativeGeocoder,
    private zone: NgZone,
    public storage: Storage,
    public alertcontroller: AlertController,
    private transfer: FileTransfer) {

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
  }



  ngOnInit() {

    this.userData = this.workService.myUserData.data.user_data
    this.schoolsArray = this.workService.myUserData.data.users_schools
    this.userPrompts = this.workService.myUserData.data.users_prompts
    this.lives = this.userData.lives

    console.log('user datttaaaa 11------', this.userData.auto_response);

    if (this.userData.auto_response == null) {
      this.autoresp = ''
      console.log('nullll ha');

    } else {
      this.autoresp = this.userData.auto_response
      console.log('nullll nhiiiiiiiiiiii ha');
    }






    this.first_name = this.userData.first_name
    this.last_name = this.userData.last_name
    this.profile_pic_1 = this.userData.profile_pic_1
    this.profile_pic_2 = this.userData.profile_pic_2
    this.system_maritalstatus_name = this.userData.system_maritalstatus_name
    this.system_religions_name = this.userData.system_religions_name

    console.log('user data', this.userData);


    this.short_bio = this.userData.short_bio

    console.log('name----------', this.userPrompts[0].prompt_name);

    this.prompt1Head = this.userPrompts[0].prompt_name
    this.prompt1Data = this.userPrompts[0].comments

    this.prompt2Head = this.userPrompts[1].prompt_name
    this.prompt2Data = this.userPrompts[1].comments

    this.prompt3Head = this.userPrompts[2].prompt_name
    this.prompt3Data = this.userPrompts[2].comments


    localStorage.setItem('prompt1ValHead', this.userPrompts[0].system_prompt_id)
    localStorage.setItem('prompt2ValHead', this.userPrompts[1].system_prompt_id)
    localStorage.setItem('prompt3ValHead', this.userPrompts[2].system_prompt_id)


    console.log('rrrrrrrrrr------', this.workService.myUserData.data.user_data.height);


    this.userHeight = parseFloat(this.workService.myUserData.data.user_data.height).toFixed(1)


    this.height1 = this.userHeight.substring(0, 1)
    this.height2 = this.userHeight.substring(2, 3)


    this.ageFromDOB(this.workService.myUserData.data.user_data.date_of_birth)


    this.storeData()





    this.workService.presentLoading()


    var stringy = JSON.stringify({
    })

    // this.workService.presentLoading()

    this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('incomming data----', res)
      // this.workService.hideLoading()


      if (res.status == "success") {
        console.log(res.data)
        console.log('user dataaaa', res);

        this.workService.systemData = res.data

        this.incommingDataSystem = res.data


      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }


  ionViewWillEnter() {

    this.storage.set('coverImg', this.base64ImageCover)
    this.storage.set('coverImg2', this.base64ImageCover2)
    this.schoolsArray = JSON.parse(localStorage.getItem('schoolsArray'))
    this.lives = localStorage.getItem('location')
    this.first_name = localStorage.getItem('first_name')
    this.last_name = localStorage.getItem('last_name')
    this.profile_pic_1 = localStorage.getItem('profile_pic_1')
    this.profile_pic_2 = localStorage.getItem('profile_pic_2')
    this.system_maritalstatus_name = localStorage.getItem('meritalStatus')
    this.system_religions_name = localStorage.getItem('religion')
    this.short_bio = localStorage.getItem('shortbio')
    this.prompt1Head = localStorage.getItem('prompt1Name')
    this.prompt1Data = localStorage.getItem('prompt1Data')
    this.prompt2Head = localStorage.getItem('prompt2Name')
    this.prompt2Data = localStorage.getItem('prompt2Data')
    this.prompt3Head = localStorage.getItem('prompt3Name')
    this.prompt3Data = localStorage.getItem('prompt3Data')
    this.userHeight = localStorage.getItem('height')
    this.dobDay = localStorage.getItem('dobDay')
    this.dobMonth = localStorage.getItem('dobMonth')
    this.dobYear = localStorage.getItem('dobYear')
    this.userData.system_religions_id = localStorage.getItem('religionID')
    this.userData.system_maritalstatus_id = localStorage.getItem('meritalStatusSelectedID')


    this.height1 = this.userHeight.substring(0, 1)
    this.height2 = this.userHeight.substring(2, 3)

    console.log('prompt1Headprompt1Headprompt1Headprompt1Head', this.prompt1Head);




    // this.workService.presentLoading()


    // this.restService.get_user_dataAPI(5).subscribe((res: any) => {
    //   this.workService.hideLoading()
    //   console.log('incomming data === ', res);

    //   if (res.status == "success") {
    //     this.userData = res.data.user_data
    //     this.schoolsArray = res.data.users_schools
    //     this.userPrompts = res.data.users_prompts
    //     this.lives = this.userData.lives

    //     this.short_bio = this.userData.short_bio

    //     console.log('name----------', this.userPrompts[0].prompt_name);

    //     this.prompt1Head = this.userPrompts[0].prompt_name
    //     this.prompt1Data = this.userPrompts[0].comments

    //     this.prompt2Head = this.userPrompts[1].prompt_name
    //     this.prompt2Data = this.userPrompts[1].comments

    //     this.prompt3Head = this.userPrompts[2].prompt_name
    //     this.prompt3Data = this.userPrompts[2].comments

    //     console.log('rrrrrrrrrr------', res.data.user_data.height);


    //     this.userHeight = parseFloat(res.data.user_data.height).toFixed(1)


    //     this.ageFromDOB(res.data.user_data.date_of_birth)






    //   }


    // })

  }

  goBack() {
    this.locationPlugin.back()
    this.deleteData()
  }


  goToStatus() {

    this.storeData()

    this.router.navigate(['maritalstatus'])
  }


  goToReligion() {
    this.storeData()

    this.router.navigate(['religion'])
  }


  goToPrompt1() {


    this.storeData()

    this.router.navigate(['prompt1update'])
  }

  goToPrompt2() {
    this.storeData()

    this.router.navigate(['prompt2update'])
  }


  goToPrompt3() {
    this.storeData()
    this.router.navigate(['prompt3update'])
  }


  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }

  changeFunction(ev) {

    this.short_bio = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction1(ev) {

    this.lives = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction2(ev) {

    this.school = this.restService.removebadwords(ev.detail.value);
  }



  deleteSchool(school) {
    console.log(school);
    this.schoolsArray.splice(school, 1);

  }

  goToMyheight() {

    this.storeData()

    this.router.navigate(['myage'])
  }



  showPopup(val) {
    this.select_image = val
    this.popupHidden = false


  }

  hidePopup() {
    console.log('hidepop');

    this.popupHidden = true
  }

  CameraSelected() {
    this.hidePopup()
    console.log('camera');
    this.workService.selectImageInCamera().then((imageData) => {

      if (this.select_image == 0) {
        this.img1SelectedFromCamera1 = '1'
        localStorage.setItem('img1SelectedFromCamera1', this.img1SelectedFromCamera1)
        this.coverImg = imageData;
        this.base64ImageCover = `data:image/png;base64,${imageData}`;
        this.profile_pic_1 = this.base64ImageCover

      } else {

        this.img2SelectedFromCamera2 = '1'
        localStorage.setItem('img2SelectedFromCamera2', this.img2SelectedFromCamera2)
        this.coverImg2 = imageData;
        this.base64ImageCover2 = `data:image/png;base64,${imageData}`;
        this.profile_pic_2 = this.base64ImageCover2

      }





    }, (err) => {
      console.log('imagepicker  now:', err);
    });

  }




  sanatizeBase64ImageFromCameraCover(image) {
    if (image) {
      return this.DomSanitizer.bypassSecurityTrustResourceUrl(image);
    }
  }

  GalerySelected() {

    this.hidePopup()
    console.log('gallery');

    this.workService.selectImageInGallery().then((imageData) => {


      if (this.select_image == 0) {

        this.img1SelectedFromCamera1 = '0'
        localStorage.setItem('img1SelectedFromCamera1', this.img1SelectedFromCamera1)
        this.coverImg = imageData;
        this.base64ImageCover = `data:image/png;base64,${imageData}`;
        this.profile_pic_1 = this.base64ImageCover
      } else {
        console.log('okkkkkkkkkkkkk 111111111111');

        this.img2SelectedFromCamera2 = '0'
        localStorage.setItem('img2SelectedFromCamera2', this.img2SelectedFromCamera2)

        this.coverImg2 = imageData
        this.base64ImageCover2 = `data:image/png;base64,${imageData}`;
        this.profile_pic_2 = this.base64ImageCover2
      }


    }, (err) => {
      console.log('imagepicker  now:', err);
    });

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

  enableShortBio() {
    console.log('j');

    this.shortBioDisabled = false
  }



  checkDay() {
    if (this.dobDay > 31) {
      this.workService.presentToast('Invalid Date')
      this.dobDay = 31
    }


  }


  chkMinDay() {
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

  chkMinMonth() {
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

  done() {
    console.log('goooo');
    let dob = this.dobYear + '-' + this.dobMonth + '-' + this.dobDay

    ///age difference////
    const bdate = new Date(dob);
    const timeDiff = Math.abs(Date.now() - bdate.getTime());
    this.agediff = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    console.log('age diff', this.agediff);

    if (this.schoolsArray.length > 0 && this.lives != '' && this.short_bio != '' && this.dobDay != '' && this.dobMonth != '' && this.dobYear != ''
      && this.prompt1Data != '' && this.prompt2Data != '' && this.prompt3Data != '') {


      const fileTransfer: FileTransferObject = this.transfer.create();
      const random = Math.floor(Math.random() * 100);

      if (localStorage.getItem('img1SelectedFromCamera1') == '0') {
        //gallery
        this.fleName1 = ".png"
        this.minType1 = "image/png"
      } else {
        //camera
        this.fleName1 = ".jpg"
        this.minType1 = "image/jpeg"
      }

      if (localStorage.getItem('img2SelectedFromCamera2') == '0') {
        //gallery
        this.fleName2 = ".png"
        this.minType2 = "image/png"
      } else {
        //camera
        this.fleName2 = ".jpg"
        this.minType2 = "image/jpeg"
      }

      if (this.img1SelectedFromCamera1 == '' && this.img2SelectedFromCamera2 == '') {

        this.uploadedCOverImage = this.profile_pic_1
        this.uploadedCOverImage2 = this.profile_pic_2

        this.subMitFormData()
      }


      if (this.img1SelectedFromCamera1 != '' && this.img2SelectedFromCamera2 == '') {
        console.log('image1Updated11111111111');

        this.uploadedCOverImage = this.profile_pic_1
        this.uploadedCOverImage2 = this.profile_pic_2

        this.fileTransferFun1()
      }

      if (this.img1SelectedFromCamera1 == '' && this.img2SelectedFromCamera2 != '') {
        console.log('image2Updated2222222222222');
        this.uploadedCOverImage = this.profile_pic_1
        this.uploadedCOverImage2 = this.profile_pic_2

        this.fileTransferFun2()
      }

      if (this.img1SelectedFromCamera1 != '' && this.img2SelectedFromCamera2 != '') {
        console.log('image1Updatedbothhhhhhhhhhhhhhhhhh');
        this.uploadedCOverImage = this.profile_pic_1
        this.uploadedCOverImage2 = this.profile_pic_2

        this.fileTransferFunforBothImages()
      }

    } else {
      this.workService.presentToast('Please Fill Required Fields')
    }

    // })

  }


  fileTransferFunforBothImages() {
    this.workService.presentLoading()

    console.log('image 1 and 2', this.base64ImageCover);
    console.log('image 1 and 2', this.base64ImageCover2);

    const fileTransfer: FileTransferObject = this.transfer.create();
    const random = Math.floor(Math.random() * 100);



    const optionsImageOne: FileUploadOptions = {
      fileKey: "image_data",
      fileName: "myImage_" + random + this.fleName1,
      chunkedMode: false,
      httpMethod: "post",
      mimeType: this.minType1,
      headers: {
        // "Auth-Key": this.authToken,
      },
      params: {
        image: "YPOP",
      },
    };



    fileTransfer
      .upload(
        this.base64ImageCover,
        "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
        optionsImageOne
      )
      .then(
        async (data: any) => {
          var img1Data = JSON.parse(data.response);
          this.uploadedCOverImage = img1Data.message;
          const optionsImageTwo: FileUploadOptions = {
            fileKey: "image_data",
            fileName: "myImage_" + random + this.fleName2,
            chunkedMode: false,
            httpMethod: "post",
            mimeType: this.minType2,
            headers: {
              // "Auth-Key": this.authToken,
            },
            params: {
              image: "YPOP",
            },
          };


          fileTransfer
            .upload(
              this.base64ImageCover2,
              "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
              optionsImageTwo
            )
            .then(
              async (licenseData: any) => {

                var img2Data = JSON.parse(licenseData.response);
                this.uploadedCOverImage2 = img2Data.message

                this.workService.hideLoading()

                this.subMitFormData()

              }, (err) => {
                console.log("Error");
                console.log(err);
                return;
              })

        })
  }


  fileTransferFun1() {

    this.workService.presentLoading()

    const fileTransfer: FileTransferObject = this.transfer.create();
    const random = Math.floor(Math.random() * 100);


    console.log('image 1-------', this.base64ImageCover);


    const optionsImageOne: FileUploadOptions = {
      fileKey: "image_data",
      fileName: "myImage_" + random + this.fleName1,
      chunkedMode: false,
      httpMethod: "post",
      mimeType: this.minType1,
      headers: {
        // "Auth-Key": this.authToken,
      },
      params: {
        image: "YPOP",
      },
    };



    fileTransfer
      .upload(
        this.base64ImageCover,
        "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
        optionsImageOne
      )
      .then(
        async (data: any) => {
          this.workService.hideLoading()

          var imgData = JSON.parse(data.response);
          this.uploadedCOverImage = imgData.message;

          this.subMitFormData()
        })
  }


  fileTransferFun2() {

    this.workService.presentLoading()

    console.log('image 2', this.base64ImageCover2);

    const fileTransfer: FileTransferObject = this.transfer.create();
    const random = Math.floor(Math.random() * 100);

    const optionsImageTwo: FileUploadOptions = {
      fileKey: "image_data",
      fileName: "myImage_" + random + this.fleName2,
      chunkedMode: false,
      httpMethod: "post",
      mimeType: this.minType2,
      headers: {
        // "Auth-Key": this.authToken,
      },
      params: {
        image: "YPOP",
      },
    };


    fileTransfer
      .upload(
        this.base64ImageCover2,
        "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
        optionsImageTwo
      )
      .then(
        async (licenseData: any) => {
          this.workService.hideLoading()

          var img2Data = JSON.parse(licenseData.response);
          this.uploadedCOverImage2 = img2Data.message;
          this.subMitFormData()

        }, (err) => {
          console.log("Error");
          console.log(err);
          return;
        })
  }





  subMitFormData() {

    var prompt1HeadIDVal = localStorage.getItem('prompt1ValHead')
    var prompt2HeadIDVal = localStorage.getItem('prompt2ValHead')
    var prompt3HeadIDVal = localStorage.getItem('prompt3ValHead')


    var prompt1Val = this.prompt1Data
    var prompt2Val = this.prompt2Data
    var prompt3Val = this.prompt3Data


    var myprompts = {};
    myprompts[prompt1HeadIDVal] = prompt1Val;
    myprompts[prompt2HeadIDVal] = prompt2Val;
    myprompts[prompt3HeadIDVal] = prompt3Val;



    var stringy = JSON.stringify(
      {
        "profile_pic_1": this.uploadedCOverImage,
        "profile_pic_2": this.uploadedCOverImage2,
        "prompts_id": myprompts,
        "short_bio": this.short_bio,
        "date_of_birth": this.dobYear + "-" + this.dobMonth + "-" + this.dobDay,
        "height": this.userHeight,
        "lives": this.lives,
        "system_maritalstatus_id": localStorage.getItem('meritalStatusSelectedID'),
        "system_religions_id": localStorage.getItem('religionID'),
        "school": this.schoolsArray,
        "auto_response": this.autoresp
      })

    console.log('stringy===========================', stringy);

    var userID = localStorage.getItem('loggedinUserID')
    if (this.agediff < 18) {
      this.basicAlert('You are under 18');
    } else if (this.dobDay.length < 2) {
      this.workService.presentToast('Date must be 2 digit')
    }
    else if (this.dobMonth.length < 2) {
      this.workService.presentToast('Month must be 2 digit')
    }
    else {
      this.workService.presentLoading()
      this.restService.updateUserDataAPI(stringy, userID).subscribe((res: any) => {


        console.log('incomking resonse', res)

        if (res.status == 'success') {
          this.workService.hideLoading()
          this.deleteData()
          this.workService.presentToast('Profile Updaed Successfully')
          this.router.navigate(['tabs/tab3'], { replaceUrl: true })
        }

      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      })
    }


  }


  ageFromDOB(dateOfBirth) {
    console.log("my dob------------", dateOfBirth);
    console.log(new Date(dateOfBirth).getFullYear());
    console.log(new Date(dateOfBirth).getDate());
    console.log(new Date(dateOfBirth).getMonth() + 1); // month value has index 0 so add 1 to it.


    this.dobDay = new Date(dateOfBirth).getDate()
    this.dobYear = new Date(dateOfBirth).getFullYear()
    this.dobMonth = new Date(dateOfBirth).getMonth() + 1


  }

  storeData() {



    localStorage.setItem('first_name', this.first_name)
    localStorage.setItem('last_name', this.last_name)
    localStorage.setItem('profile_pic_1', this.profile_pic_1)
    localStorage.setItem('profile_pic_2', this.profile_pic_2)
    localStorage.setItem('system_maritalstatus_name', this.system_maritalstatus_name)
    localStorage.setItem('system_religions_name', this.system_religions_name)


    this.storage.set('coverImg', this.base64ImageCover)
    this.storage.set('coverImg2', this.base64ImageCover2)


    // localStorage.setItem('coverImg', this.coverImg)
    // localStorage.setItem('coverImg2', this.coverImg2)

    localStorage.setItem('prompt1Name', this.prompt1Head)
    localStorage.setItem('prompt1Data', this.prompt1Data)
    localStorage.setItem('prompt2Name', this.prompt2Head)
    localStorage.setItem('prompt2Data', this.prompt2Data)
    localStorage.setItem('prompt3Name', this.prompt3Head)
    localStorage.setItem('prompt3Data', this.prompt3Data)

    localStorage.setItem('shortbio', this.short_bio)
    localStorage.setItem('dobDay', this.dobDay)
    localStorage.setItem('dobMonth', this.dobMonth)
    localStorage.setItem('dobYear', this.dobYear)
    localStorage.setItem('height', this.userHeight)
    localStorage.setItem('location', this.lives)
    localStorage.setItem('meritalStatusSelectedID', this.userData.system_maritalstatus_id)
    localStorage.setItem('religionID', this.userData.system_religions_id)
    localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray))

    localStorage.setItem('meritalStatus', this.system_maritalstatus_name)
    localStorage.setItem('religion', this.system_religions_name)


  }


  deleteData() {



    localStorage.removeItem('first_name')
    localStorage.removeItem('last_name')
    localStorage.removeItem('profile_pic_1')
    localStorage.removeItem('profile_pic_2')
    localStorage.removeItem('system_maritalstatus_name')
    localStorage.removeItem('system_religions_name')


    this.storage.remove('coverImg')
    this.storage.remove('coverImg2')


    // localStorage.setItem('coverImg', this.coverImg)
    // localStorage.setItem('coverImg2', this.coverImg2)

    localStorage.removeItem('prompt1Name')
    localStorage.removeItem('prompt1Data')
    localStorage.removeItem('prompt2Name')
    localStorage.removeItem('prompt2Data')
    localStorage.removeItem('prompt3Name')
    localStorage.removeItem('prompt3Data')

    localStorage.removeItem('shortbio')
    localStorage.removeItem('dobDay')
    localStorage.removeItem('dobMonth')
    localStorage.removeItem('dobYear')
    localStorage.removeItem('height')
    localStorage.removeItem('location')
    localStorage.removeItem('meritalStatusSelectedID')
    localStorage.removeItem('religionID')
    localStorage.removeItem('schoolsArray')

    localStorage.removeItem('meritalStatus')
    localStorage.removeItem('religion')



  }





  schoolAded(event) {
    this.listishiddenSchool = true
    this.autocompleteItems = [];

    console.log('enterrrrrrr', this.school);

    var obj = {
      id: this.school_id,
      name: this.school
    }
    console.log('name---', obj);

    if (obj.name != "" && obj.name != "\n" && obj.name != "\n\n" && obj.name != "\n\n\n" && obj.name != "\n\n\n\n" && obj.name != "\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n\n") {

      this.school_id = this.school_id + 1
      this.schoolsArray.push(obj)
      this.school = ''
    }
  }






  selectSearchResultSchool(item) {

    console.log('item = ', item);

    this.listishiddenSchool = true
    this.autocompleteItems = [];


    console.log('enterrrrrrr', this.school);

    var obj = {
      id: item.system_schools_id,
      name: item.name
    }
    console.log('name---', obj);

    if (obj.name != "" && obj.name != "\n" && obj.name != "\n\n" &&
      obj.name != "\n\n\n" && obj.name != "\n\n\n\n" &&
      obj.name != "\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n" &&
      obj.name != "\n\n\n\n\n\n\n") {

      this.school_id = this.school_id + 1
      this.schoolsArray.push(obj)
      this.school = ''
    }

  }







  onInput(event) {
    if (event.detail.value == '') {
      this.listishiddenSchool = false
    } else {
      this.listishiddenSchool = true
      console.log('event value==', event.detail.value);

      this.searchData = event.detail.value

      // console.log('searchData', this.searchData);


      console.log('toprateddest-----------', this.incommingDataSystem.system_schools);

      this.autocompleteItems = this.incommingDataSystem.system_schools.filter((item) => {
        if (item.name != null) {
          return ((item.name.toLowerCase().includes(event.detail.value.toLowerCase())));
        }

      })

      console.log('filter-----------', this.autocompleteItems);


      if (this.school == '') {
        this.listishiddenSchool = true
        this.autocompleteItems = [];
      }
    }


  }

  async basicAlert(message) {
    const alert = await this.alertcontroller.create({
      cssClass: 'basicAlert',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }


}
