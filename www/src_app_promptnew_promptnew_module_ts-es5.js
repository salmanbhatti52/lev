(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_promptnew_promptnew_module_ts"], {
    /***/
    21867:
    /*!*******************************************************!*\
      !*** ./src/app/promptnew/promptnew-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PromptnewPageRoutingModule": function PromptnewPageRoutingModule() {
          return (
            /* binding */
            _PromptnewPageRoutingModule
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


      var _promptnew_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./promptnew.page */
      57036);

      var routes = [{
        path: '',
        component: _promptnew_page__WEBPACK_IMPORTED_MODULE_0__.PromptnewPage
      }];

      var _PromptnewPageRoutingModule = function PromptnewPageRoutingModule() {
        _classCallCheck(this, PromptnewPageRoutingModule);
      };

      _PromptnewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PromptnewPageRoutingModule);
      /***/
    },

    /***/
    21190:
    /*!***********************************************!*\
      !*** ./src/app/promptnew/promptnew.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PromptnewPageModule": function PromptnewPageModule() {
          return (
            /* binding */
            _PromptnewPageModule
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


      var _promptnew_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./promptnew-routing.module */
      21867);
      /* harmony import */


      var _promptnew_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./promptnew.page */
      57036);

      var _PromptnewPageModule = function PromptnewPageModule() {
        _classCallCheck(this, PromptnewPageModule);
      };

      _PromptnewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _promptnew_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromptnewPageRoutingModule],
        declarations: [_promptnew_page__WEBPACK_IMPORTED_MODULE_1__.PromptnewPage]
      })], _PromptnewPageModule);
      /***/
    },

    /***/
    57036:
    /*!*********************************************!*\
      !*** ./src/app/promptnew/promptnew.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PromptnewPage": function PromptnewPage() {
          return (
            /* binding */
            _PromptnewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_promptnew_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./promptnew.page.html */
      39751);
      /* harmony import */


      var _promptnew_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./promptnew.page.scss */
      41473);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var _PromptnewPage = /*#__PURE__*/function () {
        function PromptnewPage(router, location, restService, workService) {
          _classCallCheck(this, PromptnewPage);

          this.router = router;
          this.location = location;
          this.restService = restService;
          this.workService = workService;
          this.pvalue1 = 0.60;
          this.pvalue2 = 0.78;
          this.questionNo = 0;
          this.currentQuestion = '';
          this.currentQuestionDesc = '';
          this.currentQuestionID = '';
          this.currentQuestionOption1 = '';
          this.currentQuestionOption1ID = '';
          this.percentage1 = '';
          this.percentage1percent = '';
          this.currentQuestionOption2 = '';
          this.currentQuestionOption2ID = '';
          this.percentage2 = '';
          this.percentage2percent = '';
          this.question = '';
          this.commnent = '';
          this.commentStatus = false;
          this.noMoreQuestion = false;
        }

        _createClass(PromptnewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            var stringy = JSON.stringify({});
            this.workService.presentLoading();
            this.restService.getSystemDataAPI(stringy).subscribe(function (res) {
              console.log('incomming data----', res);

              _this.workService.hideLoading();

              if (res.status == "success") {
                console.log(res.data); // console.log('instalgrammm', res.data.system_instagram);

                localStorage.setItem('user_instagram', res.data.system_instagram);
                _this.question = res.data.system_polsqs;
                console.log('systm pols---', _this.question);
                _this.currentQuestion = _this.question[_this.questionNo].name;
                _this.currentQuestionDesc = _this.question[_this.questionNo].desc;
                _this.currentQuestionID = _this.question[_this.questionNo].system_polsqs_id; ///////////////////

                _this.currentQuestionOption1 = _this.question[_this.questionNo].options[0].title;
                _this.currentQuestionOption1ID = _this.question[_this.questionNo].options[0].system_polsqs_options_id;
                _this.percentage1 = _this.question[_this.questionNo].options[0].percentage;

                if (_this.percentage1 == 100) {
                  _this.percentage1percent = _this.percentage1;
                } else {
                  _this.percentage1percent = '0.' + _this.percentage1;
                }

                _this.currentQuestionOption2 = _this.question[_this.questionNo].options[1].title;
                _this.currentQuestionOption2ID = _this.question[_this.questionNo].options[1].system_polsqs_options_id;
                _this.percentage2 = _this.question[_this.questionNo].options[1].percentage;

                if (_this.percentage2 == 100) {
                  _this.percentage2percent = _this.percentage2;
                } else {
                  _this.percentage2percent = '0.' + _this.percentage2;
                }

                console.log('percentage2percent---', _this.percentage2percent);
                console.log('percentage2---', _this.percentage2);
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "goToSubscription",
          value: function goToSubscription(system_polsqs_options_id) {
            var _this2 = this;

            console.log('Comment------------', this.commnent);
            this.commnent = "aaaa";

            if (system_polsqs_options_id != '') {
              console.log('system_polsqs_options_id-----', system_polsqs_options_id);
              this.workService.presentLoading();
              var ss = JSON.stringify({
                "users_customers_id": localStorage.getItem('loggedinUserID'),
                "system_polsqs_options_id": system_polsqs_options_id,
                "system_polsqs_id": this.currentQuestionID
              });
              console.log('outgoing data---', ss);
              this.restService.create_polsqsAPI(ss).subscribe(function (res) {
                _this2.workService.hideLoading();

                console.log('res===>', res);

                if (res.status == 'success') {
                  _this2.commnent = '';

                  if (_this2.question.length == 1) {
                    _this2.noMoreQuestion = true; // this.router.navigate(['tabs/tab1'], { replaceUrl: true });
                  } else {
                    _this2.removeItem(_this2.questionNo); // this.questionNo = this.questionNo + 1


                    console.log('question===>', _this2.question);
                    console.log('questionNo===>', _this2.questionNo);
                    _this2.currentQuestion = _this2.question[_this2.questionNo].name;
                    _this2.currentQuestionDesc = _this2.question[_this2.questionNo].desc;
                    _this2.currentQuestionID = _this2.question[_this2.questionNo].system_polsqs_id;
                    _this2.currentQuestionOption1 = _this2.question[_this2.questionNo].options[0].title;
                    _this2.currentQuestionOption1ID = _this2.question[_this2.questionNo].options[0].system_polsqs_options_id;
                    _this2.percentage1 = _this2.question[_this2.questionNo].options[0].percentage;

                    if (_this2.percentage1 == 100) {
                      _this2.percentage1percent = _this2.percentage1;
                    } else {
                      _this2.percentage1percent = '0.' + _this2.percentage1;
                    }

                    _this2.currentQuestionOption2 = _this2.question[_this2.questionNo].options[1].title;
                    _this2.currentQuestionOption2ID = _this2.question[_this2.questionNo].options[1].system_polsqs_options_id;
                    _this2.percentage2 = _this2.question[_this2.questionNo].options[1].percentage;

                    if (_this2.percentage2 == 100) {
                      _this2.percentage2percent = _this2.percentage2;
                    } else {
                      _this2.percentage2percent = '0.' + _this2.percentage2;
                    }
                  } // 

                }
              }, function (err) {
                _this2.workService.hideLoading();

                _this2.workService.presentToast('Network error occured');
              }); //this.router.navigate(['subscription']);
            } else {
              this.commentStatus = true;
              setTimeout(function () {
                _this2.commentStatus = false;
              }, 3000);
            }
          }
        }, {
          key: "removeItem",
          value: function removeItem(i) {
            this.question.splice(i, 1);
            console.log(this.question);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            // this.location.back()
            this.router.navigate(['apply'], {
              replaceUrl: true
            });
          }
        }, {
          key: "subSttFun",
          value: function subSttFun(val) {
            // console.log('avvvvvvvvvvvvv', val);
            var vv = "Whats your Name  "; // console.log('vvv----', vv.length);

            if (val.length > 44) {
              return val.substring(0, 44) + "...";
            } else {
              return val;
            }
          }
        }]);

        return PromptnewPage;
      }();

      _PromptnewPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _PromptnewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-promptnew',
        template: _raw_loader_promptnew_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_promptnew_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PromptnewPage);
      /***/
    },

    /***/
    41473:
    /*!***********************************************!*\
      !*** ./src/app/promptnew/promptnew.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 190pt;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n@media (orientation: portrait) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n@media (orientation: landscape) {\n  .v-center-s {\n    width: 100%;\n    position: relative;\n    left: 50%;\n    top: 70%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n\n.progress1 {\n  --background: #9a9a9a;\n  padding: 0px;\n  border-radius: 20px;\n  --progress-background: #314f40;\n  margin-top: 1%;\n  height: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdG5ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLHFCQUFBO0FBREo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJwcm9tcHRuZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMmQyZDM5O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTkwcHQ7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbnAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC52LWNlbnRlci1zIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAudi1jZW50ZXItcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiA3MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cblxuLnJlZEJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLnByb2dyZXNzMSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOWE5YTlhO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzMxNGY0MDtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBoZWlnaHQ6IDU4cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    39751:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/promptnew/promptnew.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"--background: #314f40\">\n  <div class=\"v-center-s\" style=\"padding: 20px\">\n    <ion-row style=\"background: black; padding-top: 20px; padding-bottom: 20px\">\n      <img (click)=\"goBack()\" style=\"position: absolute; height: 15px; width: 15px; right: 35px\"\n        src=\"assets/imgs/close.svg\" />\n\n      <ion-col style=\"text-align: center; margin-top: 25px\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n\n        <div style=\"\n            padding: 10px;\n            /* border: 1px solid white; */\n            height: max-content;\n            margin: 0px 0px 0px 0px;\">\n\n\n          <div *ngIf=\"noMoreQuestion\">\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 15pt\">No more poll questions to show</label>\n              </ion-col>\n            </ion-row>\n\n\n          </div>\n\n          <div *ngIf=\"!noMoreQuestion\">\n\n            <ion-row>\n              <ion-col style=\"text-align: center\">\n                <label style=\"font-size: 12pt\">{{currentQuestion}}</label>\n              </ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col style=\"text-align: center\">\n                <ion-text style=\"font-size: 8pt\">{{currentQuestionDesc}} </ion-text>\n              </ion-col>\n            </ion-row> -->\n\n            <ion-row style=\"margin: 10px 14px 0px 14px\">\n              <ion-col style=\"text-align: left;\">\n                <!-- <ion-input [class.redBorder]=\"commentStatus\" class=\"inp\" autocapitalize=\"word\" placeholder=\"Add a comment\"\n                  [(ngModel)]=\"commnent\">\n                </ion-input> -->\n                <div (click)=\"goToSubscription(currentQuestionOption1ID)\" style=\"    display: flex;\n                position: relative;\n                align-items: center;\">\n\n                  <label style=\"    position: absolute;\n                  font-size: 13pt;\n                  z-index: 9999;\n                  left: 24px;\n                  color: white;\n                  font-weight: 600;\n                  overflow: hidden;\n                  /* height: 50px; */\n                  width: 70%;\">{{ subSttFun(currentQuestionOption1) }}</label>\n\n                  <ion-label style=\"    position: absolute;\n                          z-index: 9999;\n                          right: 13px;\n                          font-weight: 600;\n                          font-size: 20px;\">{{percentage1 | number : '1.0-0'}} %</ion-label>\n\n\n\n                  <ion-progress-bar class=\"progress1\" value={{percentage1percent}}></ion-progress-bar>\n\n                </div>\n\n                <div (click)=\"goToSubscription(currentQuestionOption2ID)\" style=\"display: flex;\n                position: relative;\n                align-items: center;\n                margin-top: 17px;\">\n                  <label style=\"    position: absolute;\n                  font-size: 13pt;\n                  z-index: 9999;\n                  left: 24px;\n                  color: white;\n                  font-weight: 600;\n                  overflow: hidden;\n                  /* height: 50px; */\n                  width: 70%;\">{{ subSttFun(currentQuestionOption2) }}</label>\n\n                  <ion-label style=\"    position: absolute;\n                  z-index: 9999;\n                  right: 13px;\n                  font-weight: 600;\n                  font-size: 20px;\">{{percentage2 | number : '1.0-0'}} %</ion-label>\n\n                  <ion-progress-bar class=\"progress1\" value={{percentage2percent}}></ion-progress-bar>\n\n                </div>\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </div>\n\n\n        <div *ngIf=\"!noMoreQuestion\">\n\n\n\n          <!-- <ion-row style=\"margin: 10px 14px 0px 14px\">\n            <ion-col>\n              <button (click)=\"goToSubscription()\" class=\"btn\" style=\"width: 100%\">\n                Submit\n              </button>\n            </ion-col>\n          </ion-row> -->\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_promptnew_promptnew_module_ts-es5.js.map