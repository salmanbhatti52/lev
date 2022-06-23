(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_smspkg_smspkg_module_ts"],{

/***/ 8003:
/*!*************************************************!*\
  !*** ./src/app/smspkg/smspkg-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmspkgPageRoutingModule": function() { return /* binding */ SmspkgPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _smspkg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smspkg.page */ 64485);




const routes = [
    {
        path: '',
        component: _smspkg_page__WEBPACK_IMPORTED_MODULE_0__.SmspkgPage
    }
];
let SmspkgPageRoutingModule = class SmspkgPageRoutingModule {
};
SmspkgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SmspkgPageRoutingModule);



/***/ }),

/***/ 90833:
/*!*****************************************!*\
  !*** ./src/app/smspkg/smspkg.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmspkgPageModule": function() { return /* binding */ SmspkgPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _smspkg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smspkg-routing.module */ 8003);
/* harmony import */ var _smspkg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smspkg.page */ 64485);







let SmspkgPageModule = class SmspkgPageModule {
};
SmspkgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _smspkg_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmspkgPageRoutingModule
        ],
        declarations: [_smspkg_page__WEBPACK_IMPORTED_MODULE_1__.SmspkgPage]
    })
], SmspkgPageModule);



/***/ }),

/***/ 64485:
/*!***************************************!*\
  !*** ./src/app/smspkg/smspkg.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmspkgPage": function() { return /* binding */ SmspkgPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_smspkg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./smspkg.page.html */ 86755);
/* harmony import */ var _smspkg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smspkg.page.scss */ 52909);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);
/* harmony import */ var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-purchase/ngx */ 11963);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);








////////////////////////


let SmspkgPage = class SmspkgPage {
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
        this.allowed_sms = '';
        this.packages_sms_id = '';
    }
    ionViewWillEnter() {
        this.workService.presentLoading();
        var stringy = JSON.stringify({});
        this.restService.getSystemDataAPI(stringy).subscribe((res) => {
            this.workService.hideLoading();
            console.log('incomming data----', res);
            if (res.status == "success") {
                console.log(res.data);
                console.log('user dataaaa', res.data.packages_sms);
                this.subArray = res.data.packages_sms;
                this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
                console.log('usr packageee--->>>>>', this.userData);
                this.sbID = this.userData.packages_id;
                if (this.sbID.toString() == '0' || this.sbID.toString() == 'null') {
                    this.noSubScription = true;
                }
                else {
                    this.noSubScription = false;
                }
                this.platform.ready().then(() => {
                    if (this.platform.is('ios')) {
                        console.log('array----0 ios_product_id', this.subArray[0].ios_product_id);
                        console.log('array----1 ios_product_id', this.subArray[1].ios_product_id);
                        console.log('array----2 ios_product_id', this.subArray[2].ios_product_id);
                        this.subscriptionID1 = this.subArray[0].ios_product_id;
                        this.subscriptionID2 = this.subArray[1].ios_product_id;
                        this.subscriptionID3 = this.subArray[2].ios_product_id;
                    }
                    else if (this.platform.is('android')) {
                        console.log('array----0 android_product_id', this.subArray[0].android_product_id);
                        console.log('array----1 android_product_id', this.subArray[1].android_product_id);
                        console.log('array----2 android_product_id', this.subArray[2].android_product_id);
                        this.subscriptionID1 = this.subArray[0].android_product_id;
                        this.subscriptionID2 = this.subArray[1].android_product_id;
                        this.subscriptionID3 = this.subArray[2].android_product_id;
                    }
                    this.iap
                        .getProducts([
                        this.subscriptionID1,
                        this.subscriptionID2,
                        this.subscriptionID3,
                    ])
                        .then(function (products) {
                        console.log('active product getProducts--->', products);
                    })
                        .catch((err) => {
                        console.log('error billing---getProducts>', err);
                    });
                });
            }
        });
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
            "packages_sms_id": this.packages_sms_id,
            "product_id": this.subscriptionIdToSend,
            "amount": this.amount,
            "allowed_sms": this.allowed_sms,
            "product_name": this.name,
            "platform": this.platformSUB,
        });
        console.log('subData to send---->>>', subData);
        this.workService.presentLoading();
        this.restService.create_sms_transactionsAPI(subData)
            .subscribe((data) => {
            console.log(data);
            this.workService.hideLoading();
            if (data.status == 'success') {
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
        this.location.back();
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
                    if (res.data.status == "Active") {
                        this.router.navigate(['tabs/tab1'], { replaceUrl: true });
                    }
                    if (res.data.status == "Expired") {
                        this.workService.presentToast('Coupon Expired');
                    }
                    if (res.data.status == "Cancelled") {
                        this.workService.presentToast('Coupon Cancelled');
                    }
                    if (res.data.status == "Inactive") {
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
            "platform": this.platformSUB,
        });
        console.log('val ------', subData);
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
};
SmspkgPage.ctorParameters = () => [
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
SmspkgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-smspkg',
        template: _raw_loader_smspkg_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_smspkg_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SmspkgPage);



/***/ }),

