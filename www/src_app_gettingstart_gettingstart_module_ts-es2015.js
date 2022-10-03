(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_gettingstart_gettingstart_module_ts"],{

/***/ 42775:
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/***/ (function(module) {

!function(e,r){ true?module.exports=r():0}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ 1107:
/*!*************************************************************!*\
  !*** ./src/app/gettingstart/gettingstart-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingstartPageRoutingModule": function() { return /* binding */ GettingstartPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gettingstart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettingstart.page */ 83625);




const routes = [
    {
        path: '',
        component: _gettingstart_page__WEBPACK_IMPORTED_MODULE_0__.GettingstartPage
    }
];
let GettingstartPageRoutingModule = class GettingstartPageRoutingModule {
};
GettingstartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GettingstartPageRoutingModule);



/***/ }),

/***/ 22505:
/*!*****************************************************!*\
  !*** ./src/app/gettingstart/gettingstart.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingstartPageModule": function() { return /* binding */ GettingstartPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gettingstart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettingstart-routing.module */ 1107);
/* harmony import */ var _gettingstart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gettingstart.page */ 83625);







let GettingstartPageModule = class GettingstartPageModule {
};
GettingstartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gettingstart_routing_module__WEBPACK_IMPORTED_MODULE_0__.GettingstartPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_gettingstart_page__WEBPACK_IMPORTED_MODULE_1__.GettingstartPage]
    })
], GettingstartPageModule);



/***/ }),

/***/ 83625:
/*!***************************************************!*\
  !*** ./src/app/gettingstart/gettingstart.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingstartPage": function() { return /* binding */ GettingstartPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gettingstart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gettingstart.page.html */ 98307);
/* harmony import */ var _gettingstart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gettingstart.page.scss */ 56247);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work.service */ 8981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ 91416);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ 71952);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var text_mask_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! text-mask-core */ 42775);
/* harmony import */ var text_mask_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(text_mask_core__WEBPACK_IMPORTED_MODULE_7__);
















