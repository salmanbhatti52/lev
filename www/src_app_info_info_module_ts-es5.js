(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_info_info_module_ts"], {
    /***/
    62215:
    /*!*********************************************!*\
      !*** ./src/app/info/info-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfoPageRoutingModule": function InfoPageRoutingModule() {
          return (
            /* binding */
            _InfoPageRoutingModule
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


      var _info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./info.page */
      45726);

      var routes = [{
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_0__.InfoPage
      }];

      var _InfoPageRoutingModule = function InfoPageRoutingModule() {
        _classCallCheck(this, InfoPageRoutingModule);
      };

      _InfoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InfoPageRoutingModule);
      /***/
    },

    /***/
    43056:
    /*!*************************************!*\
      !*** ./src/app/info/info.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfoPageModule": function InfoPageModule() {
          return (
            /* binding */
            _InfoPageModule
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


      var _info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./info-routing.module */
      62215);
      /* harmony import */


      var _info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./info.page */
      45726);

      var _InfoPageModule = function InfoPageModule() {
        _classCallCheck(this, InfoPageModule);
      };

      _InfoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _info_routing_module__WEBPACK_IMPORTED_MODULE_0__.InfoPageRoutingModule],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_1__.InfoPage]
      })], _InfoPageModule);
      /***/
    },

    /***/
    45726:
    /*!***********************************!*\
      !*** ./src/app/info/info.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfoPage": function InfoPage() {
          return (
            /* binding */
            _InfoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./info.page.html */
      10383);
      /* harmony import */


      var _info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./info.page.scss */
      55195);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _InfoPage = /*#__PURE__*/function () {
        function InfoPage(location, router) {
          _classCallCheck(this, InfoPage);

          this.location = location;
          this.router = router;
        }

        _createClass(InfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            // this.location.back()
            this.router.navigate(['profile1']);
          }
        }, {
          key: "letsBegin",
          value: function letsBegin() {
            this.router.navigate(['youprofile1']);
          }
        }]);

        return InfoPage;
      }();

      _InfoPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _InfoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-info',
        template: _raw_loader_info_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_info_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InfoPage);
      /***/
    },

    /***/
    55195:
    /*!*************************************!*\
      !*** ./src/app/info/info.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2D2D39;\n  box-shadow: 0px 4px 10px #0000001F;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n  padding: 18px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.numberDiv {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #615d5db0;\n  text-align: center;\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0osa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDQTs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6ImluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHtcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICBiYWNrZ3JvdW5kOiAjMkQyRDM5O1xuYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxRjtcbmJvcmRlci1yYWRpdXM6IDhweDtcbm9wYWNpdHk6IDE7XG59XG5cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG4gIFxuICBcbiAgLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxuICBcblxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgaGVpZ2h0OiA0MHB0O1xuICAgIHBhZGRpbmc6IDE4cHg7XG59XG5cbnAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4ubnVtYmVyRGl2e1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNWQ1ZGIwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xufSJdfQ== */";
      /***/
    },

    /***/
    10383:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"3\" style=\"text-align: left; padding-left: 10px;\">\n      <img (click)=\"goToBack()\" style=\"width: 20px;\n    height: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n\n    </ion-col>\n    <ion-col size=\"3\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row style=\"margin-top: 40px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 9pt;\">The word “LEV” is derived from a native word meaning heart. We believe that\n          the person you decide to share and create a life with is a significant decision - and our hope is that LEV\n          will help you navigate through this process and keep it all together.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\" margin-top: 40px;\">\n\n      <ion-row>\n        <ion-col size=\"3\" style=\"text-align: -webkit-center;\">\n          <div class=\"numberDiv\"><label>1</label></div>\n        </ion-col>\n\n        <ion-col size=\"9\" style=\"padding-top: 11px;\">\n          <label>Your Profile</label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\" style=\"text-align: -webkit-center;\">\n          <div class=\"numberDiv\"><label>2</label></div>\n        </ion-col>\n\n        <ion-col size=\"9\" style=\"padding-top: 11px;\">\n          <label>About you</label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col size=\"3\" style=\"text-align: -webkit-center;\">\n          <div class=\"numberDiv\"><label>3</label></div>\n        </ion-col>\n\n        <ion-col size=\"9\" style=\"padding-top: 11px;\">\n          <label>LEV Rules</label>\n        </ion-col>\n      </ion-row>\n\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: left;\">\n        <button (click)=\"letsBegin()\" style=\"margin-bottom: 12px;\" class=\"btn\">Let's Begin!</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_info_info_module_ts-es5.js.map