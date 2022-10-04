(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_koshar_koshar_module_ts"], {
    /***/
    3162:
    /*!*************************************************!*\
      !*** ./src/app/koshar/koshar-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KosharPageRoutingModule": function KosharPageRoutingModule() {
          return (
            /* binding */
            _KosharPageRoutingModule
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


      var _koshar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./koshar.page */
      74627);

      var routes = [{
        path: '',
        component: _koshar_page__WEBPACK_IMPORTED_MODULE_0__.KosharPage
      }];

      var _KosharPageRoutingModule = function KosharPageRoutingModule() {
        _classCallCheck(this, KosharPageRoutingModule);
      };

      _KosharPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _KosharPageRoutingModule);
      /***/
    },

    /***/
    87601:
    /*!*****************************************!*\
      !*** ./src/app/koshar/koshar.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KosharPageModule": function KosharPageModule() {
          return (
            /* binding */
            _KosharPageModule
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


      var _koshar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./koshar-routing.module */
      3162);
      /* harmony import */


      var _koshar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./koshar.page */
      74627);

      var _KosharPageModule = function KosharPageModule() {
        _classCallCheck(this, KosharPageModule);
      };

      _KosharPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _koshar_routing_module__WEBPACK_IMPORTED_MODULE_0__.KosharPageRoutingModule],
        declarations: [_koshar_page__WEBPACK_IMPORTED_MODULE_1__.KosharPage]
      })], _KosharPageModule);
      /***/
    },

    /***/
    74627:
    /*!***************************************!*\
      !*** ./src/app/koshar/koshar.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KosharPage": function KosharPage() {
          return (
            /* binding */
            _KosharPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_koshar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./koshar.page.html */
      86256);
      /* harmony import */


      var _koshar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./koshar.page.scss */
      35574);
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

      var _KosharPage = /*#__PURE__*/function () {
        function KosharPage(location, platform, workService, restService) {
          _classCallCheck(this, KosharPage);

          this.location = location;
          this.platform = platform;
          this.workService = workService;
          this.restService = restService;
          this.togglePlatformAndroid = false;
        }

        _createClass(KosharPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.platform.is('android')) {
              this.togglePlatformAndroid = true;
            } else {
              this.togglePlatformAndroid = false;
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
              this.kosherID = 0;
            } else {
              this.kosherID = this.workService.userPrefData.user_preferences.system_kosher_id;
              console.log(this.workService.systemData);
            }

            this.kosherArr = this.workService.systemData.kosher;
            console.log('gender---', this.kosherArr);
          }
        }, {
          key: "getNoti",
          value: function getNoti(event, val) {
            var _this = this;

            console.log(event);
            console.log('val----', val);
            this.workService.presentLoading();
            var userID = localStorage.getItem('loggedinUserID');
            var data = JSON.stringify({
              "system_kosher_id": val.system_kosher_id
            });
            console.log('age====>>', data);
            this.restService.updatePrefAPI('update_koshers/', userID, data).subscribe(function (res) {
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

        return KosharPage;
      }();

      _KosharPage.ctorParameters = function () {
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

      _KosharPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-koshar',
        template: _raw_loader_koshar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_koshar_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KosharPage);
      /***/
    },

    /***/
    35574:
    /*!*****************************************!*\
      !*** ./src/app/koshar/koshar.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvc2hhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKIiwiZmlsZSI6Imtvc2hhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    86256:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/koshar/koshar.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-text style=\"font-size: 15pt;\">Kosher</ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div class=\"margin-top-fixed\" style=\"padding: 0px 20px 20px 20px;\">\n\n    <ion-row *ngFor=\"let kosh of kosherArr\">\n      <ion-col size=\"9\" style=\"padding-top: 13px;\">\n\n        <p>{{kosh.name}}</p>\n\n      </ion-col>\n\n      <ion-col size=\"3\" style=\"text-align: right;\">\n        <ion-toggle *ngIf=\"kosh.system_kosher_id != kosherID\" (ionChange)=\"getNoti($event, kosh)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\"></ion-toggle>\n        <ion-toggle *ngIf=\"kosh.system_kosher_id == kosherID\" (ionChange)=\"getNoti($event, kosh)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\" checked>\n        </ion-toggle>\n      </ion-col>\n    </ion-row>\n\n\n\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_koshar_koshar_module_ts-es5.js.map