(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_viewprofile_viewprofile_module_ts"],{

/***/ 35401:
/*!***********************************************************!*\
  !*** ./src/app/viewprofile/viewprofile-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewprofilePageRoutingModule": function() { return /* binding */ ViewprofilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _viewprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewprofile.page */ 77308);




const routes = [
    {
        path: '',
        component: _viewprofile_page__WEBPACK_IMPORTED_MODULE_0__.ViewprofilePage
    }
];
let ViewprofilePageRoutingModule = class ViewprofilePageRoutingModule {
};
ViewprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewprofilePageRoutingModule);



/***/ }),

/***/ 18684:
/*!***************************************************!*\
  !*** ./src/app/viewprofile/viewprofile.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewprofilePageModule": function() { return /* binding */ ViewprofilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewprofile-routing.module */ 35401);
/* harmony import */ var _viewprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewprofile.page */ 77308);







let ViewprofilePageModule = class ViewprofilePageModule {
};
ViewprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viewprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewprofilePageRoutingModule
        ],
        declarations: [_viewprofile_page__WEBPACK_IMPORTED_MODULE_1__.ViewprofilePage]
    })
], ViewprofilePageModule);



/***/ }),

/***/ 77308:
/*!*************************************************!*\
  !*** ./src/app/viewprofile/viewprofile.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewprofilePage": function() { return /* binding */ ViewprofilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_viewprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./viewprofile.page.html */ 64967);
/* harmony import */ var _viewprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewprofile.page.scss */ 18083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








let ViewprofilePage = class ViewprofilePage {
    constructor(location, router, workService, restService) {
        this.location = location;
        this.router = router;
        this.workService = workService;
        this.restService = restService;
        this.userData = '';
        this.userPrompts = '';
        this.userSchool = '';
        this.prompt1Head = '';
        this.prompt1Data = '';
        this.prompt2Head = '';
        this.prompt2Data = '';
        this.prompt3Head = '';
        this.prompt3Data = '';
        this.userHeight = '';
        this.height1 = '';
        this.height2 = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //this.workService.presentLoading()
        this.userData = this.workService.myUserData.data.user_data;
        this.userSchool = this.workService.myUserData.data.users_schools;
        this.userPrompts = this.workService.myUserData.data.users_prompts;
        console.log('name----------', this.userPrompts[0].prompt_name);
        this.prompt1Head = this.userPrompts[0].prompt_name;
        this.prompt1Data = this.userPrompts[0].comments;
        this.prompt2Head = this.userPrompts[1].prompt_name;
        this.prompt2Data = this.userPrompts[1].comments;
        this.prompt3Head = this.userPrompts[2].prompt_name;
        this.prompt3Data = this.userPrompts[2].comments;
        console.log('rrrrrrrrrr------', this.workService.myUserData.data.user_data.height);
        this.userHeight = parseFloat(this.workService.myUserData.data.user_data.height).toFixed(2);
        this.height1 = this.userHeight.substring(0, 1);
        this.height2 = this.userHeight.substring(2, 4);
        // this.restService.get_user_dataAPI(5).subscribe((res: any) => {
        //   this.workService.hideLoading()
        //   console.log('incomming data === ', res);
        //   if (res.status == "success") {
        //     this.userData = res.data.user_data
        //     this.userSchool = res.data.users_schools
        //     this.userPrompts = res.data.users_prompts
        //     console.log('name----------', this.userPrompts[0].prompt_name);
        //     this.prompt1Head = this.userPrompts[0].prompt_name
        //     this.prompt1Data = this.userPrompts[0].comments
        //     this.prompt2Head = this.userPrompts[1].prompt_name
        //     this.prompt2Data = this.userPrompts[1].comments
        //     this.prompt3Head = this.userPrompts[2].prompt_name
        //     this.prompt3Data = this.userPrompts[2].comments
        //     console.log('rrrrrrrrrr------', res.data.user_data.height);
        //     this.userHeight =parseFloat(res.data.user_data.height).toFixed(1)
        //   }
        // })
    }
    goBack() {
        this.location.back();
        // this.router.navigate(['tabs/tab3'], { replaceUrl: true })
    }
    handleImgError(ev, item, url) {
        let source = ev.srcElement;
        let imgSrc = `assets/imgs/placeholder.jpg`;
        source.src = imgSrc;
    }
};
ViewprofilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
ViewprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-viewprofile',
        template: _raw_loader_viewprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_viewprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewprofilePage);



