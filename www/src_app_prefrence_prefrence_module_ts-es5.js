(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_prefrence_prefrence_module_ts"], {
    /***/
    57397:
    /*!*******************************************************!*\
      !*** ./src/app/prefrence/prefrence-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrefrencePageRoutingModule": function PrefrencePageRoutingModule() {
          return (
            /* binding */
            _PrefrencePageRoutingModule
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


      var _prefrence_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prefrence.page */
      67060);

      var routes = [{
        path: '',
        component: _prefrence_page__WEBPACK_IMPORTED_MODULE_0__.PrefrencePage
      }];

      var _PrefrencePageRoutingModule = function PrefrencePageRoutingModule() {
        _classCallCheck(this, PrefrencePageRoutingModule);
      };

      _PrefrencePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrefrencePageRoutingModule);
      /***/
    },

    /***/
    77475:
    /*!***********************************************!*\
      !*** ./src/app/prefrence/prefrence.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrefrencePageModule": function PrefrencePageModule() {
          return (
            /* binding */
            _PrefrencePageModule
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


      var _prefrence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prefrence-routing.module */
      57397);
      /* harmony import */


      var _prefrence_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prefrence.page */
      67060);

      var _PrefrencePageModule = function PrefrencePageModule() {
        _classCallCheck(this, PrefrencePageModule);
      };

      _PrefrencePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _prefrence_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrefrencePageRoutingModule],
        declarations: [_prefrence_page__WEBPACK_IMPORTED_MODULE_1__.PrefrencePage]
      })], _PrefrencePageModule);
      /***/
    },

    /***/
    67060:
    /*!*********************************************!*\
      !*** ./src/app/prefrence/prefrence.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrefrencePage": function PrefrencePage() {
          return (
            /* binding */
            _PrefrencePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prefrence_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prefrence.page.html */
      80450);
      /* harmony import */


      var _prefrence_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prefrence.page.scss */
      70210);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _PrefrencePage = /*#__PURE__*/function () {
        function PrefrencePage(location, router, restService, workService) {
          _classCallCheck(this, PrefrencePage);

          this.location = location;
          this.router = router;
          this.restService = restService;
          this.workService = workService;
        }

        _createClass(PrefrencePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.workService.presentLoading();
            var stringy = JSON.stringify({});
            var userID = localStorage.getItem('loggedinUserID');
            console.log('userPref--->userID', userID);
            this.restService.get_user_preferencesAPI(userID).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('userPref--->', res);

              if (res.status == "success") {
                _this.workService.userPrefData = res.data;
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
            var stringy = JSON.stringify({});
            var userID = localStorage.getItem('loggedinUserID');
            this.restService.getSystemDataAPI(userID).subscribe(function (resPref) {
              _this.workService.hideLoading();

              if (resPref.status == "success") {
                _this.workService.systemData = resPref.data;
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "goToInterestedIn",
          value: function goToInterestedIn() {
            this.router.navigate(['interestedinpref']);
          }
        }, {
          key: "goToMaritalStatus",
          value: function goToMaritalStatus() {
            this.router.navigate(['maritalstatuspref']);
          }
        }, {
          key: "goToAge",
          value: function goToAge() {
            this.router.navigate(['agerange']);
          }
        }, {
          key: "goToReligion",
          value: function goToReligion() {
            this.router.navigate(['religionpref']);
          }
        }, {
          key: "goToKosher",
          value: function goToKosher() {
            this.router.navigate(['koshar']);
          }
        }, {
          key: "goToEthnicity",
          value: function goToEthnicity() {
            this.router.navigate(['ethnicity']);
          }
        }]);

        return PrefrencePage;
      }();

      _PrefrencePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _PrefrencePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-prefrence',
        template: _raw_loader_prefrence_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prefrence_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrefrencePage);
      /***/
    },

    /***/
    70210:
    /*!***********************************************!*\
      !*** ./src/app/prefrence/prefrence.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZyZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKIiwiZmlsZSI6InByZWZyZW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    80450:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prefrence/prefrence.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Preference</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding: 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row (click)=\"goToInterestedIn()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Interested In</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n                  width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"       margin-bottom: 12px; margin-top: 12px;\n    width: 100%;\n    border-bottom: 1px solid white;\">\n\n    <ion-row (click)=\"goToMaritalStatus()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Martial Status</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n              width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"    margin-bottom: 12px; margin-top: 12px;\nwidth: 100%;\nborder-bottom: 1px solid white;\">\n\n    <ion-row (click)=\"goToAge()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Age Range</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n              width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"    margin-bottom: 12px; margin-top: 12px;\nwidth: 100%;\nborder-bottom: 1px solid white;\">\n\n\n\n    <ion-row (click)=\"goToReligion()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Religion</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n                  width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"    margin-bottom: 12px; margin-top: 12px;\n    width: 100%;\n    border-bottom: 1px solid white;\">\n\n\n\n\n\n    <ion-row (click)=\"goToKosher()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Kosher</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n              width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n    <hr style=\"    margin-bottom: 12px; margin-top: 12px;\nwidth: 100%;\nborder-bottom: 1px solid white;\">\n\n\n\n\n\n    <ion-row (click)=\"goToEthnicity()\">\n      <ion-col size=\"8\">\n        <p style=\"font-size:10pt;\">Ethnicity</p>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <img style=\"height: 15px;\n              width: 15px;\" src=\"assets/imgs/right.svg\">\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n  </div>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_prefrence_prefrence_module_ts-es5.js.map