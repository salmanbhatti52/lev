(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_subscriptionlogin_subscriptionlogin_module_ts"],{

/***/ 19183:
/*!***********************************************************************!*\
  !*** ./src/app/subscriptionlogin/subscriptionlogin-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionloginPageRoutingModule": function() { return /* binding */ SubscriptionloginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriptionlogin.page */ 21739);




const routes = [
    {
        path: '',
        component: _subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_0__.SubscriptionloginPage
    }
];
let SubscriptionloginPageRoutingModule = class SubscriptionloginPageRoutingModule {
};
SubscriptionloginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubscriptionloginPageRoutingModule);



/***/ }),

/***/ 13580:
/*!***************************************************************!*\
  !*** ./src/app/subscriptionlogin/subscriptionlogin.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionloginPageModule": function() { return /* binding */ SubscriptionloginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _subscriptionlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriptionlogin-routing.module */ 19183);
/* harmony import */ var _subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptionlogin.page */ 21739);







let SubscriptionloginPageModule = class SubscriptionloginPageModule {
};
SubscriptionloginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _subscriptionlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubscriptionloginPageRoutingModule
        ],
        declarations: [_subscriptionlogin_page__WEBPACK_IMPORTED_MODULE_1__.SubscriptionloginPage]
    })
], SubscriptionloginPageModule);



/***/ }),

/***/ 21739:
/*!*************************************************************!*\
  !*** ./src/app/subscriptionlogin/subscriptionlogin.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionloginPage": function() { return /* binding */ SubscriptionloginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_subscriptionlogin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./subscriptionlogin.page.html */ 98778);
/* harmony import */ var _subscriptionlogin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptionlogin.page.scss */ 84772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ 11963);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);








////////////////////////


