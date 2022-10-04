(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_contactus2_contactus2_module_ts"],{

/***/ 53679:
/*!*********************************************************!*\
  !*** ./src/app/contactus2/contactus2-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contactus2PageRoutingModule": function() { return /* binding */ Contactus2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contactus2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus2.page */ 33130);




const routes = [
    {
        path: '',
        component: _contactus2_page__WEBPACK_IMPORTED_MODULE_0__.Contactus2Page
    }
];
let Contactus2PageRoutingModule = class Contactus2PageRoutingModule {
};
Contactus2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Contactus2PageRoutingModule);



/***/ }),

/***/ 43538:
/*!*************************************************!*\
  !*** ./src/app/contactus2/contactus2.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contactus2PageModule": function() { return /* binding */ Contactus2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contactus2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactus2-routing.module */ 53679);
/* harmony import */ var _contactus2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus2.page */ 33130);







let Contactus2PageModule = class Contactus2PageModule {
};
Contactus2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactus2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Contactus2PageRoutingModule
        ],
        declarations: [_contactus2_page__WEBPACK_IMPORTED_MODULE_1__.Contactus2Page]
    })
], Contactus2PageModule);



/***/ }),

/***/ 33130:
/*!***********************************************!*\
  !*** ./src/app/contactus2/contactus2.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contactus2Page": function() { return /* binding */ Contactus2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contactus2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contactus2.page.html */ 34216);
/* harmony import */ var _contactus2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus2.page.scss */ 67209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);









let Contactus2Page = class Contactus2Page {
    constructor(router, location, workService, restService, platform) {
        this.router = router;
        this.location = location;
        this.workService = workService;
        this.restService = restService;
        this.platform = platform;
        this.name = '';
        this.email = '';
        this.desc = '';
        this.nameStatus = false;
        this.emailStatus = false;
        this.descStatus = false;
        this.userData = '';
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
        this.userData = this.workService.myUserData;
        console.log(this.userData);
        this.name = this.userData.first_name + ' ' + this.userData.last_name;
        this.email = this.userData.user_email;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    changeFunction(ev) {
        this.name = this.restService.removebadwords(ev.detail.value);
    }
    changeFunction1(ev) {
        this.desc = this.restService.removebadwords(ev.detail.value);
    }
    send() {
        if (this.name == '') {
            this.nameStatus = true;
        }
        if (this.email == '') {
            this.emailStatus = true;
        }
        if (this.desc == '') {
            this.descStatus = true;
        }
        if (this.name != '' && this.email != '' && this.desc != '') {
            var stringy = JSON.stringify({
                name: this.name,
                email: this.email,
                message: this.desc
            });
            console.log(stringy);
            this.workService.presentLoading();
            this.restService.contactUSAPI(stringy).subscribe((res) => {
                console.log(res);
                this.workService.hideLoading();
                if (res.status == 'success') {
                    this.workService.presentToast(res.message);
                    this.location.back();
                }
                else {
                    this.workService.presentToast('Some Error Occured.');
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
        }
        else {
            setTimeout(() => {
                this.nameStatus = false;
                this.emailStatus = false;
                this.descStatus = false;
            }, 3000);
        }
    }
};
Contactus2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
Contactus2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-contactus2',
        template: _raw_loader_contactus2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contactus2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Contactus2Page);



/***/ }),

/***/ 67209:
/*!*************************************************!*\
  !*** ./src/app/contactus2/contactus2.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  border: 1px solid #969696;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nion-col {\n  padding: 5px;\n}\n\nion-text {\n  font-size: 11pt;\n}\n\n@media (orientation: portrait) {\n  .bottombtn {\n    bottom: 25px;\n    width: 100%;\n    padding: 0px 20px 0px 20px;\n  }\n}\n\n@media (orientation: landscape) {\n  .bottombtn {\n    margin-top: 20px;\n    bottom: 25px;\n    width: 100%;\n    padding: 0px 20px 0px 20px;\n  }\n}\n\n.redClass {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1czIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksVUFBQTtBQURKIiwiZmlsZSI6ImNvbnRhY3R1czIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk2OTY5NjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG5wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB0O1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC5ib3R0b21idG4ge1xuICAgICAgICBib3R0b206IDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC5ib3R0b21idG4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBib3R0b206IDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcbiAgICB9XG59XG5cbi5yZWRDbGFzcyB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 34216:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus2/contactus2.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Contact Us</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\" style=\"text-align: center;\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding-left: 20px; padding-right: 20px; padding-top: 0px; padding-bottom: 20px;\"\n    class=\"margin-top-fixed\">\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"nameStatus\">Name</ion-text>\n\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -9px;\">\n      <ion-col>\n        <ion-input [(ngModel)]=\"name\" class=\"inp\" autocapitalize=\"word\" (ionChange)=\"changeFunction($event)\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"emailStatus\">Email</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -9px;\">\n      <ion-col>\n        <ion-input class=\"inp\" [(ngModel)]=\"email\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"descStatus\">Description</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -7px;\">\n      <ion-col>\n        <ion-textarea class=\"inp\" autocapitalize=\"word\" [(ngModel)]=\"desc\" style=\"height: 182px;\"\n          (ionChange)=\"changeFunction1($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n  <ion-row class=\"bottombtn\">\n    <ion-col>\n      <button class=\"btn\" (click)=\"send()\">Send</button>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_contactus2_contactus2_module_ts-es2015.js.map