(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_termsservice_termsservice_module_ts"],{

/***/ 52302:
/*!*************************************************************!*\
  !*** ./src/app/termsservice/termsservice-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsservicePageRoutingModule": function() { return /* binding */ TermsservicePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _termsservice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsservice.page */ 88056);




const routes = [
    {
        path: '',
        component: _termsservice_page__WEBPACK_IMPORTED_MODULE_0__.TermsservicePage
    }
];
let TermsservicePageRoutingModule = class TermsservicePageRoutingModule {
};
TermsservicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsservicePageRoutingModule);



/***/ }),

/***/ 27059:
/*!*****************************************************!*\
  !*** ./src/app/termsservice/termsservice.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsservicePageModule": function() { return /* binding */ TermsservicePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _termsservice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termsservice-routing.module */ 52302);
/* harmony import */ var _termsservice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsservice.page */ 88056);







let TermsservicePageModule = class TermsservicePageModule {
};
TermsservicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _termsservice_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsservicePageRoutingModule
        ],
        declarations: [_termsservice_page__WEBPACK_IMPORTED_MODULE_1__.TermsservicePage]
    })
], TermsservicePageModule);



/***/ }),

/***/ 88056:
/*!***************************************************!*\
  !*** ./src/app/termsservice/termsservice.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsservicePage": function() { return /* binding */ TermsservicePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_termsservice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./termsservice.page.html */ 29182);
/* harmony import */ var _termsservice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termsservice.page.scss */ 48144);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let TermsservicePage = class TermsservicePage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
TermsservicePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
TermsservicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-termsservice',
        template: _raw_loader_termsservice_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_termsservice_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsservicePage);



/***/ }),

/***/ 48144:
/*!*****************************************************!*\
  !*** ./src/app/termsservice/termsservice.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  letter-spacing: 0.4px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zc2VydmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoidGVybXNzZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59Il19 */");

/***/ }),

