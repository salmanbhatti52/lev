(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_welcome_welcome_module_ts"], {
    /***/
    60752:
    /*!***************************************************!*\
      !*** ./src/app/welcome/welcome-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomePageRoutingModule": function WelcomePageRoutingModule() {
          return (
            /* binding */
            _WelcomePageRoutingModule
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./welcome.page */
      93297);

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
      }];

      var _WelcomePageRoutingModule = function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      };

      _WelcomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WelcomePageRoutingModule);
      /***/
    },

    /***/
    32526:
    /*!*******************************************!*\
      !*** ./src/app/welcome/welcome.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomePageModule": function WelcomePageModule() {
          return (
            /* binding */
            _WelcomePageModule
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


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./welcome-routing.module */
      60752);
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./welcome.page */
      93297);

      var _WelcomePageModule = function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      };

      _WelcomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
      })], _WelcomePageModule);
      /***/
    },

    /***/
    93297:
    /*!*****************************************!*\
      !*** ./src/app/welcome/welcome.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomePage": function WelcomePage() {
          return (
            /* binding */
            _WelcomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./welcome.page.html */
      62553);
      /* harmony import */


      var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./welcome.page.scss */
      62447);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);

      var _WelcomePage = /*#__PURE__*/function () {
        function WelcomePage(rest) {
          _classCallCheck(this, WelcomePage);

          this.rest = rest;
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.searchValue = this.rest.removebadwords(ev.detail.value); // let strtoarray = ev.detail.value.split(' ')
            // console.log('strtoarray=', strtoarray);
            // this.badwords = this.rest.newarr
            // console.log('new array of bad words==', this.badwords);
            // // this.lowercasearray = this.badwords.map(element => {
            // //   return element.toLowerCase();
            // // });
            // this.badwords.map(element => {
            //   var lowBadWord = element.toLowerCase();
            //   if (strtoarray.includes(lowBadWord)) {
            //     console.log("have bad word ", lowBadWord);
            //     let str1 = strtoarray.indexOf(lowBadWord)
            //     console.log('str get--', str1);
            //     strtoarray.splice(str1, 1)
            //     console.log('str get--after', strtoarray);
            //     this.searchValue = strtoarray.toString()
            //     this.replacevalue = this.searchValue.replaceAll(',', ' ')
            //     console.log('replace afreter==', this.replacevalue);
            //   }
            //   else {
            //     console.log("Pak saf word ");
            //   }
            // });
          }
        }]);

        return WelcomePage;
      }();

      _WelcomePage.ctorParameters = function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _WelcomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WelcomePage);
      /***/
    },

    /***/
    62447:
    /*!*******************************************!*\
      !*** ./src/app/welcome/welcome.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2D2D39;\n  box-shadow: 0px 4px 10px #0000001F;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001F;\n  border-radius: 30px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0osa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDSixrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEE7O0FBVUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUFQTjtBQUNGOztBQVVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBUk47QUFDRiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgIGJhY2tncm91bmQ6ICMyRDJEMzk7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMUY7XHJcbmJvcmRlci1yYWRpdXM6IDhweDtcclxub3BhY2l0eTogMTtcclxuXHJcbn1cclxuXHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcblxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMUY7XHJcbmJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbm9wYWNpdHk6IDE7XHJcbndpZHRoOiAxOTBwdDtcclxucGFkZGluZy10b3A6IDE2cHg7XHJcbnBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC52LWNlbnRlci1zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC52LWNlbnRlci1zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    62553:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n\n  <div class=\"v-center-s\" style=\"padding: 20px;\">\n\n    <ion-row>\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"    margin-top: 30px;\n    margin-bottom: 50px;\">\n      <ion-col style=\"text-align: center;\">\n        <button style=\"     width: 59%;\n        background: none;\n        margin-top: 10px;\n        font-size: 10px;\n        border: 2px solid white;\n        border-radius: 48px;\n        height: 48px;\n        padding: 16px;\"> Welcome To LEV</button>\n      </ion-col>\n    </ion-row>\n\n    <p style=\"text-align: center; font-size: 10pt;\">Include a bunch of writing</p>\n\n    <p style=\"text-align: center; font-size: 9pt;\">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n      nonumy eirmod tempor invidunt ut labore et dolore magna</p>\n\n    <ion-input placeholder=\"typehere\" [(ngModel)]=\"searchValue\" type=\"text\" autocomplete=\"off\" autocorrect=\"off\"\n      (ionChange)=\"changeFunction($event)\">\n    </ion-input>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_welcome_welcome_module_ts-es5.js.map