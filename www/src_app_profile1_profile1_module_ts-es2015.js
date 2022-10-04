(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_profile1_profile1_module_ts"],{

/***/ 32196:
/*!*****************************************************!*\
  !*** ./src/app/profile1/profile1-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile1PageRoutingModule": function() { return /* binding */ Profile1PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile1.page */ 66058);




const routes = [
    {
        path: '',
        component: _profile1_page__WEBPACK_IMPORTED_MODULE_0__.Profile1Page
    }
];
let Profile1PageRoutingModule = class Profile1PageRoutingModule {
};
Profile1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Profile1PageRoutingModule);



/***/ }),

/***/ 8582:
/*!*********************************************!*\
  !*** ./src/app/profile1/profile1.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile1PageModule": function() { return /* binding */ Profile1PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile1-routing.module */ 32196);
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile1.page */ 66058);







let Profile1PageModule = class Profile1PageModule {
};
Profile1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Profile1PageRoutingModule
        ],
        declarations: [_profile1_page__WEBPACK_IMPORTED_MODULE_1__.Profile1Page]
    })
], Profile1PageModule);



/***/ }),

/***/ 66058:
/*!*******************************************!*\
  !*** ./src/app/profile1/profile1.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile1Page": function() { return /* binding */ Profile1Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile1.page.html */ 62626);
/* harmony import */ var _profile1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile1.page.scss */ 57284);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);










