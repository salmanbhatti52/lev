(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_yourprofile2_yourprofile2_module_ts"], {
    /***/
    82307:
    /*!*************************************************************!*\
      !*** ./src/app/yourprofile2/yourprofile2-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Yourprofile2PageRoutingModule": function Yourprofile2PageRoutingModule() {
          return (
            /* binding */
            _Yourprofile2PageRoutingModule
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


      var _yourprofile2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./yourprofile2.page */
      90008);

      var routes = [{
        path: '',
        component: _yourprofile2_page__WEBPACK_IMPORTED_MODULE_0__.Yourprofile2Page
      }];

      var _Yourprofile2PageRoutingModule = function Yourprofile2PageRoutingModule() {
        _classCallCheck(this, Yourprofile2PageRoutingModule);
      };

      _Yourprofile2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Yourprofile2PageRoutingModule);
      /***/
    },

    /***/
    97285:
    /*!*****************************************************!*\
      !*** ./src/app/yourprofile2/yourprofile2.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Yourprofile2PageModule": function Yourprofile2PageModule() {
          return (
            /* binding */
            _Yourprofile2PageModule
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


      var _yourprofile2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./yourprofile2-routing.module */
      82307);
      /* harmony import */


      var _yourprofile2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./yourprofile2.page */
      90008);

      var _Yourprofile2PageModule = function Yourprofile2PageModule() {
        _classCallCheck(this, Yourprofile2PageModule);
      };

      _Yourprofile2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _yourprofile2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Yourprofile2PageRoutingModule],
        declarations: [_yourprofile2_page__WEBPACK_IMPORTED_MODULE_1__.Yourprofile2Page]
      })], _Yourprofile2PageModule);
      /***/
    },

    /***/
    90008:
    /*!***************************************************!*\
      !*** ./src/app/yourprofile2/yourprofile2.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Yourprofile2Page": function Yourprofile2Page() {
          return (
            /* binding */
            _Yourprofile2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_yourprofile2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./yourprofile2.page.html */
      77934);
      /* harmony import */


      var _yourprofile2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./yourprofile2.page.scss */
      39382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
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

      var _Yourprofile2Page = /*#__PURE__*/function () {
        function Yourprofile2Page(location, router, workService, DomSanitizer, modalCtrl, signupService, restService, storage, signupServiece, platform) {
          _classCallCheck(this, Yourprofile2Page);

          this.location = location;
          this.router = router;
          this.workService = workService;
          this.DomSanitizer = DomSanitizer;
          this.modalCtrl = modalCtrl;
          this.signupService = signupService;
          this.restService = restService;
          this.storage = storage;
          this.signupServiece = signupServiece;
          this.platform = platform;
          this.testImg = 'data:image/jpeg;base64,/9j/4QCCRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIKYAAIAAAAgAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABS29sZHVub3ZhIEFubmEgfCBEcmVhbXN0aW1lLmNvbQD/7QBIUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACscAnQAH0tvbGR1bm92YSBBbm5hIHwgRHJlYW1zdGltZS5jb20cAgAAAgAEAP/hDHVodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC44MCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwbHVzPSdodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvJz4KICA8cGx1czpMaWNlbnNvcj4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5kcmVhbXN0aW1lLmNvbTwvcGx1czpMaWNlbnNvclVSTD4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9wbHVzOkxpY2Vuc29yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXBSaWdodHM9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvJz4KICA8eG1wUmlnaHRzOldlYlN0YXRlbWVudD5odHRwczovL3d3dy5kcmVhbXN0aW1lLmNvbS9hYm91dC1zdG9jay1pbWFnZS1saWNlbnNlczwveG1wUmlnaHRzOldlYlN0YXRlbWVudD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8IAEQgCFQMgAwEiAAIRAQMRAf/EABsAAQEAAwEBAQAAAAAAAAAAAAABAgMEBQYH/8QAGgEBAQEBAQEBAAAA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';
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
          this.popupHidden = true;
          this.select_image = '';
          this.nationalityshow = true;
          this.whatyoudoShow = true;
          this.nationalityStatus = false;
          this.phoneNumStatus = false;
          this.genderStatus = false;
          this.lookingForStatus = false;
          this.heightStatus = false;
          this.workplaceStatus = false;
          this.whatyoudoStatus = false;
          this.eduStatus = false;
          this.schoolStatus = false;
          this.careerStatus = false;
          this.religionStatus = false;
          this.affiliationStatus = false;
          this.meritalStatusStatus = false;
          this.relocateStatus = false;
          this.personalityTypeStatus = false;
          this.kosherStatus = false;
          this.ethnicityStatus = false;
          this.workPlaceshow = true;
          this.eduStatusShow = true;
          this.affiliationshow = true;
          this.relocateshow = true;
          this.personalityTypeshow = true;
          this.phone = '';
          this.height = '';
          this.workplace = '';
          this.whatyoudo = '';
          this.school = '';
          this.career = '';
          this.selectedNat = 'Please Select';
          this.edu = 'Please Select';
          this.gender = 'Please Select';
          this.lookingFor = 'Please Select';
          this.religion = 'Please Select';
          this.meritalStatus = 'Please Select';
          this.affiliation = 'Please Select';
          this.personalityType = 'Please Select';
          this.relocate = 'Please Select';
          this.showPleaseSelectEthnicity = false;
          this.user_id = '';
          this.school_id = 0;
          this.selectedIndex = 0;
          this.natarr = '';
          this.whatyoudoArr = '';
          this.eduArr = '';
          this.affiliationArr = '';
          this.personalityTypeArr = '';
          this.flagsList = '';
          this.YesNoArr = [{
            id: 1,
            name: 'Yes'
          }, {
            id: 1,
            name: 'No'
          }];
          this.img1SelectedFromCamera1 = '';
          this.img2SelectedFromCamera2 = '';
          this.imgArr = [{
            id: 0,
            img: 'assets/imgs/chose_img.svg'
          }, {
            id: 1,
            img: 'assets/imgs/chose_img.svg'
          }];
          this.coverImg = '';
          this.base64ImageCover = '';
          this.coverImg2 = '';
          this.base64ImageCover2 = '';
          this.schoolsArray = [];
          this.height1 = 'Enter';
          this.height2 = 'Height';
          this.kosher = 'Please Select';
          this.ethnicity = 'Please Select';
          this.ethnicityArray = '';
          this.usercalculatedHeight = 'Enter Height'; // localStorage.setItem('ethnicity', val.name)
          // localStorage.setItem('ethnicityID', val.system_ethinicity_id)

          this.listishidden = true;
          this.autocompleteItems = [];
          this.incommingDataSystem = '';
          this.searchData = '';
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          });
        }

        _createClass(Yourprofile2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var stringy = JSON.stringify({}); // this.workService.presentLoading()

            this.restService.getSystemDataAPI(stringy).subscribe(function (res) {
              console.log('incomming data----', res); // this.workService.hideLoading()

              if (res.status == "success") {
                console.log(res.data); // console.log('instalgrammm', res.data.system_instagram);

                _this.incommingDataSystem = res.data;
                localStorage.setItem('user_instagram', res.data.system_instagram);
                _this.signupServiece.appInsta = res.data.system_instagram;
                _this.flagsList = res.data.system_countries;
                _this.eduArr = res.data.system_edulevel;
                _this.affiliationArr = res.data.system_affiliations;
                _this.personalityTypeArr = res.data.system_personality_type;
                _this.workService.systemData = res.data;
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "slideClick",
          value: function slideClick(event) {
            var _this2 = this;

            this.slider.getActiveIndex().then(function (index) {
              console.log(index);
              _this2.selectedIndex = index;

              _this2.showPopup(_this2.selectedIndex);
            });
          }
        }, {
          key: "CameraSelected",
          value: function CameraSelected() {
            var _this3 = this;

            this.hidePopup();
            console.log('camera');
            this.workService.selectImageInCamera().then(function (imageData) {
              if (_this3.select_image == 0) {
                _this3.img1SelectedFromCamera1 = '1';
                localStorage.setItem('img1SelectedFromCamera1', _this3.img1SelectedFromCamera1);
                _this3.coverImg = imageData; // this.base64ImageCover = 'data:image/jpeg;base64,' + imageData;

                _this3.base64ImageCover = "data:image/png;base64,".concat(imageData); //this.imgArr[this.select_image].img = ''

                _this3.imgArr[0].img = _this3.base64ImageCover; // var data = {
                // }
                // this.userImagesArr.push()
              } else {
                _this3.img2SelectedFromCamera2 = '1';
                localStorage.setItem('img2SelectedFromCamera2', _this3.img2SelectedFromCamera2);
                _this3.coverImg2 = imageData; // this.base64ImageCover2 = 'data:image/jpeg;base64,' + imageData;

                _this3.base64ImageCover2 = "data:image/png;base64,".concat(imageData);
                _this3.imgArr[1].img = _this3.base64ImageCover2;
              }
            }, function (err) {
              console.log('imagepicker  now:', err);
            }); //   }).catch(err => console.error(err));
          }
        }, {
          key: "sanatizeBase64ImageFromCameraCover",
          value: function sanatizeBase64ImageFromCameraCover(image) {
            if (image) {
              return this.DomSanitizer.bypassSecurityTrustResourceUrl(image);
            }
          }
        }, {
          key: "GalerySelected",
          value: function GalerySelected() {
            var _this4 = this;

            this.hidePopup();
            console.log('gallery');
            this.workService.selectImageInGallery().then(function (imageData) {
              if (_this4.select_image == 0) {
                _this4.img1SelectedFromCamera1 = '0';
                localStorage.setItem('img1SelectedFromCamera1', _this4.img1SelectedFromCamera1);
                _this4.coverImg = imageData; // this.base64ImageCover = 'data:image/png;base64,' + imageData;

                _this4.base64ImageCover = "data:image/png;base64,".concat(imageData);
                _this4.imgArr[0].img = _this4.base64ImageCover;
              } else {
                console.log('okkkkkkkkkkkkk 111111111111');
                _this4.img2SelectedFromCamera2 = '0';
                localStorage.setItem('img2SelectedFromCamera2', _this4.img2SelectedFromCamera2);
                _this4.coverImg2 = imageData;
                _this4.base64ImageCover2 = "data:image/png;base64,".concat(imageData); // this.base64ImageCover2 = 'data:image/png;base64,' + imageData;

                _this4.imgArr[1].img = _this4.base64ImageCover2;
              }
            }, function (err) {
              console.log('imagepicker  now:', err);
            }); //   }).catch(err => console.error(err));
          }
        }, {
          key: "showNationality",
          value: function showNationality() {
            console.log('nationality');

            if (this.nationalityshow == true) {
              this.nationalityshow = false;
            } else {
              this.nationalityshow = true;
            }
          }
        }, {
          key: "nationalitySelected",
          value: function nationalitySelected(nat) {
            localStorage.setItem('selectedNatID', nat.system_countries_id);
            console.log(nat);
            this.selectedNat = nat.name;
            this.nationalityshow = true;
          } //////////////////////////////////

        }, {
          key: "showWorkPlace",
          value: function showWorkPlace() {
            this.whatyoudoShow = false;
          }
        }, {
          key: "whatyoudoArrClick",
          value: function whatyoudoArrClick(nat) {
            console.log(nat);
            this.whatyoudoShow = true;
            this.whatyoudo = nat.name;
          } //////////////////////////////////

        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.workplace = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction2",
          value: function changeFunction2(ev) {
            this.whatyoudo = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction3",
          value: function changeFunction3(ev) {
            this.career = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeFunction4",
          value: function changeFunction4(ev) {
            this.school = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "goToReligion",
          value: function goToReligion() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            localStorage.setItem('ethnicity', this.ethnicity);
            this.router.navigate(['religion']);
          }
        }, {
          key: "goToMyKosher",
          value: function goToMyKosher() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            localStorage.setItem('ethnicity', this.ethnicity);
            this.router.navigate(['mykoshar']);
          }
        }, {
          key: "goTomaritalstatus",
          value: function goTomaritalstatus() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            localStorage.setItem('ethnicity', this.ethnicity);
            this.router.navigate(['maritalstatus']);
          }
        }, {
          key: "goToLookingfor",
          value: function goToLookingfor() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            localStorage.setItem('ethnicity', this.ethnicity);
            this.router.navigate(['lookingfor']);
          }
        }, {
          key: "goTogender",
          value: function goTogender() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicity', this.ethnicity);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            this.router.navigate(['gender']);
          } //////////////////////////////////

        }, {
          key: "showPopup",
          value: function showPopup(val) {
            this.select_image = val;
            this.popupHidden = false;
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            console.log('hidepop');
            this.popupHidden = true;
          } //////////////////////////////////

        }, {
          key: "showRelocete",
          value: function showRelocete() {
            if (this.relocateshow) {
              this.relocateshow = false;
            } else {
              this.relocateshow = true;
            }
          }
        }, {
          key: "relocateshowClick",
          value: function relocateshowClick(nat) {
            console.log(nat);
            this.relocateshow = true;
            this.relocate = nat.name;
          } //////////////////////////////////

        }, {
          key: "showpersonalityType",
          value: function showpersonalityType() {
            if (this.personalityTypeshow) {
              this.personalityTypeshow = false;
            } else {
              this.personalityTypeshow = true;
            }
          }
        }, {
          key: "personalityTypeshowClick",
          value: function personalityTypeshowClick(nat) {
            localStorage.setItem('selectedPersonalityTypeID', nat.system_personality_type_id);
            console.log(nat);
            this.personalityTypeshow = true;
            this.personalityType = nat.name;
          } //////////////////////////////////

        }, {
          key: "showaffiliation",
          value: function showaffiliation() {
            if (this.affiliationshow) {
              this.affiliationshow = false;
            } else {
              this.affiliationshow = true;
            }
          }
        }, {
          key: "affiliationshowClick",
          value: function affiliationshowClick(nat) {
            localStorage.setItem('affeliationID', nat.system_affiliations_id);
            console.log(nat);
            this.affiliationshow = true;
            this.affiliation = nat.name;
          } //////////////////////////////////

        }, {
          key: "showedu",
          value: function showedu() {
            if (this.eduStatusShow) {
              this.eduStatusShow = false;
            } else {
              this.eduStatusShow = true;
            }
          }
        }, {
          key: "eduArrClick",
          value: function eduArrClick(nat) {
            localStorage.setItem('selectededuID', nat.system_edulevel_id);
            console.log(nat);
            this.eduStatusShow = true;
            this.edu = nat.name;
          }
        }, {
          key: "Continue",
          value: function Continue() {
            var _this5 = this;

            if (this.phone == '') {
              this.phoneNumStatus = true;
            }

            if (this.height == 'Enter Height') {
              this.heightStatus = true;
            } // if (this.workplace == '') {
            //   this.workplaceStatus = true
            // }


            if (this.schoolsArray.length == 0) {
              this.schoolStatus = true;
            }

            if (this.career == '') {
              this.careerStatus = true;
            } ///////////////////////////


            if (this.career) {} else {
              this.careerStatus = true;
            }

            if (this.selectedNat == 'Please Select') {
              this.nationalityStatus = true;
            }

            if (this.edu == 'Please Select') {
              this.eduStatus = true;
            }

            if (this.whatyoudo) {} else {
              this.whatyoudoStatus = true;
            }

            if (this.gender == 'Please Select') {
              this.genderStatus = true;
            }

            if (this.lookingFor == 'Please Select') {
              this.lookingForStatus = true;
            }

            if (this.meritalStatus == 'Please Select') {
              this.meritalStatusStatus = true;
            }

            if (this.affiliation == 'Please Select') {
              this.affiliationStatus = true;
            }

            if (this.personalityType == 'Please Select') {
              this.personalityTypeStatus = true;
            }

            if (this.relocate == 'Please Select') {
              this.relocateStatus = true;
            }

            if (this.religion == 'Please Select') {
              this.religionStatus = true;
            } ///


            if (this.ethnicityArray) {
              if (this.ethnicityArray.length < 1) {
                this.ethnicity = 'Please Select';
              } else {
                this.ethnicity = 'Added';
              }
            } else {
              this.showPleaseSelectEthnicity = true;
            }

            if (this.ethnicity == 'Please Select') {
              this.ethnicityStatus = true;
            } else {
              this.ethnicityStatus = false;
            } ///////----------------------------------------------


            if (this.coverImg == '' || this.coverImg == 'assets/imgs/chose_img.svg') {
              this.workService.presentToast('Please upload your image');
            }

            if (this.coverImg2 == '' || this.coverImg2 == 'assets/imgs/chose_img.svg') {
              this.workService.presentToast('Please upload your image');
            }

            if (this.phone) {} else {
              this.phoneNumStatus = true;
            }

            if (this.height) {} else {
              this.heightStatus = true;
            } // if (this.workplace) {
            // } else {
            //   this.workplaceStatus = true
            // }


            if (this.schoolsArray.length == 0) {
              this.schoolStatus = true;
            }

            if (this.career) {} else {
              this.careerStatus = true;
            }

            console.log('phone', this.phone);

            if (this.kosher == 'Please Select') {
              this.kosherStatus = true;
            }

            var data = JSON.stringify({
              requestType: "personal_detail",
              users_id: "78",
              userimage: this.coverImg,
              userimage2: this.coverImg2,
              phone_number: this.phone,
              gender: this.gender,
              looking_for: this.lookingFor,
              height: this.height,
              company_title: this.workplace,
              school: this.school,
              carrer_goals: this.career,
              marital_status: this.meritalStatus,
              relocate: this.relocate,
              nationality: this.selectedNat,
              job_title: this.whatyoudo,
              edu_level: this.edu,
              religion: this.religion,
              affiliation: this.affiliation,
              personality_type: this.personalityType,
              kosher: this.kosher,
              ethhhh: this.ethnicity
            });
            console.log('goung data', data); /////////////////////////// 
            /////////////////////////// assets/imgs/chooseimg.png

            if (this.coverImg != '' && this.coverImg != 'assets/imgs/chose_img.svg' && this.coverImg2 != '' && this.coverImg2 != 'assets/imgs/chose_img.svg' && this.phone != '' && this.height != 'Enter Height' // && this.workplace != '' 
            && this.schoolsArray.length != 0 && this.career != '' && this.selectedNat != 'Please Select' && this.edu != 'Please Select' && this.whatyoudo != '' && this.gender != 'Please Select' && this.lookingFor != 'Please Select' && this.meritalStatus != 'Please Select' && this.affiliation != 'Please Select' && this.personalityType != 'Please Select' && this.relocate != 'Please Select' && this.religion != 'Please Select' && this.kosher != 'Please Select' && this.ethnicity != 'Please Select') {
              var data = JSON.stringify({
                requestType: "personal_detail",
                users_id: "78",
                userimage: this.coverImg,
                userimage2: this.coverImg2,
                phone_number: this.phone,
                gender: this.gender,
                looking_for: this.lookingFor,
                height: this.height,
                company_title: this.workplace,
                school: this.school,
                carrer_goals: this.career,
                marital_status: this.meritalStatus,
                relocate: this.relocate,
                nationality: this.selectedNat,
                job_title: this.whatyoudo,
                edu_level: this.edu,
                religion: this.religion,
                affiliation: this.affiliation,
                personality_type: this.personalityType,
                kosher: this.kosher
              });
              console.log('saved Data ===== ', data);
              this.storage.set('coverImg', this.base64ImageCover);
              this.storage.set('coverImg2', this.base64ImageCover2);
              this.storage.set('imgArr', JSON.stringify(this.imgArr));
              localStorage.setItem('phone', this.phone);
              localStorage.setItem('gender', this.gender);
              localStorage.setItem('lookingFor', this.lookingFor);
              localStorage.setItem('height', this.height);
              localStorage.setItem('workplace', this.workplace);
              localStorage.setItem('school', this.school);
              localStorage.setItem('career', this.career);
              localStorage.setItem('meritalStatus', this.meritalStatus);
              localStorage.setItem('relocate', this.relocate);
              localStorage.setItem('selectedNat', this.selectedNat);
              localStorage.setItem('whatyoudo', this.whatyoudo);
              localStorage.setItem('edu', this.edu);
              localStorage.setItem('religion', this.religion);
              localStorage.setItem('affiliation', this.affiliation);
              localStorage.setItem('personalityType', this.personalityType);
              localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
              this.storage.set('imgArr', JSON.stringify(this.imgArr));
              localStorage.setItem('kosher', this.kosher);
              localStorage.setItem('ethnicity', this.ethnicity);
              localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
              this.router.navigate(['yourprofile3']);
            } else {
              setTimeout(function () {
                _this5.nationalityStatus = false;
                _this5.phoneNumStatus = false;
                _this5.genderStatus = false;
                _this5.lookingForStatus = false;
                _this5.heightStatus = false;
                _this5.workplaceStatus = false;
                _this5.whatyoudoStatus = false;
                _this5.eduStatus = false;
                _this5.schoolStatus = false;
                _this5.careerStatus = false;
                _this5.religionStatus = false;
                _this5.affiliationStatus = false;
                _this5.meritalStatusStatus = false;
                _this5.relocateStatus = false;
                _this5.personalityTypeStatus = false;
                _this5.kosherStatus = false;
                _this5.ethnicityStatus = false;
              }, 4000);
            } // this.router.navigate(['requestsubmitted'])

          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this6 = this;

            console.log('enterrrrrrrrrrrrrr');
            this.storage.get('coverImg').then(function (res) {
              _this6.coverImg = res;
            });
            this.storage.get('coverImg2').then(function (res) {
              _this6.coverImg2 = res;
            });
            this.storage.get('imgArr').then(function (res) {
              console.log('resssssss---------', res);

              if (res) {
                _this6.imgArr = JSON.parse(res);
                _this6.coverImg = _this6.imgArr[0].img;
                _this6.coverImg2 = _this6.imgArr[1].img;
              } else {
                _this6.imgArr = [{
                  id: 0,
                  img: 'assets/imgs/chose_img.svg'
                }, {
                  id: 1,
                  img: 'assets/imgs/chose_img.svg'
                }]; // this.imgArr = [{ id: 0, img: this.testImg }, { id: 1, img: this.testImg }]
              }
            });
            this.phone = localStorage.getItem('phone');
            this.height = localStorage.getItem('height');
            this.workplace = localStorage.getItem('workplace');
            this.school = localStorage.getItem('school');
            this.career = localStorage.getItem('career');
            this.whatyoudo = localStorage.getItem('whatyoudo');
            this.ethnicityArray = JSON.parse(localStorage.getItem('ethnicityArr'));
            console.log('this.ethnicityArray----', this.ethnicityArray);

            if (this.ethnicityArray) {
              if (this.ethnicityArray.length < 1) {
                console.log('11111111111111111111');
                this.showPleaseSelectEthnicity = true;
              } else {
                this.showPleaseSelectEthnicity = false;
              }
            } else {
              this.showPleaseSelectEthnicity = true;
            }

            this.height1 = this.height.substring(0, 1);
            this.height2 = this.height.substring(2, 3);
            this.usercalculatedHeight = this.height1 + "'" + this.height2;

            if (this.coverImg == null || this.coverImg == 'null') {
              this.coverImg = '';
            }

            if (this.coverImg2 == null || this.coverImg2 == 'null') {
              this.coverImg2 = '';
            }

            if (this.phone == null || this.phone == 'null') {
              this.phone = '';
            }

            if (this.height == null || this.height == 'null' || this.height == "'" || this.usercalculatedHeight == "E't" || this.usercalculatedHeight == "'" || this.usercalculatedHeight == "N'N") {
              this.height = 'Enter Height';
              this.height1 = 'Enter';
              this.height2 = 'Height';
              this.usercalculatedHeight = 'Enter Height';
            }

            if (this.workplace == null || this.workplace == 'null') {
              this.workplace = '';
            }

            if (this.school == null || this.school == 'null') {
              this.school = '';
            }

            if (this.career == null || this.career == 'null') {
              this.career = '';
            }

            if (this.whatyoudo == null || this.whatyoudo == 'null') {
              this.whatyoudo = '';
            }

            this.selectedNat = localStorage.getItem('selectedNat');
            this.edu = localStorage.getItem('edu');
            this.gender = localStorage.getItem('gender');
            this.lookingFor = localStorage.getItem('lookingFor');
            this.religion = localStorage.getItem('religion');
            this.meritalStatus = localStorage.getItem('meritalStatus');
            this.affiliation = localStorage.getItem('affiliation');
            this.personalityType = localStorage.getItem('personalityType');
            this.relocate = localStorage.getItem('relocate');
            this.schoolsArray = JSON.parse(localStorage.getItem('schoolsArray'));
            this.ethnicity = localStorage.getItem('ethnicity');
            console.log('schoolArray', this.schoolsArray);
            this.kosher = localStorage.getItem('kosher');
            console.log('josher-----', this.kosher);

            if (this.schoolsArray == null || this.schoolsArray == 'null') {
              this.schoolsArray = [];
            }

            if (this.kosher == null || this.kosher == 'null') {
              this.kosher = 'Please Select';
            }

            if (this.ethnicity == null || this.ethnicity == 'null') {
              this.ethnicity = 'Please Select';
            }

            if (this.selectedNat == null || this.selectedNat == 'null') {
              this.selectedNat = 'Please Select';
            }

            if (this.edu == null || this.edu == 'null') {
              this.edu = 'Please Select';
            }

            if (this.gender == null || this.gender == 'null') {
              this.gender = 'Please Select';
            }

            if (this.lookingFor == null || this.lookingFor == 'null') {
              this.lookingFor = 'Please Select';
            }

            if (this.religion == null || this.religion == 'null') {
              this.religion = 'Please Select';
            }

            if (this.meritalStatus == null || this.meritalStatus == 'null') {
              this.meritalStatus = 'Please Select';
            }

            if (this.affiliation == null || this.affiliation == 'null') {
              this.affiliation = 'Please Select';
            }

            if (this.personalityType == null || this.personalityType == 'null') {
              this.personalityType = 'Please Select';
            }

            if (this.relocate == null || this.relocate == 'null') {
              this.relocate = 'Please Select';
            }
          }
        }, {
          key: "goToProfile1",
          value: function goToProfile1() {
            this.router.navigate(['youprofile1']);
          }
        }, {
          key: "goToMyheight",
          value: function goToMyheight() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            localStorage.setItem('ethnicity', this.ethnicity);
            this.router.navigate(['myage']);
          }
        }, {
          key: "goToEthnicity",
          value: function goToEthnicity() {
            this.storage.set('coverImg', this.base64ImageCover);
            this.storage.set('coverImg2', this.base64ImageCover2); // localStorage.setItem('coverImg', this.coverImg)
            // localStorage.setItem('coverImg2', this.coverImg2)

            localStorage.setItem('phone', this.phone);
            localStorage.setItem('gender', this.gender);
            localStorage.setItem('lookingFor', this.lookingFor);
            localStorage.setItem('height', this.height);
            localStorage.setItem('workplace', this.workplace);
            localStorage.setItem('school', this.school);
            localStorage.setItem('career', this.career);
            localStorage.setItem('meritalStatus', this.meritalStatus);
            localStorage.setItem('relocate', this.relocate);
            localStorage.setItem('selectedNat', this.selectedNat);
            localStorage.setItem('whatyoudo', this.whatyoudo);
            localStorage.setItem('edu', this.edu);
            localStorage.setItem('religion', this.religion);
            localStorage.setItem('affiliation', this.affiliation);
            localStorage.setItem('personalityType', this.personalityType);
            this.storage.set('imgArr', JSON.stringify(this.imgArr));
            localStorage.setItem('schoolsArray', JSON.stringify(this.schoolsArray));
            localStorage.setItem('kosher', this.kosher);
            localStorage.setItem('ethnicityArr', JSON.stringify(this.ethnicityArray));
            localStorage.setItem('ethnicity', this.ethnicity);
            this.router.navigate(['myethnicity']);
          }
        }, {
          key: "goToProfile3",
          value: function goToProfile3() {// this.router.navigate(['requestsubmitted'])
            // this.router.pnavigate(['yourprofile3'])
          } // schollChange(event) {
          //   console.log(event.detail.value);
          //   this.school = event.detail.value
          //   if (this.school == '') {
          //     this.school = ''
          //   }
          // }

        }, {
          key: "schoolAded",
          value: function schoolAded() {
            this.listishidden = true;
            this.autocompleteItems = [];
            console.log('enterrrrrrr', this.school);
            var obj = {
              id: this.school_id,
              name: this.school
            };
            console.log('name---', obj);

            if (obj.name != "" && obj.name != "\n" && obj.name != "\n\n" && obj.name != "\n\n\n" && obj.name != "\n\n\n\n" && obj.name != "\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n\n") {
              this.school_id = this.school_id + 1;
              this.schoolsArray.push(obj);
              this.school = '';
            }
          }
        }, {
          key: "deleteSchool",
          value: function deleteSchool(school) {
            console.log(school);
            this.schoolsArray.splice(school, 1);
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(item) {
            console.log('item = ', item);
            this.listishidden = true;
            this.autocompleteItems = [];
            console.log('enterrrrrrr', this.school);
            var obj = {
              id: item.system_schools_id,
              name: item.name
            };
            console.log('name---', obj);

            if (obj.name != "" && obj.name != "\n" && obj.name != "\n\n" && obj.name != "\n\n\n" && obj.name != "\n\n\n\n" && obj.name != "\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n" && obj.name != "\n\n\n\n\n\n\n") {
              this.school_id = this.school_id + 1;
              this.schoolsArray.push(obj);
              this.school = '';
            }
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            this.listishidden = false;
            console.log(event.detail.value);
            this.searchData = event.detail.value;
            console.log('searchData', this.searchData);
            console.log('toprateddest-----------', this.incommingDataSystem.system_schools);
            this.autocompleteItems = this.incommingDataSystem.system_schools.filter(function (item) {
              if (item.name != null) {
                return item.name.toLowerCase().includes(event.detail.value.toLowerCase());
              }
            });
            console.log('filter-----------', this.autocompleteItems);

            if (this.school == '') {
              this.listishidden = true;
              this.autocompleteItems = [];
            }
          }
        }]);

        return Yourprofile2Page;
      }();

      _Yourprofile2Page.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }];
      };

      _Yourprofile2Page.propDecorators = {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['mySlider', {
            "static": true
          }]
        }]
      };
      _Yourprofile2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-yourprofile2',
        template: _raw_loader_yourprofile2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_yourprofile2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Yourprofile2Page);
      /***/
    },

    /***/
    39382:
    /*!*****************************************************!*\
      !*** ./src/app/yourprofile2/yourprofile2.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nhr {\n  display: block;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  overflow: hidden;\n  border-style: inset;\n}\n\nion-toggle {\n  --background: rgb(255, 255, 255);\n  --background-checked: #000000;\n  --handle-background: #000000;\n  --handle-background-checked: rgb(255, 255, 255);\n}\n\n.numberDiv1 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv2 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #615d5db0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv3 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.redclass {\n  color: red;\n}\n\n.slides-md {\n  --bullet-background:none;\n  --bullet-background-active: var(--ion-color-primary, #3880ff);\n  --progress-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --progress-bar-background-active: var(--ion-color-primary-shade, #3171e0);\n  --scroll-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --scroll-bar-background-active: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n}\n\n.slides-ios {\n  --bullet-background:none;\n  --bullet-background-active: var(--ion-color-primary, #3880ff);\n  --progress-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);\n  --progress-bar-background-active: var(--ion-color-primary-shade, #3171e0);\n  --scroll-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);\n  --scroll-bar-background-active: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXJwcm9maWxlMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFBQSwwQkFBQTtFQUFBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFFQSw0QkFBQTtFQUNBLCtDQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBT0E7RUFDSSx3QkFBQTtFQUNBLDZEQUFBO0VBQ0EseUVBQUE7RUFDQSx5RUFBQTtFQUNBLHNFQUFBO0VBQ0EsNkVBQUE7QUFKSjs7QUFRQTtFQUNJLHdCQUFBO0VBQ0EsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHlFQUFBO0VBQ0Esc0VBQUE7RUFDQSw2RUFBQTtBQUxKIiwiZmlsZSI6InlvdXJwcm9maWxlMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zYy1pb24taW5wdXQtbWQtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5zYy1pb24taW5wdXQtaW9zLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB1bmljb2RlLWJpZGk6IGlzb2xhdGU7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMwMDAwMDA7XHJcblxyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubnVtYmVyRGl2MSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGIwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLm51bWJlckRpdjIge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTVkNWRiMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5udW1iZXJEaXYzIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ucmVkY2xhc3Mge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG4uc2xpZGVzLW1kIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6bm9uZTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbiAgICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMjUpO1xyXG4gICAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKTtcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMSk7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC41KTtcclxufVxyXG5cclxuXHJcbi5zbGlkZXMtaW9zIHtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6bm9uZTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbiAgICAtLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMjUpO1xyXG4gICAgLS1wcm9ncmVzcy1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKTtcclxuICAgIC0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMSk7XHJcbiAgICAtLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC41KTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    77934:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/yourprofile2/yourprofile2.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"3\" style=\"padding-left: 10px;\">\n      <img (click)=\"goBack()\" style=\"width: 20px;\n    height: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-label style=\"font-size: 14pt;\">Your Profile</ion-label>\n    </ion-col>\n    <ion-col size=\"3\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: -webkit-right;\">\n        <div (click)=\"goToProfile1()\" class=\"numberDiv1\"><label>1</label></div>\n      </ion-col>\n\n      <ion-col style=\"text-align: -webkit-center;\">\n        <div class=\"numberDiv2\"><label>2</label></div>\n      </ion-col>\n\n      <ion-col>\n        <div class=\"numberDiv3\" (click)=\"goToProfile3()\"><label>3</label></div>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"margin-top: 10px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">Upload two clear photos so we can confirm your identity. Please note that all\n          information gathered will not be displayed on your public profile but will rather help us collect data on your\n          preferences and source the best matches.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Upload A Recent Photos * </ion-label>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col style=\"text-align: -webkit-center;\">\n\n        <!-- <div style=\"border-radius: 50%;\n        height: 150px;\n        width: 150px;\n        border: 2px dashed white;\" (click)=\"showPopup(1)\" *ngIf=\"base64ImageCover ==''\">\n\n\n          <button style=\"background: none;\n        margin-top: 56px;\n        font-size: 10px;\n        border: 2px solid white;\n        border-radius: 27px;\n        height: 35px;\n        width: 100px;\">\n\n            <ion-row>\n              <ion-col size=\"3\" style=\"padding: 0px;\">\n                <img style=\"width: 15px;\n            height: 15px;\" src=\"assets/imgs/gallery.svg\">\n              </ion-col>\n              <ion-col size=\"9\" style=\"padding: 0px;\">\n                <p style=\"    display: block;\n                margin-block-start: 4px;\n                margin-block-end: 0em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-size: 9px;\">Choose Image</p>\n              </ion-col>\n            </ion-row>\n\n          </button>\n\n        </div> -->\n\n\n        <!-- <img (click)=\"showPopup()\" *ngIf=\"base64ImageCover !=''\"\n          [src]=\"sanatizeBase64ImageFromCameraCover(base64ImageCover)\" style=\" height: 150px;\n          width: 150px;\n        object-fit: cover;\n        border-radius: 50%;\"> -->\n\n\n\n\n        <ion-slides #mySlider pager=\"true\" [options]=\"slideOpts\" style=\" border: 2px dashed  white;   border-radius: 0%;\n        height: 250px;\n        width: 250px;\n        object-fit: cover;\" pager=\"true\">\n          <ion-slide (click)=\"slideClick($event)\" *ngFor=\"let flag of imgArr let i = index\" style=\"width: 250px;\n          height: 250px;\">\n            <img src=\"{{flag.img}}\" style=\"    width: 249px;\n            height: 249px;\">\n          </ion-slide>\n        </ion-slides>\n\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col style=\"text-align: -webkit-right;\">\n\n        <div (click)=\"showPopup(1)\" style=\"height: 20px;\n        width: 20px;\n        border: 2px solid white;\n        border-radius: 14px;\"></div>\n\n      </ion-col>\n\n      <ion-col (click)=\"showPopup(2)\" style=\"text-align: -webkit-left;\">\n        <div style=\"height: 20px;\n        width: 20px;\n        border: 2px solid white;\n        border-radius: 14px;\"></div>\n      </ion-col>\n    </ion-row> -->\n\n\n\n\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Personal Details *</ion-label>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 0px;\">\n      <ion-col>\n        <ion-text style=\"font-size: 9pt;\">Your data will be stored in accordance with the terms in our privacy policy.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 6px;\">\n\n      <div class=\"inp-top-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"phoneNumStatus\">Cell phone number *</ion-text>\n        <ion-input type=\"tel\" style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter phone number\" [(ngModel)]=\"phone\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"nationalityStatus\">Nationality *</ion-text> <br>\n\n        <ion-row (click)=\"showNationality()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt;color: #ffffff; \">{{selectedNat}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"nationalityshow\" style=\"height: 100px;\n        overflow: auto;\">\n\n          <h6 (click)=\"nationalitySelected(nat)\" *ngFor=\"let nat of flagsList\">{{nat.name}}</h6>\n\n        </div>\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"genderStatus\">How do you identify yourself? *</ion-text>\n        <br>\n\n        <ion-row (click)=\"goTogender()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff; \">{{gender}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n\n\n\n      </div>\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n      <div (click)=\"goToEthnicity()\" class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"ethnicityStatus\">Ethnicity *</ion-text>\n        <br>\n\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-text *ngIf=\"showPleaseSelectEthnicity\" style=\"font-size: 9pt; color: #ffffff; \">Please Select\n            </ion-text>\n\n            <div style=\"    max-height: auto;\n            overflow: scroll;\">\n\n              <ion-chip style=\"     max-width: max-content;\n              overflow: auto;\n              background: #444444;\" *ngFor=\"let eth of ethnicityArray; let i = index\">\n                <ion-label style=\"max-width: max-content;\">{{eth.name}}</ion-label>\n              </ion-chip>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"lookingForStatus\">What are you looking for? *</ion-text>\n        <br>\n\n        <ion-row (click)=\"goToLookingfor()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff; \">{{lookingFor}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div (click)=\"goToMyheight()\" class=\"inp-bottom-radius\"\n        style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"heightStatus\">Height *</ion-text> <br>\n\n        <ion-text style=\"font-size: 9pt;\">{{usercalculatedHeight}}</ion-text>\n\n\n        <!-- <ion-input type=\"tel\" style=\"height: 26px;\n      font-size: 9pt;\n      color:#ffffff;\" placeholder=\"60 inches\" [(ngModel)]=\"height\" disabled (click)=\"goToMyheight()\"></ion-input> -->\n\n      </div>\n\n    </div>\n\n\n    <ion-row style=\"margin-top: 6px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Your Work*</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 6px;\">\n\n      <div class=\"inp-top-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"workplaceStatus\">Where do you work?</ion-text>\n        <ion-input autocapitalize=words style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Your Work Place\" [(ngModel)]=\"workplace\"\n          (ionChange)=\"changeFunction($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"whatyoudoStatus\">What do you do? *</ion-text> <br>\n\n        <ion-row (click)=\"showWorkPlace()\">\n          <ion-col size=\"12\" style=\"padding: 0px;\">\n            <!-- <ion-text style=\"font-size: 9pt; color: #ffffff; \">{{whatyoudo}}</ion-text> -->\n\n            <ion-input autocapitalize=words style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Enter your Job\" [(ngModel)]=\"whatyoudo\"\n              (ionChange)=\"changeFunction2($event)\"></ion-input>\n\n\n\n          </ion-col>\n\n          <!-- <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col> -->\n        </ion-row>\n\n        <!-- <div [hidden]=\"whatyoudoShow\" style=\"height: 100px;\n        overflow: auto;\">\n\n          <h6 (click)=\"whatyoudoArrClick(nat)\" *ngFor=\"let nat of whatyoudoArr\">{{nat.name}}</h6>\n\n        </div> -->\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"eduStatus\">Education Level *</ion-text> <br>\n\n        <ion-row (click)=\"showedu()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff;\">{{edu}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"eduStatusShow\" style=\"height: 85px;\n        overflow: auto;\">\n\n          <h6 (click)=\"eduArrClick(nat)\" *ngFor=\"let nat of eduArr\">{{nat.name}}</h6>\n\n        </div>\n\n\n      </div>\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n\n      <!-- //// -->\n      <!-- <div class=\"inp\" style=\"\n          height: 120px;\n          padding-top: 10px;\n          padding-left: 10px;\n          padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"schoolStatus\">School *</ion-text> <br>\n\n        <div style=\"max-height: 50px; overflow: scroll;\">\n\n          <ion-chip style=\"max-width: 99%;\n            overflow: auto;\" *ngFor=\"let school of schoolsArray; let i = index\">\n            <ion-label style=\"max-width: 90%;\">{{school.name}}</ion-label>\n            <ion-icon (click)=\"deleteSchool(i)\" style=\"color: white;\" name=\"close-circle\"></ion-icon>\n          </ion-chip>\n\n        </div>\n\n        <div style=\"height: 50px;\n        overflow: scroll;\">\n\n          <ion-textarea style=\"height: 170px;\n                              font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"school\"\n            (keyup.enter)=\"schoolAded($event)\" (ionChange)=\"onInput($event)\"></ion-textarea>\n\n        </div>\n      </div> -->\n      <!-- /// -->\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"schoolStatus\">School</ion-text> <br>\n        <!-- <ion-input autocapitalize=words style=\"height: 26px;\n        font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"school\"></ion-input> -->\n        <div style=\"    max-height: 68px;\n        overflow: scroll;\">\n\n          <ion-chip style=\"max-width: 99%;\n        overflow: auto;\" *ngFor=\"let school of schoolsArray; let i = index\">\n            <ion-label style=\"max-width: 90%;\">{{school.name}}</ion-label>\n            <ion-icon (click)=\"deleteSchool(i)\" style=\"color: white;\" name=\"close-circle\"></ion-icon>\n          </ion-chip>\n        </div>\n        <ion-input style=\"\n       font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"school\" (keyup.enter)=\"schoolAded()\"\n          (ionChange)=\"onInput($event)\" (ionChange)=\"changeFunction4($event)\"></ion-input>\n\n\n      </div>\n\n\n\n      <!-- ///// -->\n\n\n      <ion-list style=\"    max-height: 210px;\n      overflow: scroll;\" [hidden]=\"listishidden\">\n        <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\" style=\"    --background: black;\n        color: white;\">\n          {{item.name}}\n        </ion-item>\n      </ion-list>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n      <!-- //// -->\n      <!-- <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"careerStatus\">Career Goals + Life Goals (50 words) *\n        </ion-text>\n        <ion-textarea style=\"height: 170px;\n                   font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"career\"></ion-textarea>\n\n      </div> -->\n      <!-- //// -->\n\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"careerStatus\">Career Goals + Life Goals (50 words) *\n        </ion-text> <br>\n\n        <ion-textarea style=\"height: 150px;\n       font-size: 9pt;\" placeholder=\"Enter Here\" [(ngModel)]=\"career\" (ionChange)=\"changeFunction3($event)\">\n        </ion-textarea>\n\n\n      </div>\n\n\n      <!-- //// -->\n\n\n    </div>\n\n\n    <ion-row style=\"margin-top: 6px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">More Survey Questions *</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 6px;\">\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"religionStatus\">Religion *</ion-text> <br>\n\n        <ion-row (click)=\"goToReligion()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff;\">{{religion}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"kosherStatus\">Kosher *</ion-text> <br>\n\n        <ion-row (click)=\"goToMyKosher()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff;\">{{kosher}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"affiliationStatus\">Affiliation *</ion-text> <br>\n\n        <ion-row (click)=\"showaffiliation()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt;color: #ffffff; \">{{affiliation}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"affiliationshow\" style=\"height: 100px;\n        overflow: auto;\">\n\n          <h6 (click)=\"affiliationshowClick(nat)\" *ngFor=\"let nat of affiliationArr\">{{nat.name}}</h6>\n\n        </div>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"meritalStatusStatus\">Marital Status *</ion-text> <br>\n\n        <ion-row (click)=\"goTomaritalstatus()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt ; color: #ffffff; \">{{meritalStatus}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"relocateStatus\">Willing to Relocate? *</ion-text> <br>\n\n        <ion-row (click)=\"showRelocete()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt; color: #ffffff; \">{{relocate}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"relocateshow\" style=\"height: 50px;\n        overflow: auto;\">\n\n          <h6 (click)=\"relocateshowClick(nat)\" *ngFor=\"let nat of YesNoArr\">{{nat.name}}</h6>\n\n        </div>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 9pt;\" [class.redclass]=\"personalityTypeStatus\">Personality Type *</ion-text> <br>\n\n        <ion-row (click)=\"showpersonalityType()\">\n          <ion-col size=\"10\">\n            <ion-text style=\"font-size: 9pt;  color: #ffffff;\">{{personalityType}}</ion-text>\n          </ion-col>\n\n          <ion-col size=\"2\" style=\"text-align: right;\">\n            <img style=\"width: 16px;\n            height: 16px;\" src=\"assets/imgs/down-arrow.svg\">\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"personalityTypeshow\" style=\"height: 60px;\n        overflow: auto;\">\n\n          <h6 (click)=\"personalityTypeshowClick(nat)\" *ngFor=\"let nat of personalityTypeArr\">{{nat.name}}</h6>\n\n        </div>\n\n\n      </div>\n\n\n\n\n    </div>\n\n\n\n\n\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"Continue()\" style=\"margin-bottom: 12px;\" class=\"btn\">Continue</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n<div [hidden]=\"popupHidden\" style=\"    height: 100%;\nwidth: 100%;\nbackground-color: rgb(0 0 0 / 68%);\nposition: absolute;\">\n\n  <div style=\"left: 10%;\n  position: absolute;\n  top: 40%;\n  width: 80%;\n  height: 147px;\n  background-color: rgb(255, 255, 255);\n  border-radius: 20px;\">\n\n    <ion-row>\n      <ion-col style=\"padding-top: 10 px; padding-right: 10px;\n  text-align: right;\">\n        <img style=\"    height: 10px;\n        width: 10px;\n        margin-right: 4px;\n        margin-top: 8px;\" src=\"assets/imgs/closeblack.svg\" (click)=\"hidePopup()\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"margin-top: -4px;\">\n      <ion-col (click)=\"CameraSelected()\" style=\"\n    text-align: center;\">\n        <img style=\"height: 50px;\n      width: 50px;\" src=\"assets/imgs/camera.svg\">\n        <p style=\"color: black;\">Camera</p>\n\n      </ion-col>\n      <ion-col (click)=\"GalerySelected()\" style=\"\n    text-align: center;\">\n        <img style=\"height: 50px;\n      width: 50px;\" src=\"assets/imgs/galleryblack.svg\">\n        <p style=\"color: black;\">Gallery</p>\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_yourprofile2_yourprofile2_module_ts-es5.js.map