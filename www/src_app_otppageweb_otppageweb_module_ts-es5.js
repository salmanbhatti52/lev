(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_otppageweb_otppageweb_module_ts"], {
    /***/
    977:
    /*!*********************************************************!*\
      !*** ./src/app/otppageweb/otppageweb-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtppagewebPageRoutingModule": function OtppagewebPageRoutingModule() {
          return (
            /* binding */
            _OtppagewebPageRoutingModule
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


      var _otppageweb_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otppageweb.page */
      46728);

      var routes = [{
        path: '',
        component: _otppageweb_page__WEBPACK_IMPORTED_MODULE_0__.OtppagewebPage
      }];

      var _OtppagewebPageRoutingModule = function OtppagewebPageRoutingModule() {
        _classCallCheck(this, OtppagewebPageRoutingModule);
      };

      _OtppagewebPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtppagewebPageRoutingModule);
      /***/
    },

    /***/
    85137:
    /*!*************************************************!*\
      !*** ./src/app/otppageweb/otppageweb.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtppagewebPageModule": function OtppagewebPageModule() {
          return (
            /* binding */
            _OtppagewebPageModule
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


      var _otppageweb_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otppageweb-routing.module */
      977);
      /* harmony import */


      var _otppageweb_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otppageweb.page */
      46728);

      var _OtppagewebPageModule = function OtppagewebPageModule() {
        _classCallCheck(this, OtppagewebPageModule);
      };

      _OtppagewebPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otppageweb_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtppagewebPageRoutingModule],
        declarations: [_otppageweb_page__WEBPACK_IMPORTED_MODULE_1__.OtppagewebPage]
      })], _OtppagewebPageModule);
      /***/
    },

    /***/
    46728:
    /*!***********************************************!*\
      !*** ./src/app/otppageweb/otppageweb.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtppagewebPage": function OtppagewebPage() {
          return (
            /* binding */
            _OtppagewebPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_otppageweb_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otppageweb.page.html */
      22086);
      /* harmony import */


      var _otppageweb_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otppageweb.page.scss */
      55866);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../work.service */
      8981);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _OtppagewebPage = /*#__PURE__*/function () {
        function OtppagewebPage(workService, dom, restService, navCtrl, router, location) {
          _classCallCheck(this, OtppagewebPage);

          this.workService = workService;
          this.dom = dom;
          this.restService = restService;
          this.navCtrl = navCtrl;
          this.router = router;
          this.location = location;
          this.otpUrl = '';
          this.userMobileNum = '';
          this.userData = '';
          this.otpUrl = this.dom.bypassSecurityTrustResourceUrl("https://thelevapp.co/backoffice/otp?phone=" + encodeURIComponent(this.workService.userMobileNum));
          this.userMobileNum = encodeURIComponent(this.workService.userMobileNum);
          console.log('urlllllll', this.userMobileNum);
          console.log('otpUrl', this.otpUrl);
        }

        _createClass(OtppagewebPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            // this.location.back()
            this.router.navigate(['/gettingstart'], {
              replaceUrl: true
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.autoSaveInterval = setInterval(function () {
              _this.nextCheckUserStatus();
            }, 2000);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearInterval(this.autoSaveInterval);
            console.log("clear");
          }
        }, {
          key: "checkNumberStatus",
          value: function checkNumberStatus() {
            console.log('okkk');
          }
        }, {
          key: "nextCheckUserStatus",
          value: function nextCheckUserStatus() {
            var _this2 = this;

            var ss = JSON.stringify({
              'phone': this.workService.userMobileNum
            });
            this.restService.check_phone_authAPI(ss).subscribe(function (res) {
              console.log('ress--->', res);

              if (res.status == 'success') {
                _this2.workService.presentToast(res.message);

                if (_this2.workService.comingForm == 'sigup') {
                  _this2.router.navigate(['profile1']);
                }

                if (_this2.workService.comingForm == 'login') {
                  _this2.loginUser();
                }
              } else {// this.workService.presentToast(res.message)
              }
            }, function (err) {
              _this2.workService.hideLoading();

              _this2.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "loginUser",
          value: function loginUser() {
            var _this3 = this;

            this.workService.data1 = "+92";
            this.workService.data2 = {
              data: "9632"
            };
            console.log('oneSignaldeviceID', localStorage.getItem("oneSignaldeviceID"));
            var oneSignalID = localStorage.getItem("oneSignaldeviceID");

            if (oneSignalID == null || oneSignalID == 'null') {
              oneSignalID = 'not available';
            }

            localStorage.setItem('phone', this.workService.userMobileNum);
            var stringy = JSON.stringify({
              'contact_number': localStorage.getItem('simpleNumberToSendourDB'),
              'onesignal_id': oneSignalID
            });
            console.log(stringy);
            this.workService.presentLoading();
            this.restService.loginAPI(stringy).subscribe(function (res) {
              _this3.workService.hideLoading();

              console.log(res);

              if (res.status == "success") {
                if (res.data.status == "Active") {
                  localStorage.setItem('login', 'isLogin');
                  localStorage.setItem('loggedinUserData', JSON.stringify(res.data));
                  localStorage.setItem('loggedinUserID', res.data.users_customers_id);
                  localStorage.setItem('remainingSMS', res.data.allowed_sms);
                  localStorage.setItem('packages_id', res.data.packages_id);
                  console.log('packages_id----', res.data.packages_id); //packages_id will be 1 or 0//////

                  if (res.data.packages_id.toString() == '1') {
                    _this3.navCtrl.navigateRoot(['subscriptionlogin'], {
                      replaceUrl: true
                    });
                  } else {
                    _this3.navCtrl.navigateRoot(['/tabs/tab1'], {
                      replaceUrl: true
                    });
                  }
                } else if (res.data.status == "Pending") {
                  _this3.workService.presentToast('Your application is under review by the admin.');
                } else if (res.data.status == "Inactive") {
                  _this3.workService.presentToast('Your login is temporary disabled. Please contact our team for further information.');
                } else if (res.data.status == "Rejected") {
                  _this3.workService.presentToast('Your application is rejected by the admin. You can try applying again.');
                } else if (res.data.status == "Deleted") {
                  _this3.workService.presentToast('Your application is deleted. Please contact our team for further information.');
                } else {
                  _this3.workService.presentToast(res.message);
                }
              } else {
                _this3.workService.presentToast(res.message);
              }
            }, function (err) {
              _this3.workService.hideLoading();

              _this3.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "goToProfile1",
          value: function goToProfile1() {
            this.workService.hideLoading();
            console.log('nnnnnnnnnnnnnnnnnnnnnnn---', this.workService.comingForm);

            if (this.workService.comingForm == 'sigup') {
              this.router.navigate(['profile1']);
            }

            if (this.workService.comingForm == 'login') {
              localStorage.setItem('login', 'isLogin');
              this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
              console.log('usr packageee--->>>>>', this.userData.packages_id);
              var sbID = this.userData.packages_id;

              if (sbID.toString() == '0') {
                this.navCtrl.navigateRoot(['subscription'], {
                  replaceUrl: true
                });
              } else {
                this.navCtrl.navigateRoot(['/tabs/tab1'], {
                  replaceUrl: true
                });
              }
            }
          }
        }]);

        return OtppagewebPage;
      }();

      _OtppagewebPage.ctorParameters = function () {
        return [{
          type: _work_service__WEBPACK_IMPORTED_MODULE_2__.WorkService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }];
      };

      _OtppagewebPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-otppageweb',
        template: _raw_loader_otppageweb_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otppageweb_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtppagewebPage);
      /***/
    },

    /***/
    55866:
    /*!*************************************************!*\
      !*** ./src/app/otppageweb/otppageweb.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n  padding-right: 30px;\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHBhZ2V3ZWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoib3RwcGFnZXdlYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    22086:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otppageweb/otppageweb.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <div>\n\n    <ion-row class=\"top-margin-head-40\">\n      <ion-col size=\"3\" style=\"padding-left: 10px;\">\n        <img (click)=\"back()\" style=\"width: 20px;\n      height: 20px;\" src=\"assets/imgs/left.svg\">\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n       \n      </ion-col>\n      <ion-col size=\"3\">\n\n      </ion-col>\n    </ion-row>\n\n    <iframe style=\"     top: 70px;   width: 100%;\n        height: 90%;\n        position: absolute;\n        overflow: hidden;\" class='webPage' name=\"samplePage\" allowfullscreen frameborder=\"0\"\n      scrolling=\"auto | yes | no\" [src]=\"otpUrl\">\n    </iframe>\n\n\n  </div>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_otppageweb_otppageweb_module_ts-es5.js.map