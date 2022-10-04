(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_myage_myage_module_ts"],{

/***/ 29346:
/*!***********************************************!*\
  !*** ./src/app/myage/myage-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyagePageRoutingModule": function() { return /* binding */ MyagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myage.page */ 71266);




const routes = [
    {
        path: '',
        component: _myage_page__WEBPACK_IMPORTED_MODULE_0__.MyagePage
    }
];
let MyagePageRoutingModule = class MyagePageRoutingModule {
};
MyagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyagePageRoutingModule);



/***/ }),

/***/ 42209:
/*!***************************************!*\
  !*** ./src/app/myage/myage.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyagePageModule": function() { return /* binding */ MyagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myage-routing.module */ 29346);
/* harmony import */ var _myage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myage.page */ 71266);







let MyagePageModule = class MyagePageModule {
};
MyagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myage_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyagePageRoutingModule
        ],
        declarations: [_myage_page__WEBPACK_IMPORTED_MODULE_1__.MyagePage]
    })
], MyagePageModule);



/***/ }),

/***/ 71266:
/*!*************************************!*\
  !*** ./src/app/myage/myage.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyagePage": function() { return /* binding */ MyagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myage.page.html */ 77634);
/* harmony import */ var _myage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myage.page.scss */ 69340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let MyagePage = class MyagePage {
    constructor(location) {
        this.location = location;
        this.max_price = 4;
        this.min_price = 7;
        this.height = '';
        this.height1 = '';
        this.height2 = '';
    }
    // @Component({
    //   selector: 'float-range',
    //   template: `<ion-range #range [min]="min" [max]="max" [pin]="pin" [step]="step" [snaps]="snaps" [(ngModel)]="_ngModel" (ionBlur)="onValueChange($event);" ngDefaultControl></ion-range>`
    // })
    // @Input() max: 8;
    // @Input() min: 3;
    // @Input() pin: true;
    // @Input() step: 0.1;
    // @Input() snaps: true;
    // @Input() _ngModel: any;
    ngOnInit() {
    }
    goBack() {
        this.height = this.height1 + "." + this.height2;
        localStorage.setItem('height', this.height);
        console.log(localStorage.getItem('height'));
        this.location.back();
    }
    ionViewWillEnter() {
        this.height = parseFloat(localStorage.getItem('height'));
        console.log('height====', this.height, localStorage.getItem('height'));
        console.log('my height-->>', localStorage.getItem('height').substring(0, 1));
        console.log('my height22222-->>', localStorage.getItem('height').substring(2, 4));
        console.log('-----------------------------------------------');
        if (localStorage.getItem('height') == '' || isNaN(parseFloat(localStorage.getItem('height'))) || localStorage.getItem('height') == null || localStorage.getItem('height') == "N'N" || localStorage.getItem('height') == "Enter Height") {
            this.height = '0';
            this.height1 = '0';
            this.height2 = '0';
        }
        else {
            this.height1 = localStorage.getItem('height').substring(0, 1);
            this.height2 = localStorage.getItem('height').substring(2, 4);
        }
    }
    onSliderChangedFeet(event) {
        console.log('age--------', event.detail.value * 100 / 100);
        this.height = event.detail.value.toFixed(6);
        this.height1 = event.detail.value;
        if (this.height2) {
        }
        else {
            this.height2 = "0";
        }
    }
    onSliderChangedInch(event) {
        console.log('age--------', event.detail.value * 100 / 100);
        this.height = event.detail.value.toFixed(6);
        this.height2 = event.detail.value;
    }
};
MyagePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
MyagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-myage',
        template: _raw_loader_myage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyagePage);



/***/ }),

/***/ 69340:
/*!***************************************!*\
  !*** ./src/app/myage/myage.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-range {\n  --bar-background: gray;\n  --knob-background: white;\n  --bar-background-active: gray;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJteWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmFuZ2Uge1xuICAgIC0tYmFyLWJhY2tncm91bmQ6IGdyYXk7XG4gICAgLS1rbm9iLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiBncmF5O1xufVxuXG5cbi5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ 77634:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myage/myage.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    \n\n    <div style=\"margin-top: 4px;\">\n\n      <ion-row style=\"padding: 0px;\">\n\n        <ion-col style=\" padding: 0px;\">\n          <ion-text>Your Height</ion-text>\n        </ion-col>\n\n        <ion-col style=\" padding: 0px;\"><label>{{height1}}<span\n              *ngIf=\"height1\">'</span>{{height2}}</label> </ion-col>\n      </ion-row>\n\n      <p  style=\"font-size: 11pt;\">Feets</p>\n\n      <ion-range min=\"4\" max=\"7\" step=\"1\" style=\"margin-top: 17px;\" (ionChange)=\"onSliderChangedFeet($event)\"\n        [(ngModel)]=\"height1\">\n      </ion-range>\n\n      <p  style=\"font-size: 11pt;\">inches</p>\n\n      <ion-range min=\"0\" max=\"11\" step=\"1\" style=\"margin-top: 17px;\" (ionChange)=\"onSliderChangedInch($event)\"\n      [(ngModel)]=\"height2\">\n    </ion-range>\n\n\n      <!-- <float-range [_ngModel]=\"item.value\"></float-range> -->\n\n    </div>\n\n\n  </div>\n\n\n\n  <ion-row style=\"width: 100%;  bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goBack()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_myage_myage_module_ts-es2015.js.map