(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_myethnicity_myethnicity_module_ts"],{

/***/ 40127:
/*!***********************************************************!*\
  !*** ./src/app/myethnicity/myethnicity-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyethnicityPageRoutingModule": function() { return /* binding */ MyethnicityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myethnicity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myethnicity.page */ 90834);




const routes = [
    {
        path: '',
        component: _myethnicity_page__WEBPACK_IMPORTED_MODULE_0__.MyethnicityPage
    }
];
let MyethnicityPageRoutingModule = class MyethnicityPageRoutingModule {
};
MyethnicityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyethnicityPageRoutingModule);



/***/ }),

/***/ 4755:
/*!***************************************************!*\
  !*** ./src/app/myethnicity/myethnicity.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyethnicityPageModule": function() { return /* binding */ MyethnicityPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myethnicity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myethnicity-routing.module */ 40127);
/* harmony import */ var _myethnicity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myethnicity.page */ 90834);







let MyethnicityPageModule = class MyethnicityPageModule {
};
MyethnicityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myethnicity_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyethnicityPageRoutingModule
        ],
        declarations: [_myethnicity_page__WEBPACK_IMPORTED_MODULE_1__.MyethnicityPage]
    })
], MyethnicityPageModule);



/***/ }),

/***/ 90834:
/*!*************************************************!*\
  !*** ./src/app/myethnicity/myethnicity.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyethnicityPage": function() { return /* binding */ MyethnicityPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myethnicity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myethnicity.page.html */ 28405);
/* harmony import */ var _myethnicity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myethnicity.page.scss */ 11017);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ 46298);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../work.service */ 8981);








let MyethnicityPage = class MyethnicityPage {
    constructor(location, workService, restService, signupService) {
        this.location = location;
        this.workService = workService;
        this.restService = restService;
        this.signupService = signupService;
        this.addedArray = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.addedArray = JSON.parse(localStorage.getItem('ethnicityArr'));
        if (this.addedArray) {
        }
        else {
            this.addedArray = [];
        }
        console.log('ionViewWillEnter------------addedArray', this.addedArray);
        this.ethnicityID = localStorage.getItem('ethnicityID');
        console.log('eth id-->>', this.ethnicityID);
        this.ethnicityArray = this.workService.systemData.ethinicity;
        console.log('ethnicityArray---', this.ethnicityArray);
        var hash = Object.create(null);
        this.ethnicityArray.forEach(obj => hash[obj.name] = obj);
        this.addedArray.forEach(obj => Object.assign(hash[obj.name], obj));
        console.log('after mergeee', this.ethnicityArray);
    }
    goBack() {
        this.saveEthnicity();
    }
    ethSelected(val, i) {
        let obj = this.addedArray.find(o => o.system_ethinicity_id == val.system_ethinicity_id);
        if (obj) {
            console.log('delete');
            var aa = {
                system_ethinicity_id: val.system_ethinicity_id,
                name: val.name,
                sort_order: val.sort_order,
                status: val.status,
                added: false
            };
            this.ethnicityArray[i] = aa;
            var deleteThisIDPlz = 0;
            for (let i = 0; i < this.addedArray.length; i++) {
                if (this.addedArray[i].system_ethinicity_id == val.system_ethinicity_id) {
                    console.log('indexxxxxxx id testID--------', i);
                    deleteThisIDPlz = i;
                }
            }
            this.addedArray.splice(deleteThisIDPlz, 1);
            console.log('delete-------', this.addedArray);
        }
        else {
            console.log('Add');
            var bb = {
                system_ethinicity_id: val.system_ethinicity_id,
                name: val.name,
                sort_order: val.sort_order,
                status: val.status,
                added: true
            };
            this.ethnicityArray[i] = bb;
            this.addedArray.push(bb);
            console.log('added-------111111111', this.addedArray);
        }
        console.log('added-------9999999999', this.addedArray);
        localStorage.setItem('ethnicity', val.name);
        localStorage.setItem('ethnicityID', val.system_ethinicity_id);
        // 
    }
    saveEthnicity() {
        localStorage.setItem('ethnicityArr', JSON.stringify(this.addedArray));
        this.location.back();
    }
};
MyethnicityPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService }
];
MyethnicityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-myethnicity',
        template: _raw_loader_myethnicity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myethnicity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyethnicityPage);



/***/ }),

/***/ 11017:
/*!***************************************************!*\
  !*** ./src/app/myethnicity/myethnicity.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n\n.divbg {\n  height: 50px;\n  margin-left: 2px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  height: 50px;\n  margin-left: 2px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 2px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15ZXRobmljaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJteWV0aG5pY2l0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRpdmJnIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXZiZzphY3RpdmUge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3RpdmVkaXZiZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ 28405:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myethnicity/myethnicity.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-text>Ethnicity *</ion-text>\n\n    <div style=\"margin-top: 28px;\">\n\n      <ion-chip *ngFor=\"let eth of ethnicityArray; let i = index;\" class=\"divbg\" (click)=\"ethSelected(eth,i)\"\n        [class.activedivbg]=\"eth.added\">\n        <ion-label style=\" color: gray;;\">{{eth.name}}</ion-label>\n      </ion-chip>\n\n\n    </div>\n\n    <ion-row style=\"width: 100%;\n    bottom: 3px;\n    padding: 20px 7px;\">\n      <ion-col style=\"text-align: center\">\n        <button (click)=\"saveEthnicity()\" class=\"btn\">Save</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_myethnicity_myethnicity_module_ts-es2015.js.map