firebase_app__WEBPACK_IMPORTED_MODULE_5__.default.initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_4__.default);
let GettingstartPage = class GettingstartPage {
    constructor(router, restService, workService, location, alertController, afAuth, platform, storage, navCtrl, fb) {
        this.router = router;
        this.restService = restService;
        this.workService = workService;
        this.location = location;
        this.alertController = alertController;
        this.afAuth = afAuth;
        this.platform = platform;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.otpSent = false;
        this.phonenumber = '';
        this.otpCode = '';
        this.countryName = 'USA';
        this.flagofcountry = 'us';
        this.countryCode = '+1';
        this.phoneNum = '';
        this.matchpopupHidden = true;
        this.phoneNumStatus = false;
        this.countryCodeStatus = false;
        this.oneSignalDeviceID = '';
        //////////////////
        this.verificationID = '';
        this.completePhoneNum = '';
        this.userData = '';
        this.otp = '';
        this.otp1 = '';
        this.otp2 = '';
        this.otp3 = '';
        this.otp4 = '';
        this.otp5 = '';
        this.otp6 = '';
        this.form = this.fb.group({
            phoneNumberMSK: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
        // prettier-ignore
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }
    ngOnInit() {
        var prompt1HeadIDVal = 1;
        var prompt2HeadIDVal = 1;
        var prompt3HeadIDVal = 1;
        var prompt1Val = "afjlff";
        var prompt2Val = "afjsafsafdlff";
        var prompt3Val = "afsdfwG4WEFWEjlff";
        var myprompts = {};
        myprompts[prompt1HeadIDVal] = prompt1Val;
        myprompts[prompt2HeadIDVal] = prompt2Val;
        myprompts[prompt3HeadIDVal] = prompt3Val;
        console.log('my array ---->>>', myprompts);
    }
    goToOTP() {
        if (this.countryCode == '') {
            this.countryCodeStatus = true;
            setInterval(() => {
                this.phoneNumStatus = false;
                this.countryCodeStatus = false;
            }, 4000);
        }
        else if (this.phoneNum == '(' || this.phoneNum == '') {
            this.phoneNumStatus = true;
            setInterval(() => {
                this.phoneNumStatus = false;
                this.countryCodeStatus = false;
            }, 4000);
        }
        else {
            this.workService.data1 = "+92";
            this.workService.data2 = { data: "9632" };
            console.log('complete phone num---', this.countryCode + this.phoneNum);
            var num = this.countryCode + this.phoneNum;
            var num = this.countryCode + this.phoneNum;
            this.completePhoneNum = num;
            // replace specual character
            var c1 = num.replace('(', '');
            var c2 = c1.replace(')', '');
            var c3 = c2.replace(' ', '');
            var c4 = c3.replace('-', '');
            console.log('num-----', c4);
            localStorage.setItem('simpleNumberToSendourDB', c4);
            console.log('num-----simpleNumberToSendourDB', localStorage.getItem('simpleNumberToSendourDB'));
            // replace specual character
            this.workService.presentLoading();
            var data = JSON.stringify({
                "contact_number": localStorage.getItem('simpleNumberToSendourDB')
            });
            console.log('data-----', data);
            this.oneSignalDeviceID = localStorage.getItem("oneSignaldeviceID");
            console.log('164--------------------', num);
            console.log('165--------------------', localStorage.getItem('phone'));
            if (num != localStorage.getItem('phone')) {
                localStorage.clear();
                this.storage.clear();
                localStorage.setItem("oneSignaldeviceID", this.oneSignalDeviceID);
                // replace specual character
                var c1 = num.replace('(', '');
                var c2 = c1.replace(')', '');
                var c3 = c2.replace(' ', '');
                var c4 = c3.replace('-', '');
                console.log('num-----', c4);
                localStorage.setItem('simpleNumberToSendourDB', c4);
                console.log('num-----simpleNumberToSendourDB', localStorage.getItem('simpleNumberToSendourDB'));
                // replace specual character
            }
            console.log('login or signup 1111----', this.workService.comingForm);
            this.restService.check_contact_existsAPI(data).subscribe((res) => {
                this.workService.hideLoading();
                console.log('res----', res);
                if (res.status == 'success') {
                    localStorage.setItem('phone', num);
                    // replace specual character
                    var c1 = num.replace('(', '');
                    var c2 = c1.replace(')', '');
                    var c3 = c2.replace(' ', '');
                    var c4 = c3.replace('-', '');
                    console.log('num-----', c4);
                    localStorage.setItem('simpleNumberToSendourDB', c4);
                    console.log('num-----simpleNumberToSendourDB', localStorage.getItem('simpleNumberToSendourDB'));
                    // replace specual character
                    if (this.workService.comingForm == 'sigup') {
                        if (this.platform.is('ios')) {
                            console.log('platform iosssssssssss', this.completePhoneNum);
                            this.workService.userMobileNum = this.completePhoneNum;
                            this.router.navigate(['otppageweb']);
                        }
                        else {
                            console.log('platform android');
                            this.sendOTP();
                        }
                    }
                    else if (this.workService.comingForm == 'login') {
                        this.workService.hideLoading();
                        this.workService.presentToast('Contact number does not registered.');
                    }
                }
                else {
                    console.log('login or signup 1111[[[[[[[[[[[[[[]]]]]]]]]]]]]]----', this.workService.comingForm);
                    if (this.workService.comingForm == 'sigup') {
                        this.workService.presentToast('Contact Number already exists.');
                    }
                    else if (this.workService.comingForm == 'login') {
                        console.log('yserrrrrrrrrrr', res.message.userStatus);
                        if (res.message.userStatus == 'Active') {
                            //---- login the number
                            this.workService.hideLoading();
                            if (this.platform.is('ios')) {
                                console.log('platform iosssssssssss', this.completePhoneNum);
                                this.workService.userMobileNum = this.completePhoneNum;
                                this.router.navigate(['otppageweb']);
                            }
                            else {
                                console.log('platform android');
                                this.sendOTPForLogin();
                            }
                            //---- login the number
                        }
                        else if (res.message.userStatus == "Pending") {
                            this.workService.presentToast('Your application is under review by the admin.');
                        }
                        else if (res.message.userStatus == "Inactive") {
                            this.workService.presentToast('Your login is temporary disabled. Please contact our team for further information.');
                        }
                        else if (res.message.userStatus == "Rejected") {
                            this.workService.presentToast('Your application is rejected by the admin. You can try applying again.');
                        }
                        else if (res.message.userStatus == "Deleted") {
                            this.workService.presentToast('Your application is deleted. Please contact our team for further information.');
                        }
                        else {
                            this.workService.presentToast('Some error occured');
                        }
                    }
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
        }
    }
    showPopup() {
        this.matchpopupHidden = false;
        console.log();
    }
    hidePopup() {
        this.matchpopupHidden = true;
        this.otp1 = '';
        this.otp2 = '';
        this.otp3 = '';
        this.otp4 = '';
        this.otp5 = '';
        this.otp6 = '';
    }
    flagClick(flag) {
        this.hidePopup();
        this.countryCode = flag.id;
        this.flagofcountry = flag.alpha2;
        this.countryName = flag.name;
    }
    goBack() {
        //this.location.back()
        this.router.navigate(['apply']);
    }
    ////////////////////////////
    ionViewDidEnter() {
        this.recpVerification = new firebase_app__WEBPACK_IMPORTED_MODULE_5__.default.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' });
    }
    ionViewDidLoad() {
        this.recpVerification = new firebase_app__WEBPACK_IMPORTED_MODULE_5__.default.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' });
    }
    sendOTP() {
        this.workService.presentLoading();
        // this.phonenumber = '+923156198610';
        var num = this.countryCode + this.phoneNum;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__.default.auth().signInWithPhoneNumber(num, this.recpVerification).then(data => {
            console.log('data from sending otp response', data);
            this.phonenumber = this.phonenumber;
            this.otpSent = true;
            this.otpConfrimResult = data;
            this.workService.otpConfrimResultData = JSON.stringify(this.otpConfrimResult);
            // this.router.navigate(['otp'])
            this.workService.hideLoading();
            this.showPopup();
        }).catch(res => {
            this.workService.hideLoading();
            this.workService.presentToast('Some error occured or too many requests. Please try again after some time');
            console.log('Error from firebase', res);
        });
    }
    sendOTPForLogin() {
        this.workService.presentLoading();
        // this.phonenumber = '+923156198610';
        var num = this.countryCode + this.phoneNum;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__.default.auth().signInWithPhoneNumber(num, this.recpVerification).then(data => {
            console.log('data from sending otp response', data);
            this.phonenumber = this.phonenumber;
            this.otpSent = true;
            this.otpConfrimResult = data;
            this.workService.otpConfrimResultData = JSON.stringify(this.otpConfrimResult);
            // this.router.navigate(['otp'])
            this.workService.hideLoading();
            this.showPopup();
            this.loginTheNumber();
        }).catch(res => {
            this.workService.hideLoading();
            this.workService.presentToast('Some error occured or too many requests. Please try again after some time');
            console.log('Error from firebase', res);
        });
    }
    ionViewWillEnter() {
        console.log('login or signup ----', this.workService.comingForm);
        var imgArr = [{ "id": 0, "img": "data:image/p" }, { "id": 0, "img": "data:image/p" }];
        console.log('my tessssstttttttZ---------', imgArr[0].img);
    }
    send() {
        console.log('Sending OTP......');
        var num = this.countryCode + this.phoneNum;
        console.log(num);
        window.FirebasePlugin.verifyPhoneNumber(num, 60, (credential) => {
            alert('OTP Sent successfully.');
            console.log(credential);
            this.verificationID = credential.verificationId;
            console.log("Verificaion ID : " + this.verificationID);
        }, (error) => {
            console.log(error);
        });
    }
    eventHandler(e) {
        console.log(e);
        if (this.countryCode == '+1') {
            console.log('ok', this.phoneNum);
            if (this.phoneNum.length == 3 && (e.key != 'Backspace')) {
                console.log('ok333333');
                this.phoneNum = "(" + this.phoneNum + ") ";
            }
            if (this.phoneNum.length == 9 && (e.key != 'Backspace')) {
                console.log('ok333333');
                this.phoneNum = this.phoneNum + "-";
            }
        }
    }
    inp1Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput2.setFocus();
        }
    }
    inp2Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput3.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput1.setFocus();
        }
    }
    inp3Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput4.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput2.setFocus();
        }
    }
    inp4Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput5.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput3.setFocus();
        }
    }
    inp5Change(ev) {
        if (ev.detail.value.length == 1) {
            this.ionInput6.setFocus();
        }
        else if (ev.detail.value.length == 0) {
            this.ionInput4.setFocus();
        }
    }
    inp6Change(ev) {
        if (ev.detail.value.length == 0) {
            this.ionInput5.setFocus();
        }
    }
    goToProfile1() {
        this.workService.hideLoading();
        console.log(this.otpConfrimResult);
        if (this.otp1 != '' && this.otp2 != '' && this.otp3 != '' && this.otp4 != '' && this.otp5 != '' && this.otp6 != '') {
            this.newOtp = this.otp1 + "" + this.otp2 + "" + this.otp3 + "" + this.otp4 + "" + this.otp5 + "" + this.otp6;
            this.otpConfrimResult.confirm(this.newOtp).then(data => {
                console.log('Verify result', data);
                this.hidePopup();
            }).then(res => {
                this.hidePopup();
                this.workService.hideLoading();
                console.log('nnnnnnnnnnnnnnnnnnnnnnn---', this.workService.comingForm);
                if (this.workService.comingForm == 'sigup') {
                    this.router.navigate(['profile1']);
                }
                if (this.workService.comingForm == 'login') {
                    //error is here , please login first
                    localStorage.setItem('login', 'isLogin');
                    this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
                    console.log('usr packageee--->', this.userData.packages_id);
                    var sbID = this.userData.packages_id;
                    localStorage.setItem('packages_id', sbID);
                    ////is ko 1 karna ha after testing///
                    if (sbID.toString() != '0') {
                        this.navCtrl.navigateRoot(['subscriptionlogin'], { replaceUrl: true });
                    }
                    else {
                        this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true });
                    }
                }
            }, err => {
                this.workService.presentToast('Incorrect OTP');
            });
        }
        else {
            this.workService.presentToast('Enter OTP');
        }
    }
    editNum() {
        this.hidePopup();
    }
    resendOTP() {
        this.sendOTP();
    }
    loginTheNumber() {
        if (this.countryCode == '') {
            this.countryCodeStatus = true;
            setInterval(() => {
                this.phoneNumStatus = false;
                this.countryCodeStatus = false;
            }, 4000);
        }
        else if (this.phoneNum == '') {
            this.phoneNumStatus = true;
            setInterval(() => {
                this.phoneNumStatus = false;
                this.countryCodeStatus = false;
            }, 4000);
        }
        else {
            this.workService.data1 = "+92";
            this.workService.data2 = { data: "9632" };
            console.log('complete phone num---', this.countryCode + this.phoneNum);
            console.log('oneSignaldeviceID', localStorage.getItem("oneSignaldeviceID"));
            var oneSignalID = localStorage.getItem("oneSignaldeviceID");
            if (oneSignalID == null || oneSignalID == 'null') {
                oneSignalID = 'not available';
            }
            localStorage.setItem('phone', this.countryCode + this.phoneNum);
            var stringy = JSON.stringify({
                'contact_number': localStorage.getItem('simpleNumberToSendourDB'),
                'onesignal_id': oneSignalID
            });
            console.log(stringy);
            this.workService.presentLoading();
            this.restService.loginAPI(stringy).subscribe((res) => {
                this.workService.hideLoading();
                console.log(res);
                if (res.status == "success") {
                    if (res.data.status == "Active") {
                        localStorage.setItem('login', 'isLogin');
                        localStorage.setItem('loggedinUserData', JSON.stringify(res.data));
                        localStorage.setItem('loggedinUserID', res.data.users_customers_id);
                        localStorage.setItem('remainingSMS', res.data.allowed_sms);
                        localStorage.setItem('packages_id', res.data.packages_id);
                        // localStorage.set('loggedinUserData', JSON.stringify(res.data.user))
                        // localStorage.setItem('loggedinUserID', res.data.user.users_customers_id)
                        this.showPopup();
                    }
                    else if (res.data.status == "Pending") {
                        this.workService.presentToast('Your application is under review by the admin.');
                    }
                    else if (res.data.status == "Inactive") {
                        this.workService.presentToast('Your login is temporary disabled. Please contact our team for further information.');
                    }
                    else if (res.data.status == "Rejected") {
                        this.workService.presentToast('Your application is rejected by the admin. You can try applying again.');
                    }
                    else if (res.data.status == "Deleted") {
                        this.workService.presentToast('Your application is deleted. Please contact our team for further information.');
                    }
                    else {
                        this.workService.presentToast(res.message);
                    }
                }
                else {
                    this.workService.presentToast(res.message);
                }
            }, err => {
                this.workService.hideLoading();
                this.workService.presentToast('Network error occured');
            });
            //
        }
    }
    //masking here
    set phoneInput(value) {
        if (!value) {
            return;
        }
        value.getInputElement().then(input => this.registerTextMask(input));
    }
    get phoneNumberMSK() {
        return this.form.get('phoneNumberMSK');
    }
    registerTextMask(inputElement) {
        const maskedInput = (0,text_mask_core__WEBPACK_IMPORTED_MODULE_7__.createTextMaskInputElement)({
            inputElement,
            mask: this.phoneMask,
            guide: false,
        });
        this.phoneNumberMSK.valueChanges.subscribe(value => {
            maskedInput.update(value);
        });
    }
    countryCodeInput() {
        // this.phoneNum = ''
    }
};
GettingstartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_fire__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
GettingstartPage.propDecorators = {
    ionInput1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input1', { static: false },] }],
    ionInput2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input2', { static: false },] }],
    ionInput3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input3', { static: false },] }],
    ionInput4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input4', { static: false },] }],
    ionInput5: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input5', { static: false },] }],
    ionInput6: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['input6', { static: false },] }],
    phoneInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['phoneInput',] }]
};
GettingstartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-gettingstart',
        template: _raw_loader_gettingstart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gettingstart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GettingstartPage);



