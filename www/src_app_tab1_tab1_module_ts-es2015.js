(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": function() { return /* binding */ Tab1PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": function() { return /* binding */ Tab1PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": function() { return /* binding */ Tab1Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
let Tab1Page = class Tab1Page {
    constructor(router, platform, restService, workService) {
        // najam
        // localStorage.setItem('loggedinUserID', '213') 
        //mughees
        // localStorage.setItem('loggedinUserID', '239')
        this.router = router;
        this.platform = platform;
        this.restService = restService;
        this.workService = workService;
        this.userData = '';
        this.myUserName = '';
        this.matches = '';
        this.totalMatches = 0;
        this.divPopupShow = false;
        this.subscription = this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            navigator['app'].exitApp();
        });
        if (this.platform.is('android')) {
            this.mobile = 'android';
        }
        if (this.platform.is('ios')) {
            this.mobile = 'ios';
        }
    }
    ionViewWillEnter() {
        this.subscriptionIDFree = localStorage.getItem('packages_id');
    }
    ionViewDidLeave() {
        this.subscription.unsubscribe();
    }
    goToSubscription() {
        this.router.navigate(['subscription']);
    }
    goToHi() {
        // this.router.navigate(['/tabs/match'])
        this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
        console.log('user data ======', this.userData);
        if (this.userData != null) {
            this.myUserName = this.userData.first_name + ' ' + this.userData.last_name;
        }
        else {
            this.myUserName = 'Friend';
        }
        this.workService.presentLoading();
        var data = JSON.stringify({
            "users_customers_id": localStorage.getItem('loggedinUserID'),
            // "users_customers_id": 15
        });
        console.log('data-----', data);
        this.restService.getBestMatchesAPI(data).subscribe((res) => {
            this.workService.hideLoading();
            console.log('data-----', res);
            if (res.status == 'success') {
                this.matches = res.data;
                this.totalMatches = this.matches.length;
                if (this.totalMatches == 0) {
                    this.router.navigate(['pollnew']);
                }
                else {
                    if (this.subscriptionIDFree == '88') {
                        this.router.navigate(['pollnew']);
                    }
                    else {
                        this.router.navigate(['tabs/match']);
                    }
                }
            }
            else {
                this.router.navigate(['pollnew']);
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    hidePopup() {
        this.divPopupShow = false;
    }
    showPopup() {
        this.divPopupShow = true;
    }
    startTalkToChat() {
        // this.router.navigate(['contactus'])
        // this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))
        // console.log('my user data --', this.userData);
        // this.workService.myUserData = this.userData
        // this.router.navigate(['contactus2'])
        this.router.navigate(['adminchat']);
        // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        // (function () {
        //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        //   s1.async = true;
        //   s1.src = 'https://embed.tawk.to/61b30a5dc82c976b71c0bdc1/1fmhm108j';
        //   s1.charset = 'UTF-8';
        //   s1.setAttribute('crossorigin', '*');
        //   s0.parentNode.insertBefore(s1, s0);
        // })();
    }
    goToFAQ() {
        this.router.navigate(['faq']);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.top-margin-head-ios {\n  padding-top: 50px;\n  position: fixed;\n  width: 100%;\n  background: black;\n  z-index: 99999;\n}\n\n.top-margin-head-android {\n  padding-top: 20px;\n  position: fixed;\n  width: 100%;\n  background: black;\n  z-index: 99999;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 30px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 85%;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBQUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUFHTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBRU47QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5zYy1pb24taW5wdXQtaW9zLWgge1xuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG4udG9wLW1hcmdpbi1oZWFkLWlvc3tcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi50b3AtbWFyZ2luLWhlYWQtYW5kcm9pZHtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cbi5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDE5MHB0O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIFxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC52LWNlbnRlci1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDU1JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAudi1jZW50ZXItcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA4NSU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-row>\n    <ion-col style=\"padding-right: 20px;\n    text-align: right;\" class=\"top-margin-head-android\" *ngIf=\"mobile=='android'\">\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px;\">Hi</ion-text> <br>\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px 17px 20px 20px;\n      font-size: 10px;\">Message Our Matchmaker</ion-text>\n    </ion-col>\n\n    <ion-col style=\"padding-right: 20px;\n    text-align: right;\" class=\"top-margin-head-ios\" *ngIf=\"mobile=='ios'\">\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px;\">Hi</ion-text> <br>\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px 17px 20px 20px;\n      font-size: 10px;\">Message Our Matchmaker</ion-text>\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n  <div class=\"v-center-s\" style=\"padding: 20px;\">\n\n    <!-- <ion-row>\n      <ion-col style=\"text-align: center;padding-bottom: 0px;\">\n        <img style=\"width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\">\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col style=\"text-align: -webkit-center;padding-top: 0px\">\n\n        <!-- <ion-text (click)=\"showPopup()\" style=\"    margin-top: -13px;\n        letter-spacing: 0.8pt;\n        line-height: 24px;\"> LEV is new and growing. <br>\n          You will receive matches as<br>\n          our matchmaker sees fit. <br>\n          Please visit the FAQ's section <br>\n          for our community guidelines.</ion-text> -->\n\n        <ion-text (click)=\"showPopup()\" style=\"    margin-top: -13px;\n          letter-spacing: 0.8pt;\n          line-height: 24px;font-size: 13px;\"> LEV is new and growing. <br>\n          Navigating the sea of seemingly endless<br>\n          options can be overwhelming!<br>\n          LEV is here to help! <br>\n          You will receive matches as our<br>\n          matchmaker sees fit.<br>\n          We’ll help you narrow down <br>\n          the options so you can <br>\n          make the best choice possible.<br>\n        </ion-text>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"    margin-top: 0px;\n      margin-bottom: 0px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToHi()\" style=\"    width: 59%;\n        background: none;\n        margin: 0px 0px 5px 0px;\n        font-size: 16px;\n        border: 2px solid white;\n        border-radius: 48px;\n        height: 48px;\n        padding: 15px 16px 16px 16px;\n        margin-top: 20%;\">Enter &nbsp; LEV</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"text-align: -webkit-center;padding-top:22px;\">\n        <ion-text (click)=\"goToFAQ()\" style=\"letter-spacing: 0.8pt;\n        line-height: 24px;font-size: 12px\">\n          Please visit the FAQ's section <br>\n          for our community guidelines.\n        </ion-text>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n\n\n  <!--Start of Tawk.to Script-->\n  <script type=\"text/javascript\">\n    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();\n    (function () {\n      var s1 = document.createElement(\"script\"), s0 = document.getElementsByTagName(\"script\")[0];\n      s1.async = true;\n      s1.src = 'https://embed.tawk.to/61b30a5dc82c976b71c0bdc1/1fmhm108j';\n      s1.charset = 'UTF-8';\n      s1.setAttribute('crossorigin', '*');\n      s0.parentNode.insertBefore(s1, s0);\n    })();\n  </script>\n  <!--End of Tawk.to Script-->\n\n\n</ion-content>\n\n\n<div *ngIf=\"divPopupShow\" style=\"background: #0c293d;\nheight: max-content;\nwidth: 80%;\nleft: 10%;\ntext-align: center;\ntop: 40%;\nposition: absolute;\npadding: 10px 10px 40px 10px;\">\n\n  <ion-row>\n    <ion-col style=\"padding-top: 10 px; padding-right: 10px; text-align: right\">\n      <img style=\"\n        height: 15px;\n        width: 15px;\n        margin-right: 10px;\n        margin-top: 14px;\n      \" src=\"assets/imgs/close.svg\" (click)=\"hidePopup()\" />\n    </ion-col>\n  </ion-row>\n\n\n  <ion-text> LEV is new and growing. <br>\n    You will receive matches as<br>\n    our matchmaker sees fit. <br>\n    Please visit the FAQ's section <br>\n    for our community guidelines.\n  </ion-text>\n\n\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es2015.js.map