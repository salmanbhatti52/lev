(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_agerange_agerange_module_ts"], {
    /***/
    19925:
    /*!*****************************************************!*\
      !*** ./src/app/agerange/agerange-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgerangePageRoutingModule": function AgerangePageRoutingModule() {
          return (
            /* binding */
            _AgerangePageRoutingModule
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


      var _agerange_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./agerange.page */
      34315);

      var routes = [{
        path: '',
        component: _agerange_page__WEBPACK_IMPORTED_MODULE_0__.AgerangePage
      }];

      var _AgerangePageRoutingModule = function AgerangePageRoutingModule() {
        _classCallCheck(this, AgerangePageRoutingModule);
      };

      _AgerangePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AgerangePageRoutingModule);
      /***/
    },

    /***/
    89190:
    /*!*********************************************!*\
      !*** ./src/app/agerange/agerange.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgerangePageModule": function AgerangePageModule() {
          return (
            /* binding */
            _AgerangePageModule
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


      var _agerange_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./agerange-routing.module */
      19925);
      /* harmony import */


      var _agerange_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./agerange.page */
      34315);

      var _AgerangePageModule = function AgerangePageModule() {
        _classCallCheck(this, AgerangePageModule);
      };

      _AgerangePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _agerange_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgerangePageRoutingModule],
        declarations: [_agerange_page__WEBPACK_IMPORTED_MODULE_1__.AgerangePage]
      })], _AgerangePageModule);
      /***/
    },

    /***/
    34315:
    /*!*******************************************!*\
      !*** ./src/app/agerange/agerange.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgerangePage": function AgerangePage() {
          return (
            /* binding */
            _AgerangePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_agerange_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./agerange.page.html */
      19337);
      /* harmony import */


      var _agerange_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./agerange.page.scss */
      28394);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _AgerangePage = /*#__PURE__*/function () {
        function AgerangePage(location, platform, workService, restService) {
          _classCallCheck(this, AgerangePage);

          this.location = location;
          this.platform = platform;
          this.workService = workService;
          this.restService = restService;
          this.max_price = 10;
          this.min_price = 40;
          this.price = {
            upper: 35,
            lower: 10
          };
          this.lowerAge = '';
          this.upperAge = '';
          this.system_age_range_start = 20;
          this.system_age_range_end = 30;
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          });
        }

        _createClass(AgerangePage, [{
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
            // console.log(event)
            console.log(this.price.lower);
            console.log(this.price.upper);
            this.system_age_range_start = this.price.lower;
            this.system_age_range_end = this.price.upper;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
              this.system_age_range_start = 20;
              this.system_age_range_end = 30;
            } else {
              this.system_age_range_end = this.workService.userPrefData.user_preferences.age_range_end;
              this.system_age_range_start = this.workService.userPrefData.user_preferences.age_range_start;
            }

            console.log('userDayaPred-->', this.workService.userPrefData);
            this.price = {
              upper: this.system_age_range_end,
              lower: this.system_age_range_start
            };
            console.log('price---->', this.price);
          }
        }, {
          key: "saveAgeRange",
          value: function saveAgeRange() {
            var _this = this;

            this.workService.presentLoading();
            var userID = localStorage.getItem('loggedinUserID');
            var data = JSON.stringify({
              "system_age_range_start": this.system_age_range_start,
              "system_age_range_end": this.system_age_range_end
            });
            console.log('age====>>', data);
            this.restService.updatePrefAPI('update_age_range/', userID, data).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('resss======', res);

              if (res.status == 'success') {
                _this.workService.presentToast(res.message);

                _this.location.back();
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }]);

        return AgerangePage;
      }();

      _AgerangePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _AgerangePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-agerange',
        template: _raw_loader_agerange_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agerange_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AgerangePage);
      /***/
    },

    /***/
    28394:
    /*!*********************************************!*\
      !*** ./src/app/agerange/agerange.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-range {\n  --bar-background: gray;\n  --knob-background: white;\n  --bar-background-active: gray;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZXJhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUdBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJhZ2VyYW5nZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcmFuZ2Uge1xyXG4gICAgLS1iYXItYmFja2dyb3VuZDogZ3JheTtcclxuICAgIC0ta25vYi1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiBncmF5O1xyXG59XHJcblxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    19337:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agerange/agerange.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n\r\n\r\n  <ion-row class=\"top-margin-head-40\">\r\n    <ion-col size=\"2\" style=\"text-align: center;\">\r\n      <img (click)=\"goBack()\" style=\"height: 20px;\r\n        width: 20px;\" src=\"assets/imgs/left.svg\">\r\n    </ion-col>\r\n    <ion-col size=\"8\" style=\"text-align: center;\">\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\r\n\r\n    <ion-text>Age Range</ion-text>\r\n\r\n    <div style=\"margin-top: 4px;\">\r\n\r\n\r\n      <ion-row>\r\n        <ion-col style=\"text-align: center;\">\r\n          <ion-text>{{system_age_range_start}} - {{system_age_range_end}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n\r\n      <ion-range min=\"15\" max=\"50\" style=\"margin-top: -8px;\" (ionChange)=\"onSliderChanged($event)\" id=\"dual-range\"\r\n        [(ngModel)]=\"price\" dual-knobs pin>\r\n      </ion-range>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <ion-row style=\"width: 100%; padding: 20px\">\r\n    <ion-col style=\"text-align: center\">\r\n      <button (click)=\"saveAgeRange()\" class=\"btn\">Save</button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n\r\n<script>\r\n  const dualRange = document.querySelector('#dual-range');\r\n  dualRange.value = { lower: 33, upper: 60 };\r\n</script>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_agerange_agerange_module_ts-es5.js.map