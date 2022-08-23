import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';


@Component({
  selector: 'app-yourprofile3',
  templateUrl: './yourprofile3.page.html',
  styleUrls: ['./yourprofile3.page.scss'],
})
export class Yourprofile3Page implements OnInit {

  shortBio: any = 'esfdsdfsdg';

  prompt1Val: any = 'Choose your prompt';
  prompt2Val: any = 'Choose your prompt';
  prompt3Val: any = 'Choose your prompt';


  prompt1ValHead: any = '';
  prompt2ValHead: any = '';
  prompt3ValHead: any = '';

  spotify: any = '';
  linkedin: any = '';
  insta: any = '';

  phoneOfOther: any = '';
  emailOfOther: any = '';
  fullnameOfOther: any = '';

  getNotiAndUpdates = 0;

  shortBioStatus = false;
  prompt1ValStatus = false;
  prompt2ValStatus = false;
  prompt3ValStatus = false;
  phoneStatus = false;
  emailStatus = false;
  fullnameStatus = false;
  spotifyStatus = false;
  linkedinStatus = false;
  instaStatus = false;

  togglePlatformAndroid = false


  user_prompts_array: any = ''



  prompts1show = true
  prompts2show = true
  prompts3show = true

  knowAnyoneFun = 'No'


  uploadedCOverImage: any = ''
  uploadedCOverImage2: any = ''



  minType1: any = ''
  fleName1: any = ''

  minType2: any = ''
  fleName2: any = ''


  prompt1Name: any = ''
  prompt2Name: any = ''
  prompt3Name: any = ''


  coverImage: any = ''
  coverImage2: any = ''


  myImgArr: any = ''
  check = false;


