(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    42580:
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageRoutingModule": function Tab1PageRoutingModule() {
          return (
            /* binding */
            _Tab1PageRoutingModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
      }];

      var _Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      _Tab1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab1PageRoutingModule);
      /***/
    },

    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1-routing.module */
      42580);

      var _Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      _Tab1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
      })], _Tab1PageModule);
      /***/
    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab1.page.html */
      5683);
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page.scss */
      99474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
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
      8981); // import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


      var _Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(router, platform, restService, workService) {
          _classCallCheck(this, Tab1Page);

          // localStorage.setItem('loggedinUserID', '20')
          this.router = router;
          this.platform = platform;
          this.restService = restService;
          this.workService = workService;
          this.userData = '';
          this.myUserName = '';
          this.matches = '';
          this.totalMatches = 0;
          this.divPopupShow = false;
          this.subscription = this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
            navigator['app'].exitApp();
          });

          if (this.platform.is('android')) {
            this.mobile = 'android';
          }

          if (this.platform.is('ios')) {
            this.mobile = 'ios';
          }
        }

        _createClass(Tab1Page, [{
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "goToSubscription",
          value: function goToSubscription() {
            this.router.navigate(['subscription']);
          }
        }, {
          key: "goToHi",
          value: function goToHi() {
            var _this = this;

            // this.router.navigate(['/tabs/match'])
            this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
            console.log('user data ======', this.userData);

            if (this.userData != null) {
              this.myUserName = this.userData.first_name + ' ' + this.userData.last_name;
            } else {
              this.myUserName = 'Friend';
            }

            this.workService.presentLoading();
            var data = JSON.stringify({
              "users_customers_id": localStorage.getItem('loggedinUserID') // "users_customers_id": 15

            });
            console.log('data-----', data);
            this.restService.getBestMatchesAPI(data).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('data-----', res);

              if (res.status == 'success') {
                _this.matches = res.data;
                _this.totalMatches = _this.matches.length;

                if (_this.totalMatches == 0) {
                  _this.router.navigate(['pollnew']);
                } else {
                  _this.router.navigate(['tabs/match']);
                }
              } else {
                _this.router.navigate(['pollnew']);
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.divPopupShow = false;
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            this.divPopupShow = true;
          }
        }, {
          key: "startTalkToChat",
          value: function startTalkToChat() {
            // this.router.navigate(['contactus'])
            // this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))
            // console.log('my user data --', this.userData);
            // this.workService.myUserData = this.userData
            // this.router.navigate(['contactus2'])
            this.router.navigate(['adminchat']); // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            // (function () {
            //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            //   s1.async = true;
            //   s1.src = 'https://embed.tawk.to/61b30a5dc82c976b71c0bdc1/1fmhm108j';
            //   s1.charset = 'UTF-8';
            //   s1.setAttribute('crossorigin', '*');
            //   s0.parentNode.insertBefore(s1, s0);
            // })();
          }
        }]);

        return Tab1Page;
      }();

      _Tab1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _Tab1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab1Page);
      /***/
    },

    /***/
    99474:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.top-margin-head-ios {\n  padding-top: 50px;\n  position: fixed;\n  width: 100%;\n  background: black;\n  z-index: 99999;\n}\n\n.top-margin-head-android {\n  padding-top: 20px;\n  position: fixed;\n  width: 100%;\n  background: black;\n  z-index: 99999;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 30px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 85%;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBQUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUFHTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBRU47QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuLnRvcC1tYXJnaW4taGVhZC1pb3N7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcbi50b3AtbWFyZ2luLWhlYWQtYW5kcm9pZHtcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxOTBwdDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIC52LWNlbnRlci1zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogNTUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC52LWNlbnRlci1zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogODUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    5683:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row>\n    <ion-col style=\"padding-right: 20px;\n    text-align: right;\" class=\"top-margin-head-android\" *ngIf=\"mobile=='android'\">\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px;\">Hi</ion-text> <br>\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px 17px 20px 20px;\n      font-size: 10px;\">Message Our Matchmaker</ion-text>\n    </ion-col>\n\n    <ion-col style=\"padding-right: 20px;\n    text-align: right;\" class=\"top-margin-head-ios\" *ngIf=\"mobile=='ios'\">\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px;\">Hi</ion-text> <br>\n      <ion-text (click)=\"startTalkToChat()\" style=\"margin: 20px 17px 20px 20px;\n      font-size: 10px;\">Message Our Matchmaker</ion-text>\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n  <div class=\"v-center-s\" style=\"padding: 20px;\">\n\n    <!-- <ion-row>\n      <ion-col style=\"text-align: center;padding-bottom: 0px;\">\n        <img style=\"width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\">\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col style=\"text-align: -webkit-center;padding-top: 0px\">\n\n        <!-- <ion-text (click)=\"showPopup()\" style=\"    margin-top: -13px;\n        letter-spacing: 0.8pt;\n        line-height: 24px;\"> LEV is new and growing. <br>\n          You will receive matches as<br>\n          our matchmaker sees fit. <br>\n          Please visit the FAQ's section <br>\n          for our community guidelines.</ion-text> -->\n\n        <ion-text (click)=\"showPopup()\" style=\"    margin-top: -13px;\n          letter-spacing: 0.8pt;\n          line-height: 24px;font-size: 13px;\"> LEV is new and growing. <br>\n          Navigating the sea of seemingly endless<br>\n          options can be overwhelming!<br>\n          LEV is here to help! <br>\n          You will receive matches as our<br>\n          matchmaker sees fit.<br>\n          We???ll help you narrow down <br>\n          the options so you can <br>\n          make the best choice possible.<br>\n        </ion-text>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"    margin-top: 0px;\n      margin-bottom: 0px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToHi()\" style=\"    width: 59%;\n        background: none;\n        margin: 0px 0px 5px 0px;\n        font-size: 16px;\n        border: 2px solid white;\n        border-radius: 48px;\n        height: 48px;\n        padding: 15px 16px 16px 16px;\n        margin-top: 20%;\">Enter &nbsp; LEV</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"text-align: -webkit-center;padding-top:22px;\">\n        <ion-text style=\"letter-spacing: 0.8pt;\n        line-height: 24px;font-size: 12px\">\n          Please visit the FAQ's section <br>\n          for our community guidelines.\n        </ion-text>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n\n\n  <!--Start of Tawk.to Script-->\n  <script type=\"text/javascript\">\n    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();\n    (function () {\n      var s1 = document.createElement(\"script\"), s0 = document.getElementsByTagName(\"script\")[0];\n      s1.async = true;\n      s1.src = 'https://embed.tawk.to/61b30a5dc82c976b71c0bdc1/1fmhm108j';\n      s1.charset = 'UTF-8';\n      s1.setAttribute('crossorigin', '*');\n      s0.parentNode.insertBefore(s1, s0);\n    })();\n  </script>\n  <!--End of Tawk.to Script-->\n\n\n</ion-content>\n\n\n<div *ngIf=\"divPopupShow\" style=\"background: #0c293d;\nheight: max-content;\nwidth: 80%;\nleft: 10%;\ntext-align: center;\ntop: 40%;\nposition: absolute;\npadding: 10px 10px 40px 10px;\">\n\n  <ion-row>\n    <ion-col style=\"padding-top: 10 px; padding-right: 10px; text-align: right\">\n      <img style=\"\n        height: 15px;\n        width: 15px;\n        margin-right: 10px;\n        margin-top: 14px;\n      \" src=\"assets/imgs/close.svg\" (click)=\"hidePopup()\" />\n    </ion-col>\n  </ion-row>\n\n\n  <ion-text> LEV is new and growing. <br>\n    You will receive matches as<br>\n    our matchmaker sees fit. <br>\n    Please visit the FAQ's section <br>\n    for our community guidelines.\n  </ion-text>\n\n\n\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map