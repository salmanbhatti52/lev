(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_loginotp_loginotp_module_ts"],{

/***/ 75606:
/*!*****************************************************!*\
  !*** ./src/app/loginotp/loginotp-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginotpPageRoutingModule": function() { return /* binding */ LoginotpPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _loginotp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginotp.page */ 74797);




const routes = [
    {
        path: '',
        component: _loginotp_page__WEBPACK_IMPORTED_MODULE_0__.LoginotpPage
    }
];
let LoginotpPageRoutingModule = class LoginotpPageRoutingModule {
};
LoginotpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginotpPageRoutingModule);



/***/ }),

/***/ 65611:
/*!*********************************************!*\
  !*** ./src/app/loginotp/loginotp.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginotpPageModule": function() { return /* binding */ LoginotpPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _loginotp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginotp-routing.module */ 75606);
/* harmony import */ var _loginotp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginotp.page */ 74797);







let LoginotpPageModule = class LoginotpPageModule {
};
LoginotpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loginotp_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginotpPageRoutingModule
        ],
        declarations: [_loginotp_page__WEBPACK_IMPORTED_MODULE_1__.LoginotpPage]
    })
], LoginotpPageModule);



/***/ }),

/***/ 74797:
/*!*******************************************!*\
  !*** ./src/app/loginotp/loginotp.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginotpPage": function() { return /* binding */ LoginotpPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_loginotp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./loginotp.page.html */ 25525);
/* harmony import */ var _loginotp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginotp.page.scss */ 82460);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);









let LoginotpPage = class LoginotpPage {
    constructor(location, router, restService, workService, navCtrl) {
        this.location = location;
        this.router = router;
        this.restService = restService;
        this.workService = workService;
        this.navCtrl = navCtrl;
        this.userData = '';
        console.log('logedinUserData-----', JSON.parse(localStorage.getItem('loggedinUserData')));
    }
    inp1Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput2.setFocus();
        }
    }
    inp2Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput3.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput1.setFocus();
        }
    }
    inp3Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput4.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput2.setFocus();
        }
    }
    inp4Change(ev) {
        if (ev.detail.value.length == 0) {
            this.ionInput3.setFocus();
        }
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('phone');
        this.otp = this.workService.data2.data;
        this.otp1 = this.otp.charAt(0);
        this.otp2 = this.otp.charAt(1);
        this.otp3 = this.otp.charAt(2);
        this.otp4 = this.otp.charAt(3);
        console.log(this.phoneNumber);
        console.log(this.otp);
    }
    goToBack() {
        this.location.back();
    }
    goToProfile1() {
        localStorage.setItem('login', 'isLogin');
        this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
        console.log('usr packageee--->>>>>', this.userData.packages_id);
        var sbID = this.userData.packages_id;
        if (sbID.toString() == '0') {
            this.navCtrl.navigateRoot(['subscription'], { replaceUrl: true });
        }
        else {
            this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true });
        }
    }
    // goToProfile1() {
    //   this.newOtp = this.otp1 + "" + this.otp2 + "" + this.otp3 + this.otp4
    //   console.log(this.newOtp);
    //   var data = JSON.stringify({
    //     requestType: "verify_otp",
    //     number: this.phoneNumber,
    //     otp: this.newOtp
    //   })
    //   this.workService.presentLoading()
    //   this.restService.getOTP(data).subscribe((res: any) => {
    //     console.log(res);
    //     this.workService.hideLoading()
    //     if (res.status == 'success') {
    //       this.router.navigate(['/tabs/tab1'])
    //     }
    //   }, err => {
    //     this.workService.hideLoading()
    //     console.log(err);
    //     this.workService.presentToast('OTP not confirmed.')
    //   })
    //   // 
    // }
    editNum() {
        this.router.navigate(['login'], { replaceUrl: true });
    }
    resendOTP() {
        // var data = JSON.stringify({
        //   "requestType": "send_otp",
        //   number: this.phoneNumber
        // })
        // console.log(data);
        // // this.restService.sendRequest('send_otp', data).subscribe(res => {
        // //   console.log(res);
        // // })
        // this.workService.presentLoading()
        // this.restService.getOTP(data).subscribe((res: any) => {
        //   console.log(res);
        //   if (res.status == 'success') {
        //     this.otp = res.data
        //     this.otp1 = this.otp.charAt(0)
        //     this.otp2 = this.otp.charAt(1)
        //     this.otp3 = this.otp.charAt(2)
        //     this.otp4 = this.otp.charAt(3)
        //     this.workService.hideLoading()
        //   }
        // })
    }
};
LoginotpPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
LoginotpPage.propDecorators = {
    ionInput1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input1', { static: false },] }],
    ionInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input2', { static: false },] }],
    ionInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input3', { static: false },] }],
    ionInput4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input4', { static: false },] }]
};
LoginotpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-loginotp',
        template: _raw_loader_loginotp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_loginotp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginotpPage);



/***/ }),

/***/ 82460:
/*!*********************************************!*\
  !*** ./src/app/loginotp/loginotp.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lub3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW5vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB0O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 25525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginotp/loginotp.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <img (click)=\"goToBack()\" style=\"width: 20px;\n  margin-left: 30px;\" src=\"assets/imgs/left.svg\" class=\"top-margin-head-40\">\n\n  <div style=\"padding: 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\"> <br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 16pt;\">Enter Your Verification Code</ion-label> <br>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">Enter your 4 digit verification OTP</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 10pt;\">Sent to {{phoneNumber}}</ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"editNum()\">Edit</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col size=\"3\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 40pt;\n        width: 40pt;\" placeholder=\"0\" [(ngModel)]=\"otp1\" maxlength=\"1\" #input1 (ionChange)=\"inp1Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"3\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 40pt;\n        width: 40pt;\" placeholder=\"0\" [(ngModel)]=\"otp2\" maxlength=\"1\" #input2 (ionChange)=\"inp2Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"3\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 40pt;\n        width: 40pt;\" placeholder=\"0\" [(ngModel)]=\"otp3\" maxlength=\"1\" #input3 (ionChange)=\"inp3Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"3\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 40pt;\n        width: 40pt;\" placeholder=\"0\" [(ngModel)]=\"otp4\" maxlength=\"1\" #input4 (ionChange)=\"inp4Change($event)\">\n        </ion-input>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 8pt;\">Didn't receive code? </ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"resendOTP()\">Resend</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToProfile1()\" style=\"margin-bottom: 12px;\" class=\"btn\">Confirm</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_loginotp_loginotp_module_ts-es2015.js.map