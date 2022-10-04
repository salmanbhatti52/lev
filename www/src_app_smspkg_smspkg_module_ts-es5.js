(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_smspkg_smspkg_module_ts"], {
    /***/
    8003:
    /*!*************************************************!*\
      !*** ./src/app/smspkg/smspkg-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmspkgPageRoutingModule": function SmspkgPageRoutingModule() {
          return (
            /* binding */
            _SmspkgPageRoutingModule
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


      var _smspkg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./smspkg.page */
      64485);

      var routes = [{
        path: '',
        component: _smspkg_page__WEBPACK_IMPORTED_MODULE_0__.SmspkgPage
      }];

      var _SmspkgPageRoutingModule = function SmspkgPageRoutingModule() {
        _classCallCheck(this, SmspkgPageRoutingModule);
      };

      _SmspkgPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SmspkgPageRoutingModule);
      /***/
    },

    /***/
    90833:
    /*!*****************************************!*\
      !*** ./src/app/smspkg/smspkg.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmspkgPageModule": function SmspkgPageModule() {
          return (
            /* binding */
            _SmspkgPageModule
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


      var _smspkg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./smspkg-routing.module */
      8003);
      /* harmony import */


      var _smspkg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./smspkg.page */
      64485);

      var _SmspkgPageModule = function SmspkgPageModule() {
        _classCallCheck(this, SmspkgPageModule);
      };

      _SmspkgPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _smspkg_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmspkgPageRoutingModule],
        declarations: [_smspkg_page__WEBPACK_IMPORTED_MODULE_1__.SmspkgPage]
      })], _SmspkgPageModule);
      /***/
    },

    /***/
    64485:
    /*!***************************************!*\
      !*** ./src/app/smspkg/smspkg.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmspkgPage": function SmspkgPage() {
          return (
            /* binding */
            _SmspkgPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_smspkg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./smspkg.page.html */
      86755);
      /* harmony import */


      var _smspkg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./smspkg.page.scss */
      52909);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      /* harmony import */


      var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase/ngx */
      11963);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476); ////////////////////////


      var _SmspkgPage = /*#__PURE__*/function () {
        function SmspkgPage(location, router, restService, workService, rest, navCtrl, platform, toastController, iap) {
          _classCallCheck(this, SmspkgPage);

          this.location = location;
          this.router = router;
          this.restService = restService;
          this.workService = workService;
          this.rest = rest;
          this.navCtrl = navCtrl;
          this.platform = platform;
          this.toastController = toastController;
          this.iap = iap;
          this.subArray = ''; /////////////////////////////////

          this.europe = false;
          this.subscriptionDataArray = [];
          this.subscriptionChoosed = '';
          this.subscriptionID1 = '';
          this.subscriptionID2 = '';
          this.subscriptionID3 = '';
          this.selectedSubscritionID = '';
          this.subscriptionIdToSend = '';
          this.copun = '';
          this.copunStatus = false;
          this.userData = '';
          this.noSubScription = false;
          this.sbID = ''; //////sub data

          this.amount = '';
          this.android_product_id = '';
          this.duration = '';
          this.duration_type = '';
          this.ios_product_id = '';
          this.name = '';
          this.packages_id = '';
          this.status = '';
          this.platformSUB = '';
          this.allowed_sms = '';
          this.packages_sms_id = '';
        }

        _createClass(SmspkgPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.workService.presentLoading();
            var stringy = JSON.stringify({});
            this.restService.getSystemDataAPI(stringy).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('incomming data----', res);

              if (res.status == "success") {
                console.log(res.data);
                console.log('user dataaaa', res.data.packages_sms);
                _this.subArray = res.data.packages_sms;
                _this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
                console.log('usr packageee--->>>>>', _this.userData);
                _this.sbID = _this.userData.packages_id;

                if (_this.sbID.toString() == '0' || _this.sbID.toString() == 'null') {
                  _this.noSubScription = true;
                } else {
                  _this.noSubScription = false;
                }

                _this.platform.ready().then(function () {
                  if (_this.platform.is('ios')) {
                    console.log('array----0 ios_product_id', _this.subArray[0].ios_product_id);
                    console.log('array----1 ios_product_id', _this.subArray[1].ios_product_id);
                    console.log('array----2 ios_product_id', _this.subArray[2].ios_product_id);
                    _this.subscriptionID1 = _this.subArray[0].ios_product_id;
                    _this.subscriptionID2 = _this.subArray[1].ios_product_id;
                    _this.subscriptionID3 = _this.subArray[2].ios_product_id;
                  } else if (_this.platform.is('android')) {
                    console.log('array----0 android_product_id', _this.subArray[0].android_product_id);
                    console.log('array----1 android_product_id', _this.subArray[1].android_product_id);
                    console.log('array----2 android_product_id', _this.subArray[2].android_product_id);
                    _this.subscriptionID1 = _this.subArray[0].android_product_id;
                    _this.subscriptionID2 = _this.subArray[1].android_product_id;
                    _this.subscriptionID3 = _this.subArray[2].android_product_id;
                  }

                  _this.iap.getProducts([_this.subscriptionID1, _this.subscriptionID2, _this.subscriptionID3]).then(function (products) {
                    console.log('active product getProducts--->', products);
                  })["catch"](function (err) {
                    console.log('error billing---getProducts>', err);
                  });
                });
              }
            });
          }
        }, {
          key: "purchaseSubscription",
          value: function purchaseSubscription() {
            var _this2 = this;

            console.log(this.selectedSubscritionID, 'want to purchase'); // alert(this.selectedSubscritionID + 'want to purchase')

            if (this.platform.is('android')) {
              this.iap.subscribe(this.selectedSubscritionID).then(function (data) {
                console.log(data);
                _this2.userSubscriptionRes = data;
                return _this2.iap.consume(data.productType, data.receipt, data.signature).then(function (res) {
                  _this2.successSubscri();

                  _this2.transactionResponse = res; // alert('transactionResponse' + this.transactionResponse)
                }, function (err) {
                  console.log(err);

                  _this2.workService.presentToast('Some Error Occured'); // alert('Some Error Occured' + err)


                  alert('Some Error Occured');
                });
              })["catch"](function (err) {
                console.log(err, 'error');

                _this2.workService.presentToast('Some Error Occured'); // alert('Some Error Occured' + err)


                alert('Some Error Occured');
              });
            }

            if (this.platform.is('ios')) {
              this.iap.buy(this.selectedSubscritionID).then(function (data) {
                console.log(data);
                _this2.userSubscriptionRes = data;
                return _this2.iap.consume(data.productType, data.receipt, data.signature).then(function (res) {
                  console.log(data);

                  _this2.successSubscri();

                  console.log(res, 'purchased'); // alert('transactionResponse ios' + this.transactionResponse)
                });
              })["catch"](function (err) {
                console.log(err, 'error');

                _this2.workService.presentToast('Some Error Occured'); // alert('Some Error Occured' + err)


                alert('Some Error Occured');
              });
            }
          }
        }, {
          key: "successSubscri",
          value: function successSubscri() {
            var _this3 = this;

            var subData = JSON.stringify({
              "users_customers_id": localStorage.getItem('loggedinUserID'),
              "transaction_id": this.userSubscriptionRes.transactionId,
              "device_id": "NotAvaiable",
              "packages_sms_id": this.packages_sms_id,
              "product_id": this.subscriptionIdToSend,
              "amount": this.amount,
              "allowed_sms": this.allowed_sms,
              "product_name": this.name,
              "platform": this.platformSUB
            });
            console.log('subData to send---->>>', subData);
            this.workService.presentLoading();
            this.restService.create_sms_transactionsAPI(subData).subscribe(function (data) {
              console.log(data);

              _this3.workService.hideLoading();

              if (data.status == 'success') {
                _this3.router.navigate(['tabs/tab1'], {
                  replaceUrl: true
                });
              } else {
                _this3.workService.presentToast('Some Error Occuresd.');
              }
            }, function (err) {
              _this3.workService.hideLoading();

              _this3.workService.presentToast('Network error occured');
            });
            this.workService.presentToast('Purchase Successful');
            setTimeout(function () {// if (this.subscriptionIdToSend === '1') {
              //   this.workService.presentToast(
              //     this.lang.showLanguage.subscription.purchasePackage +
              //     this.lang.showLanguage.subscription.plans[0].title
              //   );
              // }
              // if (this.subscriptionIdToSend === '2') {
              //   this.presentToast(
              //     this.lang.showLanguage.subscription.purchasePackage +
              //     this.lang.showLanguage.subscription.plans[1].title
              //   );
              // }
              // if (this.subscriptionIdToSend === '3') {
              //   this.presentToast(
              //     this.lang.showLanguage.subscription.purchasePackage +
              //     this.lang.showLanguage.subscription.plans[2].title
              //   );
              // }
              // this.nextToast();
            }, 2000);
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
          key: "goToTabs",
          value: function goToTabs() {
            var _this4 = this;

            if (this.copun != '') {
              this.copunStatus = false;
              var ss = JSON.stringify({});
              this.workService.presentLoading();
              this.restService.get_coupon_dataAPI(this.copun).subscribe(function (res) {
                console.log(res);

                _this4.workService.hideLoading();

                if (res.status == 'success') {
                  if (res.data.status == "Active") {
                    _this4.router.navigate(['tabs/tab1'], {
                      replaceUrl: true
                    });
                  }

                  if (res.data.status == "Expired") {
                    _this4.workService.presentToast('Coupon Expired');
                  }

                  if (res.data.status == "Cancelled") {
                    _this4.workService.presentToast('Coupon Cancelled');
                  }

                  if (res.data.status == "Inactive") {
                    _this4.workService.presentToast('Coupon Inactive');
                  }
                } else {
                  _this4.workService.presentToast(res.message);
                }
              }, function (err) {
                _this4.workService.hideLoading();

                _this4.workService.presentToast('Network error occured');
              });
            } else {
              this.copunStatus = true;
              setTimeout(function () {
                _this4.copunStatus = false;
              }, 3000);
            }
          }
        }, {
          key: "subSelect",
          value: function subSelect(sub) {
            var _this5 = this;

            console.log('=========', sub);
            this.amount = sub.amount;
            this.android_product_id = sub.android_product_id;
            this.allowed_sms = sub.allowed_sms;
            this.ios_product_id = sub.ios_product_id;
            this.name = sub.name;
            this.packages_sms_id = sub.packages_sms_id;
            this.status = sub.status;
            var subData = JSON.stringify({
              "users_customers_id": localStorage.getItem('loggedinUserID'),
              "device_id": "NotAvaiable",
              "packages_sms_id": this.packages_sms_id,
              "product_id": this.subscriptionIdToSend,
              "amount": this.amount,
              "allowed_sms": this.allowed_sms,
              "product_name": this.name,
              "platform": this.platformSUB
            });
            console.log('val ------', subData);
            this.platform.ready().then(function () {
              if (_this5.platform.is('ios')) {
                _this5.platformSUB = "IOS";
                _this5.selectedSubscritionID = sub.ios_product_id;
                _this5.subscriptionIdToSend = sub.packages_id;

                _this5.purchaseSubscription();
              } else if (_this5.platform.is('android')) {
                _this5.platformSUB = "Android";
                _this5.selectedSubscritionID = sub.android_product_id;
                _this5.subscriptionIdToSend = sub.packages_id;

                _this5.purchaseSubscription();
              }
            });
          }
        }, {
          key: "restorePurchaseAli",
          value: function restorePurchaseAli() {
            var _this6 = this;

            this.iap.restorePurchases().then(function (data) {
              console.log('ip restore purchase------', data);
              _this6.restorePurchasesArray = data;
            })["catch"](function (err) {
              console.log(err, 'error');
            });
          }
        }]);

        return SmspkgPage;
      }();

      _SmspkgPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppPurchase
        }];
      };

      _SmspkgPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-smspkg',
        template: _raw_loader_smspkg_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_smspkg_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SmspkgPage);
      /***/
    },

    /***/
    52909:
    /*!*****************************************!*\
      !*** ./src/app/smspkg/smspkg.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.divbg {\n  margin-top: 2px;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtc3BrZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0kscUJBQUE7QUFESiIsImZpbGUiOiJzbXNwa2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5kaXZiZyB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAudi1jZW50ZXItcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgLnYtY2VudGVyLXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTUlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbi5yZWRCb3JkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICBcbiJdfQ== */";
      /***/
    },

    /***/
    86755:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/smspkg/smspkg.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row style=\"    margin-top: 40px;\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Messages Subscription</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Your Subscription</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <div *ngIf=\"noSubScription\" class=\"divbg\">\n    <ion-text style=\"font-size: 10pt; margin-left: 18px;\">You have not purchased any subscription yet</ion-text>\n\n  </div>\n\n  <div *ngIf=\"!noSubScription\" class=\"divbg\">\n\n    <div *ngFor=\"let sub of subArray\">\n      <div *ngIf=\"sub.packages_id == sbID\">\n        <ion-text style=\"font-size: 10pt; margin-left: 18px;\">$ {{sub.amount}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 18px;\">{{sub.name}}</ion-text>\n\n        <ion-text style=\"font-size: 7pt; margin-left: 18px;\">{{sub.allowed_sms}}</ion-text>\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Options</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"divbg\" *ngFor=\"let sub of subArray\" (click)=\"subSelect(sub)\">\n\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\">{{sub.name}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 12px;\">Allowed Messages {{sub.allowed_sms}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\"> 1 Month</ion-text>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center; padding-top: 14px;\">\n        <ion-text style=\"font-size: 10pt;\"> $ {{sub.amount}}</ion-text>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n<!-- \n\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col style=\"margin-left: 25px;\">\n      <ion-text style=\"font-size: 12pt;\">Select an option to subscribe</ion-text>\n      <br>\n\n      <ion-text style=\"font-size: 8pt;\">If you resubscribe, your new subscription will begin on Jun 30, 2021.</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 14px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Coupon Code</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"    margin-left: 20px;\n  margin-top: 0px;\n  margin-right: 20px;\n  margin-bottom: 0px;\">\n    <ion-col>\n      <ion-input placeholder=\"Please enter copun code\" class=\"inp\" [(ngModel)]=\"copun\" [class.redBorder]=\"copunStatus\">\n      </ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 0px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 8pt;\">*Enter coupon code to get one free month to start..</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"    margin-left: 20px;\n  margin-top: 0px;\n  margin-right: 20px;\n  margin-bottom: 0px;\">\n    <ion-col>\n      <button (click)=\"goToTabs()\" class=\"btn\">Confirm Membership</button>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"     margin-top: 15px;\n  margin-bottom: 20px;\">\n    <ion-col style=\"text-align: center;\">\n      <button style=\"     width: 59%;\n      background: none;\n      margin-top: 10px;\n      font-size: 10px;\n      border: 2px solid white;\n      border-radius: 48px;\n      height: 48px;\n      padding: 16px;\"> Restore Purchases</button>\n    </ion-col>\n  </ion-row> -->\n\n\n  <!-- <ion-row style=\"margin-bottom: 10px;\">\n    <ion-col style=\"text-align: right;\">\n      <ion-text style=\"margin-right: 25px;\n      font-size: 10pt;\">SKIP</ion-text>\n    </ion-col>\n  </ion-row> -->\n\n\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_smspkg_smspkg_module_ts-es5.js.map