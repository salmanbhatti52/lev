(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_prompt3update_prompt3update_module_ts"], {
    /***/
    43480:
    /*!***************************************************************!*\
      !*** ./src/app/prompt3update/prompt3update-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt3updatePageRoutingModule": function Prompt3updatePageRoutingModule() {
          return (
            /* binding */
            _Prompt3updatePageRoutingModule
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


      var _prompt3update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt3update.page */
      24560);

      var routes = [{
        path: '',
        component: _prompt3update_page__WEBPACK_IMPORTED_MODULE_0__.Prompt3updatePage
      }];

      var _Prompt3updatePageRoutingModule = function Prompt3updatePageRoutingModule() {
        _classCallCheck(this, Prompt3updatePageRoutingModule);
      };

      _Prompt3updatePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Prompt3updatePageRoutingModule);
      /***/
    },

    /***/
    86646:
    /*!*******************************************************!*\
      !*** ./src/app/prompt3update/prompt3update.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt3updatePageModule": function Prompt3updatePageModule() {
          return (
            /* binding */
            _Prompt3updatePageModule
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


      var _prompt3update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt3update-routing.module */
      43480);
      /* harmony import */


      var _prompt3update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt3update.page */
      24560);

      var _Prompt3updatePageModule = function Prompt3updatePageModule() {
        _classCallCheck(this, Prompt3updatePageModule);
      };

      _Prompt3updatePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _prompt3update_routing_module__WEBPACK_IMPORTED_MODULE_0__.Prompt3updatePageRoutingModule],
        declarations: [_prompt3update_page__WEBPACK_IMPORTED_MODULE_1__.Prompt3updatePage]
      })], _Prompt3updatePageModule);
      /***/
    },

    /***/
    24560:
    /*!*****************************************************!*\
      !*** ./src/app/prompt3update/prompt3update.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt3updatePage": function Prompt3updatePage() {
          return (
            /* binding */
            _Prompt3updatePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prompt3update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prompt3update.page.html */
      83898);
      /* harmony import */


      var _prompt3update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt3update.page.scss */
      46991);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _Prompt3updatePage = /*#__PURE__*/function () {
        function Prompt3updatePage(location, signupService, restService, router, workService) {
          _classCallCheck(this, Prompt3updatePage);

          this.location = location;
          this.signupService = signupService;
          this.restService = restService;
          this.router = router;
          this.workService = workService;
          this.prompt = '';
          this.promptTitle = '';
          this.user_prompts_array = '';
          this.prompts1show = true;
          this.prompt1Name = '';
          this.prompt1Data = '';
        }

        _createClass(Prompt3updatePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.prompt1Name = localStorage.getItem('prompt3Name');
            this.prompt1Data = localStorage.getItem('prompt3Data');
          }
        }, {
          key: "showprompt1",
          value: function showprompt1() {
            if (this.prompts1show) {
              this.prompts1show = false;
            } else {
              this.prompts1show = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user_prompts_array = this.workService.systemData.system_prompt;
            console.log('user Prompts', this.user_prompts_array); // var stringy = JSON.stringify({
            // })
            // // this.workService.presentLoading()
            // this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
            //   console.log('incomming data----', res)
            //   // this.workService.hideLoading()
            //   if (res.status == "success") {
            //     console.log(res.data)
            //     console.log('user dataaaa', res.data.system_prompt);
            //     this.user_prompts_array = res.data.system_prompt
            //   }
            // })
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            localStorage.setItem('prompt1Val', this.prompt);
            localStorage.setItem('prompt3Data', this.prompt1Data);
            this.signupService.prompt1Val = this.prompt;
            this.location.back();
          }
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.prompt1Data = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "prompt1",
          value: function prompt1(item, i) {
            console.log('prompt1Name', item.name);
            this.prompt1Name = item.name;
            localStorage.setItem('prompt3Name', item.name);
            localStorage.setItem('prompt3ValHead', item.system_prompt_id);
            this.prompts1show = true; //this.router.navigate(['prompt1']);
          }
        }]);

        return Prompt3updatePage;
      }();

      _Prompt3updatePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService
        }];
      };

      _Prompt3updatePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-prompt3update',
        template: _raw_loader_prompt3update_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prompt3update_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Prompt3updatePage);
      /***/
    },

    /***/
    46991:
    /*!*******************************************************!*\
      !*** ./src/app/prompt3update/prompt3update.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdDN1cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJwcm9tcHQzdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    83898:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompt3update/prompt3update.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-row style=\"margin-right: 20px\" class=\"top-margin-head-40\">\n    <ion-col style=\"text-align: right; padding-right: 24px;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/close.svg\" />\n    </ion-col>\n  </ion-row>\n\n\n\n  <div style=\"padding: 0px 24px 10px 26px;\" class=\"margin-top-fixed\">\n\n\n    <ion-row (click)=\"showprompt1()\" style=\"    background: #313131;\n    padding: 10px; border-radius: 10px;\">\n      <ion-col size=\"10\">\n        <ion-text style=\"font-size: 9pt; \" [class.redclass]=\"prompt1ValStatus\">{{prompt1Name}}\n        </ion-text>\n      </ion-col>\n\n      <ion-col size=\"2\" style=\"text-align: right;\">\n        <img *ngIf=\"prompts1show\" style=\"width: 16px;\n        height: 16px;\" src=\"assets/imgs/down.png\">\n        <img *ngIf=\"!prompts1show\" style=\"width: 16px;\n         height: 16px;\" src=\"assets/imgs/up.png\">\n      </ion-col>\n\n\n    </ion-row>\n\n    <div [hidden]=\"prompts1show\" style=\"height: 85px;\n      overflow: auto;\">\n\n      <h6 (click)=\"prompt1(nat,i)\" *ngFor=\"let nat of user_prompts_array ; let i = index\">{{nat.name}}\n      </h6>\n\n    </div>\n\n\n\n  </div>\n\n\n\n\n  <div style=\"padding: 20px 20px 20px 20px\">\n\n\n    <ion-row style=\"margin-top: -10px\">\n      <ion-col>\n        <ion-textarea style=\"\n            height: 170px;\n            border-radius: 10px;\n            background: rgba(112, 112, 112, 0.44);\n          \" placeholder=\"Write here....\" [(ngModel)]=\"prompt1Data\" (ionChange)=\"changeFunction($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row style=\"width: 100%; position: absolute; bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goToProfile()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_prompt3update_prompt3update_module_ts-es5.js.map