let SubscriptionloginPage = class SubscriptionloginPage {
    constructor(location, router, restService, workService, rest, navCtrl, platform, toastController, iap) {
        this.location = location;
        this.router = router;
        this.restService = restService;
        this.workService = workService;
        this.rest = rest;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.toastController = toastController;
        this.iap = iap;
        this.subArray = '';
        /////////////////////////////////
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
        this.sbID = '';
        //////sub data
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
    ionViewWillEnter() {
        this.workService.presentLoading();
        var stringy = JSON.stringify({});
        this.restService.getSubScriptionDetailsAPI(stringy).subscribe((res) => {
            this.workService.hideLoading();
            console.log('incomming data----', res);
            if (res.status == "success") {
                console.log(res.data);
                console.log('user dataaaa', res);
                this.subArray = res.data;
                this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
                console.log('usr packageee--->>>>>', localStorage.getItem('packages_id'));
                this.sbID = localStorage.getItem('packages_id');
                if (this.sbID) {
                    if (this.sbID.toString() == '0') {
                        this.noSubScription = true;
                    }
                    else {
                        this.noSubScription = false;
                    }
                }
                else {
                    this.noSubScription = true;
                }
                this.platform.ready().then(() => {
                    if (this.platform.is('ios')) {
                        this.platformSUB = "IOS";
                        for (var i = 0; i < this.subArray.length; i++) {
                            console.log('appid----', this.subArray[i].ios_product_id);
                            var sbElement = {
                                productID: this.subArray[i].ios_product_id
                            };
                            this.productIdArr.push(sbElement);
                        }
                        console.log('array----0 ios_product_id', this.subArray[0].ios_product_id);
                        console.log('array----1 ios_product_id', this.subArray[1].ios_product_id);
                        // console.log('array----2 ios_product_id', this.subArray[2].ios_product_id)
                        this.subscriptionID1 = this.subArray[0].ios_product_id;
                        this.subscriptionID2 = this.subArray[1].ios_product_id;
                        // this.subscriptionID3 = this.subArray[2].ios_product_id
                    }
                    else if (this.platform.is('android')) {
                        this.platformSUB = "Android";
                        for (var i = 0; i < this.subArray.length; i++) {
                            console.log('appid----', this.subArray[i].android_product_id);
                            var sbElement = {
                                productID: this.subArray[i].android_product_id
                            };
                            this.productIdArr.push(sbElement);
                        }
                        console.log('array----0 android_product_id', this.subArray[0].android_product_id);
                        console.log('array----1 android_product_id', this.subArray[1].android_product_id);
                        // console.log('array----2 android_product_id', this.subArray[2].android_product_id)
                        this.subscriptionID1 = this.subArray[0].android_product_id;
                        this.subscriptionID2 = this.subArray[1].android_product_id;
                        // this.subscriptionID3 = this.subArray[2].android_product_id
                    }
                    console.log('appid---- this.productIdArr.push(sbElement)', this.productIdArr);
                    for (var i = 0; i < this.subArray.length; i++) {
                        console.log('appid---- this.productIdArr[i].productID', this.productIdArr[i].productID);
                        var nn = [1, 1, 1, 1];
                        // nn.push([
                        //   this.productIdArr[i].productID
                        // ])
                        this.iap
                            .getProducts([
                            this.productIdArr[i].productID
                        ])
                            .then(function (products) {
                            console.log('active product getProducts--->', products);
                        })
                            .catch((err) => {
                            console.log('error billing---getProducts>', err);
                        });
                    }
                    console.log('appid---- nnnnnnnnnnnnnnnnn', nn);
                });
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    changeFunction(ev) {
        this.copun = this.restService.removebadwords(ev.detail.value);
    }
    purchaseSubscription() {
        console.log(this.selectedSubscritionID, 'want to purchase');
        // alert(this.selectedSubscritionID + 'want to purchase')
        if (this.platform.is('android')) {
            this.iap
                .subscribe(this.selectedSubscritionID)
                .then((data) => {
                console.log(data);
                this.userSubscriptionRes = data;
                return this.iap
                    .consume(data.productType, data.receipt, data.signature)
                    .then((res) => {
                    this.successSubscri();
                    this.transactionResponse = res;
                    // alert('transactionResponse' + this.transactionResponse)
                }, (err) => {
                    console.log(err);
                    this.workService.presentToast('Some Error Occured');
                    // alert('Some Error Occured' + err)
                    alert('Some Error Occured');
                });
            })
                .catch((err) => {
                console.log(err, 'error');
                this.workService.presentToast('Some Error Occured');
                // alert('Some Error Occured' + err)
                alert('Some Error Occured');
            });
        }
        if (this.platform.is('ios')) {
            this.iap
                .buy(this.selectedSubscritionID)
                .then((data) => {
                console.log(data);
                this.userSubscriptionRes = data;
                return this.iap
                    .consume(data.productType, data.receipt, data.signature)
                    .then((res) => {
                    console.log(data);
                    this.successSubscri();
                    console.log(res, 'purchased');
                    // alert('transactionResponse ios' + this.transactionResponse)
                });
            })
                .catch((err) => {
                console.log(err, 'error');
                this.workService.presentToast('Some Error Occured');
                // alert('Some Error Occured' + err)
                alert('Some Error Occured');
            });
        }
    }
    successSubscri() {
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
        this.restService.saveSubscriptiondataAPI(subData)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 'success') {
                localStorage.setItem('packages_id', this.packages_id);
                this.router.navigate(['tabs/tab1'], { replaceUrl: true });
            }
            else {
                this.workService.presentToast('Some Error Occuresd.');
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
        this.workService.presentToast('Purchase Successful');
        setTimeout(() => {
            // if (this.subscriptionIdToSend === '1') {
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
    ngOnInit() {
    }
    goBack() {
        // this.location.back()
        this.router.navigate(['apply'], { replaceUrl: true });
    }
    goToTabs() {
        if (this.copun != '') {
            this.copunStatus = false;
            var ss = JSON.stringify({});
            this.workService.presentLoading();
            this.restService.get_coupon_dataAPI(this.copun).subscribe((res) => {
                console.log(res);
                this.workService.hideLoading();
                if (res.status == 'success') {
                    if (res.data.coupon_data.status == "Active") {
                        this.freePkg = res.data.packages_data;
                        this.giveOneMonthFreeSubscription();
                    }
                    if (res.data.coupon_data.status == "Expired") {
                        this.workService.presentToast('Coupon Expired');
                    }
                    if (res.data.coupon_data.status == "Cancelled") {
                        this.workService.presentToast('Coupon Cancelled');
                    }
                    if (res.data.coupon_data.status == "Inactive") {
                        this.workService.presentToast('Coupon Inactive');
                    }
                }
                else {
                    this.workService.presentToast(res.message);
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
        }
        else {
            this.copunStatus = true;
            setTimeout(() => {
                this.copunStatus = false;
            }, 3000);
        }
    }
    subSelect(sub) {
        console.log(sub);
        this.amount = sub.amount;
        this.android_product_id = sub.android_product_id;
        this.duration = sub.duration;
        this.duration_type = sub.duration_type;
        this.ios_product_id = sub.ios_product_id;
        this.name = sub.name;
        this.packages_id = sub.packages_id;
        this.status = sub.status;
        this.platform.ready().then(() => {
            if (this.platform.is('ios')) {
                this.platformSUB = "IOS";
                this.selectedSubscritionID = sub.ios_product_id;
                this.subscriptionIdToSend = sub.packages_id;
                this.purchaseSubscription();
            }
            else if (this.platform.is('android')) {
                this.platformSUB = "Android";
                this.selectedSubscritionID = sub.android_product_id;
                this.subscriptionIdToSend = sub.packages_id;
                this.purchaseSubscription();
            }
        });
    }
    restorePurchaseAli() {
        this.iap
            .restorePurchases()
            .then((data) => {
            console.log('ip restore purchase------', data);
            this.restorePurchasesArray = data;
        })
            .catch((err) => {
            console.log(err, 'error');
        });
    }
    giveOneMonthFreeSubscription() {
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
        this.restService.saveSubscriptiondataAPI(subData)
            .subscribe((data) => {
            console.log(data);
            if (data.status == 'success') {
                localStorage.setItem('packages_id', this.freePkg.packages_id);
                this.router.navigate(['tabs/tab1'], { replaceUrl: true });
            }
            else {
                this.workService.presentToast('Some Error Occuresd.');
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
        setTimeout(() => {
        }, 2000);
    }
    cancelMembership() {
        console.log('cancel');
        this.workService.presentLoading();
        this.restService.cancelSubscription(localStorage.getItem('loggedinUserID'))
            .subscribe((data) => {
            console.log(data);
            this.workService.hideLoading();
            if (data.status == 'success') {
                localStorage.removeItem('packages_id');
                this.workService.presentToast(data.message);
                this.router.navigate(['subscription'], { replaceUrl: true });
            }
            else {
                this.workService.presentToast(data.message);
            }
        }, err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
};
SubscriptionloginPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__.InAppPurchase }
];
SubscriptionloginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-subscriptionlogin',
        template: _raw_loader_subscriptionlogin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_subscriptionlogin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubscriptionloginPage);



/***/ }),

/***/ 84772:
/*!***************************************************************!*\
  !*** ./src/app/subscriptionlogin/subscriptionlogin.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.divbg {\n  margin-top: 2px;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbmxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6InN1YnNjcmlwdGlvbmxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmRpdmJnIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtbWQtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtaW9zLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgLnYtY2VudGVyLXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgLnYtY2VudGVyLXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1NSU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZWRCb3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBcclxuIl19 */");

/***/ }),

/***/ 98778:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscriptionlogin/subscriptionlogin.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Membership Options</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n\n\n\n\n\n  <ion-row class=\"margin-top-fixed\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Your Subscription</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <div *ngIf=\"noSubScription\" class=\"divbg\">\n    <ion-text style=\"font-size: 10pt; margin-left: 18px;\">You have not purchased any subsctiption yet</ion-text>\n  </div>\n\n\n\n  <div *ngIf=\"!noSubScription\" class=\"divbg\">\n\n    <div *ngFor=\"let sub of subArray\">\n      <div *ngIf=\"sub.packages_id == sbID\">\n        <ion-text style=\"font-size: 10pt; margin-left: 18px;\">$ {{sub.amount}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 18px;\">{{sub.name}}</ion-text>\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-row *ngIf=\"!noSubScription\" style=\"\n                  margin-left: 20px;\n                  margin-top: 13px;\n                  margin-right: 20px;\n                  margin-bottom: 0px;\">\n    <ion-col>\n      <button (click)=\"cancelMembership()\" class=\"btn\">Cancel Membership</button>\n    </ion-col>\n  </ion-row> -->\n\n\n\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Options</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"divbg\" *ngFor=\"let sub of subArray\" (click)=\"subSelect(sub)\">\n\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\">{{sub.name}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\">{{sub.duration}} Month</ion-text>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center; padding-top: 14px;\">\n        <ion-text style=\"font-size: 10pt;\"> $ {{sub.amount}}</ion-text>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col style=\"margin-left: 25px;\">\n      <ion-text style=\"font-size: 12pt;\">Select an option to resubscribe</ion-text>\n      <br>\n\n      <ion-text style=\"font-size: 8pt;\">If you resubscribe, your new subscription will begin on Jun 30, 2021.</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 14px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Coupon Code</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"    margin-left: 20px;\n  margin-top: 0px;\n  margin-right: 20px;\n  margin-bottom: 0px;\">\n    <ion-col>\n      <ion-input placeholder=\"Please enter copun code\" class=\"inp\" [(ngModel)]=\"copun\" [class.redBorder]=\"copunStatus\"\n        (ionChange)=\"changeFunction($event)\">\n      </ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 0px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 8pt;\">*Enter coupon code to get one free month to start..</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-left: 20px;\n                  margin-top: 0px;\n                  margin-right: 20px;\n                  margin-bottom: 0px;\">\n    <ion-col>\n      <button (click)=\"goToTabs()\" class=\"btn\">Confirm Membership</button>\n    </ion-col>\n  </ion-row>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_subscriptionlogin_subscriptionlogin_module_ts-es2015.js.map