/***/ 29182:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/termsservice/termsservice.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-text style=\"font-size: 15pt;\">Terms and Services</ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;margin-top: 70px;\">\n\n    <ion-row>\n      <ion-col>\n        <ion-text style=\"font-size:8pt ;\">\n          <h2><strong>Terms and Conditions</strong></h2>\n\n          <p>Welcome to https://thelevapp.co/!</p>\n\n          <p>These terms and conditions outline the rules and regulations for the use of The Lev's Website, located at\n            https://thelevapp.co/.</p>\n\n          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use\n            https://thelevapp.co/ if you do not agree to take all of the terms and conditions stated on this page.</p>\n\n          <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice\n            and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant\n            to the Company’s terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our\n            Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer,\n            acceptance and consideration of payment necessary to undertake the process of our assistance to the Client\n            in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision\n            of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use\n            of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are\n            taken as interchangeable and therefore as referring to same.</p>\n\n          <h3><strong>Cookies</strong></h3>\n\n          <p>We employ the use of cookies. By accessing https://thelevapp.co/, you agreed to use cookies in agreement\n            with the The Lev's Privacy Policy. </p>\n\n          <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are\n            used by our website to enable the functionality of certain areas to make it easier for people visiting our\n            website. Some of our affiliate/advertising partners may also use cookies.</p>\n\n          <h3><strong>License</strong></h3>\n\n          <p>Unless otherwise stated, The Lev and/or its licensors own the intellectual property rights for all material\n            on https://thelevapp.co/. All intellectual property rights are reserved. You may access this from\n            https://thelevapp.co/ for your own personal use subjected to restrictions set in these terms and conditions.\n          </p>\n\n          <p>You must not:</p>\n          <ul>\n            <li>Republish material from https://thelevapp.co/</li>\n            <li>Sell, rent or sub-license material from https://thelevapp.co/</li>\n            <li>Reproduce, duplicate or copy material from https://thelevapp.co/</li>\n            <li>Redistribute content from https://thelevapp.co/</li>\n          </ul>\n\n          <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the\n            <a href=\"https://www.termsfeed.com/terms-conditions-generator/\">TermsFeed Free Terms and Conditions\n              Generator</a>.\n          </p>\n\n          <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in\n            certain areas of the website. The Lev does not filter, edit, publish or review Comments prior to their\n            presence on the website. Comments do not reflect the views and opinions of The Lev,its agents and/or\n            affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the\n            extent permitted by applicable laws, The Lev shall not be liable for the Comments or for any liability,\n            damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of\n            the Comments on this website.</p>\n\n          <p>The Lev reserves the right to monitor all Comments and to remove any Comments which can be considered\n            inappropriate, offensive or causes breach of these Terms and Conditions.</p>\n\n          <p>You warrant and represent that:</p>\n\n          <ul>\n            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do\n              so;</li>\n            <li>The Comments do not invade any intellectual property right, including without limitation copyright,\n              patent or trademark of any third party;</li>\n            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material\n              which is an invasion of privacy</li>\n            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities\n              or unlawful activity.</li>\n          </ul>\n\n          <p>You hereby grant The Lev a non-exclusive license to use, reproduce, edit and authorize others to use,\n            reproduce and edit any of your Comments in any and all forms, formats or media.</p>\n\n          <h3><strong>Hyperlinking to our Content</strong></h3>\n\n          <p>The following organizations may link to our Website without prior written approval:</p>\n\n          <ul>\n            <li>Government agencies;</li>\n            <li>Search engines;</li>\n            <li>News organizations;</li>\n            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the\n              Websites of other listed businesses; and</li>\n            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,\n              and charity fundraising groups which may not hyperlink to our Web site.</li>\n          </ul>\n\n          <p>These organizations may link to our home page, to publications or to other Website information so long as\n            the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval\n            of the linking party and its products and/or services; and (c) fits within the context of the linking\n            party’s site.</p>\n\n          <p>We may consider and approve other link requests from the following types of organizations:</p>\n\n          <ul>\n            <li>commonly-known consumer and/or business information sources;</li>\n            <li>dot.com community sites;</li>\n            <li>associations or other groups representing charities;</li>\n            <li>online directory distributors;</li>\n            <li>internet portals;</li>\n            <li>accounting, law and consulting firms; and</li>\n            <li>educational institutions and trade associations.</li>\n          </ul>\n\n          <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us\n            look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any\n            negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence\n            of The Lev; and (d) the link is in the context of general resource information.</p>\n\n          <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b)\n            does not falsely imply sponsorship, endorsement or approval of the linking party and its products or\n            services; and (c) fits within the context of the linking party’s site.</p>\n\n          <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our\n            website, you must inform us by sending an e-mail to The Lev. Please include your name, your organization\n            name, contact information as well as the URL of your site, a list of any URLs from which you intend to link\n            to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a\n            response.</p>\n\n          <p>Approved organizations may hyperlink to our Website as follows:</p>\n\n          <ul>\n            <li>By use of our corporate name; or</li>\n            <li>By use of the uniform resource locator being linked to; or</li>\n            <li>By use of any other description of our Website being linked to that makes sense within the context and\n              format of content on the linking party’s site.</li>\n          </ul>\n\n          <p>No use of The Lev's logo or other artwork will be allowed for linking absent a trademark license agreement.\n          </p>\n\n          <h3><strong>iFrames</strong></h3>\n\n          <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in\n            any way the visual presentation or appearance of our Website.</p>\n\n          <h3><strong>Content Liability</strong></h3>\n\n          <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and\n            defend us against all claims that is rising on your Website. No link(s) should appear on any Website that\n            may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates\n            the infringement or other violation of, any third party rights.</p>\n\n          <h3><strong>Your Privacy</strong></h3>\n\n          <p>Please read Privacy Policy</p>\n\n          <h3><strong>Reservation of Rights</strong></h3>\n\n          <p>We reserve the right to request that you remove all links or any particular link to our Website. You\n            approve to immediately remove all links to our Website upon request. We also reserve the right to amen these\n            terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree\n            to be bound to and follow these linking terms and conditions.</p>\n\n          <h3><strong>Removal of links from our website</strong></h3>\n\n          <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us\n            any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you\n            directly.</p>\n\n          <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or\n            accuracy; nor do we promise to ensure that the website remains available or that the material on the website\n            is kept up to date.</p>\n\n          <h3><strong>Disclaimer</strong></h3>\n\n          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and\n            conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>\n\n          <ul>\n            <li>limit or exclude our or your liability for death or personal injury;</li>\n            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\n            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\n            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\n          </ul>\n\n          <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are\n            subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including\n            liabilities arising in contract, in tort and for breach of statutory duty.</p>\n\n          <p>As long as the website and the information and services on the website are provided free of charge, we will\n            not be liable for any loss or damage of any nature.</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_termsservice_termsservice_module_ts-es2015.js.map