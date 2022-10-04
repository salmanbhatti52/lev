(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_contactussignup_contactussignup_module_ts"], {
    /***/
    97305:
    /*!*******************************************************************!*\
      !*** ./src/app/contactussignup/contactussignup-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactussignupPageRoutingModule": function ContactussignupPageRoutingModule() {
          return (
            /* binding */
            _ContactussignupPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _contactussignup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contactussignup.page */
      65538);

      var routes = [{
        path: '',
        component: _contactussignup_page__WEBPACK_IMPORTED_MODULE_0__.ContactussignupPage
      }];

      var _ContactussignupPageRoutingModule = function ContactussignupPageRoutingModule() {
        _classCallCheck(this, ContactussignupPageRoutingModule);
      };

      _ContactussignupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ContactussignupPageRoutingModule);
      /***/
    },

    /***/
    5942:
    /*!***********************************************************!*\
      !*** ./src/app/contactussignup/contactussignup.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactussignupPageModule": function ContactussignupPageModule() {
          return (
            /* binding */
            _ContactussignupPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _contactussignup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contactussignup-routing.module */
      97305);
      /* harmony import */


      var _contactussignup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contactussignup.page */
      65538);

      var _ContactussignupPageModule = function ContactussignupPageModule() {
        _classCallCheck(this, ContactussignupPageModule);
      };

      _ContactussignupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contactussignup_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactussignupPageRoutingModule],
        declarations: [_contactussignup_page__WEBPACK_IMPORTED_MODULE_1__.ContactussignupPage]
      })], _ContactussignupPageModule);
      /***/
    },

    /***/
    65538:
    /*!*********************************************************!*\
      !*** ./src/app/contactussignup/contactussignup.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactussignupPage": function ContactussignupPage() {
          return (
            /* binding */
            _ContactussignupPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_contactussignup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contactussignup.page.html */
      38037);
      /* harmony import */


      var _contactussignup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contactussignup.page.scss */
      81389);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _ContactussignupPage = /*#__PURE__*/function () {
        function ContactussignupPage(router, location, workService, restService, platform) {
          _classCallCheck(this, ContactussignupPage);

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
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          }); // this.userData = this.workService.myUserData
          // console.log(this.userData);
          // this.name = this.userData.first_name + ' ' + this.userData.last_name
          // this.email = this.userData.user_email
        }

        _createClass(ContactussignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.name = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction1",
          value: function changeFunction1(ev) {
            this.desc = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "send",
          value: function send() {
            var _this = this;

            if (this.name == '') {
              this.nameStatus = true;
            }

            if (this.email == '') {
              this.emailStatus = true;
            }

            if (this.desc == '') {
              this.descStatus = true;
            }

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(this.email)) {
              this.emailStatus = true;
              this.workService.presentToast('Enter Valid Email.');
            }

            if (this.name != '' && this.email != '' && re.test(this.email) && this.desc != '') {
              var stringy = JSON.stringify({
                name: this.name,
                email: this.email,
                message: this.desc
              });
              console.log(stringy);
              this.workService.presentLoading();
              this.restService.contactUSAPI(stringy).subscribe(function (res) {
                console.log(res);

                _this.workService.hideLoading();

                if (res.status == 'success') {
                  _this.workService.presentToast(res.message);

                  _this.location.back();
                } else {
                  _this.workService.presentToast('Some Error Occured.');
                }
              }, function (err) {
                _this.workService.hideLoading();

                _this.workService.presentToast('Network error occured');
              });
            } else {
              setTimeout(function () {
                _this.nameStatus = false;
                _this.emailStatus = false;
                _this.descStatus = false;
              }, 3000);
            }
          }
        }]);

        return ContactussignupPage;
      }();

      _ContactussignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }];
      };

      _ContactussignupPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-contactussignup',
        template: _raw_loader_contactussignup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contactussignup_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactussignupPage);
      /***/
    },

    /***/
    81389:
    /*!***********************************************************!*\
      !*** ./src/app/contactussignup/contactussignup.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  border: 1px solid #969696;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nion-col {\n  padding: 5px;\n}\n\nion-text {\n  font-size: 11pt;\n}\n\n@media (orientation: portrait) {\n  .bottombtn {\n    bottom: 25px;\n    width: 100%;\n    padding: 0px 20px 0px 20px;\n  }\n}\n\n@media (orientation: landscape) {\n  .bottombtn {\n    margin-top: 20px;\n    bottom: 25px;\n    width: 100%;\n    padding: 0px 20px 0px 20px;\n  }\n}\n\n.redClass {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1c3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxVQUFBO0FBREoiLCJmaWxlIjoiY29udGFjdHVzc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Njk2OTY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuaW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAuYm90dG9tYnRuIHtcbiAgICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAuYm90dG9tYnRuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG4gICAgfVxufVxuXG4ucmVkQ2xhc3Mge1xuICAgIGNvbG9yOiByZWQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    38037:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactussignup/contactussignup.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Contact Us</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\" style=\"text-align: center;\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding-left: 20px; padding-right: 20px; padding-top: 0px; padding-bottom: 20px;\"\n    class=\"margin-top-fixed\">\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"nameStatus\">Name</ion-text>\n\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -9px;\">\n      <ion-col>\n        <ion-input [(ngModel)]=\"name\" class=\"inp\" autocapitalize=\"word\" (ionChange)=\"changeFunction($event)\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"emailStatus\">Email</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -9px;\">\n      <ion-col>\n        <ion-input class=\"inp\" [(ngModel)]=\"email\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"descStatus\">Description</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -7px;\">\n      <ion-col>\n        <ion-textarea class=\"inp\" autocapitalize=\"word\" [(ngModel)]=\"desc\" style=\"height: 182px; margin: 0px;\"\n          (ionChange)=\"changeFunction1($event)\">\n        </ion-textarea>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n  <ion-row class=\"bottombtn\">\n    <ion-col>\n      <button class=\"btn\" (click)=\"send()\">Send</button>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_contactussignup_contactussignup_module_ts-es5.js.map