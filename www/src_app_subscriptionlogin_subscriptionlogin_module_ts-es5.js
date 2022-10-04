(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_subscriptionlogin_subscriptionlogin_module_ts"], {
    /***/
    19183:
    /*!***********************************************************************!*\
      !*** ./src/app/subscriptionlogin/subscriptionlogin-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscriptionloginPageRoutingModule": function SubscriptionloginPageRoutingModule() {
          return (
            /* binding */
            _SubscriptionloginPageRoutingModule
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


      var _subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subscriptionlogin.page */
      21739);

      var routes = [{
        path: '',
        component: _subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_0__.SubscriptionloginPage
      }];

      var _SubscriptionloginPageRoutingModule = function SubscriptionloginPageRoutingModule() {
        _classCallCheck(this, SubscriptionloginPageRoutingModule);
      };

      _SubscriptionloginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SubscriptionloginPageRoutingModule);
      /***/
    },

    /***/
    13580:
    /*!***************************************************************!*\
      !*** ./src/app/subscriptionlogin/subscriptionlogin.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscriptionloginPageModule": function SubscriptionloginPageModule() {
          return (
            /* binding */
            _SubscriptionloginPageModule
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


      var _subscriptionlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subscriptionlogin-routing.module */
      19183);
      /* harmony import */


      var _subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subscriptionlogin.page */
      21739);

      var _SubscriptionloginPageModule = function SubscriptionloginPageModule() {
        _classCallCheck(this, SubscriptionloginPageModule);
      };

      _SubscriptionloginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _subscriptionlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubscriptionloginPageRoutingModule],
        declarations: [_subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_1__.SubscriptionloginPage]
      })], _SubscriptionloginPageModule);
      /***/
    },

    /***/
    21739:
    /*!*************************************************************!*\
      !*** ./src/app/subscriptionlogin/subscriptionlogin.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscriptionloginPage": function SubscriptionloginPage() {
          return (
            /* binding */
            _SubscriptionloginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_subscriptionlogin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./subscriptionlogin.page.html */
      98778);
      /* harmony import */


      var _subscriptionlogin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subscriptionlogin.page.scss */
      84772);
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


      var _SubscriptionloginPage = /*#__PURE__*/function () {
        function SubscriptionloginPage(location, router, restService, workService, rest, navCtrl, platform, toastController, iap) {
          _classCallCheck(this, SubscriptionloginPage);

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
          this.productIdArr = [];
          this.freePkg = '';
        }

        _createClass(SubscriptionloginPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.workService.presentLoading();
            var stringy = JSON.stringify({});
            this.restService.getSubScriptionDetailsAPI(stringy).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('incomming data----', res);

              if (res.status == "success") {
                console.log(res.data);
                console.log('user dataaaa', res);
                _this.subArray = res.data;
                _this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
                console.log('usr packageee--->>>>>', localStorage.getItem('packages_id'));
                _this.sbID = localStorage.getItem('packages_id');

                if (_this.sbID) {
                  if (_this.sbID.toString() == '0') {
                    _this.noSubScription = true;
                  } else {
                    _this.noSubScription = false;
                  }
                } else {
                  _this.noSubScription = true;
                }

                _this.platform.ready().then(function () {
                  if (_this.platform.is('ios')) {
                    _this.platformSUB = "IOS";

                    for (var i = 0; i < _this.subArray.length; i++) {
                      console.log('appid----', _this.subArray[i].ios_product_id);
                      var sbElement = {
                        productID: _this.subArray[i].ios_product_id
                      };

                      _this.productIdArr.push(sbElement);
                    }

                    console.log('array----0 ios_product_id', _this.subArray[0].ios_product_id);
                    console.log('array----1 ios_product_id', _this.subArray[1].ios_product_id); // console.log('array----2 ios_product_id', this.subArray[2].ios_product_id)

                    _this.subscriptionID1 = _this.subArray[0].ios_product_id;
                    _this.subscriptionID2 = _this.subArray[1].ios_product_id; // this.subscriptionID3 = this.subArray[2].ios_product_id
                  } else if (_this.platform.is('android')) {
                    _this.platformSUB = "Android";

                    for (var i = 0; i < _this.subArray.length; i++) {
                      console.log('appid----', _this.subArray[i].android_product_id);
                      var sbElement = {
                        productID: _this.subArray[i].android_product_id
                      };

                      _this.productIdArr.push(sbElement);
                    }

                    console.log('array----0 android_product_id', _this.subArray[0].android_product_id);
                    console.log('array----1 android_product_id', _this.subArray[1].android_product_id); // console.log('array----2 android_product_id', this.subArray[2].android_product_id)

                    _this.subscriptionID1 = _this.subArray[0].android_product_id;
                    _this.subscriptionID2 = _this.subArray[1].android_product_id; // this.subscriptionID3 = this.subArray[2].android_product_id
                  }

                  console.log('appid---- this.productIdArr.push(sbElement)', _this.productIdArr);

                  for (var i = 0; i < _this.subArray.length; i++) {
                    console.log('appid---- this.productIdArr[i].productID', _this.productIdArr[i].productID);
                    var nn = [1, 1, 1, 1]; // nn.push([
                    //   this.productIdArr[i].productID
                    // ])

                    _this.iap.getProducts([_this.productIdArr[i].productID]).then(function (products) {
                      console.log('active product getProducts--->', products);
                    })["catch"](function (err) {
                      console.log('error billing---getProducts>', err);
                    });
                  }

                  console.log('appid---- nnnnnnnnnnnnnnnnn', nn);
                });
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.copun = this.restService.removebadwords(ev.detail.value);
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
                console.log('in app purchase data coming======', data);
                alert(data);
                _this2.userSubscriptionRes = data;
                return _this2.iap.consume(data.productType, data.receipt, data.signature).then(function (res) {
                  console.log(data); // this.iap.getReceipt()

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
              "packages_id": this.packages_id,
              "product_id": this.subscriptionIdToSend,
              "amount": this.amount,
              "duration": this.duration,
              "duration_type": this.duration_type,
              "product_name": this.name,
              "platform": this.platformSUB,
              "coupon_codes_id": "0",
              "codes": "0",
              "coupon_amount": "0"
            });
            console.log('subData to send---->>>', subData);
            this.restService.saveSubscriptiondataAPI(subData).subscribe(function (data) {
              console.log(data);

              if (data.status == 'success') {
                localStorage.setItem('packages_id', _this3.packages_id);

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
            // this.location.back()
            this.router.navigate(['apply'], {
              replaceUrl: true
            });
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
                  if (res.data.coupon_data.status == "Active") {
                    _this4.freePkg = res.data.packages_data;

                    _this4.giveOneMonthFreeSubscription();
                  }

                  if (res.data.coupon_data.status == "Expired") {
                    _this4.workService.presentToast('Coupon Expired');
                  }

                  if (res.data.coupon_data.status == "Cancelled") {
                    _this4.workService.presentToast('Coupon Cancelled');
                  }

                  if (res.data.coupon_data.status == "Inactive") {
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

            console.log(sub);
            this.amount = sub.amount;
            this.android_product_id = sub.android_product_id;
            this.duration = sub.duration;
            this.duration_type = sub.duration_type;
            this.ios_product_id = sub.ios_product_id;
            this.name = sub.name;
            this.packages_id = sub.packages_id;
            this.status = sub.status;
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
        }, {
          key: "giveOneMonthFreeSubscription",
          value: function giveOneMonthFreeSubscription() {
            var _this7 = this;

            console.log('freePkg=----_', this.freePkg);
            var subData = JSON.stringify({
              "users_customers_id": localStorage.getItem('loggedinUserID'),
              "transaction_id": "Free",
              "device_id": "NotAvaiable",
              "packages_id": this.freePkg.packages_id,
              "product_id": this.freePkg.android_product_id,
              "amount": this.freePkg.amount,
              "duration": this.freePkg.duration,
              "duration_type": this.freePkg.duration_type,
              "product_name": this.freePkg.name,
              "platform": this.platformSUB,
              "coupon_codes_id": "0",
              "codes": "0",
              "coupon_amount": "0"
            });
            console.log('subData to send---->>>', subData);
            this.restService.saveSubscriptiondataAPI(subData).subscribe(function (data) {
              console.log(data);

              if (data.status == 'success') {
                localStorage.setItem('packages_id', _this7.freePkg.packages_id);

                _this7.router.navigate(['tabs/tab1'], {
                  replaceUrl: true
                });
              } else {
                _this7.workService.presentToast('Some Error Occuresd.');
              }
            }, function (err) {
              _this7.workService.hideLoading();

              _this7.workService.presentToast('Network error occured');
            });
            setTimeout(function () {}, 2000);
          }
        }, {
          key: "goTo",
          value: function goTo() {
            this.router.navigate(['tabs/tab1'], {
              replaceUrl: true
            });
          }
        }, {
          key: "cancelMembership",
          value: function cancelMembership() {
            var _this8 = this;

            console.log('cancel');
            this.workService.presentLoading();
            this.restService.cancelSubscription(localStorage.getItem('loggedinUserID')).subscribe(function (data) {
              console.log(data);

              _this8.workService.hideLoading();

              if (data.status == 'success') {
                localStorage.removeItem('packages_id');

                _this8.workService.presentToast(data.message);

                _this8.router.navigate(['subscription'], {
                  replaceUrl: true
                });
              } else {
                _this8.workService.presentToast(data.message);
              }
            }, function (err) {
              _this8.workService.hideLoading();

              _this8.workService.presentToast('Network error occured');
            });
          }
        }]);

        return SubscriptionloginPage;
      }();

      _SubscriptionloginPage.ctorParameters = function () {
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

      _SubscriptionloginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-subscriptionlogin',
        template: _raw_loader_subscriptionlogin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_subscriptionlogin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SubscriptionloginPage);
      /***/
    },

    /***/
    84772:
    /*!***************************************************************!*\
      !*** ./src/app/subscriptionlogin/subscriptionlogin.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.divbg {\n  margin-top: 2px;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbmxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InN1YnNjcmlwdGlvbmxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZGl2Ymcge1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5zYy1pb24taW5wdXQtaW9zLWgge1xuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgLnYtY2VudGVyLXMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC52LWNlbnRlci1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDU1JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG4ucmVkQm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgXG4iXX0= */";
      /***/
    },

    /***/
    98778:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscriptionlogin/subscriptionlogin.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Membership Options</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n\n\n\n\n\n  <ion-row class=\"margin-top-fixed\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Your Subscription</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <div *ngIf=\"noSubScription\" class=\"divbg\">\n    <ion-text style=\"font-size: 10pt; margin-left: 18px;\">You have not purchased any subscription yet</ion-text>\n  </div>\n\n\n\n  <div *ngIf=\"!noSubScription\" class=\"divbg\">\n\n    <div *ngFor=\"let sub of subArray\">\n      <div *ngIf=\"sub.packages_id == sbID\">\n        <ion-text style=\"font-size: 10pt; margin-left: 18px;\">$ {{sub.amount}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 18px;\">{{sub.name}}</ion-text>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-row *ngIf=\"!noSubScription\" style=\"\n                  margin-left: 20px;\n                  margin-top: 13px;\n                  margin-right: 20px;\n                  margin-bottom: 0px;\">\n    <ion-col>\n      <button (click)=\"cancelMembership()\" class=\"btn\">Cancel Membership</button>\n    </ion-col>\n  </ion-row> -->\n\n\n\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Options</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"divbg\" *ngFor=\"let sub of subArray\" (click)=\"subSelect(sub)\">\n\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\">{{sub.name}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\">{{sub.duration}} Month</ion-text>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center; padding-top: 14px;\">\n        <ion-text style=\"font-size: 10pt;\"> $ {{sub.amount}}</ion-text>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col style=\"margin-left: 25px;\">\n      <div *ngIf=\"noSubScription\" class=\"divbg\">\n        <ion-text style=\"font-size: 12pt;\">Select an option to resubscribe</ion-text>\n      </div>\n      \n      <div *ngIf=\"!noSubScription\" class=\"divbg\">\n        <ion-text style=\"font-size: 12pt;\">Select an option to subscribe</ion-text>\n      </div>\n      <!--\n        <br>\n\n      <ion-text style=\"font-size: 8pt;\">If you resubscribe, your new subscription will begin on Jun 30, 2021.</ion-text>\n      -->\n    </ion-col>\n  </ion-row>\n\n\n  <!-- <ion-row style=\"margin-top: 14px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Coupon Code</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"    margin-left: 20px;\n  margin-top: 0px;\n  margin-right: 20px;\n  margin-bottom: 0px;\">\n    <ion-col>\n      <ion-input placeholder=\"Please enter copun code\" class=\"inp\" [(ngModel)]=\"copun\" [class.redBorder]=\"copunStatus\"\n        (ionChange)=\"changeFunction($event)\">\n      </ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 0px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 8pt;\">*Enter coupon code to get one free month to start..</ion-text>\n    </ion-col>\n  </ion-row> -->\n\n\n  <ion-row style=\"margin-left: 20px;\n                  margin-top: 0px;\n                  margin-right: 20px;\n                  margin-bottom: 0px;\">\n    <ion-col>\n      <!-- <button (click)=\"goToTabs()\" class=\"btn\">Confirm Membership</button> -->\n      <!-- <button (click)=\"goTo()\" class=\"btn\">Next</button> -->\n    </ion-col>\n  </ion-row>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_subscriptionlogin_subscriptionlogin_module_ts-es5.js.map