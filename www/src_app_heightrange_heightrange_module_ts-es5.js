(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_heightrange_heightrange_module_ts"], {
    /***/
    28875:
    /*!***********************************************************!*\
      !*** ./src/app/heightrange/heightrange-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeightrangePageRoutingModule": function HeightrangePageRoutingModule() {
          return (
            /* binding */
            _HeightrangePageRoutingModule
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


      var _heightrange_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./heightrange.page */
      45483);

      var routes = [{
        path: '',
        component: _heightrange_page__WEBPACK_IMPORTED_MODULE_0__.HeightrangePage
      }];

      var _HeightrangePageRoutingModule = function HeightrangePageRoutingModule() {
        _classCallCheck(this, HeightrangePageRoutingModule);
      };

      _HeightrangePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HeightrangePageRoutingModule);
      /***/
    },

    /***/
    16264:
    /*!***************************************************!*\
      !*** ./src/app/heightrange/heightrange.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeightrangePageModule": function HeightrangePageModule() {
          return (
            /* binding */
            _HeightrangePageModule
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


      var _heightrange_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./heightrange-routing.module */
      28875);
      /* harmony import */


      var _heightrange_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./heightrange.page */
      45483);

      var _HeightrangePageModule = function HeightrangePageModule() {
        _classCallCheck(this, HeightrangePageModule);
      };

      _HeightrangePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _heightrange_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeightrangePageRoutingModule],
        declarations: [_heightrange_page__WEBPACK_IMPORTED_MODULE_1__.HeightrangePage]
      })], _HeightrangePageModule);
      /***/
    },

    /***/
    45483:
    /*!*************************************************!*\
      !*** ./src/app/heightrange/heightrange.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeightrangePage": function HeightrangePage() {
          return (
            /* binding */
            _HeightrangePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_heightrange_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./heightrange.page.html */
      73178);
      /* harmony import */


      var _heightrange_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./heightrange.page.scss */
      5351);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HeightrangePage = /*#__PURE__*/function () {
        function HeightrangePage(location) {
          _classCallCheck(this, HeightrangePage);

          this.location = location;
          this.max_price = 10;
          this.min_price = 40;
          this.price = {
            upper: 18,
            lower: 35
          };
        }

        _createClass(HeightrangePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "onSliderChanged",
          value: function onSliderChanged(event) {
            console.log(event); // console.log(this.price.lower)
            // console.log(this.price.upper);
          }
        }]);

        return HeightrangePage;
      }();

      _HeightrangePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location
        }];
      };

      _HeightrangePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-heightrange',
        template: _raw_loader_heightrange_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_heightrange_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeightrangePage);
      /***/
    },

    /***/
    5351:
    /*!***************************************************!*\
      !*** ./src/app/heightrange/heightrange.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-range {\n  --bar-background: gray;\n  --knob-background: white;\n  --bar-background-active: gray;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlaWdodHJhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFFSiIsImZpbGUiOiJoZWlnaHRyYW5nZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmFuZ2Uge1xyXG4gICAgLS1iYXItYmFja2dyb3VuZDogZ3JheTtcclxuICAgIC0ta25vYi1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiBncmF5O1xyXG59XHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    73178:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heightrange/heightrange.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 20px;\">\n\n    <ion-text>Age Range</ion-text>\n\n    <div style=\"margin-top: 4px;\">\n\n\n      <ion-range style=\"margin-top: 17px;\" (ionChange)=\"onSliderChanged($event)\" id=\"dual-range\" min=\"{{min_price}}\"\n        max=\"{{max_price}}\" [(ngModel)]=\"price\" dual-knobs pin>\n      </ion-range>\n\n    </div>\n\n\n  </div>\n\n\n\n  <ion-row style=\"width: 100%; position: absolute; bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goToProfile()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n\n<script>\n  const dualRange = document.querySelector('#dual-range');\n  dualRange.value = { lower: 33, upper: 60 };\n</script>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_heightrange_heightrange_module_ts-es5.js.map