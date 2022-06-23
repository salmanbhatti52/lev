(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_notification_notification_module_ts"], {
    /***/
    89753:
    /*!*************************************************************!*\
      !*** ./src/app/notification/notification-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageRoutingModule": function NotificationPageRoutingModule() {
          return (
            /* binding */
            _NotificationPageRoutingModule
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


      var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification.page */
      13320);

      var routes = [{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
      }];

      var _NotificationPageRoutingModule = function NotificationPageRoutingModule() {
        _classCallCheck(this, NotificationPageRoutingModule);
      };

      _NotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotificationPageRoutingModule);
      /***/
    },

    /***/
    22154:
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageModule": function NotificationPageModule() {
          return (
            /* binding */
            _NotificationPageModule
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


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification-routing.module */
      89753);
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page */
      13320);

      var _NotificationPageModule = function NotificationPageModule() {
        _classCallCheck(this, NotificationPageModule);
      };

      _NotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
      })], _NotificationPageModule);
      /***/
    },

    /***/
    13320:
    /*!***************************************************!*\
      !*** ./src/app/notification/notification.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPage": function NotificationPage() {
          return (
            /* binding */
            _NotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notification.page.html */
      89034);
      /* harmony import */


      var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page.scss */
      31435);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _NotificationPage = /*#__PURE__*/function () {
        function NotificationPage(location, workService, restService) {
          _classCallCheck(this, NotificationPage);

          this.location = location;
          this.workService = workService;
          this.restService = restService;
          this.notiArray = '';
          this.noNotiAvailable = false;
        }

        _createClass(NotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.workService.presentLoading();
            var stringy = JSON.stringify({
              "users_customers_id": localStorage.getItem('loggedinUserID')
            });
            this.restService.get_notifications_listAPI(stringy).subscribe(function (res) {
              console.log('noti====>', res);

              _this.workService.hideLoading();

              if (res.status == 'success') {
                _this.noNotiAvailable = false;
                _this.notiArray = res.data;
              } else {
                _this.noNotiAvailable = true;
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return NotificationPage;
      }();

      _NotificationPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _NotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotificationPage);
      /***/
    },

    /***/
    31435:
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    89034:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-text style=\"font-size: 15pt;\">Notifications</ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row *ngIf=\"noNotiAvailable\">\n    <ion-col>\n      <p style=\"font-size: 10pt; text-align: center;\">No Notifications.</p>\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\"> \n\n    <ion-row *ngFor=\"let noti of notiArray\" style=\"border-bottom: 1.5px solid white;\n    padding-bottom: 10px;\n    padding-top: 10px;\">\n      <ion-col size=\"8\">\n\n        <ion-text style=\"font-size: 8pt;\">{{noti.content}}</ion-text>\n\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: right;\">\n        <ion-text style=\"font-size: 8pt;\">{{noti.added_date}}</ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_notification_notification_module_ts-es5.js.map