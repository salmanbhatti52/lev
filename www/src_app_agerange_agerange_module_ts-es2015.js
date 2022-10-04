(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_agerange_agerange_module_ts"],{

/***/ 19925:
/*!*****************************************************!*\
  !*** ./src/app/agerange/agerange-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgerangePageRoutingModule": function() { return /* binding */ AgerangePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _agerange_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agerange.page */ 34315);




const routes = [
    {
        path: '',
        component: _agerange_page__WEBPACK_IMPORTED_MODULE_0__.AgerangePage
    }
];
let AgerangePageRoutingModule = class AgerangePageRoutingModule {
};
AgerangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgerangePageRoutingModule);



/***/ }),

/***/ 89190:
/*!*********************************************!*\
  !*** ./src/app/agerange/agerange.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgerangePageModule": function() { return /* binding */ AgerangePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _agerange_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agerange-routing.module */ 19925);
/* harmony import */ var _agerange_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agerange.page */ 34315);







let AgerangePageModule = class AgerangePageModule {
};
AgerangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agerange_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgerangePageRoutingModule
        ],
        declarations: [_agerange_page__WEBPACK_IMPORTED_MODULE_1__.AgerangePage]
    })
], AgerangePageModule);



/***/ }),

/***/ 34315:
/*!*******************************************!*\
  !*** ./src/app/agerange/agerange.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgerangePage": function() { return /* binding */ AgerangePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_agerange_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./agerange.page.html */ 19337);
/* harmony import */ var _agerange_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agerange.page.scss */ 28394);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);








let AgerangePage = class AgerangePage {
    constructor(location, platform, workService, restService) {
        this.location = location;
        this.platform = platform;
        this.workService = workService;
        this.restService = restService;
        this.max_price = 10;
        this.min_price = 40;
        this.price = {
            upper: 35,
            lower: 10
        };
        this.lowerAge = '';
        this.upperAge = '';
        this.system_age_range_start = 20;
        this.system_age_range_end = 30;
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    onSliderChanged(event) {
        // console.log(event)
        console.log(this.price.lower);
        console.log(this.price.upper);
        this.system_age_range_start = this.price.lower;
        this.system_age_range_end = this.price.upper;
    }
    ionViewWillEnter() {
        if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
            this.system_age_range_start = 20;
            this.system_age_range_end = 30;
        }
        else {
            this.system_age_range_end = this.workService.userPrefData.user_preferences.age_range_end;
            this.system_age_range_start = this.workService.userPrefData.user_preferences.age_range_start;
        }
        console.log('userDayaPred-->', this.workService.userPrefData);
        this.price = {
            upper: this.system_age_range_end,
            lower: this.system_age_range_start
        };
        console.log('price---->', this.price);
    }
    saveAgeRange() {
        this.workService.presentLoading();
        var userID = localStorage.getItem('loggedinUserID');
        var data = JSON.stringify({
            "system_age_range_start": this.system_age_range_start,
            "system_age_range_end": this.system_age_range_end
        });
        console.log('age====>>', data);
        this.restService.updatePrefAPI('update_age_range/', userID, data).subscribe((res) => {
            this.workService.hideLoading();
            console.log('resss======', res);
            if (res.status == 'success') {
                this.workService.presentToast(res.message);
                this.location.back();
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
};
AgerangePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
AgerangePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-agerange',
        template: _raw_loader_agerange_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_agerange_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AgerangePage);



/***/ }),

/***/ 28394:
/*!*********************************************!*\
  !*** ./src/app/agerange/agerange.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-range {\n  --bar-background: gray;\n  --knob-background: white;\n  --bar-background-active: gray;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZXJhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJhZ2VyYW5nZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmFuZ2Uge1xuICAgIC0tYmFyLWJhY2tncm91bmQ6IGdyYXk7XG4gICAgLS1rbm9iLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiBncmF5O1xufVxuXG5cbi5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ 19337:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agerange/agerange.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n        width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\n\n    <ion-text>Age Range</ion-text>\n\n    <div style=\"margin-top: 4px;\">\n\n\n      <ion-row>\n        <ion-col style=\"text-align: center;\">\n          <ion-text>{{system_age_range_start}} - {{system_age_range_end}}</ion-text>\n        </ion-col>\n      </ion-row>\n\n\n\n      <ion-range min=\"15\" max=\"50\" style=\"margin-top: -8px;\" (ionChange)=\"onSliderChanged($event)\" id=\"dual-range\"\n        [(ngModel)]=\"price\" dual-knobs pin>\n      </ion-range>\n\n    </div>\n\n\n  </div>\n\n\n\n  <ion-row style=\"width: 100%; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"saveAgeRange()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n\n<script>\n  const dualRange = document.querySelector('#dual-range');\n  dualRange.value = { lower: 33, upper: 60 };\n</script>");

/***/ })

}]);
//# sourceMappingURL=src_app_agerange_agerange_module_ts-es2015.js.map