(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_yourprofile3_yourprofile3_module_ts"], {
    /***/
    29413:
    /*!*************************************************************!*\
      !*** ./src/app/yourprofile3/yourprofile3-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Yourprofile3PageRoutingModule": function Yourprofile3PageRoutingModule() {
          return (
            /* binding */
            _Yourprofile3PageRoutingModule
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


      var _yourprofile3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./yourprofile3.page */
      661);

      var routes = [{
        path: '',
        component: _yourprofile3_page__WEBPACK_IMPORTED_MODULE_0__.Yourprofile3Page
      }];

      var _Yourprofile3PageRoutingModule = function Yourprofile3PageRoutingModule() {
        _classCallCheck(this, Yourprofile3PageRoutingModule);
      };

      _Yourprofile3PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Yourprofile3PageRoutingModule);
      /***/
    },

    /***/
    627:
    /*!*****************************************************!*\
      !*** ./src/app/yourprofile3/yourprofile3.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Yourprofile3PageModule": function Yourprofile3PageModule() {
          return (
            /* binding */
            _Yourprofile3PageModule
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


      var _yourprofile3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./yourprofile3-routing.module */
      29413);
      /* harmony import */


      var _yourprofile3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./yourprofile3.page */
      661);

      var _Yourprofile3PageModule = function Yourprofile3PageModule() {
        _classCallCheck(this, Yourprofile3PageModule);
      };

      _Yourprofile3PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _yourprofile3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Yourprofile3PageRoutingModule],
        declarations: [_yourprofile3_page__WEBPACK_IMPORTED_MODULE_1__.Yourprofile3Page]
      })], _Yourprofile3PageModule);
      /***/
    },

    /***/
    661:
    /*!***************************************************!*\
      !*** ./src/app/yourprofile3/yourprofile3.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Yourprofile3Page": function Yourprofile3Page() {
          return (
            /* binding */
            _Yourprofile3Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_yourprofile3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./yourprofile3.page.html */
      25212);
      /* harmony import */


      var _yourprofile3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./yourprofile3.page.scss */
      12300);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);

      var _Yourprofile3Page = /*#__PURE__*/function () {
        function Yourprofile3Page(location, router, signupServiece, workService, platform, restService, storage, transfer) {
          _classCallCheck(this, Yourprofile3Page);

          this.location = location;
          this.router = router;
          this.signupServiece = signupServiece;
          this.workService = workService;
          this.platform = platform;
          this.restService = restService;
          this.storage = storage;
          this.transfer = transfer;
          this.shortBio = 'esfdsdfsdg';
          this.prompt1Val = 'Choose your prompt';
          this.prompt2Val = 'Choose your prompt';
          this.prompt3Val = 'Choose your prompt';
          this.prompt1ValHead = '';
          this.prompt2ValHead = '';
          this.prompt3ValHead = '';
          this.spotify = '';
          this.linkedin = '';
          this.insta = '';
          this.phoneOfOther = '';
          this.emailOfOther = '';
          this.fullnameOfOther = '';
          this.getNotiAndUpdates = 0;
          this.shortBioStatus = false;
          this.prompt1ValStatus = false;
          this.prompt2ValStatus = false;
          this.prompt3ValStatus = false;
          this.phoneStatus = false;
          this.emailStatus = false;
          this.fullnameStatus = false;
          this.spotifyStatus = false;
          this.linkedinStatus = false;
          this.instaStatus = false;
          this.togglePlatformAndroid = false;
          this.user_prompts_array = '';
          this.prompts1show = true;
          this.prompts2show = true;
          this.prompts3show = true;
          this.knowAnyoneFun = 'No';
          this.uploadedCOverImage = '';
          this.uploadedCOverImage2 = '';
          this.minType1 = '';
          this.fleName1 = '';
          this.minType2 = '';
          this.fleName2 = '';
          this.prompt1Name = '';
          this.prompt2Name = '';
          this.prompt3Name = '';
          this.coverImage = '';
          this.coverImage2 = '';
          this.myImgArr = '';
          this.check = false;
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          });
        }

        _createClass(Yourprofile3Page, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('img1SelectedFromCamera1', localStorage.getItem('img1SelectedFromCamera1'));
            console.log('img2SelectedFromCamera1', localStorage.getItem('img2SelectedFromCamera2'));
            console.log('schooollllllll', localStorage.getItem('schoolsArray'));
            console.log('schooollllllll', JSON.parse(localStorage.getItem('schoolsArray')));
            this.prompt1Name = localStorage.getItem('prompt1Name');
            this.prompt2Name = localStorage.getItem('prompt2Name');
            this.prompt3Name = localStorage.getItem('prompt3Name');
            this.shortBio = localStorage.getItem('shortBio');
            this.prompt1Val = localStorage.getItem('prompt1Val');
            this.prompt2Val = localStorage.getItem('prompt2Val');
            this.prompt3Val = localStorage.getItem('prompt3Val');
            this.spotify = localStorage.getItem('spotify');
            this.linkedin = localStorage.getItem('linkedin');
            this.insta = localStorage.getItem('insta');
            this.phoneOfOther = localStorage.getItem('phoneOfOther');
            this.emailOfOther = localStorage.getItem('emailOfOther');
            this.fullnameOfOther = localStorage.getItem('fullnameOfOther');
            this.getNotiAndUpdates = parseInt(localStorage.getItem('getNotiAndUpdates'));
            this.prompt1ValHead = localStorage.getItem('prompt1ValHead');
            this.prompt2ValHead = localStorage.getItem('prompt2ValHead');
            this.prompt3ValHead = localStorage.getItem('prompt3ValHead');
            this.knowAnyoneFun = localStorage.getItem('knowAnyoneFun');
            console.log('prompt1Val----------------', this.prompt1Val);
            console.log('prompt1Val----------------', this.prompt2Val);
            console.log('prompt1Val----------------', this.prompt3Val);

            if (this.knowAnyoneFun == null) {
              this.knowAnyoneFun = 'No';
            }

            if (this.prompt1Name == null) {
              this.prompt1Name = '';
            }

            if (this.prompt2Name == null) {
              this.prompt2Name = '';
            }

            if (this.prompt3Name == null) {
              this.prompt3Name = '';
            }

            if (this.shortBio == null) {
              this.shortBio = '';
            }

            if (this.prompt1Val == null || this.prompt1Val == '') {
              this.prompt1Val = 'Choose your prompt';
            }

            if (this.prompt2Val == null || this.prompt2Val == '') {
              this.prompt2Val = 'Choose your prompt';
            }

            if (this.prompt3Val == null || this.prompt3Val == '') {
              this.prompt3Val = 'Choose your prompt';
            }

            if (this.spotify == null) {
              this.spotify = '';
            }

            if (this.linkedin == null) {
              this.linkedin = '';
            }

            if (this.insta == null) {
              this.insta = '';
            }

            if (this.phoneOfOther == null) {
              this.phoneOfOther = '';
            }

            if (this.emailOfOther == null) {
              this.emailOfOther = '';
            }

            if (this.fullnameOfOther == null) {
              this.fullnameOfOther = '';
            }

            if (this.getNotiAndUpdates == null) {
              this.getNotiAndUpdates = 0;
            }

            if (this.prompt1ValHead == null) {
              this.prompt1ValHead = '';
            }

            if (this.prompt2ValHead == null) {
              this.prompt2ValHead = '';
            }

            if (this.prompt3ValHead == null) {
              this.prompt3ValHead = '';
            }

            console.log('aaaaaaaaaaaaaa', this.getNotiAndUpdates);

            if (this.platform.is('android')) {
              this.togglePlatformAndroid = true;
            } else {
              this.togglePlatformAndroid = false;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user_prompts_array = this.workService.systemData.system_prompt;
            console.log('resssss', this.user_prompts_array); // var stringy = JSON.stringify({
            // })
            // // this.workService.presentLoading()
            // this.restService.getSystemDataAPI(stringy).subscribe((res: any) => {
            //   console.log(res)
            //   // this.workService.hideLoading()
            //   if (res.status == "success") {
            //     console.log(res.data)
            //     this.workService.systemData = res.data
            //     this.user_prompts_array = this.workService.systemData.system_prompt
            //   }
            // })
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
          key: "textarea",
          value: function textarea(ev) {
            this.shortBio = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.insta = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction1",
          value: function changeFunction1(ev) {
            this.linkedin = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction2",
          value: function changeFunction2(ev) {
            this.spotify = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction3",
          value: function changeFunction3(ev) {
            this.fullnameOfOther = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction4",
          value: function changeFunction4(ev) {
            this.fullnameOfOther = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "prompt1",
          value: function prompt1(item, i) {
            localStorage.setItem('shortBio', this.shortBio);
            localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
            localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
            localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
            localStorage.setItem('prompt1Val', this.prompt1Val);
            localStorage.setItem('prompt2Val', this.prompt2Val);
            localStorage.setItem('prompt3Val', this.prompt3Val);
            localStorage.setItem('spotify', this.spotify);
            localStorage.setItem('linkedin', this.linkedin);
            localStorage.setItem('insta', this.insta);
            localStorage.setItem('phoneOfOther', this.phoneOfOther);
            localStorage.setItem('emailOfOther', this.emailOfOther);
            localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
            localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString());
            console.log('prompt1Name', item.name);
            localStorage.setItem('prompt1Name', item.name);
            localStorage.setItem('prompt1ValHead', item.system_prompt_id);
            this.signupServiece.prompt1User = item.name;
            this.removeItem(i);
            this.prompts1show = true;
            this.router.navigate(['prompt1']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "showprompt2",
          value: function showprompt2() {
            if (this.prompts2show) {
              this.prompts2show = false;
            } else {
              this.prompts2show = true;
            }
          }
        }, {
          key: "prompt2",
          value: function prompt2(item, i) {
            localStorage.setItem('shortBio', this.shortBio);
            localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
            localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
            localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
            localStorage.setItem('prompt1Val', this.prompt1Val);
            localStorage.setItem('prompt2Val', this.prompt2Val);
            localStorage.setItem('prompt3Val', this.prompt3Val);
            localStorage.setItem('spotify', this.spotify);
            localStorage.setItem('linkedin', this.linkedin);
            localStorage.setItem('insta', this.insta);
            localStorage.setItem('phoneOfOther', this.phoneOfOther);
            localStorage.setItem('emailOfOther', this.emailOfOther);
            localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
            localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString());
            localStorage.setItem('prompt2Name', item.name);
            localStorage.setItem('prompt2ValHead', item.system_prompt_id);
            this.signupServiece.prompt2User = item.name;
            this.removeItem(i);
            this.prompts2show = true;
            this.router.navigate(['prompt2']);
          }
        }, {
          key: "showprompt3",
          value: function showprompt3() {
            if (this.prompts3show) {
              this.prompts3show = false;
            } else {
              this.prompts3show = true;
            }
          }
        }, {
          key: "prompt3",
          value: function prompt3(item, i) {
            localStorage.setItem('shortBio', this.shortBio);
            localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
            localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
            localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
            localStorage.setItem('prompt1Val', this.prompt1Val);
            localStorage.setItem('prompt2Val', this.prompt2Val);
            localStorage.setItem('prompt3Val', this.prompt3Val);
            localStorage.setItem('spotify', this.spotify);
            localStorage.setItem('linkedin', this.linkedin);
            localStorage.setItem('insta', this.insta);
            localStorage.setItem('phoneOfOther', this.phoneOfOther);
            localStorage.setItem('emailOfOther', this.emailOfOther);
            localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
            localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString());
            localStorage.setItem('prompt3Name', item.name);
            localStorage.setItem('prompt3ValHead', item.system_prompt_id);
            this.signupServiece.prompt3User = item.name;
            this.removeItem(i);
            this.prompts3show = true;
            this.router.navigate(['prompt3']);
          }
        }, {
          key: "removeItem",
          value: function removeItem(i) {
            this.user_prompts_array.splice(i, 1);
            console.log(this.user_prompts_array);
          }
        }, {
          key: "Continue",
          value: function Continue() {
            var _this = this;

            if (this.check == false) {
              this.workService.presentToast('Please Accept Terms and Policies');
            } else {
              console.log('go');
              console.log('mychk');
              console.log(localStorage.getItem('dobDay'));
              console.log(localStorage.getItem('dobMonth'));
              console.log(localStorage.getItem('dobYear'));
              var prompt1HeadIDVal = localStorage.getItem('prompt1ValHead');
              var prompt2HeadIDVal = localStorage.getItem('prompt2ValHead');
              var prompt3HeadIDVal = localStorage.getItem('prompt3ValHead');
              console.log(localStorage.getItem('prompt1ValHead'), localStorage.getItem('prompt2ValHead'), localStorage.getItem('prompt3ValHead'));
              var prompt1Val = localStorage.getItem('prompt1Val');
              var prompt2Val = localStorage.getItem('prompt2Val');
              var prompt3Val = localStorage.getItem('prompt3Val');
              var myprompts = {};
              myprompts[prompt1HeadIDVal] = prompt1Val;
              myprompts[prompt2HeadIDVal] = prompt2Val;
              myprompts[prompt3HeadIDVal] = prompt3Val;
              console.log('my array ---->>>', myprompts); // this.router.navigate(['requestsubmitted']);

              if (this.shortBio == '') {
                this.shortBioStatus = true;
              }

              if (this.prompt1Val == 'Choose your prompt') {
                this.prompt1ValStatus = true;
              }

              if (this.prompt2Val == 'Choose your prompt') {
                this.prompt2ValStatus = true;
              }

              if (this.prompt3Val == 'Choose your prompt') {
                this.prompt3ValStatus = true;
              }

              if (this.phoneOfOther == '' && this.knowAnyoneFun != "Yes") {
                this.phoneStatus = true;
              } else {
                this.phoneStatus = false;
              }

              if (this.emailOfOther == '' && this.knowAnyoneFun != "Yes") {
                this.emailStatus = true;
              } else {
                this.emailStatus = false;
              }

              if (this.fullnameOfOther == '' && this.knowAnyoneFun != "Yes") {
                this.fullnameStatus = true;
              } else {
                this.fullnameStatus = false;
              } // if (this.spotify == '') {
              //   this.spotifyStatus = true;
              // }
              // if (this.linkedin == '') {
              //   this.linkedinStatus = true;
              // }


              if (this.insta == '') {
                this.instaStatus = true;
              }

              if (this.shortBio == '') {
                this.shortBioStatus = true;
              }

              if (this.prompt1Val != 'Choose your prompt' && this.prompt2Val != 'Choose your prompt' && this.prompt3Val != 'Choose your prompt' && this.shortBio != '' && // this.spotify != '' &&
              // this.linkedin != '' &&
              this.insta != '') {
                if (this.knowAnyoneFun == "Yes") {
                  this.workService.presentLoading();
                  localStorage.setItem('shortBio', this.shortBio);
                  localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
                  localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
                  localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
                  localStorage.setItem('prompt1Val', this.prompt1Val);
                  localStorage.setItem('prompt2Val', this.prompt2Val);
                  localStorage.setItem('prompt3Val', this.prompt3Val);
                  localStorage.setItem('spotify', this.spotify);
                  localStorage.setItem('linkedin', this.linkedin);
                  localStorage.setItem('insta', this.insta);
                  localStorage.setItem('phoneOfOther', this.phoneOfOther);
                  localStorage.setItem('emailOfOther', this.emailOfOther);
                  localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
                  localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString());
                  this.storage.get('imgArr').then(function (imgArr) {
                    console.log('imgArr------------Yes-', imgArr);
                    _this.myImgArr = JSON.parse(imgArr);
                    _this.coverImage = _this.myImgArr[0].img;
                    _this.coverImage2 = _this.myImgArr[1].img;
                    console.log('cover image 1-------------Yes-', _this.coverImage);
                    console.log('cover image 2-------------Yes-', _this.coverImage); // this.storage.get('coverImg2').then(coverImage2 => {
                    //   console.log(coverImage2);

                    var fileTransfer = _this.transfer.create();

                    var random = Math.floor(Math.random() * 100);

                    if (localStorage.getItem('img1SelectedFromCamera1') == '0') {
                      //gallery
                      _this.fleName1 = ".png";
                      _this.minType1 = "image/png";
                    } else {
                      //camera
                      _this.fleName1 = ".jpg";
                      _this.minType1 = "image/jpeg";
                    }

                    if (localStorage.getItem('img2SelectedFromCamera2') == '0') {
                      //gallery
                      _this.fleName2 = ".png";
                      _this.minType2 = "image/png";
                    } else {
                      //camera
                      _this.fleName2 = ".jpg";
                      _this.minType2 = "image/jpeg";
                    }

                    var optionsImageOne = {
                      fileKey: "image_data",
                      fileName: "myImage_" + random + _this.fleName1,
                      chunkedMode: false,
                      httpMethod: "post",
                      mimeType: _this.minType1,
                      headers: {// "Auth-Key": this.authToken,
                      },
                      params: {
                        image: "YPOP"
                      }
                    };
                    var optionsImageTwo = {
                      fileKey: "image_data",
                      fileName: "myImage_" + random + _this.fleName2,
                      chunkedMode: false,
                      httpMethod: "post",
                      mimeType: _this.minType2,
                      headers: {// "Auth-Key": this.authToken,
                      },
                      params: {
                        image: "YPOP"
                      }
                    };
                    fileTransfer.upload(_this.coverImage, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageOne).then(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this2 = this;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.uploadedCOverImage = JSON.parse(data.response);
                                fileTransfer.upload(this.coverImage2, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageTwo).then(function (licenseData) {
                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            this.uploadedCOverImage2 = JSON.parse(licenseData.response);
                                            this.workService.hideLoading();
                                            this.subMitFormData();

                                          case 3:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee, this);
                                  }));
                                }, function (err) {
                                  console.log("Error");
                                  console.log(err);
                                  return;
                                });

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }); // })
                  });
                } else if (this.phoneOfOther != '' && this.emailOfOther != '' && this.fullnameOfOther != '') {
                  this.workService.presentLoading();
                  localStorage.setItem('knowAnyoneFun', 'No');
                  localStorage.setItem('shortBio', this.shortBio);
                  localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
                  localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
                  localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
                  localStorage.setItem('prompt1Val', this.prompt1Val);
                  localStorage.setItem('prompt2Val', this.prompt2Val);
                  localStorage.setItem('prompt3Val', this.prompt3Val);
                  localStorage.setItem('spotify', this.spotify);
                  localStorage.setItem('linkedin', this.linkedin);
                  localStorage.setItem('insta', this.insta);
                  localStorage.setItem('phoneOfOther', this.phoneOfOther);
                  localStorage.setItem('emailOfOther', this.emailOfOther);
                  localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
                  localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString()); // this.storage.get('coverImg').then(coverImage => {
                  //   console.log(coverImage);
                  //   this.storage.get('coverImg2').then(coverImage2 => {
                  //     console.log(coverImage2);

                  this.storage.get('imgArr').then(function (imgArr) {
                    console.log('imgArr------------No-', imgArr);
                    _this.myImgArr = JSON.parse(imgArr);
                    console.log('imgArr------------jSON NO-', _this.myImgArr);
                    _this.coverImage = _this.myImgArr[0].img;
                    _this.coverImage2 = _this.myImgArr[1].img;
                    console.log('cover image 1-------------No-', _this.coverImage);
                    console.log('cover image 2-------------No-', _this.coverImage); // this.storage.get('coverImg2').then(coverImage2 => {
                    //   console.log(coverImage2);

                    var fileTransfer = _this.transfer.create();

                    var random = Math.floor(Math.random() * 100);

                    if (localStorage.getItem('img1SelectedFromCamera1') == '0') {
                      //gallery
                      _this.fleName1 = ".png";
                      _this.minType1 = "image/png";
                    } else {
                      //camera
                      _this.fleName1 = ".jpg";
                      _this.minType1 = "image/jpeg";
                    }

                    if (localStorage.getItem('img2SelectedFromCamera2') == '0') {
                      //gallery
                      _this.fleName2 = ".png";
                      _this.minType2 = "image/png";
                    } else {
                      //camera
                      _this.fleName2 = ".jpg";
                      _this.minType2 = "image/jpeg";
                    }

                    var optionsImageOne = {
                      fileKey: "image_data",
                      fileName: "myImage_" + random + _this.fleName1,
                      chunkedMode: false,
                      httpMethod: "post",
                      mimeType: _this.minType1,
                      headers: {// "Auth-Key": this.authToken,
                      },
                      params: {
                        image: "YPOP"
                      }
                    };
                    var optionsImageTwo = {
                      fileKey: "image_data",
                      fileName: "myImage_" + random + _this.fleName2,
                      chunkedMode: false,
                      httpMethod: "post",
                      mimeType: _this.minType2,
                      headers: {// "Auth-Key": this.authToken,
                      },
                      params: {
                        image: "YPOP"
                      }
                    };
                    fileTransfer.upload(_this.coverImage, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageOne).then(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                console.log('img 1 uploaded--->', data);
                                this.uploadedCOverImage = JSON.parse(data.response);
                                fileTransfer.upload(this.coverImage2, "https://thelevapp.co/backoffice/webservices/process_image_upload/users_customers/", optionsImageTwo).then(function (licenseData) {
                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                      while (1) {
                                        switch (_context3.prev = _context3.next) {
                                          case 0:
                                            this.uploadedCOverImage2 = JSON.parse(licenseData.response);
                                            this.workService.hideLoading();
                                            this.subMitFormData();

                                          case 3:
                                          case "end":
                                            return _context3.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                }, function (err) {
                                  console.log("Error");
                                  console.log(err);
                                  return;
                                });

                              case 3:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    }); // })
                  });
                } else {
                  if (this.phoneOfOther == '') {
                    this.phoneStatus = true;
                  } else {
                    this.phoneStatus = false;
                  }

                  if (this.emailOfOther == '') {
                    this.emailStatus = true;
                  } else {
                    this.emailStatus = false;
                  }

                  if (this.fullnameOfOther == '') {
                    this.fullnameStatus = true;
                  } else {
                    this.fullnameStatus = false;
                  } // this.phoneStatus = true;
                  // this.emailStatus = true;
                  // this.fullnameStatus = true;


                  setTimeout(function () {
                    _this.shortBioStatus = false;
                    _this.prompt1ValStatus = false;
                    _this.prompt2ValStatus = false;
                    _this.prompt3ValStatus = false;
                    _this.phoneStatus = false;
                    _this.emailStatus = false;
                    _this.fullnameStatus = false; // this.spotifyStatus = false;

                    _this.linkedinStatus = false;
                    _this.instaStatus = false;
                  }, 3000);
                }
              } else {
                this.workService.presentToast('Please Enter Required Field.');
                setTimeout(function () {
                  _this.shortBioStatus = false;
                  _this.prompt1ValStatus = false;
                  _this.prompt2ValStatus = false;
                  _this.prompt3ValStatus = false;
                  _this.phoneStatus = false;
                  _this.emailStatus = false;
                  _this.fullnameStatus = false; // this.spotifyStatus = false;

                  _this.linkedinStatus = false;
                  _this.instaStatus = false;
                }, 3000);
              } // this.router.navigate(['requestsubmitted'])

            }
          }
        }, {
          key: "subMitFormData",
          value: function subMitFormData() {
            var _this4 = this;

            console.log('know', localStorage.getItem('knowAnyoneFun'));
            this.workService.presentLoading();
            var prompt1HeadIDVal = localStorage.getItem('prompt1ValHead');
            var prompt2HeadIDVal = localStorage.getItem('prompt2ValHead');
            var prompt3HeadIDVal = localStorage.getItem('prompt3ValHead');
            var prompt1Val = localStorage.getItem('prompt1Val');
            var prompt2Val = localStorage.getItem('prompt2Val');
            var prompt3Val = localStorage.getItem('prompt3Val');
            var myprompts = {};
            myprompts[prompt1HeadIDVal] = prompt1Val;
            myprompts[prompt2HeadIDVal] = prompt2Val;
            myprompts[prompt3HeadIDVal] = prompt3Val;
            console.log('my array ---->>>', myprompts);
            var oneSignalID = localStorage.getItem("oneSignaldeviceID");

            if (oneSignalID == null || oneSignalID == 'null') {
              oneSignalID = 'not available';
            }

            var data = JSON.stringify({
              "first_name": localStorage.getItem('fname'),
              "last_name": localStorage.getItem('lname'),
              "user_email": localStorage.getItem('email'),
              "user_password": localStorage.getItem('pass1'),
              "newsletter": localStorage.getItem('getNotiAndUpdates'),
              "date_of_birth": localStorage.getItem('dobYear') + "-" + localStorage.getItem('dobMonth') + "-" + localStorage.getItem('dobDay'),
              "lives": localStorage.getItem('lives'),
              "froms": localStorage.getItem('from'),
              "profile_pic_1": this.uploadedCOverImage.message,
              "profile_pic_2": this.uploadedCOverImage2.message,
              "contact_number": localStorage.getItem('simpleNumberToSendourDB'),
              "system_countries_id": localStorage.getItem('selectedNatID'),
              "system_genders_id": localStorage.getItem('selectedGenderId'),
              "system_looking_for_id": localStorage.getItem('lookingForSelectedID'),
              "height": localStorage.getItem('height'),
              "work_company": localStorage.getItem('workplace'),
              "system_jobtitle": localStorage.getItem('whatyoudo'),
              "system_edulevel_id": localStorage.getItem('selectededuID'),
              "school": JSON.parse(localStorage.getItem('schoolsArray')),
              "career_goals": localStorage.getItem('career'),
              "system_religions_id": localStorage.getItem('religionID'),
              "system_affiliations_id": localStorage.getItem('affeliationID'),
              "system_maritalstatus_id": localStorage.getItem('meritalStatusSelectedID'),
              "willing_relocate": localStorage.getItem('relocate'),
              "system_personality_type_id": localStorage.getItem('selectedPersonalityTypeID'),
              "short_bio": localStorage.getItem('shortBio'),
              "prompts_id": myprompts,
              "instagram": localStorage.getItem('insta'),
              "linkedin": localStorage.getItem('linkedin'),
              "spotify": localStorage.getItem('spotify'),
              "know_anyone": localStorage.getItem('knowAnyoneFun'),
              "friend_contact": localStorage.getItem('phoneOfOther'),
              "friend_full_name": localStorage.getItem('fullnameOfOther'),
              "friend_email": localStorage.getItem('emailOfOther'),
              "onesignal_id": oneSignalID,
              "system_kosher_id": localStorage.getItem('kosherID'),
              "system_ethinicity_id": JSON.parse(localStorage.getItem('ethnicityArr')),
              "additional_comments": "Comment"
            });
            console.log('my Stringy----', data); // alert('my Stringy----' + data)

            this.restService.signupAPI(data).subscribe(function (res) {
              console.log('apis responseeee------>>', res);

              _this4.workService.hideLoading();

              if (res.status == "success") {
                localStorage.clear();

                _this4.storage.clear();

                localStorage.setItem('user_instagram', _this4.signupServiece.appInsta);
                localStorage.setItem('login', 'isLogin');
                localStorage.setItem('loggedinUserData', JSON.stringify(res.data.user));
                localStorage.setItem('loggedinUserID', res.data.user.users_customers_id);

                _this4.workService.presentToast('Your Profile Created Successfully!');

                _this4.router.navigate(['requestsubmitted'], {
                  replaceUrl: true
                });
              } else {
                _this4.workService.presentToast(res.message);
              }
            }, function (err) {
              _this4.workService.hideLoading();

              _this4.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "getNoti",
          value: function getNoti(event) {
            console.log(event);

            if (event.detail.checked) {
              this.knowAnyoneFun = 'Yes';
              localStorage.setItem('knowAnyoneFun', 'Yes');
              console.log('afdsafsdfsdf', localStorage.getItem('knowAnyoneFun'));
            } else {
              this.knowAnyoneFun = 'No';
              localStorage.setItem('knowAnyoneFun', 'No');
            }
          }
        }, {
          key: "goToProfile1",
          value: function goToProfile1() {
            localStorage.setItem('shortBio', this.shortBio);
            localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
            localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
            localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
            localStorage.setItem('prompt1Val', this.prompt1Val);
            localStorage.setItem('prompt2Val', this.prompt2Val);
            localStorage.setItem('prompt3Val', this.prompt3Val);
            localStorage.setItem('spotify', this.spotify);
            localStorage.setItem('linkedin', this.linkedin);
            localStorage.setItem('insta', this.insta);
            localStorage.setItem('phoneOfOther', this.phoneOfOther);
            localStorage.setItem('emailOfOther', this.emailOfOther);
            localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
            localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString());
            this.router.navigate(['youprofile1']);
          }
        }, {
          key: "goToProfile2",
          value: function goToProfile2() {
            localStorage.setItem('shortBio', this.shortBio);
            localStorage.setItem('prompt1ValHead', this.prompt1ValHead);
            localStorage.setItem('prompt2ValHead', this.prompt2ValHead);
            localStorage.setItem('prompt3ValHead', this.prompt3ValHead);
            localStorage.setItem('prompt1Val', this.prompt1Val);
            localStorage.setItem('prompt2Val', this.prompt2Val);
            localStorage.setItem('prompt3Val', this.prompt3Val);
            localStorage.setItem('spotify', this.spotify);
            localStorage.setItem('linkedin', this.linkedin);
            localStorage.setItem('insta', this.insta);
            localStorage.setItem('phoneOfOther', this.phoneOfOther);
            localStorage.setItem('emailOfOther', this.emailOfOther);
            localStorage.setItem('fullnameOfOther', this.fullnameOfOther);
            localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates.toString());
            this.router.navigate(['yourprofile2']);
          }
        }, {
          key: "myInstaClick",
          value: function myInstaClick() {
            console.log('ciccc');
            if (this.insta.length < 1) this.insta = '@';
          }
        }, {
          key: "checked",
          value: function checked(ev) {
            console.log('value of checkbox==', ev.detail.checked);
            this.check = ev.detail.checked;
          }
        }, {
          key: "goToTermsPolicy",
          value: function goToTermsPolicy() {
            this.router.navigate(['termsservice']);
          }
        }]);

        return Yourprofile3Page;
      }();

      _Yourprofile3Page.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer
        }];
      };

      _Yourprofile3Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-yourprofile3',
        template: _raw_loader_yourprofile3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_yourprofile3_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Yourprofile3Page);
      /***/
    },

    /***/
    12300:
    /*!*****************************************************!*\
      !*** ./src/app/yourprofile3/yourprofile3.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nhr {\n  display: block;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  overflow: hidden;\n  border-style: inset;\n}\n\n.numberDiv1 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv2 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv3 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #615d5db0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.redclass {\n  color: red;\n}\n\n.check {\n  --background: #fff;\n  --background-checked: #fff;\n  --checkmark-color: #000;\n  --border-color-checked: #fff;\n  --size: 17px;\n  --border-color: #fff;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXJwcm9maWxlMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFBQSwwQkFBQTtFQUFBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7QUFDTiIsImZpbGUiOiJ5b3VycHJvZmlsZTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGhlaWdodDogNDBwdDtcclxufVxyXG5cclxucCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC41ZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMGVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbn1cclxuXHJcblxyXG4ubnVtYmVyRGl2MSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGIwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLm51bWJlckRpdjIge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5udW1iZXJEaXYzIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE1ZDVkYjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ucmVkY2xhc3Mge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uY2hlY2t7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmO1xyXG4gICAgICAtLWNoZWNrbWFyay1jb2xvcjogIzAwMDtcclxuICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgICAgLS1zaXplOiAxN3B4O1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCAwcHggMTBweCAwcHg7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    25212:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/yourprofile3/yourprofile3.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"3\" style=\"padding-left: 10px;\">\n      <img (click)=\"goBack()\" style=\"width: 20px;\n    height: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-label style=\"font-size: 14pt;\">Prompts</ion-label>\n    </ion-col>\n    <ion-col size=\"3\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: -webkit-right;\">\n        <div (click)=\"goToProfile1()\" class=\"numberDiv1\"><label>1</label></div>\n      </ion-col>\n\n      <ion-col style=\"text-align: -webkit-center;\">\n        <div (click)=\"goToProfile2()\" class=\"numberDiv2\"><label>2</label></div>\n      </ion-col>\n\n      <ion-col>\n        <div class=\"numberDiv3\"><label>3</label></div>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Tell Us A Little About Yourself</ion-label>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 8pt;\">Provide a few sentences about you, what you care about and why you'd like to\n          be part of LEV.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\" [class.redclass]=\"shortBioStatus\">The Short Bio *</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: -10px;\">\n      <ion-col>\n        <ion-textarea style=\"height: 170px;\n        border-radius: 10px;\n        background: #70707070; \n        margin-top: 7px;\" placeholder=\"Write here....\" [(ngModel)]=\"shortBio\" (ionChange)=\"textarea($event)\">\n        </ion-textarea>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Prompts *</ion-label>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 7px;\">\n\n\n\n      <div style=\"padding:10px;\">\n\n\n        <ion-row (click)=\"showprompt1()\">\n          <ion-col size=\"10\">\n            <ion-text *ngIf=\"prompt1Name\" style=\"font-size: 9pt; \" [class.redclass]=\"prompt1ValStatus\">{{prompt1Name}}\n            </ion-text> <br *ngIf=\"prompt1Name\">\n            <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"prompt1ValStatus\">{{prompt1Val}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img *ngIf=\"prompts1show\" style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down.png\">\n            <img *ngIf=\"!prompts1show\" style=\"width: 16px;\n             height: 16px;\" src=\"assets/imgs/up.png\">\n          </ion-col>\n\n\n        </ion-row>\n\n        <div [hidden]=\"prompts1show\" style=\"height: 85px;\n          overflow: auto;\">\n\n          <h6 (click)=\"prompt1(nat,i)\" *ngFor=\"let nat of user_prompts_array ; let i = index\">{{nat.name}}\n          </h6>\n\n        </div>\n\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%; margin-top: 4px;\">\n\n\n\n      <div style=\"padding:10px;\">\n\n\n        <ion-row (click)=\"showprompt2()\">\n          <ion-col size=\"10\">\n            <ion-text *ngIf=\"prompt2Name\" style=\"font-size: 9pt; \" [class.redclass]=\"prompt1ValStatus\">{{prompt2Name}}\n            </ion-text> <br *ngIf=\"prompt2Name\">\n            <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"prompt2ValStatus\">{{prompt2Val}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img *ngIf=\"prompts2show\" style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down.png\">\n            <img *ngIf=\"!prompts2show\" style=\"width: 16px;\n             height: 16px;\" src=\"assets/imgs/up.png\">\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"prompts2show\" style=\"height: 85px;\n        overflow: auto;\">\n\n          <h6 (click)=\"prompt2(nat,i)\" *ngFor=\"let nat of user_prompts_array ; let i = index\">{{nat.name}}\n          </h6>\n\n        </div>\n\n\n\n      </div>\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%; margin-top: 4px;\">\n\n\n\n\n      <div style=\"padding:10px;\">\n\n\n        <ion-row (click)=\"showprompt3()\" style=\"margin-bottom: 4px;\">\n          <ion-col size=\"10\">\n            <ion-text *ngIf=\"prompt3Name\" style=\"font-size: 9pt; \" [class.redclass]=\"prompt1ValStatus\">{{prompt3Name}}\n            </ion-text> <br *ngIf=\"prompt3Name\">\n            <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"prompt3ValStatus\">{{prompt3Val}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img *ngIf=\"prompts3show\" style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down.png\">\n            <img *ngIf=\"!prompts3show\" style=\"width: 16px;\n             height: 16px;\" src=\"assets/imgs/up.png\">\n          </ion-col>\n        </ion-row>\n\n\n        <div [hidden]=\"prompts3show\" style=\"height: 85px;\n        overflow: auto;\">\n\n          <h6 (click)=\"prompt3(nat,i)\" *ngFor=\"let nat of user_prompts_array ; let i = index\">{{nat.name}}\n          </h6>\n\n        </div>\n\n\n\n      </div>\n\n\n\n\n\n    </div>\n\n\n    <ion-row style=\"margin-top: 7px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Social Media</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 7px;\">\n\n      <div (click)=\"myInstaClick()\" class=\"inp-top-radius\"\n        style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"instaStatus\">Instagram *</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"@insta\" [(ngModel)]=\"insta\" (ionChange)=\"changeFunction($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"linkedinStatus\">Linkedin</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"@linkedin\" [(ngModel)]=\"linkedin\" (ionChange)=\"changeFunction1($event)\">\n        </ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"spotifyStatus\">Spotify </ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"@spotify\" [(ngModel)]=\"spotify\" (ionChange)=\"changeFunction2($event)\"></ion-input>\n      </div>\n\n\n\n\n    </div>\n\n\n    <ion-row style=\"margin-top: 15px;\">\n      <ion-col size=\"9\" style=\"padding-top: 10px;\">\n        <ion-label style=\"font-size: 9pt;\">I Don't Know Any Member</ion-label>\n      </ion-col>\n\n      <ion-col size=\"3\" style=\"text-align: right;\">\n\n        <ion-toggle *ngIf=\"knowAnyoneFun == 'No'\" (ionChange)=\" getNoti($event)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\"></ion-toggle>\n        <ion-toggle *ngIf=\"knowAnyoneFun == 'Yes'\" (ionChange)=\"getNoti($event)\"\n          [class.togglePaddClass]=\"togglePlatformAndroid\" checked></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Know Any LEV Members?</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">If you know an existing member who can recommend you, add them here.\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 15px;\">\n\n      <div class=\"inp-top-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"fullnameStatus\">Full name</ion-text>\n        <ion-input autocapitalize=words style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Name Here\" [(ngModel)]=\"fullnameOfOther\"\n          (ionChange)=\"changeFunction3($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"emailStatus\">Email</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Email Here\" [(ngModel)]=\"emailOfOther\" (ionChange)=\"changeFunction4($event)\">\n        </ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"phoneStatus\">Cell phone number</ion-text>\n        <ion-input type=\"tel\" style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Contact Number\" [(ngModel)]=\"phoneOfOther\"></ion-input>\n      </div>\n\n\n\n\n    </div>\n\n    <ion-row style=\"margin-top:5%;\">\n      <ion-col style=\"display: flex;\n      align-items: center;\">\n        <ion-checkbox mode=\"md\" class=\"check\" (ionChange)=\"checked($event)\"></ion-checkbox>\n        <div style=\"color: #fff;\n        margin-left: 2%;\n        font-size:12pt;\n        margin-top: 0.6%;\" (click)=\"goToTermsPolicy()\">Please Accept Terms and Policies</div>\n      </ion-col>\n\n\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"Continue()\" style=\"margin-bottom: 12px;\" class=\"btn\">Continue</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_yourprofile3_yourprofile3_module_ts-es5.js.map