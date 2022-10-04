(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_interestedinpref_interestedinpref_module_ts"], {
    /***/
    28379:
    /*!*********************************************************************!*\
      !*** ./src/app/interestedinpref/interestedinpref-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InterestedinprefPageRoutingModule": function InterestedinprefPageRoutingModule() {
          return (
            /* binding */
            _InterestedinprefPageRoutingModule
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


      var _interestedinpref_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./interestedinpref.page */
      6392);

      var routes = [{
        path: '',
        component: _interestedinpref_page__WEBPACK_IMPORTED_MODULE_0__.InterestedinprefPage
      }];

      var _InterestedinprefPageRoutingModule = function InterestedinprefPageRoutingModule() {
        _classCallCheck(this, InterestedinprefPageRoutingModule);
      };

      _InterestedinprefPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InterestedinprefPageRoutingModule);
      /***/
    },

    /***/
    25082:
    /*!*************************************************************!*\
      !*** ./src/app/interestedinpref/interestedinpref.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InterestedinprefPageModule": function InterestedinprefPageModule() {
          return (
            /* binding */
            _InterestedinprefPageModule
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


      var _interestedinpref_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./interestedinpref-routing.module */
      28379);
      /* harmony import */


      var _interestedinpref_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./interestedinpref.page */
      6392);

      var _InterestedinprefPageModule = function InterestedinprefPageModule() {
        _classCallCheck(this, InterestedinprefPageModule);
      };

      _InterestedinprefPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _interestedinpref_routing_module__WEBPACK_IMPORTED_MODULE_0__.InterestedinprefPageRoutingModule],
        declarations: [_interestedinpref_page__WEBPACK_IMPORTED_MODULE_1__.InterestedinprefPage]
      })], _InterestedinprefPageModule);
      /***/
    },

    /***/
    6392:
    /*!***********************************************************!*\
      !*** ./src/app/interestedinpref/interestedinpref.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InterestedinprefPage": function InterestedinprefPage() {
          return (
            /* binding */
            _InterestedinprefPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_interestedinpref_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./interestedinpref.page.html */
      59036);
      /* harmony import */


      var _interestedinpref_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./interestedinpref.page.scss */
      28938);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _InterestedinprefPage = /*#__PURE__*/function () {
        function InterestedinprefPage(location, signupService, workService, restService) {
          _classCallCheck(this, InterestedinprefPage);

          this.location = location;
          this.signupService = signupService;
          this.workService = workService;
          this.restService = restService;
          this.lookingForID = '';
          this.LookingForArr = '';
          this.selectedLookingForID = '';
        }

        _createClass(InterestedinprefPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('userDayaPred-->', this.workService.userPrefData);

            if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
              this.lookingForID = 0;
            } else {
              this.lookingForID = this.workService.userPrefData.user_preferences.system_genders_id;
            }

            this.LookingForArr = this.workService.systemData.system_looking_for;
            console.log('gender---', this.lookingForID);
          }
        }, {
          key: "funClick",
          value: function funClick(val) {
            var _this = this;

            this.workService.presentLoading();
            console.log(val);
            var userID = localStorage.getItem('loggedinUserID');
            var data = JSON.stringify({
              "system_genders_id": val.system_looking_for_id
            });
            this.restService.updatePrefAPI('update_genders/', userID, data).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('resss======', res);

              if (res.status == 'success') {
                _this.workService.presentToast(res.message);

                _this.location.back();
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            }); // 
          }
        }]);

        return InterestedinprefPage;
      }();

      _InterestedinprefPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _InterestedinprefPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-interestedinpref',
        template: _raw_loader_interestedinpref_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_interestedinpref_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InterestedinprefPage);
      /***/
    },

    /***/
    28938:
    /*!*************************************************************!*\
      !*** ./src/app/interestedinpref/interestedinpref.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".divbg {\n  margin-left: 10px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  margin-left: 10px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZXN0ZWRpbnByZWYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImludGVyZXN0ZWRpbnByZWYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmJnIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXZiZzphY3RpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3RpdmVkaXZiZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMXB0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
      /***/
    },

    /***/
    59036:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interestedinpref/interestedinpref.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\n\n    <ion-text>What Are You Looking For?</ion-text>\n\n    <!-- <div style=\"margin-top: 28px;\">\n\n      <ion-text class=\"divbg\" (click)=\"funClick('Dating')\">Dating</ion-text>\n\n      <ion-text class=\"divbg\" style=\"margin-left: 20px;\" (click)=\"funClick('Marriage')\">Marriage</ion-text>\n\n\n\n    </div> -->\n\n\n    <div style=\"margin-top: 28px;\">\n\n      <ion-text *ngFor=\"let look of LookingForArr\" class=\"divbg\" (click)=\"funClick(look)\"\n        [class.activedivbg]=\"look.system_looking_for_id == lookingForID\">{{look.name}}</ion-text>\n\n    </div>\n\n\n    <!-- \n    <div style=\"margin-top: 40px;\">\n\n\n      <ion-text class=\"divbg\" (click)=\"funClick('Not Specific')\">Not Specific</ion-text>\n\n\n\n    </div> -->\n\n\n\n\n\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_interestedinpref_interestedinpref_module_ts-es5.js.map