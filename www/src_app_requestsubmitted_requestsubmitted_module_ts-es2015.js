(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_requestsubmitted_requestsubmitted_module_ts"],{

/***/ 21869:
/*!*********************************************************************!*\
  !*** ./src/app/requestsubmitted/requestsubmitted-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsubmittedPageRoutingModule": function() { return /* binding */ RequestsubmittedPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _requestsubmitted_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestsubmitted.page */ 33813);




const routes = [
    {
        path: '',
        component: _requestsubmitted_page__WEBPACK_IMPORTED_MODULE_0__.RequestsubmittedPage
    }
];
let RequestsubmittedPageRoutingModule = class RequestsubmittedPageRoutingModule {
};
RequestsubmittedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RequestsubmittedPageRoutingModule);



/***/ }),

/***/ 54525:
/*!*************************************************************!*\
  !*** ./src/app/requestsubmitted/requestsubmitted.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsubmittedPageModule": function() { return /* binding */ RequestsubmittedPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _requestsubmitted_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestsubmitted-routing.module */ 21869);
/* harmony import */ var _requestsubmitted_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestsubmitted.page */ 33813);







let RequestsubmittedPageModule = class RequestsubmittedPageModule {
};
RequestsubmittedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _requestsubmitted_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestsubmittedPageRoutingModule
        ],
        declarations: [_requestsubmitted_page__WEBPACK_IMPORTED_MODULE_1__.RequestsubmittedPage]
    })
], RequestsubmittedPageModule);



/***/ }),

/***/ 33813:
/*!***********************************************************!*\
  !*** ./src/app/requestsubmitted/requestsubmitted.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestsubmittedPage": function() { return /* binding */ RequestsubmittedPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_requestsubmitted_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./requestsubmitted.page.html */ 89422);
/* harmony import */ var _requestsubmitted_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestsubmitted.page.scss */ 23847);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-availability/ngx */ 10097);









let RequestsubmittedPage = class RequestsubmittedPage {
    constructor(location, router, platform, inAppBrowser, appAvailability) {
        this.location = location;
        this.router = router;
        this.platform = platform;
        this.inAppBrowser = inAppBrowser;
        this.appAvailability = appAvailability;
        this.user_instagram = '';
        this.subscription = this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigate(['promptnew']);
        });
    }
    ionViewWillEnter() {
        this.subscription = this.user_instagram = localStorage.getItem('user_instagram') + "/";
        console.log('userrrrrrrrrrrrrrr', this.user_instagram);
    }
    ionViewDidLeave() {
        this.subscription.unsubscribe();
    }
    ngOnInit() { }
    goBack() {
        // this.location.back();
        this.router.navigate(['promptnew']);
    }
    goToPromts() {
        this.router.navigate(['promptnew']);
    }
    goToInstagram(val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('uuu', this.user_instagram);
            let app;
            if (this.platform.is('ios')) {
                app = 'instagram://';
            }
            else if (this.platform.is('android')) {
                app = 'com.instagram.android';
            }
            const isAppAvailable = yield this.appAvailability.check(app);
            isAppAvailable ?
                this.inAppBrowser.create(`instagram://user?username=${this.user_instagram}`, '_system') :
                this.inAppBrowser.create(`https://www.instagram.com/${this.user_instagram}`, '_system');
        });
    }
    openInstagram(name) {
        let app;
        if (this.platform.is('ios')) {
            app = 'instagram://';
        }
        else if (this.platform.is('android')) {
            app = 'com.instagram.android';
        }
        else {
            console.log('webbb');
            const browser = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram);
            return;
        }
        this.appAvailability.check(app)
            .then((yes) => {
            console.log(app + ' is available');
            // Success
            // App exists
            // const browser: InAppBrowserObject = this.inAppBrowser.create('instagram://user?username=' + this.user_instagram, '_system');
            // alert('user instagram------,' + this.user_instagram)
            // const browser: InAppBrowserObject = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram, '_system');
            this.platform.ready().then(() => {
                let browser = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram, "_system");
            });
        }, (no) => {
            // Error
            // App does not exist
            // Open Web URL
            console.log('webbb');
            // alert('user instagram------,' + this.user_instagram)
            this.platform.ready().then(() => {
                let browser = this.inAppBrowser.create('https://www.instagram.com/' + this.user_instagram, "_system");
            });
        });
    }
};
RequestsubmittedPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_3__.AppAvailability }
];
RequestsubmittedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-requestsubmitted',
        template: _raw_loader_requestsubmitted_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_requestsubmitted_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RequestsubmittedPage);



/***/ }),

/***/ 23847:
/*!*************************************************************!*\
  !*** ./src/app/requestsubmitted/requestsubmitted.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 30px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 5px;\n          margin-block-start: 5px;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3RzdWJtaXR0ZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUFGO0FBQ0YiLCJmaWxlIjoicmVxdWVzdHN1Ym1pdHRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyZDJkMzk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAxOTBwdDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxucCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiA1cHg7XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC52LWNlbnRlci1zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gIC52LWNlbnRlci1zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 89422:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/requestsubmitted/requestsubmitted.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-row style=\"margin: 20px\">\n    <ion-col style=\"text-align: right; margin-top: 20px\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/close.svg\" />\n    </ion-col>\n  </ion-row>\n\n  <div class=\"v-center-s\" style=\"padding: 20px\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n\n        <div style=\"\n            padding: 10px;\n            border: 1px solid white;\n            height: 127px;\n            margin: 20px 20px 20px 20px;\n          \">\n          <ion-row>\n            <ion-col style=\"text-align: center\">\n              <label style=\"font-size: 12pt\">Thank you for applying to LEV</label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col style=\"text-align: center\">\n              <ion-text style=\"font-size: 8pt\">If you are accepted, you will receive an email with login\n                information and further instructions along with an app\n                notification.</ion-text>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-row>\n          <ion-col style=\"text-align: center\">\n            <ion-text style=\"font-size: 8pt\">In the meantime follow LEV on instagram</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"text-align: -webkit-center;\">\n        <button (click)=\"openInstagram()\" style=\"\n           display: flex;\n    width: 79%;\n    background: none;\n    margin-top: 10px;\n    font-size: 10px;\n    border: 2px solid white;\n    border-radius: 48px;\n    height: 61px;\n    padding: 16px;\n    justify-content: center;\n    align-content: center;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n          \">\n          <!-- <ion-row>\n            <ion-col style=\"text-align: right\" size=\"5\">\n              <img style=\"width: 15px; height: 15px\" src=\"assets/imgs/instagram.svg\" />\n            </ion-col>\n\n            <ion-col style=\"text-align: left\" size=\"7\">\n              <p>Follow</p>\n            </ion-col>\n          </ion-row> -->\n\n\n\n\n          <img style=\"width: 15px; height: 15px\" src=\"assets/imgs/instagram.svg\" />\n          <h2 style=\"    margin: 0px;\n          font-size: 11pt;\n          margin-left: 10px;\">@thelevapp</h2>\n\n\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_requestsubmitted_requestsubmitted_module_ts-es2015.js.map