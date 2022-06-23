(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_otp_otp_module_ts"],{

/***/ 77227:
/*!*******************************************!*\
  !*** ./src/app/otp/otp-routing.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageRoutingModule": function() { return /* binding */ OtpPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.page */ 36076);




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_0__.OtpPage
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ 71599:
/*!***********************************!*\
  !*** ./src/app/otp/otp.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageModule": function() { return /* binding */ OtpPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-routing.module */ 77227);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page */ 36076);







let OtpPageModule = class OtpPageModule {
};
OtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpPageRoutingModule
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_1__.OtpPage]
    })
], OtpPageModule);



/***/ }),

/***/ 36076:
/*!*********************************!*\
  !*** ./src/app/otp/otp.page.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPage": function() { return /* binding */ OtpPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otp.page.html */ 49062);
/* harmony import */ var _otp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page.scss */ 27562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 71952);









let OtpPage = class OtpPage {
    constructor(location, router, restService, workService) {
        this.location = location;
        this.router = router;
        this.restService = restService;
        this.workService = workService;
        this.otp = '';
        this.otp1 = '';
        this.otp2 = '';
        this.otp3 = '';
        this.otp4 = '';
        this.otp5 = '';
        this.otp6 = '';
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
        if (ev.detail.value.length == 1) {
            this.ionInput5.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput3.setFocus();
        }
    }
    inp5Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput6.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput4.setFocus();
        }
    }
    inp6Change(ev) {
        if (ev.detail.value.length == 0) {
            this.ionInput5.setFocus();
        }
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('phone');
        // this.otp = '85296354'
        // this.otp1 = this.otp.charAt(0)
        // this.otp2 = this.otp.charAt(1)
        // this.otp3 = this.otp.charAt(2)
        // this.otp4 = this.otp.charAt(3)
        // this.otp5 = this.otp.charAt(4)
        // this.otp6 = this.otp.charAt(5)
        console.log(this.phoneNumber);
        console.log(this.otp);
    }
    goToBack() {
        // this.location.back()
        this.router.navigate(['gettingstart'], { replaceUrl: true });
    }
    // goToProfile1() {
    //   this.router.navigate(['profile1'])
    // }
    goToProfile1() {
        this.otpConfrimResult = JSON.parse(this.workService.otpConfrimResultData);
        console.log(this.otpConfrimResult);
        if (this.otp1 != '' && this.otp2 != '' && this.otp3 != '' && this.otp4 != '' && this.otp5 != '' && this.otp6 != '') {
            this.newOtp = this.otp1 + "" + this.otp2 + "" + this.otp3 + "" + this.otp4 + "" + this.otp5 + "" + this.otp6;
            this.otpConfrimResult.confirm(this.newOtp).then(data => {
                console.log('Verify result', data);
                this.router.navigate(['profile1']);
            }).then(res => {
                console.log('Verify error', res);
                this.workService.presentToast('Incorrect OTP');
            });
        }
        else {
            this.workService.presentToast('Enter OTP');
        }
    }
    editNum() {
        this.router.navigate(['gettingstart'], { replaceUrl: true });
    }
    resendOTP() {
    }
};
OtpPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService }
];
OtpPage.propDecorators = {
    ionInput1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input1', { static: false },] }],
    ionInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input2', { static: false },] }],
    ionInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input3', { static: false },] }],
    ionInput4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input4', { static: false },] }],
    ionInput5: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input5', { static: false },] }],
    ionInput6: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['input6', { static: false },] }]
};
OtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpPage);



/***/ }),

/***/ 27562:
/*!***********************************!*\
  !*** ./src/app/otp/otp.page.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNGIiwiZmlsZSI6Im90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyZDJkMzk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgaGVpZ2h0OiA0MHB0O1xyXG59XHJcblxyXG5wIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 49062:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp/otp.page.html ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <img (click)=\"goToBack()\" style=\"width: 20px;\n  margin-left: 30px;\" src=\"assets/imgs/left.svg\" class=\"top-margin-head-40\">\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\"> <br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 16pt;\">Enter Your Verification Code</ion-label> <br>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">Enter your 4 digit verification OTP</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 10pt;\">Sent to {{phoneNumber}}</ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"editNum()\">Edit</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n        width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp1\" maxlength=\"1\" #input1 (ionChange)=\"inp1Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n        width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp2\" maxlength=\"1\" #input2 (ionChange)=\"inp2Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n        width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp3\" maxlength=\"1\" #input3 (ionChange)=\"inp3Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n        width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp4\" maxlength=\"1\" #input4 (ionChange)=\"inp4Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n      <!-- 0000000000000000000000000 -->\n\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n        width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp5\" maxlength=\"1\" #input5 (ionChange)=\"inp5Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n        width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp6\" maxlength=\"1\" #input6 (ionChange)=\"inp6Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 8pt;\">Didn't receive code? </ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"resendOTP()\">Resend</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToProfile1()\" style=\"margin-bottom: 12px;\" class=\"btn\">Confirm</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_otp_otp_module_ts-es2015.js.map