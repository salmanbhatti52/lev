(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_editprofile_editprofile_module_ts"],{

/***/ 90494:
/*!***********************************************************!*\
  !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageRoutingModule": function() { return /* binding */ EditprofilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.page */ 10263);




const routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_0__.EditprofilePage
    }
];
let EditprofilePageRoutingModule = class EditprofilePageRoutingModule {
};
EditprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditprofilePageRoutingModule);



/***/ }),

/***/ 59285:
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageModule": function() { return /* binding */ EditprofilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile-routing.module */ 90494);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page */ 10263);







let EditprofilePageModule = class EditprofilePageModule {
};
EditprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditprofilePageRoutingModule
        ],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_1__.EditprofilePage]
    })
], EditprofilePageModule);



/***/ }),

/***/ 10263:
/*!*************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePage": function() { return /* binding */ EditprofilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editprofile.page.html */ 88131);
/* harmony import */ var _editprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page.scss */ 77401);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../work.service */ 8981);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);













let EditprofilePage = class EditprofilePage {
    constructor(locationPlugin, router, restService, workService, DomSanitizer, locationBk, nativeGeocoder, zone, storage, alertcontroller, transfer) {
        this.locationPlugin = locationPlugin;
        this.router = router;
        this.restService = restService;
        this.workService = workService;
        this.DomSanitizer = DomSanitizer;
        this.locationBk = locationBk;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.storage = storage;
        this.alertcontroller = alertcontroller;
        this.transfer = transfer;
        this.lives = '';
        this.listishidden = true;
        this.latitude = '';
        this.longitude = '';
        this.userData = '';
        this.userPrompts = '';
        this.userSchool = '';
        this.ageStatus = false;
        this.age = '';
        this.heightStatus = false;
        this.height = '';
        this.locationStatus = false;
        this.location = '';
        this.statusStatus = false;
        this.status = 'Please Select';
        this.religionStatus = false;
        this.religion = 'Please Select';
        this.schoolStatus = false;
        this.school = '';
        this.schoolsArray = [];
        this.school_id = 0;
        this.popupHidden = true;
        this.select_image = '';
        this.img1SelectedFromCamera1 = '';
        this.img2SelectedFromCamera2 = '';
        this.imgArr = [{ id: 0, img: 'assets/imgs/chooseimg.png' }, { id: 1, img: 'assets/imgs/chooseimg.png' }];
        this.coverImg = '';
        this.base64ImageCover = '';
        this.coverImg2 = '';
        this.base64ImageCover2 = '';
        this.prompt1Head = '';
        this.prompt1Data = '';
        this.prompt2Head = '';
        this.prompt2Data = '';
        this.prompt3Head = '';
        this.prompt3Data = '';
        this.userHeight = '';
        this.short_bio = '';
        this.locationishidden = true;
        this.shortBioDisabled = true;
        this.dobDay = '';
        this.dobMonth = '';
        this.dobYear = '';
        this.first_name = '';
        this.last_name = '';
        this.profile_pic_1 = '';
        this.profile_pic_2 = '';
        this.system_maritalstatus_name = '';
        this.system_religions_name = '';
        this.minType1 = '';
        this.fleName1 = '';
        this.minType2 = '';
        this.fleName2 = '';
        this.uploadedCOverImage = '';
        this.uploadedCOverImage2 = '';
        this.height1 = '';
        this.height2 = '';
        this.searchData = '';
        this.incommingDataSystem = '';
        this.listishiddenSchool = false;
        this.autoresp = '';
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
    }
    ngOnInit() {
        this.userData = this.workService.myUserData.data.user_data;
        this.schoolsArray = this.workService.myUserData.data.users_schools;
        this.userPrompts = this.workService.myUserData.data.users_prompts;
        this.lives = this.userData.lives;
        console.log('user datttaaaa 11------', this.userData.auto_response);
        if (this.userData.auto_response == null) {
            this.autoresp = '';
            console.log('nullll ha');
        }
        else {
            this.autoresp = this.userData.auto_response;
            console.log('nullll nhiiiiiiiiiiii ha');
        }
        this.first_name = this.userData.first_name;
        this.last_name = this.userData.last_name;
        this.profile_pic_1 = this.userData.profile_pic_1;
        this.profile_pic_2 = this.userData.profile_pic_2;
        this.system_maritalstatus_name = this.userData.system_maritalstatus_name;
        this.system_religions_name = this.userData.system_religions_name;
        console.log('user data', this.userData);
        this.short_bio = this.userData.short_bio;
        console.log('name----------', this.userPrompts[0].prompt_name);
        this.prompt1Head = this.userPrompts[0].prompt_name;
        this.prompt1Data = this.userPrompts[0].comments;
        this.prompt2Head = this.userPrompts[1].prompt_name;
        this.prompt2Data = this.userPrompts[1].comments;
        this.prompt3Head = this.userPrompts[2].prompt_name;
        this.prompt3Data = this.userPrompts[2].comments;
        localStorage.setItem('prompt1ValHead', this.userPrompts[0].system_prompt_id);
        localStorage.setItem('prompt2ValHead', this.userPrompts[1].system_prompt_id);
        localStorage.setItem('prompt3ValHead', this.userPrompts[2].system_prompt_id);
        console.log('rrrrrrrrrr------', this.workService.myUserData.data.user_data.height);
        this.userHeight = parseFloat(this.workService.myUserData.data.user_data.height).toFixed(1);
        this.height1 = this.userHeight.substring(0, 1);
        this.height2 = this.userHeight.substring(2, 3);
        this.ageFromDOB(this.workService.myUserData.data.user_data.date_of_birth);
        this.storeData();
        this.workService.presentLoading();
        var stringy = JSON.stringify({});
        // this.workService.presentLoading()
        this.restService.getSystemDataAPI(stringy).subscribe((res) => {
            this.workService.hideLoading();
            console.log('incomming data----', res);
            // this.workService.hideLoading()
            if (res.status == "success") {
                console.log(res.data);
                console.log('user dataaaa', res);
                this.workService.systemData = res.data;
                this.incommingDataSystem = res.data;
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    ionViewWillEnter() {
        this.storage.set('coverImg', this.base64ImageCover);
        this.storage.set('coverImg2', this.base64ImageCover2);
        this.schoolsArray = JSON.parse(localStorage.getItem('schoolsArray'));
        this.lives = localStorage.getItem('location');
        this.first_name = localStorage.getItem('first_name');
        this.last_name = localStorage.getItem('last_name');
        this.profile_pic_1 = localStorage.getItem('profile_pic_1');
        this.profile_pic_2 = localStorage.getItem('profile_pic_2');
        this.system_maritalstatus_name = localStorage.getItem('meritalStatus');
        this.system_religions_name = localStorage.getItem('religion');
        this.short_bio = localStorage.getItem('shortbio');
        this.prompt1Head = localStorage.getItem('prompt1Name');
        this.prompt1Data = localStorage.getItem('prompt1Data');
        this.prompt2Head = localStorage.getItem('prompt2Name');
        this.prompt2Data = localStorage.getItem('prompt2Data');
        this.prompt3Head = localStorage.getItem('prompt3Name');
        this.prompt3Data = localStorage.getItem('prompt3Data');
        this.userHeight = localStorage.getItem('height');
        this.dobDay = localStorage.getItem('dobDay');
        this.dobMonth = localStorage.getItem('dobMonth');
        this.dobYear = localStorage.getItem('dobYear');
        this.userData.system_religions_id = localStorage.getItem('religionID');
        this.userData.system_maritalstatus_id = localStorage.getItem('meritalStatusSelectedID');
        this.height1 = this.userHeight.substring(0, 1);
        this.height2 = this.userHeight.substring(2, 3);
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
        this.locationPlugin.back();
        this.deleteData();
    }
    goToStatus() {
        this.storeData();
        this.router.navigate(['maritalstatus']);
    }
    goToReligion() {
        this.storeData();
        this.router.navigate(['religion']);
    }
    goToPrompt1() {
        this.storeData();
        this.router.navigate(['prompt1update']);
    }
    goToPrompt2() {
        this.storeData();
        this.router.navigate(['prompt2update']);
    }
    goToPrompt3() {
        this.storeData();
        this.router.navigate(['prompt3update']);
    }
    handleImgError(ev, item, url) {
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
        this.storeData();
        this.router.navigate(['myage']);
    }
    showPopup(val) {
        this.select_image = val;
        this.popupHidden = false;
    }
    hidePopup() {
        console.log('hidepop');
        this.popupHidden = true;
    }
    CameraSelected() {
        this.hidePopup();
        console.log('camera');
        this.workService.selectImageInCamera().then((imageData) => {
            if (this.select_image == 0) {
                this.img1SelectedFromCamera1 = '1';
                localStorage.setItem('img1SelectedFromCamera1', this.img1SelectedFromCamera1);
                this.coverImg = imageData;
                this.base64ImageCover = `data:image/png;base64,${imageData}`;
                this.profile_pic_1 = this.base64ImageCover;
            }
            else {
                this.img2SelectedFromCamera2 = '1';
                localStorage.setItem('img2SelectedFromCamera2', this.img2SelectedFromCamera2);
                this.coverImg2 = imageData;
                this.base64ImageCover2 = `data:image/png;base64,${imageData}`;
                this.profile_pic_2 = this.base64ImageCover2;
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
        this.hidePopup();
        console.log('gallery');
        this.workService.selectImageInGallery().then((imageData) => {
            if (this.select_image == 0) {
                this.img1SelectedFromCamera1 = '0';
                localStorage.setItem('img1SelectedFromCamera1', this.img1SelectedFromCamera1);
                this.coverImg = imageData;
                this.base64ImageCover = `data:image/png;base64,${imageData}`;
                this.profile_pic_1 = this.base64ImageCover;
            }
            else {
                console.log('okkkkkkkkkkkkk 111111111111');
                this.img2SelectedFromCamera2 = '0';
                localStorage.setItem('img2SelectedFromCamera2', this.img2SelectedFromCamera2);
                this.coverImg2 = imageData;
                this.base64ImageCover2 = `data:image/png;base64,${imageData}`;
                this.profile_pic_2 = this.base64ImageCover2;
            }
        }, (err) => {
            console.log('imagepicker  now:', err);
        });
    }
    updateSearchResultsEvent(ev) {
        console.log(ev);
        if (ev.target.value.length > 0) {
            console.log('greatrtt    00000000000', ev.detail.value, ev.target.value.length);
            this.listishidden = false;
            this.GoogleAutocomplete.getPlacePredictions({ input: this.lives }, (predictions, status) => {
                this.autocompleteItems = [];
                this.zone.run(() => {
                    predictions.forEach((prediction) => {
                        this.autocompleteItems.push(prediction);
                    });
                });
            });
        }
        else {
            console.log('eeeeeeeeeeeeeeeeeeeeeeeee', ev.detail.value);
            this.listishidden = true;
            console.log('khaallllllooiiiiiiiiiii');
            this.locationishidden = false;
            this.location = '';
            this.autocompleteItems = [];
            console.log('lllllllllllllllll', this.location);
        }
    }
    selectSearchResult(item) {
        this.listishidden = true;
        this.locationishidden = true;
        this.autocompleteItems = [];
        console.log('itemmmmmmmmmmmmmmmmmmmmmmmmm', item);
        this.location = item;
        this.lives = this.location.description;
        this.listishidden = true;
        console.log('location', this.location.latitude);
        this.placeid = this.location.place_id;
        console.log('placeid' + this.placeid);
        this.location = item.description;
        console.log('aaaaaaaaaaaaaaaaaaa', this.location);
        this.nativeGeocoder.forwardGeocode(this.location)
            .then((result) => {
            this.latitude = result[0].latitude;
            this.longitude = result[0].longitude;
            console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
        })
            .catch((error) => console.log(error));
    }
    enableShortBio() {
        console.log('j');
        this.shortBioDisabled = false;
    }
    checkDay() {
        if (this.dobDay > 31) {
            this.workService.presentToast('Invalid Date');
            this.dobDay = 31;
        }
    }
    chkMinDay() {
        if (parseInt(this.dobDay) < 1) {
            this.workService.presentToast('Invalid Date');
            this.dobDay = 1;
        }
    }
    checkMonth() {
        if (this.dobMonth > 12) {
            this.workService.presentToast('Invalid Month');
            this.dobMonth = 12;
        }
    }
    chkMinMonth() {
        if (parseInt(this.dobMonth) < 1) {
            this.workService.presentToast('Invalid Month');
            this.dobMonth = 1;
        }
    }
    checkYear() {
        if (this.dobYear > 2021) {
            this.workService.presentToast('Invalid Year');
            this.dobYear = 2021;
        }
    }
    minYearCehck() {
        if (parseInt(this.dobYear) < 1950) {
            this.workService.presentToast('Invalid Year');
            this.dobYear = 1950;
        }
    }
    done() {
        console.log('goooo');
        let dob = this.dobYear + '-' + this.dobMonth + '-' + this.dobDay;
        ///age difference////
        const bdate = new Date(dob);
        const timeDiff = Math.abs(Date.now() - bdate.getTime());
        this.agediff = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        console.log('age diff', this.agediff);
        if (this.schoolsArray.length > 0 && this.lives != '' && this.short_bio != '' && this.dobDay != '' && this.dobMonth != '' && this.dobYear != ''
            && this.prompt1Data != '' && this.prompt2Data != '' && this.prompt3Data != '') {
            const fileTransfer = this.transfer.create();
            const random = Math.floor(Math.random() * 100);
            if (localStorage.getItem('img1SelectedFromCamera1') == '0') {
                //gallery
                this.fleName1 = ".png";
                this.minType1 = "image/png";
            }
            else {
                //camera
                this.fleName1 = ".jpg";
                this.minType1 = "image/jpeg";
            }
            if (localStorage.getItem('img2SelectedFromCamera2') == '0') {
                //gallery
                this.fleName2 = ".png";
                this.minType2 = "image/png";
            }
            else {
                //camera
                this.fleName2 = ".jpg";
                this.minType2 = "image/jpeg";
            }
            if (this.img1SelectedFromCamera1 == '' && this.img2SelectedFromCamera2 == '') {
                this.uploadedCOverImage = this.profile_pic_1;
                this.uploadedCOverImage2 = this.profile_pic_2;
                this.subMitFormData();
            }
            if (this.img1SelectedFromCamera1 != '' && this.img2SelectedFromCamera2 == '') {
                console.log('image1Updated11111111111');
                this.uploadedCOverImage = this.profile_pic_1;
                this.uploadedCOverImage2 = this.profile_pic_2;
                this.fileTransferFun1();
            }
            if (this.img1SelectedFromCamera1 == '' && this.img2SelectedFromCamera2 != '') {
                console.log('image2Updated2222222222222');
                this.uploadedCOverImage = this.profile_pic_1;
                this.uploadedCOverImage2 = this.profile_pic_2;
                this.fileTransferFun2();
            }
            if (this.img1SelectedFromCamera1 != '' && this.img2SelectedFromCamera2 != '') {
                console.log('image1Updatedbothhhhhhhhhhhhhhhhhh');
                this.uploadedCOverImage = this.profile_pic_1;
                this.uploadedCOverImage2 = this.profile_pic_2;
                this.fileTransferFunforBothImages();
            }
        }
        else {
            this.workService.presentToast('Please Fill Required Fields');
        }
        // })
    }
    fileTransferFunforBothImages() {
        this.workService.presentLoading();
        console.log('image 1 and 2', this.base64ImageCover);
        console.log('image 1 and 2', this.base64ImageCover2);
        const fileTransfer = this.transfer.create();
        const random = Math.floor(Math.random() * 100);
        const optionsImageOne = {
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
            .upload(this.base64ImageCover, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageOne)
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var img1Data = JSON.parse(data.response);
            this.uploadedCOverImage = img1Data.message;
            const optionsImageTwo = {
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
                .upload(this.base64ImageCover2, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageTwo)
                .then((licenseData) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                var img2Data = JSON.parse(licenseData.response);
                this.uploadedCOverImage2 = img2Data.message;
                this.workService.hideLoading();
                this.subMitFormData();
            }), (err) => {
                console.log("Error");
                console.log(err);
                return;
            });
        }));
    }
    fileTransferFun1() {
        this.workService.presentLoading();
        const fileTransfer = this.transfer.create();
        const random = Math.floor(Math.random() * 100);
        console.log('image 1-------', this.base64ImageCover);
        const optionsImageOne = {
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
            .upload(this.base64ImageCover, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageOne)
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.workService.hideLoading();
            var imgData = JSON.parse(data.response);
            this.uploadedCOverImage = imgData.message;
            this.subMitFormData();
        }));
    }
    fileTransferFun2() {
        this.workService.presentLoading();
        console.log('image 2', this.base64ImageCover2);
        const fileTransfer = this.transfer.create();
        const random = Math.floor(Math.random() * 100);
        const optionsImageTwo = {
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
            .upload(this.base64ImageCover2, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageTwo)
            .then((licenseData) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.workService.hideLoading();
            var img2Data = JSON.parse(licenseData.response);
            this.uploadedCOverImage2 = img2Data.message;
            this.subMitFormData();
        }), (err) => {
            console.log("Error");
            console.log(err);
            return;
        });
    }
    subMitFormData() {
        var prompt1HeadIDVal = localStorage.getItem('prompt1ValHead');
        var prompt2HeadIDVal = localStorage.getItem('prompt2ValHead');
        var prompt3HeadIDVal = localStorage.getItem('prompt3ValHead');
        var prompt1Val = this.prompt1Data;
        var prompt2Val = this.prompt2Data;
        var prompt3Val = this.prompt3Data;
        var myprompts = {};
        myprompts[prompt1HeadIDVal] = prompt1Val;
        myprompts[prompt2HeadIDVal] = prompt2Val;
        myprompts[prompt3HeadIDVal] = prompt3Val;
        var stringy = JSON.stringify({
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
        });
        console.log('stringy===========================', stringy);
        var userID = localStorage.getItem('loggedinUserID');
        if (this.agediff < 18) {
            this.basicAlert('You are under 18');
        }
        else if (this.dobDay.length < 2) {
            this.workService.presentToast('Date must be 2 digit');
        }
        else if (this.dobMonth.length < 2) {
            this.workService.presentToast('Month must be 2 digit');
        }
        else {
            this.workService.presentLoading();
            this.restService.updateUserDataAPI(stringy, userID).subscribe((res) => {
                console.log('incomking resonse', res);
                if (res.status == 'success') {
                    this.workService.hideLoading();
                    this.deleteData();
                    this.workService.presentToast('Profile Updaed Successfully');
                    this.router.navigate(['tabs/tab3'], { replaceUrl: true });
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
        }
    }
    ageFromDOB(dateOfBirth) {
        console.log("my dob------------", dateOfBirth);
        console.log(new Date(dateOfBirth).getFullYear());
        console.log(new Date(dateOfBirth).getDate());
        console.log(new Date(dateOfBirth).getMonth() + 1); // month value has index 0 so add 1 to it.
        this.dobDay = new Date(dateOfBirth).getDate();
        this.dobYear = new Date(dateOfBirth).getFullYear();
        this.dobMonth = new Date(dateOfBirth).getMonth() + 1;
    }
    storeData() {
        localStorage.setItem('first_name', this.first_name);
        localStorage.setItem('last_name', this.last_name);
        localStorage.setItem('profile_pic_1', this.profile_pic_1);
        localStorage.setItem('profile_pic_2', this.profile_pic_2);
        localStorage.setItem('system_maritalstatus_name', this.system_maritalstatus_name);
        localStorage.setItem('system_religions_name', this.system_religions_name);
        this.storage.set('coverImg', this.base64ImageCover);
        this.storage.set('coverImg2', this.base64ImageCover2);
        // localStorage.setItem('coverImg', this.coverImg)
        // localStorage.setItem('coverImg2', this.coverImg2)
        localStorage.setItem('prompt1Name', this.prompt1Head);
        localStorage.setItem('prompt1Data', this.prompt1Data);
        localStorage.setItem('prompt2Name', this.prompt2Head);
        localStorage.setItem('prompt2Data', this.prompt2Data);
        localStorage.setItem('prompt3Name', this.prompt3Head);
        localStorage.setItem('prompt3Data', this.prompt3Data);
        localStorage.setItem('shortbio', this.short_bio);
        localStorage.setItem('dobDay', this.dobDay);
        localStorage.setItem('dobMonth', this.dobMonth);
        localStorage.setItem('dobYear', this.dobYear);
        localStorage.setItem('height', this.userHeight);
        localStorage.setItem('location', this.lives);
        localStorage.setItem('meritalStatusSelectedID', this.userData.system_maritalstatus_id);
        localStorage.setItem('religionID', this.userData.system_religions_id);
        localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
        localStorage.setItem('meritalStatus', this.system_maritalstatus_name);
        localStorage.setItem('religion', this.system_religions_name);
    }
    deleteData() {
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        localStorage.removeItem('profile_pic_1');
        localStorage.removeItem('profile_pic_2');
        localStorage.removeItem('system_maritalstatus_name');
        localStorage.removeItem('system_religions_name');
        this.storage.remove('coverImg');
        this.storage.remove('coverImg2');
        // localStorage.setItem('coverImg', this.coverImg)
        // localStorage.setItem('coverImg2', this.coverImg2)
        localStorage.removeItem('prompt1Name');
        localStorage.removeItem('prompt1Data');
        localStorage.removeItem('prompt2Name');
        localStorage.removeItem('prompt2Data');
        localStorage.removeItem('prompt3Name');
        localStorage.removeItem('prompt3Data');
        localStorage.removeItem('shortbio');
        localStorage.removeItem('dobDay');
        localStorage.removeItem('dobMonth');
        localStorage.removeItem('dobYear');
        localStorage.removeItem('height');
        localStorage.removeItem('location');
        localStorage.removeItem('meritalStatusSelectedID');
        localStorage.removeItem('religionID');
        localStorage.removeItem('schoolsArray');
        localStorage.removeItem('meritalStatus');
        localStorage.removeItem('religion');
    }
    schoolAded(event) {
        this.listishiddenSchool = true;
        this.autocompleteItems = [];
        console.log('enterrrrrrr', this.school);
        var obj = {
            id: this.school_id,
            name: this.school
        };
        console.log('name---', obj);
        if (obj.name != "" && obj.name != "\n" && obj.name != "\n\n" && obj.name != "\n\n\n" && obj.name != "\n\n\n\n" && obj.name != "\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n\n") {
            this.school_id = this.school_id + 1;
            this.schoolsArray.push(obj);
            this.school = '';
        }
    }
    selectSearchResultSchool(item) {
        console.log('item = ', item);
        this.listishiddenSchool = true;
        this.autocompleteItems = [];
        console.log('enterrrrrrr', this.school);
        var obj = {
            id: item.system_schools_id,
            name: item.name
        };
        console.log('name---', obj);
        if (obj.name != "" && obj.name != "\n" && obj.name != "\n\n" &&
            obj.name != "\n\n\n" && obj.name != "\n\n\n\n" &&
            obj.name != "\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n" &&
            obj.name != "\n\n\n\n\n\n\n") {
            this.school_id = this.school_id + 1;
            this.schoolsArray.push(obj);
            this.school = '';
        }
    }
    onInput(event) {
        if (event.detail.value == '') {
            this.listishiddenSchool = false;
        }
        else {
            this.listishiddenSchool = true;
            console.log('event value==', event.detail.value);
            this.searchData = event.detail.value;
            // console.log('searchData', this.searchData);
            console.log('toprateddest-----------', this.incommingDataSystem.system_schools);
            this.autocompleteItems = this.incommingDataSystem.system_schools.filter((item) => {
                if (item.name != null) {
                    return ((item.name.toLowerCase().includes(event.detail.value.toLowerCase())));
                }
            });
            console.log('filter-----------', this.autocompleteItems);
            if (this.school == '') {
                this.listishiddenSchool = true;
                this.autocompleteItems = [];
            }
        }
    }
    basicAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertcontroller.create({
                cssClass: 'basicAlert',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
EditprofilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer }
];
EditprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-editprofile',
        template: _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditprofilePage);



/***/ }),

/***/ 77401:
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nhr {\n  display: block;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  overflow: hidden;\n  border-style: inset;\n}\n\nion-toggle {\n  --background: rgb(255, 255, 255);\n  --background-checked: #000000;\n  --handle-background: #000000;\n  --handle-background-checked: rgb(255, 255, 255);\n}\n\n.numberDiv1 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv2 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #615d5db0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv3 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.redclass {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFBQSwwQkFBQTtFQUFBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFFQSw0QkFBQTtFQUNBLCtDQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUoiLCJmaWxlIjoiZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGhlaWdodDogNDBwdDtcclxufVxyXG5cclxucCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzAwMDAwMDtcclxuXHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5udW1iZXJEaXYxIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubnVtYmVyRGl2MiB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNWQ1ZGIwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLm51bWJlckRpdjMge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5yZWRjbGFzcyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 88131:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width:20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: center;\">\n      <p (click)=\"done()\" style=\"font-size: 14pt;\">Done</p>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row class=\"margin-top-fixed\">\n    <ion-col style=\"text-align: left;\">\n      <p style=\"margin-left: 14px;\n      font-size: 14pt;\">{{first_name}} {{last_name}}</p>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center;\">\n      <img *ngIf=\"!base64ImageCover\" (error)=\"handleImgError($event, item)\" style=\"    height: 110pt;\n      width: 110pt;\n      object-fit: cover;\" src=\"{{restService.baseUrlForImg}}{{profile_pic_1}}\">\n      <img *ngIf=\"base64ImageCover\" (error)=\"handleImgError($event, item)\" style=\"    height: 110pt;\n        width: 110pt;\n        object-fit: cover;\" src=\"{{profile_pic_1}}\">\n    </ion-col>\n\n    <ion-col style=\"text-align: center;\">\n      <img *ngIf=\"!base64ImageCover2\" (error)=\"handleImgError($event, item)\" style=\"    height: 110pt;\n      width: 110pt;\n      object-fit: cover;\" src=\"{{restService.baseUrlForImg}}{{profile_pic_2}}\">\n      <img *ngIf=\"base64ImageCover2\" (error)=\"handleImgError($event, item)\" style=\"    height: 110pt;\n       width: 110pt;\n       object-fit: cover;\" src=\"{{profile_pic_2}}\">\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center;\">\n      <ion-text (click)=\"showPopup(0)\">Edit</ion-text>\n    </ion-col>\n\n    <ion-col style=\"text-align: center;\">\n      <ion-text (click)=\"showPopup(1)\">Edit</ion-text>\n    </ion-col>\n\n  </ion-row>\n\n\n  <div style=\"padding: 25px;\">\n    <p style=\"font-size:14pt;\">My Profile Prompt Answers</p>\n\n    <div (click)=\"goToPrompt1()\" style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n      <img style=\"position: absolute;\n                  height: 20px;\n                  width: 20px;\n                  padding: 2px;\n                 \n                  right: 36px;\" src=\"assets/imgs/close.svg\">\n\n      <ion-text style=\"font-size: 9pt;\">\n        {{prompt1Head}}\n      </ion-text>\n      <br>\n      <ion-text style=\"font-size: 9pt;\">\n        {{prompt1Data}}\n      </ion-text>\n\n    </div>\n\n\n\n\n\n\n\n    <div (click)=\"goToPrompt2()\" style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n\n      <img style=\"position: absolute;\n                    height: 20px;\n                    width: 20px;\n                    padding: 2px;\n                  \n                    right: 36px;\" src=\"assets/imgs/close.svg\">\n\n      <ion-text style=\"font-size: 9pt;\">\n        {{prompt2Head}}\n      </ion-text>\n      <br>\n      <ion-text style=\"font-size: 9pt;\">\n        {{prompt2Data}}\n      </ion-text>\n\n    </div>\n\n\n\n\n    <div (click)=\"goToPrompt3()\" style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n\n      <img style=\"position: absolute;\n                    height: 20px;\n                    width: 20px;\n                    padding: 2px;\n                   \n                    right: 36px;\" src=\"assets/imgs/close.svg\">\n\n      <ion-text style=\"font-size: 9pt;\">\n        {{prompt3Head}}\n      </ion-text>\n      <br>\n      <ion-text style=\"font-size: 9pt;\">\n        {{prompt3Data}}\n      </ion-text>\n\n    </div>\n\n\n\n\n\n    <p style=\"font-size:14pt;\">Short Bio</p>\n\n    <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n\n      <img style=\"position: absolute;\n                    height: 20px;\n                    width: 20px;\n                    padding: 2px;\n                    right: 36px;\" src=\"assets/imgs/close.svg\">\n\n\n      <ion-input *ngIf=\"shortBioDisabled\" style=\"height: 26px;\n               font-size: 9pt;\" placeholder=\"Your short bio here\" [(ngModel)]=\"short_bio\" disabled>\n      </ion-input>\n\n      <ion-input *ngIf=\"!shortBioDisabled\" style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Your short bio here\" [(ngModel)]=\"short_bio\" (ionChange)=\"changeFunction($event)\">\n      </ion-input>\n\n\n      <!-- <ion-text style=\"font-size: 9pt;\">{{userData.}}\n      </ion-text> -->\n\n    </div>\n\n\n    <ion-row>\n      <ion-col style=\"text-align: right;\">\n        <ion-text (click)=\"enableShortBio()\">Edit</ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n    <p style=\"font-size:14pt;\">Personal Details</p>\n\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 6px;\">\n\n      <div class=\"inp inp-top-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"dobStatus\">Date of birth</ion-text>\n\n        <ion-row>\n          <ion-col>\n            <ion-input type=\"tel\" style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Day\" [(ngModel)]=\"dobDay\" (ionChange)=\"checkDay()\" (ionBlur)=\"chkMinDay()\"\n              maxlength=\"2\"></ion-input>\n          </ion-col>\n\n          <ion-col>\n            <ion-input type=\"tel\" style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Month\" [(ngModel)]=\"dobMonth\" (ionChange)=\"checkMonth()\"\n              (ionBlur)=\"chkMinMonth()\" max=\"12\" maxlength=\"2\"></ion-input>\n          </ion-col>\n\n          <ion-col>\n            <ion-input type=\"tel\" style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Year\" [(ngModel)]=\"dobYear\" (ionChange)=\"checkYear()\"\n              (ionBlur)=\"minYearCehck()\" maxlength=\"4\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div (click)=\"goToMyheight()\" class=\"inp-bottom-radius\"\n        style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"heightStatus\">Height</ion-text> <br>\n\n        <ion-text style=\"font-size: 9pt;\">{{height1}}'{{height2}}</ion-text>\n\n\n        <!-- <ion-input type=\"tel\" style=\"height: 26px;\n    font-size: 9pt;\n    color:#ffffff;\" placeholder=\"60 inches\" [(ngModel)]=\"height\" disabled (click)=\"goToMyheight()\"></ion-input> -->\n\n      </div>\n\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"locationStatus\">Location</ion-text> <br>\n\n\n        <ion-input autocapitalize=words style=\"height: 26px;\n        font-size: 9pt;\" placeholder=\"Your Location Here...\" [(ngModel)]=\"lives\"\n          (ionInput)=\"updateSearchResultsEvent($event)\" (ionChange)=\"changeFunction1($event)\"></ion-input>\n\n        <ion-list [hidden]=\"listishidden\">\n          <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\" style=\"\n          color: gray\">\n            {{ item.description }}\n          </ion-item>\n        </ion-list>\n      </div>\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n      <div (click)=\"goToStatus()\" class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"statusStatus\">Status</ion-text> <br>\n\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff; \">{{system_maritalstatus_name}}</ion-text>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div (click)=\"goToReligion()\" class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"religionStatus\">Religion</ion-text> <br>\n\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff; \">{{system_religions_name}}</ion-text>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"schoolStatus\">School</ion-text> <br>\n        <!-- <ion-input autocapitalize=words style=\"height: 26px;\n        font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"school\"></ion-input> -->\n        <div style=\"    max-height: 68px;\n        overflow: scroll;\">\n\n          <ion-chip style=\"max-width: 99%;\n        overflow: auto;\" *ngFor=\"let school of schoolsArray; let i = index\">\n            <ion-label style=\"max-width: 90%;\">{{school.name}}</ion-label>\n            <ion-icon (click)=\"deleteSchool(i)\" style=\"color: white;\" name=\"close-circle\"></ion-icon>\n          </ion-chip>\n        </div>\n        <ion-input style=\"\n       font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"school\" (keyup.enter)=\"schoolAded()\"\n          (ionChange)=\"onInput($event)\" (ionChange)=\"changeFunction2($event)\"></ion-input>\n\n\n      </div>\n\n    </div>\n\n\n    <ion-list style=\"    max-height: 210px;\n    overflow: scroll;\" *ngIf=\"listishiddenSchool\">\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResultSchool(item)\" style=\"\n            color: gray\">\n        {{item.name}}\n      </ion-item>\n    </ion-list>\n\n\n\n    <!-- <p style=\"font-size:14pt;\">Auto Response</p>\n\n    <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n\n\n\n      <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Your auto response\" [(ngModel)]=\"autoresp\">\n      </ion-input>\n\n\n     \n\n    </div> -->\n\n\n  </div>\n\n\n</ion-content>\n\n\n\n\n\n\n<div [hidden]=\"popupHidden\" style=\"    height: 100%;\nwidth: 100%;\nbackground-color: rgb(0 0 0 / 68%);\nposition: absolute;\">\n\n  <div style=\"left: 10%;\n  position: absolute;\n  top: 40%;\n  width: 80%;\n  height: 147px;\n  background-color: rgb(255, 255, 255);\n  border-radius: 20px;\">\n\n    <ion-row>\n      <ion-col style=\"padding-top: 10 px; padding-right: 10px;\n  text-align: right;\">\n        <img style=\"    height: 10px;\n        width: 10px;\n        margin-right: 4px;\n        margin-top: 8px;\" src=\"assets/imgs/closeblack.svg\" (click)=\"hidePopup()\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: -4px;\">\n      <ion-col (click)=\"CameraSelected()\" style=\"\n    text-align: center;\">\n        <img style=\"height: 50px;\n      width: 50px;\" src=\"assets/imgs/camera.svg\">\n        <p style=\"color: black;\">Camera</p>\n\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"\n    text-align: center;\">\n        <img style=\"height: 50px;\n      width: 50px;\" src=\"assets/imgs/galleryblack.svg\">\n        <p style=\"color: black;\">Gallery</p>\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_editprofile_editprofile_module_ts-es2015.js.map