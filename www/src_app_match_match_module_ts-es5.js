(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_match_match_module_ts"], {
    /***/
    88465:
    /*!***********************************************!*\
      !*** ./src/app/match/match-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchPageRoutingModule": function MatchPageRoutingModule() {
          return (
            /* binding */
            _MatchPageRoutingModule
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


      var _match_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./match.page */
      83058);

      var routes = [{
        path: '',
        component: _match_page__WEBPACK_IMPORTED_MODULE_0__.MatchPage
      }];

      var _MatchPageRoutingModule = function MatchPageRoutingModule() {
        _classCallCheck(this, MatchPageRoutingModule);
      };

      _MatchPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MatchPageRoutingModule);
      /***/
    },

    /***/
    28686:
    /*!***************************************!*\
      !*** ./src/app/match/match.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchPageModule": function MatchPageModule() {
          return (
            /* binding */
            _MatchPageModule
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


      var _match_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./match-routing.module */
      88465);
      /* harmony import */


      var _match_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./match.page */
      83058);

      var _MatchPageModule = function MatchPageModule() {
        _classCallCheck(this, MatchPageModule);
      };

      _MatchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _match_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchPageRoutingModule],
        declarations: [_match_page__WEBPACK_IMPORTED_MODULE_1__.MatchPage]
      })], _MatchPageModule);
      /***/
    },

    /***/
    83058:
    /*!*************************************!*\
      !*** ./src/app/match/match.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchPage": function MatchPage() {
          return (
            /* binding */
            _MatchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_match_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./match.page.html */
      79529);
      /* harmony import */


      var _match_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./match.page.scss */
      62900);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _matchdelete_matchdelete_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../matchdelete/matchdelete.page */
      13447);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _userservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../userservice.service */
      75157);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _MatchPage = /*#__PURE__*/function () {
        function MatchPage(router, signupService, platform, restService, workService, userService, navCtrl, modalCtrl, alertcontroller) {
          _classCallCheck(this, MatchPage);

          this.router = router;
          this.signupService = signupService;
          this.platform = platform;
          this.restService = restService;
          this.workService = workService;
          this.userService = userService;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.alertcontroller = alertcontroller;
          this.matchpopupHidden = true;
          this.togglePlatformAndroid = false;
          this.toggleFalse = false;
          this.userData = '';
          this.totalMatches = 0;
          this.myUserName = '';
          this.userHeight = '';
          this.height1 = '';
          this.height2 = '';
          this.newHeight = '';
          this.selectedUserID = "";
          this.selectedIndexToDelete = '';
          this.toggleNotSelected = 1;
          this.matchDeleted = 0;
          this.bvalue = false;
          this.matches = [// { "users_customers_id": "15", "onesignal_id": "de1a9360-6fd8-11ec-ad6b-1a75e5ae0c98", "packages_id": "0", "packages_sms_id": "0", "allowed_sms": "-14", "first_name": "Ali", "last_name": "Syed", "user_email": "123@ff.vv", "user_password": "$2y$10$Z2eFZjHwK9aCzr002MnKlOi1kwcdTJkfEgKI\/oqYmzBT\/MKxblDRC", "newsletter": "Yes", "date_of_birth": "1998-04-01", "lives": "Muhammad Ali International Airport, Louisville, KY, USA", "froms": "K.K.NAGAR, KK Nagar Road, Ghatlodiya, Nirnay Nagar, Ahmedabad, Gujarat, India", "profile_pic_1": "b332eab4f74d4bc42624c3d4040b3823.png", "profile_pic_2": "01acd1d318c154cee3edddbafb1bdf51.png", "contact_number": "+923047848242", "system_countries_id": "2", "system_ethinicity_id": "0", "system_genders_id": "1", "system_looking_for_id": "2", "height": "6.4000", "work_company": "Tt", "system_jobtitle": "Ff", "system_edulevel_id": "5", "school": "", "career_goals": "no gols", "system_religions_id": "2", "system_kosher_id": "0", "system_affiliations_id": "8", "system_maritalstatus_id": "2", "willing_relocate": "Yes", "system_personality_type_id": "1", "short_bio": "shot", "instagram": "gf", "linkedin": "gg", "spotify": "cv", "know_anyone": "Yes", "friend_full_name": "", "friend_email": "", "friend_contact": "", "additional_comments": "Comment", "notification_switch": "Yes", "created_at": "2022-01-31 01:47:22", "updated_at": "2022-01-05 12:51:52", "status": "Active", "system_affiliations_name": "Other", "system_countries_name": "Albanian", "system_ethinicity_name": null, "system_edulevel_name": "Bachelor's Degree", "system_genders_name": "Male", "system_looking_for_name": "Female", "system_maritalstatus_name": "Single", "system_personality_type_name": "Introvert", "system_religions_name": "Other", "system_kosher_name": null, "prompt_replies": "Yes" },
            //  { "users_customers_id": "2", "onesignal_id": "ecd8942c-6e22-11ec-88e4-a6bbdbfc2e1e", "packages_id": "0", "packages_sms_id": "0", "allowed_sms": "-5", "first_name": "Arslan", "last_name": "Ahmad", "user_email": "arslan_ahmad91@yahoo.com", "user_password": "$2y$10$\/Z4WlXJpetFTFABg7melrOT1QT373gl1rA0dW.fD.dfRbvaqBYA0G", "newsletter": "Yes", "date_of_birth": "2018-09-01", "lives": "hah", "froms": "hah", "profile_pic_1": "26d5660156b6c966427629d256c549bd.png\t", "profile_pic_2": "26d5660156b6c966427629d256c549bd.png\t", "contact_number": "+923002485139---Deleted", "system_countries_id": "1", "system_ethinicity_id": "0", "system_genders_id": "1", "system_looking_for_id": "1", "height": "111.0000", "work_company": "test", "system_jobtitle": "1", "system_edulevel_id": "1", "school": "asdf school", "career_goals": "goals", "system_religions_id": "1", "system_kosher_id": "0", "system_affiliations_id": "1", "system_maritalstatus_id": "1", "willing_relocate": "Yes", "system_personality_type_id": "1", "short_bio": "asd asdfsdfa", "instagram": "asdf", "linkedin": "asdf", "spotify": "asdf", "know_anyone": "Yes", "friend_full_name": "asdf", "friend_email": "asdf@asd.com", "friend_contact": "123123123123", "additional_comments": "asdfasdfas asa asd", "notification_switch": "Yes", "created_at": "2022-01-31 00:05:31", "updated_at": "2021-11-15 03:12:16", "status": "Active", "system_affiliations_name": "Orthodox", "system_countries_name": "Afghan", "system_ethinicity_name": null, "system_edulevel_name": "Matric", "system_genders_name": "Male", "system_looking_for_name": "Male", "system_maritalstatus_name": "Divorsed", "system_personality_type_name": "Introvert", "system_religions_name": "Jewish", "system_kosher_name": null, "prompt_replies": "No" }
          ];
        }

        _createClass(MatchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.platform.is('android')) {
              this.togglePlatformAndroid = true;
            } else {
              this.togglePlatformAndroid = false;
            }
          }
        }, {
          key: "showPopup",
          value: function showPopup() {
            // this.matchpopupHidden = false;
            // this.router.navigate(['matchdelete'])
            this.openMapModel();
          }
        }, {
          key: "openMapModel",
          value: function openMapModel() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _matchdelete_matchdelete_page__WEBPACK_IMPORTED_MODULE_2__.MatchdeletePage,
                        cssClass: 'map-model',
                        backdropDismiss: false
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log('dddddddddddddddddd', data);
                        var i = JSON.parse(data.data);
                        console.log('fffffffffffffffff', i.add);
                        _this.matchDeleted = i.add;

                        if (_this.matchDeleted == 1) {
                          _this.matches.splice(_this.selectedIndexToDelete, 1);

                          _this.totalMatches = _this.totalMatches - 1;
                        }
                      });
                      modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.toggleFalse = false;
            console.log('toggg---', this.toggleFalse);
            this.matchpopupHidden = true;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (data.block_status == 'Unblock' || data.block_status == null) {
                        this.block_status = 'Block';
                      } else {
                        this.block_status = 'Unblock';
                      }

                      _context2.next = 3;
                      return this.alertcontroller.create({
                        cssClass: 'custom-alert',
                        buttons: [{
                          text: 'Report',
                          cssClass: 'alert-button-cancel',
                          handler: function handler() {
                            console.log('I care about humanity');

                            _this2.reportUser(data);
                          }
                        }, {
                          text: this.block_status,
                          cssClass: 'alert-button-confirm',
                          handler: function handler() {
                            console.log('I care about humanity');

                            _this2.blockorunblockuser(data);
                          }
                        }]
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "reportUser",
          value: function reportUser(value) {
            var _this3 = this;

            var data = {
              "reported_user_id": value.users_customers_id,
              "reported_by_user_id": localStorage.getItem('loggedinUserID')
            };
            this.restService.repoertuser(data).subscribe(function (res) {
              console.log('block user result==', res);

              if (res.status == 'success') {
                _this3.ionViewWillEnter();

                _this3.workService.presentToast(res.message);
              }

              if (res.status == 'error') {
                _this3.workService.presentToast(res.message);
              }
            });
          }
        }, {
          key: "blockorunblockuser",
          value: function blockorunblockuser(value) {
            console.log('user data==', value);

            if (value.block_status == 'Unblock' || value.block_status == null) {
              value.block_status = 'Block';
              this.blockuser(value.users_customers_id);
            } else {
              value.block_status = 'Unblock';
              this.unblockuser(value.users_customers_id);
            }
          }
        }, {
          key: "blockuser",
          value: function blockuser(otheruserid) {
            var _this4 = this;

            var data = {
              "blocked_user_id": otheruserid,
              "blocked_by_user_id": localStorage.getItem('loggedinUserID')
            };
            this.restService.blockuser(data).subscribe(function (res) {
              console.log('block user result==', res);

              if (res.status == 'success') {
                _this4.workService.presentToast('User blocked');
              }
            });
          }
        }, {
          key: "unblockuser",
          value: function unblockuser(otheruserid) {
            var _this5 = this;

            var data = {
              "blocked_user_id": otheruserid,
              "blocked_by_user_id": localStorage.getItem('loggedinUserID')
            };
            this.restService.unblockuser(data).subscribe(function (res) {
              console.log('unblock user result==', res);

              if (res.status == 'success') {
                _this5.workService.presentToast('User Unblocked');
              }
            });
          }
        }, {
          key: "imageclicked",
          value: function imageclicked(match) {
            if (match.report_status == 'reported') {
              this.workService.presentToast('User is reported as a spam');
            }
          }
        }, {
          key: "goToMessage",
          value: function goToMessage(match) {
            console.log(match); //this.router.navigate(['/tabs/tab2'])

            if (match.block_status == 'Block') {
              this.restService.basicAlert('You had blocked the user!');
            } else {
              console.log('other user id on match page line 125', match.users_customers_id); // this.workService.myUserData = match
              // this.router.navigate(['otherprofile']);

              this.checkedmatchblockeduser(match);
            } // if (match.prompt_replies == 'No') {
            // } else {
            //   this.userService.userName = match.first_name + ' ' + match.last_name
            //   this.userService.userId = match.users_customers_id
            //   this.userService.userIMG = this.restService.baseUrlForImg + match.profile_pic_1
            //   var ss = JSON.stringify({
            //     "request_type": "startChat",
            //     "users_customers_id": localStorage.getItem('loggedinUserID'),
            //     "reciever_users_customers_id": match.users_customers_id
            //   })
            //   this.restService.chat_messagesAPI(ss).subscribe((res: any) => {
            //     console.log('res--->>chat-->>', res);
            //   }, err => {
            //     this.workService.hideLoading()
            //     this.workService.presentToast('Network error occured')
            //   })
            //   this.navCtrl.navigateForward("/chat");
            // }

          }
        }, {
          key: "checkedmatchblockeduser",
          value: function checkedmatchblockeduser(match) {
            var _this6 = this;

            this.workService.presentLoading();
            this.otherUserID = match.users_customers_id;
            console.log('other user id on otherprofile page line 82', this.otherUserID);
            var data = {
              loginuser: localStorage.getItem('loggedinUserID'),
              otheruser: this.otherUserID
            };
            console.log('data get==', data);
            this.restService.get_user_dataAPI(data).subscribe(function (res) {
              _this6.workService.hideLoading();

              console.log('incomming data === ', res);

              if (res.status == "success") {
                _this6.workService.hideLoading();

                _this6.workService.myUserData = match;

                _this6.router.navigate(['otherprofile']);

                console.log('other profile ---->>');
              }

              if (res.status == 'error') {
                _this6.workService.hideLoading();

                _this6.basicAlert(res.message);
              }
            }, function (err) {
              _this6.workService.hideLoading();

              _this6.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "goToMessageMain",
          value: function goToMessageMain(match) {
            console.log(match); //this.router.navigate(['/tabs/tab2'])

            if (match.prompt_replies == 'No') {
              console.log(match.users_customers_id);
              this.workService.myUserData = match;
              this.router.navigate(['otherprofile']);
            }
          }
        }, {
          key: "crossClick",
          value: function crossClick(match, index) {
            this.toggleNotSelected = 1;
            console.log('ok', match);
            this.selectedUserID = match.users_customers_id; // this.showPopup()

            this.selectedIndexToDelete = index;
            localStorage.setItem('other_users_customers_id', this.selectedUserID);
            this.openMapModel(); // if (this.matches.length > 1) {
            // }
            // this.matches.splice(0, 1);
            // console.log(this.matches);
            // this.totalMatches = this.matches.length
          }
        }, {
          key: "closeMatch",
          value: function closeMatch() {
            var _this7 = this;

            var ss = JSON.stringify({
              'users_customers_id': localStorage.getItem('loggedinUserID'),
              'other_users_customers_id': this.selectedUserID
            });
            this.workService.presentLoading();
            this.restService.delete_matchAPI(ss).subscribe(function (res) {
              _this7.workService.hideLoading();

              if (res.status.success) {
                _this7.workService.presentToast(res.message);

                _this7.matches.splice(_this7.selectedIndexToDelete, 1);

                _this7.totalMatches = _this7.totalMatches - 1;
              } else {
                _this7.workService.presentToast(res.message);
              }
            }, function (err) {
              _this7.workService.hideLoading();

              _this7.workService.presentToast('Network error occured');
            });
            console.log(ss); //
          }
        }, {
          key: "openChat",
          value: function openChat(event) {
            var _this8 = this;

            console.log("event---", event);
            var ss = JSON.stringify({
              'users_customers_id': localStorage.getItem('loggedinUserID'),
              'other_users_customers_id': this.selectedUserID
            });
            this.workService.presentLoading();
            this.restService.remove_matchAPI(ss).subscribe(function (res) {
              _this8.workService.hideLoading();

              if (res.status.success) {
                _this8.workService.presentToast(res.message);

                _this8.matches.splice(_this8.selectedIndexToDelete, 1);

                _this8.totalMatches = _this8.totalMatches - 1;
              } else {
                _this8.workService.presentToast(res.message);
              }
            }, function (err) {
              _this8.workService.hideLoading();

              _this8.workService.presentToast('Network error occured');
            });
            console.log(ss);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this9 = this;

            // localStorage.setItem('loggedinUserID', '71')
            this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
            console.log('user data ======', this.userData);

            if (this.userData != null) {
              this.myUserName = this.userData.first_name + ' ' + this.userData.last_name;
            } else {
              this.myUserName = 'Friend';
            }

            this.workService.presentLoading();
            var data = JSON.stringify({
              "users_customers_id": localStorage.getItem('loggedinUserID') // "users_customers_id": 71

            });
            console.log('data-----', data);
            this.restService.getBestMatchesAPI(data).subscribe(function (res) {
              _this9.workService.hideLoading();

              console.log('data-----', res);

              if (res.status == 'success') {
                _this9.matches = res.data;
                _this9.totalMatches = _this9.matches.length;
              } else {
                _this9.workService.presentToast('No Match Found');
              }
            }, function (err) {
              _this9.workService.hideLoading();

              _this9.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "handleImgError",
          value: function handleImgError(ev, item, url) {
            var source = ev.srcElement;
            var imgSrc = "assets/imgs/placeholder.jpg";
            source.src = imgSrc;
          }
        }, {
          key: "goTootherProfile",
          value: function goTootherProfile(match) {
            console.log(match.users_customers_id);
            this.workService.myUserData = match;
            this.router.navigate(['otherprofile']);
          }
        }, {
          key: "vhangeHeight",
          value: function vhangeHeight(val) {
            this.userHeight = parseFloat(val).toFixed(2);
            this.height1 = this.userHeight.substring(0, 1);
            this.height2 = this.userHeight.substring(2, 4);
            this.newHeight = this.height1 + "'" + this.height2;
            return this.newHeight;
          }
        }, {
          key: "goTONoti",
          value: function goTONoti() {
            this.router.navigate(['notification']);
          }
        }, {
          key: "basicAlert",
          value: function basicAlert(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertcontroller.create({
                        cssClass: 'basicAlert',
                        message: message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return MatchPage;
      }();

      _MatchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_4__.SignupService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_6__.WorkService
        }, {
          type: _userservice_service__WEBPACK_IMPORTED_MODULE_5__.UserserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }];
      };

      _MatchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-match',
        template: _raw_loader_match_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_match_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MatchPage);
      /***/
    },

    /***/
    62900:
    /*!***************************************!*\
      !*** ./src/app/match/match.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  padding: 0px;\n}\n\n.btn {\n  background: #172A36 0% 0% no-repeat padding-box;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  color: #ffffff;\n}\n\n.btn_disable {\n  background: #172A36 0% 0% no-repeat padding-box;\n  color: #ffffff;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.cimg {\n  margin-right: 5%;\n}\n\n.block {\n  margin-right: 10%;\n}\n\n.uimage {\n  height: 330pt;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n\n.blurimage {\n  height: 330pt;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  filter: blur(30px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBRUEsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUlKIiwiZmlsZSI6Im1hdGNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzE3MkEzNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgLy8gY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bl9kaXNhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTcyQTM2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4uY2ltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuLmJsb2Nre1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnVpbWFnZXtcbiAgICBoZWlnaHQ6IDMzMHB0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmx1cmltYWdle1xuICAgIGhlaWdodDogMzMwcHQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCkgIWltcG9ydGFudDtcbn0iXX0= */";
      /***/
    },

    /***/
    79529:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div style=\"z-index: 99999; width: 100%; background: black; position: fixed\">\n    <ion-row style=\"margin-top: 40px\">\n      <ion-col size=\"2\" style=\"text-align: center\"><img style=\"    height: 25px;\n        width: 25px;\" src=\"assets/imgs/notification.png\" (click)=\"goTONoti()\" /> </ion-col>\n      <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px\">\n        <ion-text style=\"font-size: 15pt\">Hi, {{myUserName}} </ion-text>\n      </ion-col>\n      <ion-col size=\"2\">\n        <!-- <img (click)=\"showPopup()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/i.svg\" /> -->\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 6px\">\n      <ion-col style=\"text-align: center\">\n        <ion-text style=\"font-size: 10pt\">{{totalMatches}} matches</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div style=\"margin-top: 87px;\"></div>\n\n  <div style=\"padding: 12px 20px;\" *ngFor=\"let match of matches let i = index\">\n    <ion-row>\n      <ion-col>\n        <div style=\"position:relavtive;\">\n          <img (error)=\"handleImgError($event, match)\" class=\"uimage\"\n            src=\"{{restService.baseUrlForImg}}{{match.profile_pic_1}}\"\n            [class.blurimage]=\"match.report_status=='reported'\" (click)=\"imageclicked(match)\">\n          <ion-icon name=\"information-outline\" style=\"position: absolute;\n          color: #fff;\n          font-size: 25px;\n          left: 15px;\n          top: 15px;\n          background: #314f40;\n          border-radius: 90px;\n          padding: 5px;\" (click)=\"presentAlert(match)\"></ion-icon>\n          <div style=\"position:absolute; color: #fff;\n          font-size: 18px;\n          top: 20px;\n          right: 20px;\" *ngIf=\"match.report_status=='reported'\">Reported</div>\n        </div>\n\n\n      </ion-col>\n    </ion-row>\n\n    <div style=\" /* background-color: #302f2f; */ background-color: #314f40; height: auto; border-radius: 10px;\n            margin-top: 9px; \">\n      <div style=\" padding: 15px 0px 0px 15px\">\n        <ion-row>\n          <ion-col>\n            <ion-row>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt; color:white\">Name</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt; color: white\"> {{match.first_name}} {{match.last_name}}\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <!-- <ion-col size=\"6\" style=\"text-align: end;margin-right: 0%;padding-right: 10%;\"\n            (click)=\"blockorunblockuser(match)\">\n            <img src=\"assets/imgs/blocked.png\" class=\"cimg\" [class.block]=\"match.block_status=='Block' || null\"><br>\n            <span style=\"font-size: 11pt; color: white\" *ngIf=\"match.block_status=='Block'\">unblock</span>\n            <span style=\"font-size: 11pt; color: white\" *ngIf=\"match.block_status!='Block' || null\">block</span>\n          </ion-col> -->\n\n        </ion-row>\n\n      </div>\n\n      <div style=\"padding: 15px 0px 0px 15px\">\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-size: 11pt; color: white\">Location</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-size: 11pt; color: white\">{{match.lives}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col>\n          <div style=\"padding: 15px 0px 0px 15px\">\n            <ion-row>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt; color:white\">Religion</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt; color: white\">{{match.system_religions_name}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n\n        <ion-col>\n          <div style=\"padding: 15px 0px 0px 15px\">\n            <ion-row>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt; color: white\">Height</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <!-- <ion-label style=\"font-size: 11pt; color: #314f40\">{{match.height | number:'1.0-1'}} feet</ion-label> -->\n\n                <ion-label style=\"font-size: 11pt; color: white\">{{vhangeHeight(match.height)}} feet</ion-label>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- <div style=\"padding: 15px 0px 0px 15px\">\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-size: 11pt; color: #caff9b\">School</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-size: 11pt; color: white\">{{match.school}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </div> -->\n\n      <div style=\"padding: 15px 15px 40px 15px;\">\n        <ion-row>\n          <ion-col>\n            <button class=\"btn\" (click)=\"goToMessage(match)\" [disabled]=\"buttonDisabled\">View\n              Profile</button>\n            <!-- <button class=\"btn\" *ngIf=\"match.prompt_replies=='No'\" (click)=\"goToMessage(match)\">View\n              Profile</button>\n            <button class=\"btn_disable\" *ngIf=\"match.prompt_replies!='No'\" (click)=\"goToMessage(match)\">Message</button> -->\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n    </div>\n    <ion-row style=\"margin-top: -30px;\">\n      <ion-col>\n        <div style=\"    height: 60px;\n        width: 60px;\n        border-radius: 30px;\n        background: rgb(255, 255, 255);\n        display: flex;\n        align-content: center;\n        align-items: center;\n        justify-content: center;\" (click)=\"crossClick(match,i)\">\n          <img><img style=\"height: 20px; width: 20px\" src=\"assets/imgs/closeblack.svg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n  <!-- \n  <ion-fab style=\"position: absolute;\n  bottom: 20px;\n  left: 20px;\n  z-index: 00000;\" slot=\"fixed\" >\n    <ion-fab-button style=\"--background: white\"><img style=\"height: 20px; width: 20px\"\n        src=\"assets/imgs/closeblack.svg\" /></ion-fab-button>\n  </ion-fab> -->\n</ion-content>\n\n<div [hidden]=\"matchpopupHidden\" style=\"\n    height: 100%;\n    width: 100%;\n    background-color: #0c293dd9;\n    position: absolute;\n  \">\n  <div style=\"   left: 10%;\n  position: absolute;\n  top: 40px;\n  width: 80%;\n  height: 366px;\n  background-color: rgb(0 0 0 / 0%); \">\n    <ion-row>\n      <ion-col style=\"padding-top: 10 px; padding-right: 10px; text-align: right\">\n        <img style=\"\n            height: 15px;\n            width: 15px;\n            margin-right: 10px;\n            margin-top: 14px;\n          \" src=\"assets/imgs/close.svg\" (click)=\"hidePopup()\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 0px\">\n      <ion-col style=\"text-align: center\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n      </ion-col>\n    </ion-row>\n\n    <div style=\"\n        padding: 15px;\n        border: 2px solid white;\n        text-align: center;\n        margin: 17px;\n      \">\n      <ion-label>Mutual matches will expire within 6 days.</ion-label>\n    </div>\n\n    <div style=\"padding-left: 13px; padding-right: 13px; margin-top: 28px\">\n      <ion-row>\n        <ion-col size=\"9\" style=\"padding-top: 8px\">\n          <ion-text style=\"font-size: 10pt\">Close the match</ion-text>\n        </ion-col>\n\n        <ion-col size=\"3\" style=\"text-align: right\">\n          <ion-toggle checked=\"false\" (ionChange)=\"closeMatch($event)\" [class.togglePaddClass]=\"togglePlatformAndroid\">\n          </ion-toggle>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"9\" style=\"padding-top: 8px\">\n          <ion-text style=\"font-size: 10pt\">Conversation continued off the app</ion-text>\n        </ion-col>\n\n        <ion-col size=\"3\" style=\"text-align: right\">\n          <ion-toggle checked=\"false\" (ionChange)=\"openChat($event)\" [class.togglePaddClass]=\"togglePlatformAndroid\">\n          </ion-toggle>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_match_match_module_ts-es5.js.map