  constructor(
    public location: Location,
    public router: Router,
    public signupServiece: SignupService,
    public workService: WorkService,
    public platform: Platform,
    public restService: RestService,
    public storage: Storage,
    private transfer: FileTransfer) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');


    });
  }

  ionViewWillEnter() {


    console.log('img1SelectedFromCamera1', localStorage.getItem('img1SelectedFromCamera1'));
    console.log('img2SelectedFromCamera1', localStorage.getItem('img2SelectedFromCamera2'));

    console.log('schooollllllll', localStorage.getItem('schoolsArray'));

    console.log('schooollllllll', JSON.parse(localStorage.getItem('schoolsArray')));





    this.prompt1Name = localStorage.getItem('prompt1Name')
    this.prompt2Name = localStorage.getItem('prompt2Name')
    this.prompt3Name = localStorage.getItem('prompt3Name')


    this.shortBio = localStorage.getItem('shortBio')
    this.prompt1Val = localStorage.getItem('prompt1Val')
    this.prompt2Val = localStorage.getItem('prompt2Val')
    this.prompt3Val = localStorage.getItem('prompt3Val')
    this.spotify = localStorage.getItem('spotify')
    this.linkedin = localStorage.getItem('linkedin')
    this.insta = localStorage.getItem('insta')
    this.phoneOfOther = localStorage.getItem('phoneOfOther')
    this.emailOfOther = localStorage.getItem('emailOfOther')
    this.fullnameOfOther = localStorage.getItem('fullnameOfOther')
    this.getNotiAndUpdates = parseInt(localStorage.getItem('getNotiAndUpdates'))
    this.prompt1ValHead = localStorage.getItem('prompt1ValHead')
    this.prompt2ValHead = localStorage.getItem('prompt2ValHead')
    this.prompt3ValHead = localStorage.getItem('prompt3ValHead')

    this.knowAnyoneFun = localStorage.getItem('knowAnyoneFun')

    console.log('prompt1Val----------------', this.prompt1Val);
    console.log('prompt1Val----------------', this.prompt2Val);
    console.log('prompt1Val----------------', this.prompt3Val);


    if (this.knowAnyoneFun == null) {
      this.knowAnyoneFun = 'No'
    }

    if (this.prompt1Name == null) {
      this.prompt1Name = ''
    }
    if (this.prompt2Name == null) {
      this.prompt2Name = ''
    }
    if (this.prompt3Name == null) {
      this.prompt3Name = ''
    }

    if (this.shortBio == null) {
      this.shortBio = ''
    }
    if (this.prompt1Val == null || this.prompt1Val == '') {
      this.prompt1Val = 'Choose your prompt'
    }

    if (this.prompt2Val == null || this.prompt2Val == '') {
      this.prompt2Val = 'Choose your prompt'
    }
    if (this.prompt3Val == null || this.prompt3Val == '') {
      this.prompt3Val = 'Choose your prompt'
    }
    if (this.spotify == null) {
      this.spotify = ''
    }
    if (this.linkedin == null) {
      this.linkedin = ''
    }
    if (this.insta == null) {
      this.insta = ''
    }

    if (this.phoneOfOther == null) {
      this.phoneOfOther = ''
    }
    if (this.emailOfOther == null) {
      this.emailOfOther = ''
    }
    if (this.fullnameOfOther == null) {
      this.fullnameOfOther = ''
    }

    if (this.getNotiAndUpdates == null) {
      this.getNotiAndUpdates = 0
    }
    if (this.prompt1ValHead == null) {
      this.prompt1ValHead = ''
    }
    if (this.prompt2ValHead == null) {
      this.prompt2ValHead = ''
    } if (this.prompt3ValHead == null) {
      this.prompt3ValHead = ''
    }


    console.log('aaaaaaaaaaaaaa', this.getNotiAndUpdates);



    if (this.platform.is('android')) {
      this.togglePlatformAndroid = true
    } else {
      this.togglePlatformAndroid = false
    }
  }

  ngOnInit() {

    this.user_prompts_array = this.workService.systemData.system_prompt

    console.log('resssss', this.user_prompts_array);




    // var stringy = JSON.stringify({
    // })

    // // this.workService.presentLoading()

    // this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
    //   console.log(res)
    //   // this.workService.hideLoading()


    //   if (res.status == "success") {
    //     console.log(res.data)

    //     this.workService.systemData = res.data

    //     this.user_prompts_array = this.workService.systemData.system_prompt

    //   }


    // })



  }


  showprompt1() {
    if (this.prompts1show) {
      this.prompts1show = false
    } else {
      this.prompts1show = true
    }

  }

  textarea(ev) {
    this.shortBio = this.restService.removebadwords(ev.detail.value);
  }

  changeFunction(ev) {
    this.insta = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction1(ev) {
    this.linkedin = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction2(ev) {
    this.spotify = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction3(ev) {
    this.fullnameOfOther = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction4(ev) {
    this.fullnameOfOther = this.restService.removebadwords(ev.detail.value);
  }
  prompt1(item, i) {


    localStorage.setItem('shortBio', this.shortBio)
    localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
    localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
    localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
    localStorage.setItem('prompt1Val', this.prompt1Val)
    localStorage.setItem('prompt2Val', this.prompt2Val)
    localStorage.setItem('prompt3Val', this.prompt3Val)
    localStorage.setItem('spotify', this.spotify)
    localStorage.setItem('linkedin', this.linkedin)
    localStorage.setItem('insta', this.insta)
    localStorage.setItem('phoneOfOther', this.phoneOfOther)
    localStorage.setItem('emailOfOther', this.emailOfOther)
    localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
    localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())

    console.log('prompt1Name', item.name);

    localStorage.setItem('prompt1Name', item.name)

    localStorage.setItem('prompt1ValHead', item.system_prompt_id)
    this.signupServiece.prompt1User = item.name
    this.removeItem(i);
    this.prompts1show = true
    this.router.navigate(['prompt1']);
  }


  goBack() {
    this.location.back()
  }


  showprompt2() {

    if (this.prompts2show) {
      this.prompts2show = false
    } else {
      this.prompts2show = true
    }
  }
  prompt2(item, i) {


    localStorage.setItem('shortBio', this.shortBio)
    localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
    localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
    localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
    localStorage.setItem('prompt1Val', this.prompt1Val)
    localStorage.setItem('prompt2Val', this.prompt2Val)
    localStorage.setItem('prompt3Val', this.prompt3Val)
    localStorage.setItem('spotify', this.spotify)
    localStorage.setItem('linkedin', this.linkedin)
    localStorage.setItem('insta', this.insta)
    localStorage.setItem('phoneOfOther', this.phoneOfOther)
    localStorage.setItem('emailOfOther', this.emailOfOther)
    localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
    localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())

    localStorage.setItem('prompt2Name', item.name)

    localStorage.setItem('prompt2ValHead', item.system_prompt_id)

    this.signupServiece.prompt2User = item.name
    this.removeItem(i);
    this.prompts2show = true
    this.router.navigate(['prompt2']);
  }

  showprompt3() {

    if (this.prompts3show) {
      this.prompts3show = false
    } else {
      this.prompts3show = true
    }
  }
  prompt3(item, i) {


    localStorage.setItem('shortBio', this.shortBio)
    localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
    localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
    localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
    localStorage.setItem('prompt1Val', this.prompt1Val)
    localStorage.setItem('prompt2Val', this.prompt2Val)
    localStorage.setItem('prompt3Val', this.prompt3Val)
    localStorage.setItem('spotify', this.spotify)
    localStorage.setItem('linkedin', this.linkedin)
    localStorage.setItem('insta', this.insta)
    localStorage.setItem('phoneOfOther', this.phoneOfOther)
    localStorage.setItem('emailOfOther', this.emailOfOther)
    localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
    localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())


    localStorage.setItem('prompt3Name', item.name)


    localStorage.setItem('prompt3ValHead', item.system_prompt_id)

    this.signupServiece.prompt3User = item.name
    this.removeItem(i);
    this.prompts3show = true
    this.router.navigate(['prompt3']);
  }



  removeItem(i) {
    this.user_prompts_array.splice(i, 1);

    console.log(this.user_prompts_array);

  }

  Continue() {
    if (this.check == false) {
      this.workService.presentToast('Please Accept Terms and Policies');
    } else {
      console.log('go');

      console.log('mychk');


      console.log(localStorage.getItem('dobDay'));
      console.log(localStorage.getItem('dobMonth'));
      console.log(localStorage.getItem('dobYear'));




      var prompt1HeadIDVal = localStorage.getItem('prompt1ValHead')
      var prompt2HeadIDVal = localStorage.getItem('prompt2ValHead')
      var prompt3HeadIDVal = localStorage.getItem('prompt3ValHead')

      console.log(localStorage.getItem('prompt1ValHead'), localStorage.getItem('prompt2ValHead'), localStorage.getItem('prompt3ValHead'));



      var prompt1Val = localStorage.getItem('prompt1Val')
      var prompt2Val = localStorage.getItem('prompt2Val')
      var prompt3Val = localStorage.getItem('prompt3Val')


      var myprompts = {};
      myprompts[prompt1HeadIDVal] = prompt1Val;
      myprompts[prompt2HeadIDVal] = prompt2Val;
      myprompts[prompt3HeadIDVal] = prompt3Val;

      console.log('my array ---->>>', myprompts)



      // this.router.navigate(['requestsubmitted']);

      if (this.shortBio == '') {
        this.shortBioStatus = true;
      }

      if (this.prompt1Val == 'Choose your prompt') {
        this.prompt1ValStatus = true;
      }
      if (this.prompt2Val == 'Choose your prompt') {
        this.prompt2ValStatus = true;
      }
      if (this.prompt3Val == 'Choose your prompt') {
        this.prompt3ValStatus = true;
      }

      if (this.phoneOfOther == '' && this.knowAnyoneFun != "Yes") {
        this.phoneStatus = true;
      } else {
        this.phoneStatus = false;
      }
      if (this.emailOfOther == '' && this.knowAnyoneFun != "Yes") {
        this.emailStatus = true;
      } else {
        this.emailStatus = false;
      }
      if (this.fullnameOfOther == '' && this.knowAnyoneFun != "Yes") {
        this.fullnameStatus = true;
      } else {
        this.fullnameStatus = false;
      }


      // if (this.spotify == '') {
      //   this.spotifyStatus = true;
      // }
      // if (this.linkedin == '') {
      //   this.linkedinStatus = true;
      // }
      if (this.insta == '') {
        this.instaStatus = true;
      }

      if (this.shortBio == '') {
        this.shortBioStatus = true;
      }

      if (
        this.prompt1Val != 'Choose your prompt' &&
        this.prompt2Val != 'Choose your prompt' &&
        this.prompt3Val != 'Choose your prompt' &&
        this.shortBio != '' &&
        // this.spotify != '' &&
        // this.linkedin != '' &&
        this.insta != ''
      ) {


        if (this.knowAnyoneFun == "Yes") {
          this.workService.presentLoading()


          localStorage.setItem('shortBio', this.shortBio)
          localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
          localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
          localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
          localStorage.setItem('prompt1Val', this.prompt1Val)
          localStorage.setItem('prompt2Val', this.prompt2Val)
          localStorage.setItem('prompt3Val', this.prompt3Val)
          localStorage.setItem('spotify', this.spotify)
          localStorage.setItem('linkedin', this.linkedin)
          localStorage.setItem('insta', this.insta)
          localStorage.setItem('phoneOfOther', this.phoneOfOther)
          localStorage.setItem('emailOfOther', this.emailOfOther)
          localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
          localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())



          this.storage.get('imgArr').then(imgArr => {
            console.log('imgArr------------Yes-', imgArr);

            this.myImgArr = JSON.parse(imgArr)
            this.coverImage = this.myImgArr[0].img
            this.coverImage2 = this.myImgArr[1].img
            console.log('cover image 1-------------Yes-', this.coverImage);
            console.log('cover image 2-------------Yes-', this.coverImage);

            // this.storage.get('coverImg2').then(coverImage2 => {
            //   console.log(coverImage2);




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
                this.coverImage,
                "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
                optionsImageOne
              )
              .then(
                async (data: any) => {
                  this.uploadedCOverImage = JSON.parse(data.response);

                  fileTransfer
                    .upload(
                      this.coverImage2,
                      "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
                      optionsImageTwo
                    )
                    .then(
                      async (licenseData: any) => {
                        this.uploadedCOverImage2 = JSON.parse(licenseData.response);
                        this.workService.hideLoading()
                        this.subMitFormData()


                      }, (err) => {
                        console.log("Error");
                        console.log(err);
                        return;
                      })
                })
            // })
          })
        } else if (this.phoneOfOther != '' &&
          this.emailOfOther != '' &&
          this.fullnameOfOther != '') {
          this.workService.presentLoading()

          localStorage.setItem('knowAnyoneFun', 'No')

          localStorage.setItem('shortBio', this.shortBio)
          localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
          localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
          localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
          localStorage.setItem('prompt1Val', this.prompt1Val)
          localStorage.setItem('prompt2Val', this.prompt2Val)
          localStorage.setItem('prompt3Val', this.prompt3Val)
          localStorage.setItem('spotify', this.spotify)
          localStorage.setItem('linkedin', this.linkedin)
          localStorage.setItem('insta', this.insta)
          localStorage.setItem('phoneOfOther', this.phoneOfOther)
          localStorage.setItem('emailOfOther', this.emailOfOther)
          localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
          localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())



          // this.storage.get('coverImg').then(coverImage => {
          //   console.log(coverImage);

          //   this.storage.get('coverImg2').then(coverImage2 => {
          //     console.log(coverImage2);


          this.storage.get('imgArr').then(imgArr => {
            console.log('imgArr------------No-', imgArr);
            this.myImgArr = JSON.parse(imgArr)
            console.log('imgArr------------jSON NO-', this.myImgArr);
            this.coverImage = this.myImgArr[0].img
            this.coverImage2 = this.myImgArr[1].img
            console.log('cover image 1-------------No-', this.coverImage);
            console.log('cover image 2-------------No-', this.coverImage);

            // this.storage.get('coverImg2').then(coverImage2 => {
            //   console.log(coverImage2);





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
                this.coverImage,
                "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
                optionsImageOne
              )
              .then(
                async (data: any) => {

                  console.log('img 1 uploaded--->', data);


                  this.uploadedCOverImage = JSON.parse(data.response);

                  fileTransfer
                    .upload(
                      this.coverImage2,
                      "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/",
                      optionsImageTwo
                    )
                    .then(
                      async (licenseData: any) => {
                        this.uploadedCOverImage2 = JSON.parse(licenseData.response);
                        this.workService.hideLoading()
                        this.subMitFormData()


                      }, (err) => {
                        console.log("Error");
                        console.log(err);
                        return;
                      })
                })
            // })
          })
        } else {


          if (this.phoneOfOther == '') {
            this.phoneStatus = true;
          } else {
            this.phoneStatus = false;
          }
          if (this.emailOfOther == '') {
            this.emailStatus = true;
          } else {
            this.emailStatus = false;
          }
          if (this.fullnameOfOther == '') {
            this.fullnameStatus = true;
          } else {
            this.fullnameStatus = false;
          }

          // this.phoneStatus = true;
          // this.emailStatus = true;
          // this.fullnameStatus = true;

          setTimeout(() => {
            this.shortBioStatus = false;
            this.prompt1ValStatus = false;
            this.prompt2ValStatus = false;
            this.prompt3ValStatus = false;
            this.phoneStatus = false;
            this.emailStatus = false;
            this.fullnameStatus = false;
            // this.spotifyStatus = false;
            this.linkedinStatus = false;
            this.instaStatus = false;
          }, 3000);
        }

      } else {
        this.workService.presentToast('Please Enter Required Field.');
        setTimeout(() => {
          this.shortBioStatus = false;
          this.prompt1ValStatus = false;
          this.prompt2ValStatus = false;
          this.prompt3ValStatus = false;
          this.phoneStatus = false;
          this.emailStatus = false;
          this.fullnameStatus = false;
          // this.spotifyStatus = false;
          this.linkedinStatus = false;
          this.instaStatus = false;
        }, 3000);
      }

      // this.router.navigate(['requestsubmitted'])
    }

  }


  subMitFormData() {

    console.log('know', localStorage.getItem('knowAnyoneFun'));


    this.workService.presentLoading()

    var prompt1HeadIDVal = localStorage.getItem('prompt1ValHead')
    var prompt2HeadIDVal = localStorage.getItem('prompt2ValHead')
    var prompt3HeadIDVal = localStorage.getItem('prompt3ValHead')


    var prompt1Val = localStorage.getItem('prompt1Val')
    var prompt2Val = localStorage.getItem('prompt2Val')
    var prompt3Val = localStorage.getItem('prompt3Val')


    var myprompts = {};
    myprompts[prompt1HeadIDVal] = prompt1Val;
    myprompts[prompt2HeadIDVal] = prompt2Val;
    myprompts[prompt3HeadIDVal] = prompt3Val;

    console.log('my array ---->>>', myprompts)

    var oneSignalID = localStorage.getItem("oneSignaldeviceID")

    if (oneSignalID == null || oneSignalID == 'null') {
      oneSignalID = 'not available'
    }

    var data = JSON.stringify({
      "first_name": localStorage.getItem('fname'),
      "last_name": localStorage.getItem('lname'),
      "user_email": localStorage.getItem('email'),
      "user_password": localStorage.getItem('pass1'),
      "newsletter": localStorage.getItem('getNotiAndUpdates'),
      "date_of_birth": localStorage.getItem('dobYear') + "-" + localStorage.getItem('dobMonth') + "-" + localStorage.getItem('dobDay'),
      "lives": localStorage.getItem('lives'),
      "froms": localStorage.getItem('from'),
      "profile_pic_1": this.uploadedCOverImage.message,
      "profile_pic_2": this.uploadedCOverImage2.message,
      "contact_number": localStorage.getItem('simpleNumberToSendourDB'),
      "system_countries_id": localStorage.getItem('selectedNatID'),
      "system_genders_id": localStorage.getItem('selectedGenderId'),
      "system_looking_for_id": localStorage.getItem('lookingForSelectedID'),
      "height": localStorage.getItem('height'),
      "work_company": localStorage.getItem('workplace'),
      "system_jobtitle": localStorage.getItem('whatyoudo'),
      "system_edulevel_id": localStorage.getItem('selectededuID'),
      "school": JSON.parse(localStorage.getItem('schoolsArray')),
      "career_goals": localStorage.getItem('career'),
      "system_religions_id": localStorage.getItem('religionID'),
      "system_affiliations_id": localStorage.getItem('affeliationID'),
      "system_maritalstatus_id": localStorage.getItem('meritalStatusSelectedID'),
      "willing_relocate": localStorage.getItem('relocate'),
      "system_personality_type_id": localStorage.getItem('selectedPersonalityTypeID'),
      "short_bio": localStorage.getItem('shortBio'),
      "prompts_id": myprompts,

      "instagram": localStorage.getItem('insta'),
      "linkedin": localStorage.getItem('linkedin'),
      "spotify": localStorage.getItem('spotify'),
      "know_anyone": localStorage.getItem('knowAnyoneFun'),
      "friend_contact": localStorage.getItem('phoneOfOther'),
      "friend_full_name": localStorage.getItem('fullnameOfOther'),
      "friend_email": localStorage.getItem('emailOfOther'),
      "onesignal_id": oneSignalID,


      "system_kosher_id": localStorage.getItem('kosherID'),
      "system_ethinicity_id": JSON.parse(localStorage.getItem('ethnicityArr')),

      "additional_comments": "Comment"

    })

    console.log('my Stringy----', data)

    // alert('my Stringy----' + data)


    this.restService.signupAPI(data).subscribe((res: any) => {
      console.log('apis responseeee------>>', res)
      this.workService.hideLoading()
      if (res.status == "success") {
        localStorage.clear()
        this.storage.clear()

        localStorage.setItem('user_instagram', this.signupServiece.appInsta)


        localStorage.setItem('login', 'isLogin')

        localStorage.setItem('loggedinUserData', JSON.stringify(res.data.user))
        localStorage.setItem('loggedinUserID', res.data.user.users_customers_id)

        this.workService.presentToast('Your Profile Created Successfully!')
        this.router.navigate(['requestsubmitted'], { replaceUrl: true })
      } else {

        this.workService.presentToast(res.message)
      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }

  getNoti(event) {
    console.log(event);

    if (event.detail.checked) {
      this.knowAnyoneFun = 'Yes';
      localStorage.setItem('knowAnyoneFun', 'Yes')
      console.log('afdsafsdfsdf', localStorage.getItem('knowAnyoneFun'));

    } else {
      this.knowAnyoneFun = 'No';
      localStorage.setItem('knowAnyoneFun', 'No')
    }
  }

  goToProfile1() {


    localStorage.setItem('shortBio', this.shortBio)
    localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
    localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
    localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
    localStorage.setItem('prompt1Val', this.prompt1Val)
    localStorage.setItem('prompt2Val', this.prompt2Val)
    localStorage.setItem('prompt3Val', this.prompt3Val)
    localStorage.setItem('spotify', this.spotify)
    localStorage.setItem('linkedin', this.linkedin)
    localStorage.setItem('insta', this.insta)
    localStorage.setItem('phoneOfOther', this.phoneOfOther)
    localStorage.setItem('emailOfOther', this.emailOfOther)
    localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
    localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())


    this.router.navigate(['youprofile1'])
  }
  goToProfile2() {



    localStorage.setItem('shortBio', this.shortBio)
    localStorage.setItem('prompt1ValHead', this.prompt1ValHead)
    localStorage.setItem('prompt2ValHead', this.prompt2ValHead)
    localStorage.setItem('prompt3ValHead', this.prompt3ValHead)
    localStorage.setItem('prompt1Val', this.prompt1Val)
    localStorage.setItem('prompt2Val', this.prompt2Val)
    localStorage.setItem('prompt3Val', this.prompt3Val)
    localStorage.setItem('spotify', this.spotify)
    localStorage.setItem('linkedin', this.linkedin)
    localStorage.setItem('insta', this.insta)
    localStorage.setItem('phoneOfOther', this.phoneOfOther)
    localStorage.setItem('emailOfOther', this.emailOfOther)
    localStorage.setItem('fullnameOfOther', this.fullnameOfOther)
    localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString())

    this.router.navigate(['yourprofile2'])
  }


  myInstaClick() {
    console.log('ciccc');

    if (this.insta.length < 1)
      this.insta = '@'
  }

  checked(ev) {
    console.log('value of checkbox==', ev.detail.checked);
    this.check = ev.detail.checked
  }

  goToTermsPolicy() {
    this.router.navigate(['termsservice'])
  }


}
