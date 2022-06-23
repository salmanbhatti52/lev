(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_contactus2_contactus2_module_ts"], {
    /***/
    53679:
    /*!*********************************************************!*\
      !*** ./src/app/contactus2/contactus2-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Contactus2PageRoutingModule": function Contactus2PageRoutingModule() {
          return (
            /* binding */
            _Contactus2PageRoutingModule
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


      var _contactus2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contactus2.page */
      33130);

      var routes = [{
        path: '',
        component: _contactus2_page__WEBPACK_IMPORTED_MODULE_0__.Contactus2Page
      }];

      var _Contactus2PageRoutingModule = function Contactus2PageRoutingModule() {
        _classCallCheck(this, Contactus2PageRoutingModule);
      };

      _Contactus2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Contactus2PageRoutingModule);
      /***/
    },

    /***/
    43538:
    /*!*************************************************!*\
      !*** ./src/app/contactus2/contactus2.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Contactus2PageModule": function Contactus2PageModule() {
          return (
            /* binding */
            _Contactus2PageModule
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


      var _contactus2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contactus2-routing.module */
      53679);
      /* harmony import */


      var _contactus2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contactus2.page */
      33130);

      var _Contactus2PageModule = function Contactus2PageModule() {
        _classCallCheck(this, Contactus2PageModule);
      };

      _Contactus2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contactus2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Contactus2PageRoutingModule],
        declarations: [_contactus2_page__WEBPACK_IMPORTED_MODULE_1__.Contactus2Page]
      })], _Contactus2PageModule);
      /***/
    },

    /***/
    33130:
    /*!***********************************************!*\
      !*** ./src/app/contactus2/contactus2.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Contactus2Page": function Contactus2Page() {
          return (
            /* binding */
            _Contactus2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_contactus2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contactus2.page.html */
      34216);
      /* harmony import */


      var _contactus2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contactus2.page.scss */
      67209);
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

      var _Contactus2Page = /*#__PURE__*/function () {
        function Contactus2Page(router, location, workService, restService, platform) {
          _classCallCheck(this, Contactus2Page);

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
          });
          this.userData = this.workService.myUserData;
          console.log(this.userData);
          this.name = this.userData.first_name + ' ' + this.userData.last_name;
          this.email = this.userData.user_email;
        }

        _createClass(Contactus2Page, [{
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

            if (this.name != '' && this.email != '' && this.desc != '') {
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

        return Contactus2Page;
      }();

      _Contactus2Page.ctorParameters = function () {
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

      _Contactus2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-contactus2',
        template: _raw_loader_contactus2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contactus2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Contactus2Page);
      /***/
    },

    /***/
    67209:
    /*!*************************************************!*\
      !*** ./src/app/contactus2/contactus2.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  border: 1px solid #969696;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nion-col {\n  padding: 5px;\n}\n\nion-text {\n  font-size: 11pt;\n}\n\n@media (orientation: portrait) {\n  .bottombtn {\n    bottom: 25px;\n    width: 100%;\n    padding: 0px 20px 0px 20px;\n  }\n}\n\n@media (orientation: landscape) {\n  .bottombtn {\n    margin-top: 20px;\n    bottom: 25px;\n    width: 100%;\n    padding: 0px 20px 0px 20px;\n  }\n}\n\n.redClass {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1czIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksVUFBQTtBQURKIiwiZmlsZSI6ImNvbnRhY3R1czIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTY5Njk2O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC5ib3R0b21idG4ge1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAuYm90dG9tYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZENsYXNzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    34216:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus2/contactus2.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Contact Us</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\" style=\"text-align: center;\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding-left: 20px; padding-right: 20px; padding-top: 0px; padding-bottom: 20px;\"\n    class=\"margin-top-fixed\">\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"nameStatus\">Name</ion-text>\n\n\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -9px;\">\n      <ion-col>\n        <ion-input [(ngModel)]=\"name\" class=\"inp\" autocapitalize=\"word\" (ionChange)=\"changeFunction($event)\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"emailStatus\">Email</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -9px;\">\n      <ion-col>\n        <ion-input class=\"inp\" [(ngModel)]=\"email\"></ion-input>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-text [class.redClass]=\"descStatus\">Description</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -7px;\">\n      <ion-col>\n        <ion-textarea class=\"inp\" autocapitalize=\"word\" [(ngModel)]=\"desc\" style=\"height: 182px;\"\n          (ionChange)=\"changeFunction1($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n  <ion-row class=\"bottombtn\">\n    <ion-col>\n      <button class=\"btn\" (click)=\"send()\">Send</button>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_contactus2_contactus2_module_ts-es5.js.map