/***/ }),

/***/ 56247:
/*!*****************************************************!*\
  !*** ./src/app/gettingstart/gettingstart.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.redclass {\n  color: red;\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldHRpbmdzdGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJnZXR0aW5nc3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtbWQtaCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRwdDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIGhlaWdodDogNDBwdDtcclxufVxyXG5cclxucCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5yZWRjbGFzcyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnJlZEJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 98307:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gettingstart/gettingstart.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"sign-in-button\"></div>\n\n  <img style=\"width: 20px;\n  margin-left: 30px;\" src=\"assets/imgs/left.svg\" (click)=\"goBack()\" class=\"top-margin-head-40\">\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-row style=\"margin-top: 40px;\">\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\"> <br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 16pt;\"> Getting Started</ion-label> <br>\n        <ion-text style=\"font-size: 12pt;\">What's your phone number? </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 50px;\">\n\n\n      <ion-col size=\"3\" style=\"text-align: center;\">\n        <div [class.redBorder]=\"countryCodeStatus\" style=\"background-color: #333333;\n            height: 47pt;\n            width: 55pt;\n            border-radius: 10px;\n            padding-top: 4.5px;\">\n\n          <!-- <img style=\"      top: 10px;  width: 30px;\n            height: 30px;\n            position: absolute;\n            left: 15px;\" src=\"assets/imgs/flags/{{flagofcountry}}.png\">\n\n          <img style=\"     width: 15px;\n            height: 15px;\n            position: absolute;\n            top: 15px;\n            left: 50px;\" src=\"assets/imgs/down.svg\">\n\n          <br>\n\n          <ion-label style=\"top: 37px;\n                              position: absolute;\n                              left: 33px;\n                              font-size: 17px;\">{{countryCode}}</ion-label> -->\n\n          <ion-input type=\"tel\" maxlength=\"6\" placeholder=\"+1\" [(ngModel)]=\"countryCode\"\n            (ionInput)=\"countryCodeInput()\"></ion-input>\n\n        </div>\n      </ion-col>\n\n      <ion-col size=\"9\" style=\"text-align: left;\">\n\n        <div style=\"background-color: #333333;\n        height: 47pt;\n        width: 100%;\n        border-radius: 10px;\n        margin-left: 10px;\">\n\n          <ion-label [class.redclass]=\"phoneNumStatus\" style=\"top: 14px;\n        left: 33px;\n        font-size: 9pt;\n        position: absolute;\">Phone Number</ion-label>\n\n          <ion-input *ngIf=\"countryCode == '+1'\" type=\"tel\" style=\"top: 22px;\n                    left: 19px;\n                    position: absolute;\n                    padding-top: 5px;\" maxlength=\"14\" placeholder=\"Enter Phone Number\" #phoneInput\n            [formControl]=\"phoneNumberMSK\" [(ngModel)]=\"phoneNum\"></ion-input>\n\n          <ion-input *ngIf=\"countryCode != '+1'\" type=\"tel\" style=\"top: 22px;\n          left: 19px;\n          position: absolute;\n          padding-top: 5px;\" maxlength=\"14\" placeholder=\"Enter Phone Number\" [(ngModel)]=\"phoneNum\"></ion-input>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToOTP()\" style=\"margin-bottom: 12px;\" class=\"btn\">Text Me</button>\n\n\n\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row style=\"margin-top: 50px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"send()\" style=\"margin-bottom: 12px;\" class=\"btn\">Text Me</button>\n      </ion-col>\n    </ion-row> -->\n\n\n  </div>\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n<div [hidden]=\"matchpopupHidden\" style=\"    height: 100%;\nwidth: 100%;\nbackground-color: #000000;\nposition: absolute;\">\n\n\n  <img (click)=\"hidePopup()\" style=\"width: 20px;\n                margin-left: 30px;\" src=\"assets/imgs/left.svg\" class=\"top-margin-head-40\">\n\n  <div style=\"background: black; padding: 0px 20px 20px 20px; margin-top: 50px;\">\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: center;\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\"> <br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 16pt;\">Enter Your Verification Code</ion-label> <br>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">Enter your 6 digit verification OTP</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 10pt;\">Sent to {{completePhoneNum}}</ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"editNum()\">Edit</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <!-- ///////////////////// -->\n\n    <ion-row style=\"margin-top: 50px;\">\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp1\" maxlength=\"1\" #input1 (ionChange)=\"inp1Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp2\" maxlength=\"1\" #input2 (ionChange)=\"inp2Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp3\" maxlength=\"1\" #input3 (ionChange)=\"inp3Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp4\" maxlength=\"1\" #input4 (ionChange)=\"inp4Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n      <!-- 0000000000000000000000000 -->\n\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp5\" maxlength=\"1\" #input5 (ionChange)=\"inp5Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n\n      <ion-col size=\"2\" style=\"text-align:  -webkit-center;;\">\n\n        <ion-input type=\"tel\" class=\"inp\" style=\"height: 30pt;\n      width: 30pt;\" placeholder=\"0\" [(ngModel)]=\"otp6\" maxlength=\"1\" #input6 (ionChange)=\"inp6Change($event)\">\n        </ion-input>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 8pt;\">Didn't receive code? </ion-label>\n        <ion-text style=\"font-size: 10pt; margin-left: 10px;\" (click)=\"resendOTP()\">Resend</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"goToProfile1()\" style=\"margin-bottom: 12px;\" class=\"btn\">Confirm</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_gettingstart_gettingstart_module_ts-es2015.js.map