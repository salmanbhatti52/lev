(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_apply_apply_module_ts"], {
    /***/
    32471:
    /*!***********************************************!*\
      !*** ./src/app/apply/apply-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApplyPageRoutingModule": function ApplyPageRoutingModule() {
          return (
            /* binding */
            _ApplyPageRoutingModule
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


      var _apply_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./apply.page */
      24313);

      var routes = [{
        path: '',
        component: _apply_page__WEBPACK_IMPORTED_MODULE_0__.ApplyPage
      }];

      var _ApplyPageRoutingModule = function ApplyPageRoutingModule() {
        _classCallCheck(this, ApplyPageRoutingModule);
      };

      _ApplyPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ApplyPageRoutingModule);
      /***/
    },

    /***/
    67149:
    /*!***************************************!*\
      !*** ./src/app/apply/apply.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApplyPageModule": function ApplyPageModule() {
          return (
            /* binding */
            _ApplyPageModule
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


      var _apply_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./apply-routing.module */
      32471);
      /* harmony import */


      var _apply_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./apply.page */
      24313);

      var _ApplyPageModule = function ApplyPageModule() {
        _classCallCheck(this, ApplyPageModule);
      };

      _ApplyPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _apply_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplyPageRoutingModule],
        declarations: [_apply_page__WEBPACK_IMPORTED_MODULE_1__.ApplyPage]
      })], _ApplyPageModule);
      /***/
    },

    /***/
    24313:
    /*!*************************************!*\
      !*** ./src/app/apply/apply.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApplyPage": function ApplyPage() {
          return (
            /* binding */
            _ApplyPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_apply_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./apply.page.html */
      54710);
      /* harmony import */


      var _apply_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./apply.page.scss */
      13691);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _ApplyPage = /*#__PURE__*/function () {
        function ApplyPage(router, platform, workService) {
          _classCallCheck(this, ApplyPage);

          // this.platform.backButton.subscribeWithPriority(10, () => {
          //   navigator['app'].exitApp();
          // });
          this.router = router;
          this.platform = platform;
          this.workService = workService;
          this.flags = '';
        }

        _createClass(ApplyPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.subscription = this.platform.backButton.subscribe(function () {
              navigator['app'].exitApp();
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goTogettingstart",
          value: function goTogettingstart() {
            this.workService.comingForm = 'sigup';
            this.router.navigate(['gettingstart']);
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.workService.comingForm = 'login';
            this.router.navigate(['gettingstart']);
          }
        }]);

        return ApplyPage;
      }();

      _ApplyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_2__.WorkService
        }];
      };

      _ApplyPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-apply',
        template: _raw_loader_apply_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_apply_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ApplyPage);
      /***/
    },

    /***/
    13691:
    /*!***************************************!*\
      !*** ./src/app/apply/apply.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 30px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFDRiIsImZpbGUiOiJhcHBseS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzJkMmQzOTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTkwcHQ7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    54710:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"--background: #314f40\">\n\n  <img style=\"width: 300px;\n  height: 190px;\" class=\"v-center\" src=\"assets/imgs/logo.svg\">\n\n\n\n  <div style=\"width: 100%;\nposition: absolute;\nbottom: 80px;\ntext-align: center;\">\n\n\n    <button (click)=\"goTogettingstart()\" style=\"margin-bottom: 12px;\" class=\"btn\">Apply</button>\n\n    <br>\n    <label style=\"font-size: 14pt;\">Already a member?</label>\n    <label style=\"font-size: 14pt; margin-left: 10px;\" (click)=\"goToLogin()\">Login</label>\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_apply_apply_module_ts-es5.js.map