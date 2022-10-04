(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);









let LoginPage = class LoginPage {
    constructor(router, restService, workService, location, platform) {
        this.router = router;
        this.restService = restService;
        this.workService = workService;
        this.location = location;
        this.platform = platform;
        this.countryName = 'Pakistan';
        this.flagofcountry = 'pk';
        this.countryCode = '+1';
        this.phoneNum = '';
        this.matchpopupHidden = true;
        this.phoneNumStatus = false;
        this.countryCodeStatus = false;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.router.navigate(['apply'], { replaceUrl: true });
        });
        // this.workService.presentLoading()
        // setTimeout(() => {
        //   console.log();
        //   this.flagsList = this.restService.flagsList;
        //   this.workService.hideLoading()
        // }, 2000);
    }
    ngOnInit() {
    }
    goToOTP() {
        if (this.countryCode == '') {
            this.countryCodeStatus = true;
            setInterval(() => {
                this.phoneNumStatus = false;
                this.countryCodeStatus = false;
            }, 4000);
        }
        else if (this.phoneNum == '') {
            this.phoneNumStatus = true;
            setInterval(() => {
                this.phoneNumStatus = false;
                this.countryCodeStatus = false;
            }, 4000);
        }
        else {
            this.workService.data1 = "+92";
            this.workService.data2 = { data: "9632" };
            console.log('complete phone num---', this.countryCode + this.phoneNum);
            console.log('oneSignaldeviceID', localStorage.getItem("oneSignaldeviceID"));
            var oneSignalID = localStorage.getItem("oneSignaldeviceID");
            if (oneSignalID == null || oneSignalID == 'null') {
                oneSignalID = 'not available';
            }
            localStorage.setItem('phone', this.countryCode + this.phoneNum);
            var stringy = JSON.stringify({
                'contact_number': this.countryCode + this.phoneNum,
                'onesignal_id': oneSignalID
            });
            console.log(stringy);
            this.workService.presentLoading();
            this.restService.loginAPI(stringy).subscribe((res) => {
                this.workService.hideLoading();
                console.log(res);
                if (res.status == "success") {
                    if (res.data.status == "Active") {
                        localStorage.setItem('loggedinUserData', JSON.stringify(res.data));
                        localStorage.setItem('loggedinUserID', res.data.users_customers_id);
                        localStorage.setItem('remainingSMS', res.data.allowed_sms);
                        localStorage.setItem('packages_id', res.data.users_customers_id.packages_id);
                        // localStorage.set('loggedinUserData', JSON.stringify(res.data.user))
                        // localStorage.setItem('loggedinUserID', res.data.user.users_customers_id)
                        this.router.navigate(['loginotp']);
                    }
                    else if (res.data.status == "Pending") {
                        this.workService.presentToast('Your application is under review by the admin.');
                    }
                    else if (res.data.status == "Inactive") {
                        this.workService.presentToast('Your login is temporary disabled. Please contact our team for further information.');
                    }
                    else if (res.data.status == "Rejected") {
                        this.workService.presentToast('Your application is rejected by the admin. You can try applying again.');
                    }
                    else if (res.data.status == "Deleted") {
                        this.workService.presentToast('Your application is deleted. Please contact our team for further information.');
                    }
                    else {
                        this.workService.presentToast(res.message);
                    }
                }
                else {
                    this.workService.presentToast(res.message);
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
            //
        }
    }
    // goToOTP() {
    //   if (this.phoneNum == '') {
    //     this.phoneNumStatus = true
    //     setInterval(() => {
    //       this.phoneNumStatus = false
    //     }, 4000);
    //   } else {
    //     this.countryCodephoneNum = this.countryCode + "" + this.phoneNum
    //     var data = JSON.stringify({
    //       "requestType": "send_otp",
    //       number: this.countryCodephoneNum
    //     })
    //     localStorage.setItem('userPhoneNumber', this.countryCodephoneNum)
    //     console.log(data);
    //     // this.restService.sendRequest('send_otp', data).subscribe(res => {
    //     //   console.log(res);
    //     // })
    //     this.workService.presentLoading()
    //     this.restService.getOTP(data).subscribe((res: any) => {
    //       console.log(res);
    //       if (res.status == 'success') {
    //         this.workService.data1 = this.countryCodephoneNum
    //         this.workService.data2 = res
    //         this.workService.hideLoading()
    //         this.router.navigate(['loginotp'])
    //       }
    //     }, err => {
    //       this.workService.hideLoading();
    //       this.workService.presentToast('Some Error Occured')
    //     })
    //   }
    //   //
    // }
    showPopup() {
        this.matchpopupHidden = false;
        console.log();
    }
    hidePopup() {
        this.matchpopupHidden = true;
    }
    flagClick(flag) {
        this.hidePopup();
        this.countryCode = flag.id;
        this.flagofcountry = flag.alpha2;
        this.countryName = flag.name;
    }
    goBack() {
        //this.location.back()
        this.router.navigate(['apply'], { replaceUrl: true });
    }
    phoneNumChaneg(val) {
        console.log('valll---', val.detail.data);
    }
    eventHandler(e) {
        console.log(e);
        if (this.countryCode == '+1') {
            console.log('ok', this.phoneNum);
            if (this.phoneNum.length == 3 && (e.key != 'Backspace')) {
                console.log('ok333333');
                this.phoneNum = "(" + this.phoneNum + ") ";
            }
            if (this.phoneNum.length == 9 && (e.key != 'Backspace')) {
                console.log('ok333333');
                this.phoneNum = this.phoneNum + "-";
            }
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.redclass {\n  color: red;\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiA0MHB0O1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4ucmVkY2xhc3Mge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucmVkQm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIl19 */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"sign-in-button\"></div>\n\n  <img style=\"width: 20px;\n  margin-left: 30px;\" src=\"assets/imgs/left.svg\" (click)=\"goBack()\" class=\"top-margin-head-40\">\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row style=\"margin-top: 40px;\">\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\"> <br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 16pt;\"> Getting Started</ion-label> <br>\n        <ion-text style=\"font-size: 12pt;\">What's your phone number? </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n\n\n      <ion-col size=\"3\" style=\"text-align: center;\">\n        <div [class.redBorder]=\"countryCodeStatus\" style=\"background-color: #333333;\n            height: 47pt;\n            width: 55pt;\n            border-radius: 10px;\n            padding-top: 4.5px;\">\n\n          <!-- <img style=\"      top: 10px;  width: 30px;\n            height: 30px;\n            position: absolute;\n            left: 15px;\" src=\"assets/imgs/flags/{{flagofcountry}}.png\">\n\n          <img style=\"     width: 15px;\n            height: 15px;\n            position: absolute;\n            top: 15px;\n            left: 50px;\" src=\"assets/imgs/down.svg\">\n\n          <br>\n\n          <ion-label style=\"top: 37px;\n                              position: absolute;\n                              left: 33px;\n                              font-size: 17px;\">{{countryCode}}</ion-label> -->\n\n          <ion-input type=\"tel\" maxlength=\"6\" placeholder=\"+1\" [(ngModel)]=\"countryCode\"></ion-input>\n\n        </div>\n      </ion-col>\n\n      <ion-col size=\"9\" style=\"text-align: left;\">\n\n        <div style=\"background-color: #333333;\n        height: 47pt;\n        width: 100%;\n        border-radius: 10px;\n        margin-left: 10px;\">\n\n          <ion-label [class.redclass]=\"phoneNumStatus\" style=\"top: 14px;\n        left: 33px;\n        font-size: 9pt;\n        position: absolute;\">Phone Number</ion-label>\n          <ion-input type=\"tel\" style=\"top: 22px;\n          left: 19px;\n          position: absolute;\n          padding-top: 5px;\" maxlength=\"14\" placeholder=\"Enter Phone Number\" [(ngModel)]=\"phoneNum\"\n            (keyup)=\"eventHandler($event)\"></ion-input>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToOTP()\" style=\"margin-bottom: 12px;\" class=\"btn\">Text Me</button>\n\n\n\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row style=\"margin-top: 50px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"send()\" style=\"margin-bottom: 12px;\" class=\"btn\">Text Me</button>\n      </ion-col>\n    </ion-row> -->\n\n\n  </div>\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n<div [hidden]=\"matchpopupHidden\" style=\"    height: 100%;\nwidth: 100%;\nbackground-color: #000000;\nposition: absolute;\">\n\n\n  <img (click)=\"hidePopup()\" style=\"width: 20px;\n                margin-left: 30px;\" src=\"assets/imgs/left.svg\" class=\"top-margin-head-40\">\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\"> <br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 16pt;\">Enter Your Verification Code</ion-label> <br>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">Enter your 6 digit verification OTP</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 10pt;\">Sent to {{completePhoneNum}}</ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"editNum()\">Edit</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp1\" maxlength=\"1\" #input1 (ionChange)=\"inp1Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp2\" maxlength=\"1\" #input2 (ionChange)=\"inp2Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp3\" maxlength=\"1\" #input3 (ionChange)=\"inp3Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp4\" maxlength=\"1\" #input4 (ionChange)=\"inp4Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n      <!-- 0000000000000000000000000 -->\n\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp5\" maxlength=\"1\" #input5 (ionChange)=\"inp5Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp6\" maxlength=\"1\" #input6 (ionChange)=\"inp6Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 8pt;\">Didn't receive code? </ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"resendOTP()\">Resend</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToProfile1()\" style=\"margin-bottom: 12px;\" class=\"btn\">Confirm</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map