let Profile1Page = class Profile1Page {
    constructor(router, location, workService, restService, platform, iab) {
        this.router = router;
        this.location = location;
        this.workService = workService;
        this.restService = restService;
        this.platform = platform;
        this.iab = iab;
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.pass1 = '';
        this.pass2 = '';
        this.userPhoneNumber = '';
        this.fnameStatus = false;
        this.lnameStatus = false;
        this.emailStatus = false;
        this.pass1Status = false;
        this.pass2Status = false;
        this.getNotiAndUpdates = 'Yes';
        this.u = false;
        this.togglePlatformAndroid = false;
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }
    ngOnInit() {
        if (this.platform.is('android')) {
            this.togglePlatformAndroid = true;
        }
        else {
            this.togglePlatformAndroid = false;
        }
    }
    ionViewWillEnter() {
        this.fname = localStorage.getItem('fname');
        this.lname = localStorage.getItem('lname');
        this.email = localStorage.getItem('email');
        this.getNotiAndUpdates = localStorage.getItem('getNotiAndUpdates');
        console.log('noti', this.getNotiAndUpdates);
        if (localStorage.getItem('getNotiAndUpdates') == null) {
            this.getNotiAndUpdates = 'Yes';
        }
        if (localStorage.getItem('fname') == null) {
            this.fname = '';
        }
        if (localStorage.getItem('lname') == null) {
            this.lname = '';
        }
        if (localStorage.getItem('email') == null) {
            this.email = '';
        }
        console.log(localStorage.getItem('fname'));
    }
    // createAccount() { this.router.navigate(['info'], { replaceUrl: true }) }
    changename(ev) {
        this.fname = this.restService.removebadwords(ev.detail.value);
    }
    changelname(ev) {
        this.lname = this.restService.removebadwords(ev.detail.value);
    }
    changeemail(ev) {
        this.email = this.restService.removebadwords(ev.detail.value);
    }
    changepass(ev) {
        this.pass1 = this.restService.removebadwords(ev.detail.value);
    }
    changepass2(ev) {
        this.pass2 = this.restService.removebadwords(ev.detail.value);
    }
    createAccount() {
        console.log('createAccount', this.pass1);
        this.userPhoneNumber = localStorage.getItem('userPhoneNumber');
        if (this.fname == '') {
            this.fnameStatus = true;
        }
        if (this.lname == '') {
            this.lnameStatus = true;
        }
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.email)) {
            this.emailStatus = true;
            this.workService.presentToast('Enter Valid Email.');
        }
        if (this.email == '') {
            this.emailStatus = true;
        }
        if (this.pass1 == '') {
            this.pass1Status = true;
        }
        if (this.pass2 == '') {
            this.pass2Status = true;
        }
        setInterval(() => {
            this.fnameStatus = false;
            this.lnameStatus = false;
            this.emailStatus = false;
            this.pass1Status = false;
            this.pass2Status = false;
        }, 4000);
        if (this.fname != '' && this.lname != '' && this.email != '' && re.test(this.email) && this.pass1 != '' && this.pass2 != '') {
            if (this.pass1 == this.pass2) {
                //   var data = JSON.stringify({
                //     firstname: this.fname,
                //     lastname: this.lname,
                //     userEmail: this.email,
                //     userPassword: this.pass1,
                //     phone: this.userPhoneNumber,
                //     getNotification: this.getNotiAndUpdates,
                //   })
                //   console.log(data);
                //   this.workService.presentLoading()
                //   this.restService.profile1API(data).subscribe((res: any) => {
                //     this.workService.hideLoading()
                //     if (res.status == 'success') {
                //       this.router.navigate(['info'], { replaceUrl: true })
                //       localStorage.setItem('userData', JSON.stringify(res))
                //     } else {
                //       this.workService.presentToast(res.message)
                //     }
                //     console.log(res);
                //   }, err => {
                //     console.log(err);
                //     this.workService.presentToast('Some Error Occured')
                //     this.workService.hideLoading()
                //   })
                // 
                this.workService.presentLoading();
                var data = JSON.stringify({
                    "requestType": "check_email",
                    "user_email": this.email
                });
                console.log('data-----', data);
                this.restService.check_email_existsAPI(data).subscribe((res) => {
                    console.log('res-----', res);
                    this.workService.hideLoading();
                    if (res.status == 'success') {
                        localStorage.setItem('fname', this.fname);
                        localStorage.setItem('lname', this.lname);
                        localStorage.setItem('email', this.email);
                        localStorage.setItem('pass1', this.pass1);
                        localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates);
                        this.router.navigate(['info']);
                    }
                    else {
                        this.workService.presentToast('Email already exists.');
                    }
                }, err => {
                    this.workService.hideLoading();
                    this.workService.presentToast('Network error occured');
                });
            }
            else {
                this.pass1Status = true;
                this.pass2Status = true;
                this.pass1Status = true;
                this.pass2Status = true;
                setInterval(() => {
                    this.pass1Status = false;
                    this.pass2Status = false;
                }, 4000);
                this.workService.presentToast('Password not matched.');
            }
        }
    }
    goToBack() {
        this.location.back();
        //this.router.navigate(['otp'], { replaceUrl: true })
    }
    getNoti(event) {
        console.log(event);
        if (event.detail.checked) {
            this.getNotiAndUpdates = 'Yes';
        }
        else {
            this.getNotiAndUpdates = 'No';
        }
    }
    goToSignin() {
        // this.router.navigate(['apply'], { replaceUrl: true })
        this.workService.comingForm = 'login';
        this.router.navigate(['gettingstart'], { replaceUrl: true });
    }
    goToTermsPolicy() {
        this.router.navigate(['termsservice']);
    }
    goToCareer() {
        this.router.navigate(['career']);
    }
    goToContact() {
        this.router.navigate(['contactussignup']);
    }
    gotoInta() {
        console.log('goToInnsta');
        let browser = this.iab.create("https://www.instagram.com/thelevapp/?utm_medium=copy_link", "_system");
    }
};
Profile1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppBrowser }
];
Profile1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile1',
        template: _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Profile1Page);



/***/ }),

/***/ 57284:
/*!*********************************************!*\
  !*** ./src/app/profile1/profile1.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #838383;\n  color: black;\n  font-size: 14pt;\n  /* box-shadow: 0px 4px 10px #0000001f; */\n  border-radius: 38px;\n  /* opacity: 1; */\n  padding-top: 12px;\n  padding-bottom: 16px;\n  height: 40pt;\n  width: 100%;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nhr {\n  display: block;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  overflow: hidden;\n  border-style: inset;\n}\n\n.redclass {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFBQSwwQkFBQTtFQUFBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLFVBQUE7QUFERiIsImZpbGUiOiJwcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2MtaW9uLWlucHV0LW1kLWgge1xuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogIzgzODM4MztcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIC8qIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7ICovXG4gIGJvcmRlci1yYWRpdXM6IDM4cHg7XG4gIC8qIG9wYWNpdHk6IDE7ICovXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiA0MHB0O1xuICB3aWR0aDogMTAwJTtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuaHIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbn1cblxuXG5cbi5yZWRjbGFzcyB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */");

/***/ }),

