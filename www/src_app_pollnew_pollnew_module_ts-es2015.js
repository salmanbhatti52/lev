(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_pollnew_pollnew_module_ts"],{

/***/ 79055:
/*!***************************************************!*\
  !*** ./src/app/pollnew/pollnew-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollnewPageRoutingModule": function() { return /* binding */ PollnewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pollnew_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollnew.page */ 35079);




const routes = [
    {
        path: '',
        component: _pollnew_page__WEBPACK_IMPORTED_MODULE_0__.PollnewPage
    }
];
let PollnewPageRoutingModule = class PollnewPageRoutingModule {
};
PollnewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PollnewPageRoutingModule);



/***/ }),

/***/ 6061:
/*!*******************************************!*\
  !*** ./src/app/pollnew/pollnew.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollnewPageModule": function() { return /* binding */ PollnewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pollnew_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollnew-routing.module */ 79055);
/* harmony import */ var _pollnew_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollnew.page */ 35079);







let PollnewPageModule = class PollnewPageModule {
};
PollnewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pollnew_routing_module__WEBPACK_IMPORTED_MODULE_0__.PollnewPageRoutingModule
        ],
        declarations: [_pollnew_page__WEBPACK_IMPORTED_MODULE_1__.PollnewPage]
    })
], PollnewPageModule);



/***/ }),

/***/ 35079:
/*!*****************************************!*\
  !*** ./src/app/pollnew/pollnew.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollnewPage": function() { return /* binding */ PollnewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pollnew_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pollnew.page.html */ 62541);
/* harmony import */ var _pollnew_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollnew.page.scss */ 57190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








let PollnewPage = class PollnewPage {
    constructor(router, location, restService, workService) {
        this.router = router;
        this.location = location;
        this.restService = restService;
        this.workService = workService;
        this.pvalue1 = 0.60;
        this.pvalue2 = 0.78;
        this.questionNo = 0;
        this.currentQuestion = '';
        this.currentQuestionDesc = '';
        this.currentQuestionID = '';
        this.currentQuestionOption1 = '';
        this.currentQuestionOption1ID = '';
        this.percentage1 = '';
        this.percentage1percent = '';
        this.currentQuestionOption2 = '';
        this.currentQuestionOption2ID = '';
        this.percentage2 = '';
        this.percentage2percent = '';
        this.question = '';
        this.commnent = '';
        this.commentStatus = false;
        this.noMoreQuestion = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.subscriptionIDFree = localStorage.getItem('packages_id');
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
                ///////////////////
                this.currentQuestionOption1 = this.question[this.questionNo].options[0].title;
                this.currentQuestionOption1ID = this.question[this.questionNo].options[0].system_polsqs_options_id;
                this.percentage1 = this.question[this.questionNo].options[0].percentage;
                if (this.percentage1 == 100) {
                    this.percentage1percent = this.percentage1;
                }
                else {
                    this.percentage1percent = '0.' + this.percentage1;
                }
                this.currentQuestionOption2 = this.question[this.questionNo].options[1].title;
                this.currentQuestionOption2ID = this.question[this.questionNo].options[1].system_polsqs_options_id;
                this.percentage2 = this.question[this.questionNo].options[1].percentage;
                if (this.percentage2 == 100) {
                    this.percentage2percent = this.percentage2;
                }
                else {
                    this.percentage2percent = '0.' + this.percentage2;
                }
                console.log('percentage2percent---', this.percentage2percent);
                console.log('percentage2---', this.percentage2);
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    goToSubscription(system_polsqs_options_id) {
        console.log('Comment------------', this.commnent);
        this.commnent = "aaaa";
        if (system_polsqs_options_id != '') {
            console.log('system_polsqs_options_id-----', system_polsqs_options_id);
            this.workService.presentLoading();
            var ss = JSON.stringify({
                "users_customers_id": localStorage.getItem('loggedinUserID'),
                "system_polsqs_options_id": system_polsqs_options_id,
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
                        this.removeItem(this.questionNo);
                        // this.questionNo = this.questionNo + 1
                        console.log('question===>', this.question);
                        console.log('questionNo===>', this.questionNo);
                        this.currentQuestion = this.question[this.questionNo].name;
                        this.currentQuestionDesc = this.question[this.questionNo].desc;
                        this.currentQuestionID = this.question[this.questionNo].system_polsqs_id;
                        this.currentQuestionOption1 = this.question[this.questionNo].options[0].title;
                        this.currentQuestionOption1ID = this.question[this.questionNo].options[0].system_polsqs_options_id;
                        this.percentage1 = this.question[this.questionNo].options[0].percentage;
                        if (this.percentage1 == 100) {
                            this.percentage1percent = this.percentage1;
                        }
                        else {
                            this.percentage1percent = '0.' + this.percentage1;
                        }
                        this.currentQuestionOption2 = this.question[this.questionNo].options[1].title;
                        this.currentQuestionOption2ID = this.question[this.questionNo].options[1].system_polsqs_options_id;
                        this.percentage2 = this.question[this.questionNo].options[1].percentage;
                        if (this.percentage2 == 100) {
                            this.percentage2percent = this.percentage2;
                        }
                        else {
                            this.percentage2percent = '0.' + this.percentage2;
                        }
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
    subSttFun(val) {
        // console.log('avvvvvvvvvvvvv', val);
        var vv = "Whats your Name  ";
        // console.log('vvv----', vv.length);
        if (val.length > 44) {
            return val.substring(0, 44) + "...";
        }
        else {
            return val;
        }
    }
    goToMembership() {
        this.router.navigate(['subscription']);
    }
};
PollnewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService }
];
PollnewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pollnew',
        template: _raw_loader_pollnew_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pollnew_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PollnewPage);



/***/ }),

