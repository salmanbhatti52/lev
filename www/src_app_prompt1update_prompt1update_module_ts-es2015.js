(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_prompt1update_prompt1update_module_ts"],{

/***/ 13407:
/*!***************************************************************!*\
  !*** ./src/app/prompt1update/prompt1update-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prompt1updatePageRoutingModule": function() { return /* binding */ Prompt1updatePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _prompt1update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt1update.page */ 30034);




const routes = [
    {
        path: '',
        component: _prompt1update_page__WEBPACK_IMPORTED_MODULE_0__.Prompt1updatePage
    }
];
let Prompt1updatePageRoutingModule = class Prompt1updatePageRoutingModule {
};
Prompt1updatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Prompt1updatePageRoutingModule);



/***/ }),

/***/ 88807:
/*!*******************************************************!*\
  !*** ./src/app/prompt1update/prompt1update.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prompt1updatePageModule": function() { return /* binding */ Prompt1updatePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _prompt1update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt1update-routing.module */ 13407);
/* harmony import */ var _prompt1update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompt1update.page */ 30034);







let Prompt1updatePageModule = class Prompt1updatePageModule {
};
Prompt1updatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _prompt1update_routing_module__WEBPACK_IMPORTED_MODULE_0__.Prompt1updatePageRoutingModule
        ],
        declarations: [_prompt1update_page__WEBPACK_IMPORTED_MODULE_1__.Prompt1updatePage]
    })
], Prompt1updatePageModule);



/***/ }),

/***/ 30034:
/*!*****************************************************!*\
  !*** ./src/app/prompt1update/prompt1update.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prompt1updatePage": function() { return /* binding */ Prompt1updatePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_prompt1update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prompt1update.page.html */ 49592);
/* harmony import */ var _prompt1update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompt1update.page.scss */ 44898);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ 46298);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../work.service */ 8981);









let Prompt1updatePage = class Prompt1updatePage {
    constructor(location, signupService, restService, router, workService) {
        this.location = location;
        this.signupService = signupService;
        this.restService = restService;
        this.router = router;
        this.workService = workService;
        this.prompt = '';
        this.promptTitle = '';
        this.user_prompts_array = '';
        this.prompts1show = true;
        this.prompt1Name = '';
        this.prompt1Data = '';
    }
    ionViewWillEnter() {
        this.prompt1Name = localStorage.getItem('prompt1Name');
        this.prompt1Data = localStorage.getItem('prompt1Data');
    }
    showprompt1() {
        if (this.prompts1show) {
            this.prompts1show = false;
        }
        else {
            this.prompts1show = true;
        }
    }
    ngOnInit() {
        this.user_prompts_array = this.workService.systemData.system_prompt;
        console.log('user Prompts', this.user_prompts_array);
        // var stringy = JSON.stringify({
        // })
        // // this.workService.presentLoading()
        // this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
        //   console.log('incomming data----', res)
        //   // this.workService.hideLoading()
        //   if (res.status == "success") {
        //     console.log(res.data)
        //     console.log('user dataaaa', res.data.system_prompt);
        //     this.user_prompts_array = res.data.system_prompt
        //   }
        // })
    }
    goBack() {
        this.location.back();
    }
    goToProfile() {
        localStorage.setItem('prompt1Val', this.prompt);
        localStorage.setItem('prompt1Data', this.prompt1Data);
        this.signupService.prompt1Val = this.prompt;
        this.location.back();
    }
    changeFunction(ev) {
        this.prompt1Data = this.restService.removebadwords(ev.detail.value);
    }
    prompt1(item, i) {
        console.log('prompt1Name', item.name);
        this.prompt1Name = item.name;
        localStorage.setItem('prompt1Name', item.name);
        localStorage.setItem('prompt1ValHead', item.system_prompt_id);
        this.prompts1show = true;
        //this.router.navigate(['prompt1']);
    }
};
Prompt1updatePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService }
];
Prompt1updatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-prompt1update',
        template: _raw_loader_prompt1update_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prompt1update_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Prompt1updatePage);



/***/ }),

/***/ 44898:
/*!*******************************************************!*\
  !*** ./src/app/prompt1update/prompt1update.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001F;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdDF1cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNGLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJwcm9tcHQxdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 49592:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompt1update/prompt1update.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-row style=\"margin-right: 20px\" class=\"top-margin-head-40\">\n    <ion-col style=\"text-align: right; padding-right: 24px;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/close.svg\" />\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding: 0px 24px 10px 26px;\" class=\"margin-top-fixed\">\n\n\n    <ion-row (click)=\"showprompt1()\" style=\"    background: #313131;\n    padding: 10px; border-radius: 10px;\">\n      <ion-col size=\"10\">\n        <ion-text style=\"font-size: 9pt; \" [class.redclass]=\"prompt1ValStatus\">{{prompt1Name}}\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align: right;\">\n        <img *ngIf=\"prompts1show\" style=\"width: 16px;\n        height: 16px;\" src=\"assets/imgs/down.png\">\n        <img *ngIf=\"!prompts1show\" style=\"width: 16px;\n         height: 16px;\" src=\"assets/imgs/up.png\">\n      </ion-col>\n\n\n    </ion-row>\n\n    <div [hidden]=\"prompts1show\" style=\"height: 85px;\n      overflow: auto;\">\n\n      <h6 (click)=\"prompt1(nat,i)\" *ngFor=\"let nat of user_prompts_array ; let i = index\">{{nat.name}}\n      </h6>\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n  <div style=\"padding: 20px 20px 20px 20px\">\n\n\n    <ion-row style=\"margin-top: -10px\">\n      <ion-col>\n        <ion-textarea style=\"\n            height: 170px;\n            border-radius: 10px;\n            background: rgba(112, 112, 112, 0.44);\n          \" placeholder=\"Write here....\" [(ngModel)]=\"prompt1Data\" (ionChange)=\"changeFunction($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row style=\"width: 100%; position: absolute; bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goToProfile()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_prompt1update_prompt1update_module_ts-es2015.js.map