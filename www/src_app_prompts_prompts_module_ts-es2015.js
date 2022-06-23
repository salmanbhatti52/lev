(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_prompts_prompts_module_ts"],{

/***/ 39572:
/*!***************************************************!*\
  !*** ./src/app/prompts/prompts-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptsPageRoutingModule": function() { return /* binding */ PromptsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _prompts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompts.page */ 3615);




const routes = [
    {
        path: '',
        component: _prompts_page__WEBPACK_IMPORTED_MODULE_0__.PromptsPage
    }
];
let PromptsPageRoutingModule = class PromptsPageRoutingModule {
};
PromptsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PromptsPageRoutingModule);



/***/ }),

/***/ 66453:
/*!*******************************************!*\
  !*** ./src/app/prompts/prompts.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptsPageModule": function() { return /* binding */ PromptsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _prompts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompts-routing.module */ 39572);
/* harmony import */ var _prompts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompts.page */ 3615);







let PromptsPageModule = class PromptsPageModule {
};
PromptsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prompts_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromptsPageRoutingModule
        ],
        declarations: [_prompts_page__WEBPACK_IMPORTED_MODULE_1__.PromptsPage]
    })
], PromptsPageModule);



/***/ }),

/***/ 3615:
/*!*****************************************!*\
  !*** ./src/app/prompts/prompts.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptsPage": function() { return /* binding */ PromptsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_prompts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prompts.page.html */ 15383);
/* harmony import */ var _prompts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompts.page.scss */ 86813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








let PromptsPage = class PromptsPage {
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
    goToAppy() {
        this.router.navigate(['apply'], { replaceUrl: true });
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
                        //this.router.navigate(['apply'], { replaceUrl: true });
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
        this.router.navigate(['apply'], { replaceUrl: true });
    }
};
PromptsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService }
];
PromptsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-prompts',
        template: _raw_loader_prompts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prompts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PromptsPage);



/***/ }),

/***/ 86813:
/*!*******************************************!*\
  !*** ./src/app/prompts/prompts.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 70%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsNEJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InByb21wdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxOTBwdDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC52LWNlbnRlci1zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC52LWNlbnRlci1zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVkQm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 15383:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompts/prompts.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #0c293d\">\n  <div class=\"v-center-s\" style=\"padding: 20px\">\n    <ion-row style=\"background: black; padding-top: 20px; padding-bottom: 20px\">\n      <img (click)=\"goBack()\" style=\"position: absolute; height: 15px; width: 15px; right: 35px\"\n        src=\"assets/imgs/close.svg\" />\n\n      <ion-col style=\"text-align: center; margin-top: 25px\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n\n        <div style=\"\n            padding: 10px;\n            border: 1px solid white;\n            height: max-content;\n            margin: 20px 20px 0px 20px;\">\n\n\n          <div *ngIf=\"noMoreQuestion\" (click)=\"goToAppy()\">\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 15pt\">No more poll questions to show</label>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <div *ngIf=\"!noMoreQuestion\">\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 12pt\">{{currentQuestion}}</label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <ion-text style=\"font-size: 8pt\">{{currentQuestionDesc}} </ion-text>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n\n        <div *ngIf=\"!noMoreQuestion\">\n\n          <ion-row style=\"margin: 10px 14px 0px 14px\">\n            <ion-col style=\"text-align: left;\">\n              <ion-input [class.redBorder]=\"commentStatus\" class=\"inp\" autocapitalize=\"word\" placeholder=\"Add a comment\"\n                [(ngModel)]=\"commnent\" (ionChange)=\"changeFunction($event)\">\n              </ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"margin: 10px 14px 0px 14px\">\n            <ion-col>\n              <button (click)=\"goToSubscription()\" class=\"btn\" style=\"width: 100%\">\n                Submit\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_prompts_prompts_module_ts-es2015.js.map