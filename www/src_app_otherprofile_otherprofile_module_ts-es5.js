(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_otherprofile_otherprofile_module_ts"], {
    /***/
    93587:
    /*!*************************************************************!*\
      !*** ./src/app/otherprofile/otherprofile-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherprofilePageRoutingModule": function OtherprofilePageRoutingModule() {
          return (
            /* binding */
            _OtherprofilePageRoutingModule
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


      var _otherprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otherprofile.page */
      54806);

      var routes = [{
        path: '',
        component: _otherprofile_page__WEBPACK_IMPORTED_MODULE_0__.OtherprofilePage
      }];

      var _OtherprofilePageRoutingModule = function OtherprofilePageRoutingModule() {
        _classCallCheck(this, OtherprofilePageRoutingModule);
      };

      _OtherprofilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtherprofilePageRoutingModule);
      /***/
    },

    /***/
    15699:
    /*!*****************************************************!*\
      !*** ./src/app/otherprofile/otherprofile.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherprofilePageModule": function OtherprofilePageModule() {
          return (
            /* binding */
            _OtherprofilePageModule
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


      var _otherprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otherprofile-routing.module */
      93587);
      /* harmony import */


      var _otherprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otherprofile.page */
      54806);

      var _OtherprofilePageModule = function OtherprofilePageModule() {
        _classCallCheck(this, OtherprofilePageModule);
      };

      _OtherprofilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otherprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherprofilePageRoutingModule],
        declarations: [_otherprofile_page__WEBPACK_IMPORTED_MODULE_1__.OtherprofilePage]
      })], _OtherprofilePageModule);
      /***/
    },

    /***/
    54806:
    /*!***************************************************!*\
      !*** ./src/app/otherprofile/otherprofile.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtherprofilePage": function OtherprofilePage() {
          return (
            /* binding */
            _OtherprofilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_otherprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otherprofile.page.html */
      4434);
      /* harmony import */


      var _otherprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otherprofile.page.scss */
      83429);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _userservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../userservice.service */
      75157);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _OtherprofilePage = /*#__PURE__*/function () {
        function OtherprofilePage(location, router, workService, restService, userService, alertcontroller) {
          _classCallCheck(this, OtherprofilePage);

          this.location = location;
          this.router = router;
          this.workService = workService;
          this.restService = restService;
          this.userService = userService;
          this.alertcontroller = alertcontroller;
          this.viewProfilePopupHidden = false;
          this.userData = '';
          this.userPrompts = '';
          this.userSchool = '';
          this.prompt1Head = '';
          this.prompt1Data = '';
          this.prompt2Head = '';
          this.prompt2Data = '';
          this.prompt3Head = '';
          this.prompt3Data = '';
          this.userHeight = '';
          this.height1 = '';
          this.height2 = '';
          this.popupHiddon = true;
          this.promptToReply = '';
          this.promptReplyID = '';
          this.prompt1ID = '';
          this.prompt2ID = '';
          this.prompt3ID = '';
          this.otherUserID = '';
          this.promptReply = '';
          this.replyStatus = false;
          this.prompt1UserReply = '';
          this.prompt2UserReply = '';
          this.prompt3UserReply = '';
          this.prompt1Loader = true;
          this.prompt2Loader = true;
          this.prompt3Loader = true;
          this.p = 0;
        }

        _createClass(OtherprofilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            //this.workService.presentLoading()
            this.workService.presentLoading();
            this.otherUserID = this.workService.myUserData.users_customers_id;
            console.log('other user id on otherprofile page line 82', this.otherUserID);
            var data = {
              loginuser: localStorage.getItem('loggedinUserID'),
              otheruser: this.otherUserID
            };
            console.log('data get==', data);
            this.restService.get_user_dataAPI(data).subscribe(function (res) {
              _this.workService.hideLoading();

              console.log('incomming data === ', res);

              if (res.status == "success") {
                console.log('other profile ---->>');
                _this.userData = res.data.user_data;
                _this.userSchool = res.data.users_schools;
                _this.userPrompts = res.data.users_prompts;
                console.log('name----------', _this.userData);

                try {
                  _this.prompt1Head = _this.userPrompts[0].prompt_name;
                  _this.prompt1Data = _this.userPrompts[0].comments;
                  _this.prompt1ID = _this.userPrompts[0].users_prompts_id;
                } catch (e) {}

                try {
                  _this.prompt2Head = _this.userPrompts[1].prompt_name;
                  _this.prompt2Data = _this.userPrompts[1].comments;
                  _this.prompt2ID = _this.userPrompts[1].users_prompts_id;
                } catch (e) {}

                try {
                  _this.prompt3Head = _this.userPrompts[2].prompt_name;
                  _this.prompt3Data = _this.userPrompts[2].comments;
                  _this.prompt3ID = _this.userPrompts[2].users_prompts_id;
                } catch (e) {}

                _this.userHeight = parseFloat(_this.userData.height).toFixed(1);
                _this.height1 = _this.userHeight.substring(0, 1);
                _this.height2 = _this.userHeight.substring(2, 3); //////////////////1111111111111111111111111

                var s1 = JSON.stringify({
                  'users_customers_id': localStorage.getItem('loggedinUserID'),
                  'other_users_customers_id': _this.otherUserID,
                  'system_prompt_id': _this.prompt1ID
                });
                console.log('ss-----', s1);

                _this.restService.get_prompt_repliesAPI(s1).subscribe(function (res) {
                  console.log('res---s1>', res);
                  _this.prompt1Loader = false;

                  if (res.status == 'success') {
                    _this.prompt1UserReply = res.data[0].system_prompt_reply;
                  }

                  console.log('res---s1>', _this.prompt1UserReply);
                }, function (err) {
                  _this.workService.hideLoading();

                  _this.workService.presentToast('Network error occured');
                }); //////////////////22222222222222222222222


                var s2 = JSON.stringify({
                  'users_customers_id': localStorage.getItem('loggedinUserID'),
                  'other_users_customers_id': _this.otherUserID,
                  'system_prompt_id': _this.prompt2ID
                });
                console.log('ss-----', s2);

                _this.restService.get_prompt_repliesAPI(s2).subscribe(function (res) {
                  console.log('res---s2>', res);
                  _this.prompt2Loader = false;

                  if (res.status == 'success') {
                    _this.prompt2UserReply = res.data[0].system_prompt_reply;
                  }

                  console.log('res---s2>', _this.prompt1UserReply);
                }, function (err) {
                  _this.workService.hideLoading();

                  _this.workService.presentToast('Network error occured');
                }); ///////////////3333333333333333333333333


                var s3 = JSON.stringify({
                  'users_customers_id': localStorage.getItem('loggedinUserID'),
                  'other_users_customers_id': _this.otherUserID,
                  'system_prompt_id': _this.prompt3ID
                });
                console.log('ss-----s3', s3);

                _this.restService.get_prompt_repliesAPI(s3).subscribe(function (res) {
                  console.log('res---s3>', res);
                  _this.prompt3Loader = false;

                  if (res.status == 'success') {
                    _this.prompt3UserReply = res.data[0].system_prompt_reply;
                  }

                  console.log('res---s3>', _this.prompt1UserReply);
                }, function (err) {
                  _this.workService.hideLoading();

                  _this.workService.presentToast('Network error occured');
                });
              }

              if (res.status == 'error') {
                _this.viewProfilePopupHidden = true;
                _this.prompt1Loader = false;
                _this.prompt2Loader = false;
                _this.prompt3Loader = false;

                _this.basicAlert(res.message);
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            }); // this.restService.get_user_dataAPI(5).subscribe((res: any) => {
            //   this.workService.hideLoading()
            //   console.log('incomming data === ', res);
            //   if (res.status == "success") {
            //     this.userData = res.data.user_data
            //     this.userSchool = res.data.users_schools
            //     this.userPrompts = res.data.users_prompts
            //     console.log('name----------', this.userPrompts[0].prompt_name);
            //     this.prompt1Head = this.userPrompts[0].prompt_name
            //     this.prompt1Data = this.userPrompts[0].comments
            //     this.prompt2Head = this.userPrompts[1].prompt_name
            //     this.prompt2Data = this.userPrompts[1].comments
            //     this.prompt3Head = this.userPrompts[2].prompt_name
            //     this.prompt3Data = this.userPrompts[2].comments
            //     console.log('rrrrrrrrrr------', res.data.user_data.height);
            //     this.userHeight =parseFloat(res.data.user_data.height).toFixed(1)
            //   }
            // })
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back(); // this.router.navigate(['tabs/tab3'], { replaceUrl: true })
          }
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.promptReply = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "goToEditProfile",
          value: function goToEditProfile() {
            this.router.navigate(['editprofile']);
          }
        }, {
          key: "handleImgError",
          value: function handleImgError(ev, item, url) {
            var source = ev.srcElement;
            var imgSrc = "assets/imgs/placeholder.jpg";
            source.src = imgSrc;
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.promptReply = '';
            this.popupHiddon = true;
          }
        }, {
          key: "prompt1ShareClick",
          value: function prompt1ShareClick() {
            this.p = 1;

            if (this.prompt1UserReply != '') {
              this.workService.presentToast('You have already replied to this prompt');
            } else {
              this.promptReplyID = this.prompt1ID;
              this.promptToReply = this.prompt1Head;
              this.popupHiddon = false;
              console.log('prompot 1 clcik');
            }
          }
        }, {
          key: "prompt2ShareClick",
          value: function prompt2ShareClick() {
            this.p = 2;

            if (this.prompt2UserReply != '') {
              this.workService.presentToast('You have already replied to this prompt');
            } else {
              this.promptReplyID = this.prompt2ID;
              this.promptToReply = this.prompt2Head;
              this.popupHiddon = false;
              console.log('prompot 2 clcik');
            }
          }
        }, {
          key: "prompt3ShareClick",
          value: function prompt3ShareClick() {
            this.p = 3;

            if (this.prompt3UserReply != '') {
              this.workService.presentToast('You have already replied to this prompt');
            } else {
              this.promptReplyID = this.prompt3ID;
              this.promptToReply = this.prompt3Head;
              this.popupHiddon = false;
              console.log('prompot 3 clcik');
            }
          }
        }, {
          key: "replyPrompt",
          value: function replyPrompt() {
            var _this2 = this;

            if (this.promptReply != '') {
              var stringy = JSON.stringify({
                'users_customers_id': localStorage.getItem('loggedinUserID'),
                'other_users_customers_id': this.otherUserID,
                'system_prompt_id': this.promptReplyID,
                'system_prompt_reply': this.promptReply
              });
              console.log(stringy);
              this.workService.presentLoading();
              this.restService.save_prompt_repliesAPI(stringy).subscribe(function (res) {
                _this2.workService.hideLoading();

                if (res.status == 'success') {
                  console.log('p----------', _this2.p);

                  if (_this2.p == 1) {
                    _this2.prompt1UserReply = _this2.promptReply;

                    _this2.startchat(_this2.prompt1UserReply);
                  }

                  if (_this2.p == 2) {
                    _this2.prompt2UserReply = _this2.promptReply;

                    _this2.startchat(_this2.prompt2UserReply);
                  }

                  if (_this2.p == 3) {
                    _this2.prompt3UserReply = _this2.promptReply;

                    _this2.startchat(_this2.prompt3UserReply);
                  }

                  _this2.workService.presentToast(res.message);

                  _this2.popupHiddon = true;
                  _this2.promptReply = '';
                } else {
                  _this2.workService.presentToast(res.message);

                  _this2.popupHiddon = true;
                }

                console.log('resssss', res);
              }, function (err) {
                _this2.workService.hideLoading();

                _this2.workService.presentToast('Network error occured');
              });
            } else {
              this.replyStatus = true;
              setTimeout(function () {
                _this2.replyStatus = false;
              }, 3000);
            }
          }
        }, {
          key: "startchat",
          value: function startchat(promptUserReply) {
            var _this3 = this;

            var ss = JSON.stringify({
              "request_type": "startChat",
              "users_customers_id": localStorage.getItem('loggedinUserID'),
              "reciever_users_customers_id": this.otherUserID
            });
            this.restService.chat_messagesAPI(ss).subscribe(function (res) {
              console.log('res--->>chat-->>', res);

              _this3.sendMessage(promptUserReply);
            }, function (err) {
              _this3.workService.hideLoading();

              _this3.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(promptUserReply) {
            var _this4 = this;

            var data = JSON.stringify({
              request_type: "sendMessage",
              sender_users_customers_id: localStorage.getItem('loggedinUserID'),
              // sender_users_customers_id: 15,
              reciever_users_customers_id: this.otherUserID,
              msgType: "text",
              chatMsg: this.promptToReply + '\n \n' + promptUserReply
            });
            this.restService.chat_messagesAPI(data).subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log("response", res);

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            }, function (err) {
              _this4.workService.hideLoading();

              _this4.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "hidePopupViewProfile",
          value: function hidePopupViewProfile() {
            this.viewProfilePopupHidden = true;
          }
        }, {
          key: "basicAlert",
          value: function basicAlert(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertcontroller.create({
                        cssClass: 'basicAlert',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return OtherprofilePage;
      }();

      _OtherprofilePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _userservice_service__WEBPACK_IMPORTED_MODULE_4__.UserserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }];
      };

      _OtherprofilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-otherprofile',
        template: _raw_loader_otherprofile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otherprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtherprofilePage);
      /***/
    },

    /***/
    83429:
    /*!*****************************************************!*\
      !*** ./src/app/otherprofile/otherprofile.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.redBorder {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVycHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJvdGhlcnByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uaW5wIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyZDJkMzk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ucmVkQm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    4434:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otherprofile/otherprofile.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width:20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: center;\">\n\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row style=\"margin-top: 90px;\">\n    <ion-col style=\"text-align: left;\">\n      <p style=\"margin-left: 14px;\n      font-size: 14pt;\">{{userData.first_name}} {{userData.last_name}}</p>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center;\">\n      <img (error)=\"handleImgError($event, item)\" style=\"width:70%;height: 250px;\"\n        src=\"{{restService.baseUrlForImg}}{{userData.profile_pic_1}}\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 25px;\">\n    <p style=\"font-size:14pt;\">Prompt</p>\n\n    <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070; \n    padding: 15px;\">\n\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt1Head}}\n      </ion-text>\n      <br>\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt1Data}}\n      </ion-text>\n      <br *ngIf=\"prompt1UserReply != ''\">\n      <ion-text *ngIf=\"prompt1UserReply != ''\" style=\"font-size: 10pt;\">\n        {{prompt1UserReply}}\n      </ion-text>\n\n      <img *ngIf=\"prompt1Loader\" style=\"position: absolute;\n      height: 25px;\n      width: 25px;\n      right: 36px;\" src=\"assets/imgs/loader.gif\">\n\n\n      <img *ngIf=\"!prompt1Loader\" (click)=\"prompt1ShareClick()\" style=\"position: absolute;\n          height: 25px;\n          width: 25px;\n          padding: 2px;\n          border: 1px solid white;\n          right: 36px;\" src=\"assets/imgs/share.svg\">\n    </div>\n\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: center;\">\n        <img (error)=\"handleImgError($event, item)\" style=\"width:80%;height:250px;\"\n          src=\"{{restService.baseUrlForImg}}{{userData.profile_pic_2}}\">\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"padding: 0px;\">\n      <p style=\"font-size:14pt;\">Prompt</p>\n\n      <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n        <ion-text style=\"font-size: 10pt;\">\n          {{prompt2Head}}\n        </ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt;\">\n          {{prompt2Data}}\n        </ion-text>\n\n        <br *ngIf=\"prompt2UserReply != ''\">\n        <ion-text *ngIf=\"prompt2UserReply != ''\" style=\"font-size: 10pt;\">\n          {{prompt2UserReply}}\n        </ion-text>\n\n\n        <img *ngIf=\"prompt2Loader\" style=\"position: absolute;\n        height: 25px;\n        width: 25px;\n        right: 36px;\" src=\"assets/imgs/loader.gif\">\n\n        <img *ngIf=\"!prompt2Loader\" (click)=\"prompt2ShareClick()\" style=\"position: absolute;\n          height: 25px;\n          width: 25px;\n          padding: 2px;\n          border: 1px solid white;\n          right: 36px;\" src=\"assets/imgs/share.svg\">\n      </div>\n\n    </div>\n\n\n\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Height</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{height1}}'{{height2}} feet</ion-text>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Location</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.lives}}</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Status</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.system_maritalstatus_name}}</ion-text>\n\n      </ion-col>\n\n\n    </ion-row>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Religion</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.system_religions_name}}</ion-text>\n\n      </ion-col>\n\n\n    </ion-row>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n\n    <div style=\"margin-top: 10px;\">\n      <ion-text style=\"font-size: 10pt;\">School *</ion-text>\n      <br>\n      <ion-chip style=\"background: #4f4f4f; max-width: 99%;\n        overflow: auto;\" *ngFor=\"let school of userSchool; let i = index\">\n        <ion-label>{{school.name}}</ion-label>\n      </ion-chip>\n\n\n    </div>\n\n    <hr style=\"border-bottom: 1px solid white; width: 100%;\">\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n\n        <ion-text style=\"font-size: 10pt;\">Short Bio</ion-text>\n        <br>\n        <ion-text style=\"font-size: 10pt; color: #ffffff;\">{{userData.short_bio}}</ion-text>\n\n      </ion-col>\n\n\n    </ion-row>\n    <p style=\"font-size:14pt;\">Prompt</p>\n\n    <div style=\"margin-top: 18px;\n    border-radius: 5px;\n    border: 2px solid #707070;\n    padding: 15px;\">\n\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt3Head}}\n      </ion-text>\n      <br>\n\n      <ion-text style=\"font-size: 10pt;\">\n        {{prompt3Data}}\n      </ion-text>\n      <br *ngIf=\"prompt3UserReply != ''\">\n\n      <ion-text *ngIf=\"prompt3UserReply != ''\" style=\"font-size: 10pt;\">\n        {{prompt3UserReply}}\n      </ion-text>\n\n\n\n\n      <img *ngIf=\"prompt3Loader\" style=\"position: absolute;\n      height: 25px;\n      width: 25px;\n      right: 36px;\" src=\"assets/imgs/loader.gif\">\n\n      <img *ngIf=\"!prompt3Loader\" (click)=\"prompt3ShareClick()\" style=\"position: absolute;\n          height: 25px;\n          width: 25px;\n          padding: 2px;\n          border: 1px solid white;\n          right: 36px;\" src=\"assets/imgs/share.svg\">\n    </div>\n\n  </div>\n\n\n</ion-content>\n\n\n\n\n\n<div [hidden]=\"popupHiddon\" style=\"\n    height: 100%;\n    width: 100%;\n    background-color: #314f40;\n    position: absolute;\n    opacity:90%;\n  \">\n  <div style=\"    left: 10%;\n  position: absolute;\n  top: 40px;\n  width: 80%;\n  height: 366px;\n  background-color: rgb(0 0 0 / 0%);\">\n    <ion-row>\n      <ion-col style=\" padding-top: 10 px; padding-right: 10px; text-align: right\">\n        <img style=\"\n            height: 15px;\n            width: 15px;\n            margin-right: 10px;\n            margin-top: 14px;\n          \" src=\"assets/imgs/close.svg\" (click)=\"hidePopup()\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 0px\">\n      <ion-col style=\"text-align: center\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n      </ion-col>\n    </ion-row>\n\n    <div style=\"margin-left: 20px; margin-right: 20px;\">\n\n\n      <div style=\"padding: 15px;\n        border: 2px solid white;\n        text-align: center;\">\n        <ion-label style=\"font-size: 8pt;\">{{promptToReply}}</ion-label>\n      </div>\n\n      <ion-row style=\"margin-top: 15px;\">\n        <ion-col style=\"padding: 0px;\">\n          <ion-input [class.redBorder]=\"replyStatus\" class=\"inp\" placeholder=\"Enter your reply\"\n            [(ngModel)]=\"promptReply\" (ionChange)=\"changeFunction($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 15px;\">\n        <ion-col style=\"padding: 0px;\">\n          <button (click)=\"replyPrompt()\" class=\"btn\" style=\"font-size: 11pt;\">Reply</button>\n        </ion-col>\n      </ion-row>\n\n\n    </div>\n\n\n  </div>\n</div>\n\n<div [hidden]=\"viewProfilePopupHidden\" style=\"\n    height: 100%;\n    width: 100%;\n    background-color: #314f40;\n    position: absolute;\n    opacity:90%;\n  \">\n  <div style=\"  left: 10%;\n  position: absolute;\n  top: 39%;\n  width: 80%;\n  height: auto;\n  background-color: rgb(0, 0, 0); \">\n    <ion-row>\n      <ion-col style=\"padding-top: 10 px; padding-right: 10px; text-align: right\">\n        <img style=\"\n            height: 15px;\n            width: 15px;\n            margin-right: 10px;\n            margin-top: 14px;\n          \" src=\"assets/imgs/close.svg\" (click)=\"hidePopupViewProfile()\" />\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row style=\"margin-top: 0px\">\n      <ion-col style=\"text-align: center\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n      </ion-col>\n    </ion-row> -->\n\n    <div style=\"\n   \n        padding: 15px;\n        border: 2px solid white;\n        text-align: center;\n        margin: 17px;\n      \">\n      <!-- <ion-label style=\"color: #314f40 ;\">New here? Just respond <br>\n        to a prompt and say hello.</ion-label> -->\n\n      <ion-label style=\"color: white ;\">New here? Just respond <br>\n        to a prompt and say hello.</ion-label>\n    </div>\n\n\n\n\n\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_otherprofile_otherprofile_module_ts-es5.js.map