/***/ 62626:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile1/profile1.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"3\" style=\"text-align: left; padding-left: 10px;\">\n      <img (click)=\"goToBack()\" style=\"width: 20px;\n    height: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      <ion-label style=\"font-size: 14pt;\">Get Started</ion-label>\n    </ion-col>\n    <ion-col size=\"3\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Your Details</ion-label> <br>\n        <ion-text style=\"font-size: 7pt;\">Your data will be stored in accordance with the terms in our privacy policy.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 15px;\">\n\n      <div style=\"padding-top: 10px;\n      padding-left: 10px;\n      padding-right: 10px;\n      padding-bottom: 0px;\" class=\"inp-top-radius\">\n\n        <ion-text [class.redclass]=\"fnameStatus\" style=\"font-size: 7pt;\">First name *</ion-text>\n        <ion-input autocapitalize=words style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter First Name\" [(ngModel)]=\"fname\" (ionChange)=\"changename($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text [class.redclass]=\"lnameStatus\" style=\"font-size: 7pt;\">Last name *</ion-text>\n        <ion-input autocapitalize=words style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Last Name\" [(ngModel)]=\"lname\" (ionChange)=\"changelname($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text [class.redclass]=\"emailStatus\" style=\"font-size: 7pt;\">Email *</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Email\" [(ngModel)]=\"email\" (ionChange)=\"changeemail($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text [class.redclass]=\"pass1Status\" style=\"font-size: 7pt;\">Create password *</ion-text>\n        <ion-input type=\"password\" style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"******\" [(ngModel)]=\"pass1\" (ionChange)=\"changepass($event)\"></ion-input>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text [class.redclass]=\"pass2Status\" style=\"font-size: 7pt;\">Re-enter password *</ion-text>\n        <ion-input type=\"password\" style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"******\" [(ngModel)]=\"pass2\" (ionChange)=\"changepass2($event)\"></ion-input>\n\n      </div>\n\n    </div>\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 7pt; color: #888888;\">By signing up, you agree to the LEV privacy policy and terms\n          and conditions.\n          You can change the way we contact you or unsubscribe at any time.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col size=\"9\">\n        <ion-text style=\"font-size: 8pt; color: #ffffff;\">I would like to receive updates, news and benefits from\n          LEV.\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"3\">\n        <ion-toggle *ngIf=\"getNotiAndUpdates == 'Yes'\" (ionChange)=\"getNoti($event)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\" checked></ion-toggle>\n        <ion-toggle *ngIf=\"getNotiAndUpdates == 'No'\" (ionChange)=\"getNoti($event)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: -webkit-center;\">\n        <div (click)=\"createAccount()\" style=\"margin-bottom: 12px;\" class=\"btn\">\n          <ion-text style=\"color: black;\"><b>Create my account</b></ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"margin-top: 5px;\">\n      <ion-col style=\"text-align: -webkit-center;\">\n        <div (click)=\"goToSignin()\" style=\"margin-bottom: 12px;\">\n          <ion-text style=\"color: rgb(255, 255, 255);\"><b>Sign in</b></ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 5px;\">\n      <ion-col>\n        <ion-text (click)=\"goToTermsPolicy()\" style=\"color: rgb(255, 255, 255);\">Terms and Policies</ion-text>\n      </ion-col>\n\n      <ion-col>\n        <ion-text (click)=\"goToCareer()\" style=\"color: rgb(255, 255, 255);\">Careers</ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"margin-top: 5px;\">\n\n      <ion-col>\n        <ion-text (click)=\"goToContact()\" style=\"color: rgb(255, 255, 255);\">Contact</ion-text>\n      </ion-col>\n\n      <ion-col>\n        <ion-text (click)=\"gotoInta()\" style=\"color: rgb(255, 255, 255);\">@instagram</ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile1_profile1_module_ts-es2015.js.map