/***/ 52909:
/*!*****************************************!*\
  !*** ./src/app/smspkg/smspkg.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.divbg {\n  margin-top: 2px;\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtc3BrZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0kscUJBQUE7QUFESiIsImZpbGUiOiJzbXNwa2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZGl2Ymcge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAudi1jZW50ZXItcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAudi1jZW50ZXItcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDU1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZEJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ 86755:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/smspkg/smspkg.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row style=\"    margin-top: 40px;\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n\n    </ion-col>\n\n    <ion-col size=\"8\" style=\"text-align: center;\">\n      <ion-text>Messages Subscription</ion-text>\n\n    </ion-col>\n\n    <ion-col size=\"2\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Your Subscription</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <div *ngIf=\"noSubScription\" class=\"divbg\">\n    <ion-text style=\"font-size: 10pt; margin-left: 18px;\">You have not purchased any subsctiption yet</ion-text>\n\n  </div>\n\n  <div *ngIf=\"!noSubScription\" class=\"divbg\">\n\n    <div *ngFor=\"let sub of subArray\">\n      <div *ngIf=\"sub.packages_id == sbID\">\n        <ion-text style=\"font-size: 10pt; margin-left: 18px;\">$ {{sub.amount}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 18px;\">{{sub.name}}</ion-text>\n\n        <ion-text style=\"font-size: 7pt; margin-left: 18px;\">{{sub.allowed_sms}}</ion-text>\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <ion-row style=\"margin-top: 30px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Options</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"divbg\" *ngFor=\"let sub of subArray\" (click)=\"subSelect(sub)\">\n\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\">{{sub.name}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 12px;\">Allowed Messages {{sub.allowed_sms}}</ion-text>\n        <br>\n        <ion-text style=\"font-size: 7pt; margin-left: 13px;\"> 1 Month</ion-text>\n      </ion-col>\n\n      <ion-col size=\"4\" style=\"text-align: center; padding-top: 14px;\">\n        <ion-text style=\"font-size: 10pt;\"> $ {{sub.amount}}</ion-text>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n<!-- \n\n  <ion-row style=\"margin-top: 20px;\">\n    <ion-col style=\"margin-left: 25px;\">\n      <ion-text style=\"font-size: 12pt;\">Select an option to resubscribe</ion-text>\n      <br>\n\n      <ion-text style=\"font-size: 8pt;\">If you resubscribe, your new subscription will begin on Jun 30, 2021.</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 14px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 10pt;\">Coupon Code</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"    margin-left: 20px;\n  margin-top: 0px;\n  margin-right: 20px;\n  margin-bottom: 0px;\">\n    <ion-col>\n      <ion-input placeholder=\"Please enter copun code\" class=\"inp\" [(ngModel)]=\"copun\" [class.redBorder]=\"copunStatus\">\n      </ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 0px;\">\n    <ion-col>\n      <ion-text style=\"margin-left: 25px;\n      font-size: 8pt;\">*Enter coupon code to get one free month to start..</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"    margin-left: 20px;\n  margin-top: 0px;\n  margin-right: 20px;\n  margin-bottom: 0px;\">\n    <ion-col>\n      <button (click)=\"goToTabs()\" class=\"btn\">Confirm Membership</button>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"     margin-top: 15px;\n  margin-bottom: 20px;\">\n    <ion-col style=\"text-align: center;\">\n      <button style=\"     width: 59%;\n      background: none;\n      margin-top: 10px;\n      font-size: 10px;\n      border: 2px solid white;\n      border-radius: 48px;\n      height: 48px;\n      padding: 16px;\"> Restore Purchases</button>\n    </ion-col>\n  </ion-row> -->\n\n\n  <!-- <ion-row style=\"margin-bottom: 10px;\">\n    <ion-col style=\"text-align: right;\">\n      <ion-text style=\"margin-right: 25px;\n      font-size: 10pt;\">SKIP</ion-text>\n    </ion-col>\n  </ion-row> -->\n\n\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_smspkg_smspkg_module_ts-es2015.js.map