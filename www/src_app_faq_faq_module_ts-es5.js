(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_faq_faq_module_ts"], {
    /***/
    62783:
    /*!*******************************************!*\
      !*** ./src/app/faq/faq-routing.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqPageRoutingModule": function FaqPageRoutingModule() {
          return (
            /* binding */
            _FaqPageRoutingModule
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


      var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./faq.page */
      24864);

      var routes = [{
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
      }];

      var _FaqPageRoutingModule = function FaqPageRoutingModule() {
        _classCallCheck(this, FaqPageRoutingModule);
      };

      _FaqPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FaqPageRoutingModule);
      /***/
    },

    /***/
    5083:
    /*!***********************************!*\
      !*** ./src/app/faq/faq.module.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqPageModule": function FaqPageModule() {
          return (
            /* binding */
            _FaqPageModule
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


      var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./faq-routing.module */
      62783);
      /* harmony import */


      var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./faq.page */
      24864);

      var _FaqPageModule = function FaqPageModule() {
        _classCallCheck(this, FaqPageModule);
      };

      _FaqPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
      })], _FaqPageModule);
      /***/
    },

    /***/
    24864:
    /*!*********************************!*\
      !*** ./src/app/faq/faq.page.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqPage": function FaqPage() {
          return (
            /* binding */
            _FaqPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./faq.page.html */
      18576);
      /* harmony import */


      var _faq_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./faq.page.scss */
      87125);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FaqPage = /*#__PURE__*/function () {
        function FaqPage(location) {
          _classCallCheck(this, FaqPage);

          this.location = location;
        }

        _createClass(FaqPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return FaqPage;
      }();

      _FaqPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location
        }];
      };

      _FaqPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FaqPage);
      /***/
    },

    /***/
    87125:
    /*!***********************************!*\
      !*** ./src/app/faq/faq.page.scss ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    18576:
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-text style=\"font-size: 15pt;\">FAQ's</ion-text>\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <div>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12pt;\">Who Is Eligible To Apply?</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 8pt;\">Although, LEV is culturally Jewish, anyone between the ages of 21-50 can\n            enjoy it.\n            As we continue to grow\n            our database, we hope to expand on this. We are growing and are currently only reviewing applicants who are\n            from\n            or are living in California, New York, Florida, Texas and Illinois. Sign up for our newsletter to be\n            notified\n            about updates.</ion-text>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12pt;\">What Is The Application Process Look Like?</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 8pt;\">We are looking for applicants who aren’t interested in swiping anymore! You\n            know what you want and are ready to find it. Once we release our application - Please provide thorough\n            responses to each of the questions and include a photo. Our lead time is currently about 2 weeks. If you are\n            accepted, you will receive an email with login information and further instructions. Before your profile is\n            published it will be reviewed once more. (We won’t accept grainy photos, or lackluster prompt responses)\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n\n      <!-- <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12pt;\">Are There Any Other Requirements? What Makes You Different?</ion-label>\n        </ion-col>\n      </ion-row> -->\n\n\n      <!-- <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 8pt;\">We want to create a space where people are making thoughtful selections. We\n            value quality over quantity. Please don’t apply or accept a match if you aren’t willing to adhere to our\n            community rules. We will be releasing further information regarding our features as we approach our launch\n            date.</ion-text>\n        </ion-col>\n      </ion-row> -->\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12pt;\">Who Is The Matchmaker?</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 8pt;\">To start, our matches will be suggested by a live human. We are returning to\n            the basics. You can reach out through the chat function to offer feedback and make suggestions. We want to\n            make this work.</ion-text>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 12pt;\">How Do You Get A Match?</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-size: 8pt;\">You will receive matches as our matchmaker sees fit. If both parties approve\n            then information will be exchanged.</ion-text>\n        </ion-col>\n      </ion-row>\n\n\n\n    </div>\n\n\n\n\n\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_faq_faq_module_ts-es5.js.map