/***/ 57190:
/*!*******************************************!*\
  !*** ./src/app/pollnew/pollnew.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 70%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n\n.progress1 {\n  --background: #9a9a9a;\n  padding: 0px;\n  border-radius: 20px;\n  --progress-background: #314f40;\n  margin-top: 1%;\n  height: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGxuZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxxQkFBQTtBQURKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoicG9sbG5ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxOTBwdDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgLnYtY2VudGVyLXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC52LWNlbnRlci1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDcwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG4ucmVkQm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4ucHJvZ3Jlc3MxIHtcbiAgICAtLWJhY2tncm91bmQ6ICM5YTlhOWE7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMzE0ZjQwO1xuICAgIG1hcmdpbi10b3A6IDElO1xuICAgIGhlaWdodDogNThweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 62541:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pollnew/pollnew.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #314f40\">\n  <div class=\"v-center-s\" style=\"padding: 20px\">\n    <ion-row style=\"background: black; padding-top: 20px; padding-bottom: 20px\">\n      <img (click)=\"goBack()\" style=\"position: absolute; height: 15px; width: 15px; right: 35px\"\n        src=\"assets/imgs/close.svg\" />\n\n      <ion-col style=\"text-align: center; margin-top: 25px\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n\n        <div style=\"\n            padding: 10px;\n            /* border: 1px solid white; */\n            height: max-content;\n            margin: 0px 0px 0px 0px;\">\n\n\n          <div *ngIf=\"noMoreQuestion\">\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 15pt\">No more poll questions to show</label>\n              </ion-col>\n            </ion-row>\n\n\n          </div>\n\n          <div *ngIf=\"!noMoreQuestion\">\n\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 12pt\">{{currentQuestion}}</label>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col style=\"text-align: center\">\n                <ion-text style=\"font-size: 8pt\">{{currentQuestionDesc}} </ion-text>\n              </ion-col>\n            </ion-row> -->\n\n            <ion-row style=\"margin: 10px 14px 0px 14px\">\n              <ion-col style=\"text-align: left;\">\n                <!-- <ion-input [class.redBorder]=\"commentStatus\" class=\"inp\" autocapitalize=\"word\" placeholder=\"Add a comment\"\n                  [(ngModel)]=\"commnent\">\n                </ion-input> -->\n                <div (click)=\"goToSubscription(currentQuestionOption1ID)\" style=\"    display: flex;\n                position: relative;\n                align-items: center;\">\n\n                  <label style=\"    position: absolute;\n                  font-size: 13pt;\n                  z-index: 9999;\n                  left: 24px;\n                  color: white;\n                  font-weight: 600;\n                  overflow: hidden;\n                  /* height: 50px; */\n                  width: 70%;\">{{ subSttFun(currentQuestionOption1) }}</label>\n\n                  <ion-label style=\"    position: absolute;\n                          z-index: 9999;\n                          right: 13px;\n                          font-weight: 600;\n                          font-size: 20px;\">{{percentage1 | number : '1.0-0'}} %</ion-label>\n\n\n\n                  <ion-progress-bar class=\"progress1\" value={{percentage1percent}}></ion-progress-bar>\n\n                </div>\n\n                <div (click)=\"goToSubscription(currentQuestionOption2ID)\" style=\"display: flex;\n                position: relative;\n                align-items: center;\n                margin-top: 17px;\">\n                  <label style=\"    position: absolute;\n                  font-size: 13pt;\n                  z-index: 9999;\n                  left: 24px;\n                  color: white;\n                  font-weight: 600;\n                  overflow: hidden;\n                  /* height: 50px; */\n                  width: 70%;\">{{ subSttFun(currentQuestionOption2) }}</label>\n\n                  <ion-label style=\"    position: absolute;\n                  z-index: 9999;\n                  right: 13px;\n                  font-weight: 600;\n                  font-size: 20px;\">{{percentage2 | number : '1.0-0'}} %</ion-label>\n\n                  <ion-progress-bar class=\"progress1\" value={{percentage2percent}}></ion-progress-bar>\n\n                </div>\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </div>\n\n\n        <div *ngIf=\"!noMoreQuestion\">\n\n\n\n          <!-- <ion-row style=\"margin: 10px 14px 0px 14px\">\n            <ion-col>\n              <button (click)=\"goToSubscription()\" class=\"btn\" style=\"width: 100%\">\n                Submit\n              </button>\n            </ion-col>\n          </ion-row> -->\n\n        </div>\n        <ion-row *ngIf=\"subscriptionIDFree == '88'\" style=\"margin-top: 20px; margin-left: 20px; margin-right: 20px;\">\n          <ion-col style=\"text-align: center;\">\n            <button (click)=\"goToMembership()\" style=\"margin-bottom: 12px;\" class=\"btn\">Subscribe to view Matches</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n   \n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pollnew_pollnew_module_ts-es2015.js.map