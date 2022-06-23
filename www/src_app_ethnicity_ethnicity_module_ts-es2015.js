(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_ethnicity_ethnicity_module_ts"],{

/***/ 47872:
/*!*******************************************************!*\
  !*** ./src/app/ethnicity/ethnicity-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthnicityPageRoutingModule": function() { return /* binding */ EthnicityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ethnicity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethnicity.page */ 30369);




const routes = [
    {
        path: '',
        component: _ethnicity_page__WEBPACK_IMPORTED_MODULE_0__.EthnicityPage
    }
];
let EthnicityPageRoutingModule = class EthnicityPageRoutingModule {
};
EthnicityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EthnicityPageRoutingModule);



/***/ }),

/***/ 65864:
/*!***********************************************!*\
  !*** ./src/app/ethnicity/ethnicity.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthnicityPageModule": function() { return /* binding */ EthnicityPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ethnicity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ethnicity-routing.module */ 47872);
/* harmony import */ var _ethnicity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethnicity.page */ 30369);







let EthnicityPageModule = class EthnicityPageModule {
};
EthnicityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ethnicity_routing_module__WEBPACK_IMPORTED_MODULE_0__.EthnicityPageRoutingModule
        ],
        declarations: [_ethnicity_page__WEBPACK_IMPORTED_MODULE_1__.EthnicityPage]
    })
], EthnicityPageModule);



/***/ }),

/***/ 30369:
/*!*********************************************!*\
  !*** ./src/app/ethnicity/ethnicity.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EthnicityPage": function() { return /* binding */ EthnicityPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ethnicity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ethnicity.page.html */ 45583);
/* harmony import */ var _ethnicity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethnicity.page.scss */ 34738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);







let EthnicityPage = class EthnicityPage {
    constructor(location, workService, restService) {
        this.location = location;
        this.workService = workService;
        this.restService = restService;
        this.addedArray = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // this.addedArray = JSON.parse(localStorage.getItem('ethnicityArr'))
        // if (this.addedArray) {
        // } else {
        //   this.addedArray = []
        // }
        if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
            this.addedArray = [];
        }
        else {
            let arr = this.workService.userPrefData.user_preferences_ethinicity;
            arr.forEach(val => {
                let fields = {
                    name: val.system_ethinicity_name,
                    sort_order: "1",
                    status: "Active",
                    system_ethinicity_id: val.system_ethinicity_id,
                    added: true
                };
                this.addedArray.push(fields);
            });
            console.log('hurra', this.addedArray);
        }
        this.ethnicityArray = this.workService.systemData.ethinicity;
        console.log('ethnicityArray---', this.ethnicityArray);
        var hash = Object.create(null);
        this.ethnicityArray.forEach(obj => hash[obj.name] = obj);
        this.addedArray.forEach(obj => Object.assign(hash[obj.name], obj));
        console.log('after mergeee', this.ethnicityArray);
    }
    goBack() {
        this.location.back();
    }
    saveEthnicity() {
        this.workService.presentLoading();
        console.log('saveEthnicity-------111', this.addedArray);
        var userID = localStorage.getItem('loggedinUserID');
        var data = JSON.stringify({
            "system_ethinicity_id": this.addedArray
        });
        console.log('system_ethinicity_id-------111', data);
        this.restService.updatePrefAPI('update_ethinicity/', userID, data).subscribe((res) => {
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
        // localStorage.setItem('ethnicity', val.name)
        // localStorage.setItem('ethnicityID', val.system_ethinicity_id)
        // 
    }
};
EthnicityPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
EthnicityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ethnicity',
        template: _raw_loader_ethnicity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ethnicity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EthnicityPage);



/***/ }),

/***/ 34738:
/*!***********************************************!*\
  !*** ./src/app/ethnicity/ethnicity.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n\n.divbg {\n  height: 50px;\n  margin-left: 2px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  height: 50px;\n  margin-left: 2px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 2px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aG5pY2l0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoiZXRobmljaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpdmJnIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZiZzphY3RpdmUge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmVkaXZiZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 45583:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ethnicity/ethnicity.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 20px;\">\n\n    <ion-text>Ethnicity *</ion-text>\n\n    <div class=\"margin-top-fixed\" style=\"padding: 0px 0px 0px 0px;\">\n\n      <ion-chip *ngFor=\"let eth of ethnicityArray;  let i = index;\" class=\"divbg\" (click)=\"ethSelected(eth,i)\"\n        [class.activedivbg]=\"eth.added\">\n        <ion-label style=\" color: gray;;\">{{eth.name}}</ion-label>\n      </ion-chip>\n\n    </div>\n\n\n    <ion-row style=\"width: 100%;  bottom: 3px; padding: 6px; margin-top: 40px;\">\n      <ion-col style=\"text-align: center\">\n        <button (click)=\"saveEthnicity()\" class=\"btn\">Save</button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_ethnicity_ethnicity_module_ts-es2015.js.map