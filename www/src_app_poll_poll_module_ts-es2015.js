(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_poll_poll_module_ts"],{

/***/ 33482:
/*!*********************************************!*\
  !*** ./src/app/poll/poll-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollPageRoutingModule": function() { return /* binding */ PollPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _poll_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poll.page */ 34023);




const routes = [
    {
        path: '',
        component: _poll_page__WEBPACK_IMPORTED_MODULE_0__.PollPage
    }
];
let PollPageRoutingModule = class PollPageRoutingModule {
};
PollPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PollPageRoutingModule);



/***/ }),

/***/ 19826:
/*!*************************************!*\
  !*** ./src/app/poll/poll.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollPageModule": function() { return /* binding */ PollPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _poll_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poll-routing.module */ 33482);
/* harmony import */ var _poll_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poll.page */ 34023);







let PollPageModule = class PollPageModule {
};
PollPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _poll_routing_module__WEBPACK_IMPORTED_MODULE_0__.PollPageRoutingModule
        ],
        declarations: [_poll_page__WEBPACK_IMPORTED_MODULE_1__.PollPage]
    })
], PollPageModule);



/***/ }),

/***/ 34023:
/*!***********************************!*\
  !*** ./src/app/poll/poll.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollPage": function() { return /* binding */ PollPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_poll_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./poll.page.html */ 46237);
/* harmony import */ var _poll_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poll.page.scss */ 81610);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








let PollPage = class PollPage {
    constructor(router, location, restService, workService) {
        this.router = router;
        this.location = location;
        this.restService = restService;
        this.workService = workService;
        this.questionNo = 0;
        this.currentQuestion = '';
        this.currentQuestionDesc = '';
        this.currentQuestionID = '';
        this.question = '';
        this.commnent = '';
        this.commentStatus = false;
        this.noMoreQuestion = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        var stringy = JSON.stringify({});
        this.workService.presentLoading();
        this.restService.getSystemDataAPI(stringy).subscribe((res) => {
            console.log('incomming data----', res);
            this.workService.hideLoading();
            if (res.status == "success") {
                console.log(res.data);
                // console.log('instalgrammm', res.data.system_instagram);
                localStorage.setItem('user_instagram', res.data.system_instagram);
                this.question = res.data.system_polsqs;
                console.log('systm pols---', this.question);
                this.currentQuestion = this.question[this.questionNo].name;
                this.currentQuestionDesc = this.question[this.questionNo].desc;
                this.currentQuestionID = this.question[this.questionNo].system_polsqs_id;
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    changeFunction(ev) {
        this.commnent = this.restService.removebadwords(ev.detail.value);
    }
    goToSubscription() {
        if (this.commnent != '') {
            console.log('Comment', this.commnent);
            this.workService.presentLoading();
            var ss = JSON.stringify({
                "users_customers_id": localStorage.getItem('loggedinUserID'),
                "answer": this.commnent,
                "system_polsqs_id": this.currentQuestionID
            });
            console.log('outgoing data---', ss);
            this.restService.create_polsqsAPI(ss).subscribe((res) => {
                this.workService.hideLoading();
                console.log('res===>', res);
                if (res.status == 'success') {
                    this.commnent = '';
                    if (this.question.length == 1) {
                        this.noMoreQuestion = true;
                        // this.router.navigate(['tabs/tab1'], { replaceUrl: true });
                    }
                    else {
                        this.questionNo = this.questionNo + 1;
                        this.currentQuestion = this.question[this.questionNo].name;
                        this.currentQuestionDesc = this.question[this.questionNo].desc;
                        this.currentQuestionID = this.question[this.questionNo].system_polsqs_id;
                        this.removeItem(this.questionNo);
                    }
                    // 
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
            //this.router.navigate(['subscription']);
        }
        else {
            this.commentStatus = true;
            setTimeout(() => {
                this.commentStatus = false;
            }, 3000);
        }
    }
    removeItem(i) {
        this.question.splice(i, 1);
        console.log(this.question);
    }
    goBack() {
        // this.location.back()
        this.router.navigate(['tabs/tab1'], { replaceUrl: true });
    }
};
PollPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService }
];
PollPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-poll',
        template: _raw_loader_poll_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_poll_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PollPage);



/***/ }),

/***/ 81610:
/*!*************************************!*\
  !*** ./src/app/poll/poll.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 70%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InBvbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTkwcHQ7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbnAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC52LWNlbnRlci1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAudi1jZW50ZXItcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA3MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cblxuLnJlZEJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuIl19 */");

/***/ }),

/***/ 46237:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poll/poll.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #0c293d\">\n  <div class=\"v-center-s\" style=\"padding: 20px\">\n    <ion-row style=\"background: black; padding-top: 20px; padding-bottom: 20px\">\n      <img (click)=\"goBack()\" style=\"position: absolute; height: 15px; width: 15px; right: 35px\"\n        src=\"assets/imgs/close.svg\" />\n\n      <ion-col style=\"text-align: center; margin-top: 25px\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n\n        <div style=\"\n            padding: 10px;\n            border: 1px solid white;\n            height: max-content;\n            margin: 20px 20px 0px 20px;\">\n\n\n          <div *ngIf=\"noMoreQuestion\">\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 15pt\">No more poll questions to show</label>\n              </ion-col>\n            </ion-row>\n\n\n          </div>\n\n          <div *ngIf=\"!noMoreQuestion\">\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 12pt\">{{currentQuestion}}</label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <ion-text style=\"font-size: 8pt\">{{currentQuestionDesc}} </ion-text>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n\n        <div *ngIf=\"!noMoreQuestion\">\n\n          <ion-row style=\"margin: 10px 14px 0px 14px\">\n            <ion-col style=\"text-align: left;\">\n              <ion-input [class.redBorder]=\"commentStatus\" class=\"inp\" autocapitalize=\"word\" placeholder=\"Add a comment\"\n                [(ngModel)]=\"commnent\" (ionChange)=\"changeFunction($event)\">\n              </ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin: 10px 14px 0px 14px\">\n            <ion-col>\n              <button (click)=\"goToSubscription()\" class=\"btn\" style=\"width: 100%\">\n                Submit\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_poll_poll_module_ts-es2015.js.map