/***/ }),

/***/ 18083:
/*!***************************************************!*\
  !*** ./src/app/viewprofile/viewprofile.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0oiLCJmaWxlIjoidmlld3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 64967:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewprofile/viewprofile.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width:20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: center;\">\n      <p (click)=\"goToEditProfile()\" style=\"font-size: 14pt;\">Edit Profile</p>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row class=\"margin-top-fixed\">\n    <ion-col style=\"text-align: left;\">\n      <p style=\"margin-left: 14px;\n      font-size: 14pt;\">{{userData.first_name}} {{userData.last_name}}</p>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center;\">\n      <img (error)=\"handleImgError($event, item)\" style=\"    width: 70%;\n      height: 250px;\" src=\"{{restService.baseUrlForImg}}{{userData.profile_pic_1}}\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 25px;\">\n    <p style=\"font-size:14pt;\">Prompt</p>\n\n    <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt1Head}}\n      </ion-text>\n      <br>\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt1Data}}\n      </ion-text>\n\n\n      <!-- <img style=\"position: absolute;\n          height: 25px;\n          width: 25px;\n          padding: 2px;\n          border: 1px solid white;\n          right: 36px;\" src=\"assets/imgs/share.svg\"> -->\n    </div>\n\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: center;\">\n        <img (error)=\"handleImgError($event, item)\" style=\" width: 70%;\n        height: 250px;\" src=\"{{restService.baseUrlForImg}}{{userData.profile_pic_2}}\">\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"padding: 0px;\">\n      <p style=\"font-size:14pt;\">Prompt</p>\n\n      <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n        <ion-text style=\"font-size: 10pt;\">\n          {{prompt2Head}}\n        </ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt;\">\n          {{prompt2Data}}\n        </ion-text>\n\n        <!-- <img style=\"position: absolute;\n          height: 25px;\n          width: 25px;\n          padding: 2px;\n          border: 1px solid white;\n          right: 36px;\" src=\"assets/imgs/share.svg\"> -->\n      </div>\n\n    </div>\n\n\n\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Height</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{height1}}'{{height2}} feet</ion-text>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Location</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.lives}}</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Status</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.system_maritalstatus_name}}</ion-text>\n\n      </ion-col>\n\n\n    </ion-row>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Religion</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.system_religions_name}}</ion-text>\n\n      </ion-col>\n\n\n    </ion-row>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n\n    <div style=\"margin-top: 10px;\">\n      <ion-text style=\"font-size: 10pt;\">Schools</ion-text>\n      <br>\n      <ion-chip style=\"background: #4f4f4f; max-width: 99%;\n        overflow: auto;\" *ngFor=\"let school of userSchool; let i = index\">\n        <ion-label>{{school.name}}</ion-label>\n      </ion-chip>\n\n\n    </div>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Short Bio</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.short_bio}}</ion-text>\n\n      </ion-col>\n\n\n    </ion-row>\n    <p style=\"font-size:14pt;\">Prompt</p>\n\n    <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt3Head}}\n      </ion-text>\n      <br>\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt3Data}}\n      </ion-text>\n      <!-- \n      <img style=\"position: absolute;\n          height: 25px;\n          width: 25px;\n          padding: 2px;\n          border: 1px solid white;\n          right: 36px;\" src=\"assets/imgs/share.svg\"> -->\n    </div>\n\n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_viewprofile_viewprofile_module_ts-es2015.js.map