(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_youprofile1_youprofile1_module_ts"], {
    /***/
    86668:
    /*!***********************************************************!*\
      !*** ./src/app/youprofile1/youprofile1-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Youprofile1PageRoutingModule": function Youprofile1PageRoutingModule() {
          return (
            /* binding */
            _Youprofile1PageRoutingModule
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


      var _youprofile1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./youprofile1.page */
      41458);

      var routes = [{
        path: '',
        component: _youprofile1_page__WEBPACK_IMPORTED_MODULE_0__.Youprofile1Page
      }];

      var _Youprofile1PageRoutingModule = function Youprofile1PageRoutingModule() {
        _classCallCheck(this, Youprofile1PageRoutingModule);
      };

      _Youprofile1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Youprofile1PageRoutingModule);
      /***/
    },

    /***/
    78954:
    /*!***************************************************!*\
      !*** ./src/app/youprofile1/youprofile1.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Youprofile1PageModule": function Youprofile1PageModule() {
          return (
            /* binding */
            _Youprofile1PageModule
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


      var _youprofile1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./youprofile1-routing.module */
      86668);
      /* harmony import */


      var _youprofile1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./youprofile1.page */
      41458);

      var _Youprofile1PageModule = function Youprofile1PageModule() {
        _classCallCheck(this, Youprofile1PageModule);
      };

      _Youprofile1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _youprofile1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Youprofile1PageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_youprofile1_page__WEBPACK_IMPORTED_MODULE_1__.Youprofile1Page]
      })], _Youprofile1PageModule);
      /***/
    },

    /***/
    41458:
    /*!*************************************************!*\
      !*** ./src/app/youprofile1/youprofile1.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Youprofile1Page": function Youprofile1Page() {
          return (
            /* binding */
            _Youprofile1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_youprofile1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./youprofile1.page.html */
      77997);
      /* harmony import */


      var _youprofile1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./youprofile1.page.scss */
      39084);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _Youprofile1Page = /*#__PURE__*/function () {
        function Youprofile1Page(router, restService, workService, locationBk, nativeGeocoder, zone, alertcontroller, platform) {
          _classCallCheck(this, Youprofile1Page);

          this.router = router;
          this.restService = restService;
          this.workService = workService;
          this.locationBk = locationBk;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.alertcontroller = alertcontroller;
          this.platform = platform;
          this.listishidden = true;
          this.latitude = '';
          this.longitude = '';
          this.listishiddenFrom = true;
          this.locationinputishidden = true;
          this.locationishidden = true;
          this.location = '';
          this.fname = '';
          this.lname = '';
          this.email = '';
          this.dobDay = '';
          this.dobMonth = '';
          this.dobYear = '';
          this.instaHandle = '';
          this.lives = '';
          this.from = '';
          this.fnameStatus = false;
          this.lnameStatus = false;
          this.emailStatus = false;
          this.dobStatus = false;
          this.instaHandleStatus = false;
          this.livesStatus = false;
          this.fromStatus = false;
          var aa = this.filterSchool('AIzaSyA7ks8X2YnLcxTuEC3qydL2adzA0NYbl6c', 'school');
          console.log('schools---->>>>', aa);
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
          });
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocompleteItems = [];
        }

        _createClass(Youprofile1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.locationBk.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.fname = localStorage.getItem('fname');
            this.lname = localStorage.getItem('lname');
            this.email = localStorage.getItem('email');
            this.dobDay = localStorage.getItem('dobDay');
            this.dobMonth = localStorage.getItem('dobMonth');
            this.dobYear = localStorage.getItem('dobYear');
            this.instaHandle = localStorage.getItem('instaHandle');
            this.lives = localStorage.getItem('lives');
            this.from = localStorage.getItem('from');

            if (this.fname == 'null') {
              this.fname = '';
            }

            if (this.lname == 'null') {
              this.lname = '';
            }

            if (this.email == 'null') {
              this.email = '';
            }

            if (this.dobDay == 'null') {
              this.dobDay = '';
            }

            if (this.dobMonth == 'null') {
              this.dobMonth = '';
            } //


            if (this.dobYear == 'null') {
              this.dobYear = '';
            }

            if (this.instaHandle == 'null' || this.instaHandle == null) {
              this.instaHandle = '';
            }

            if (this.lives == 'null') {
              this.lives = '';
            }

            if (this.from == 'null') {
              this.from = '';
            }
          } // Continue() { this.router.navigate(['yourprofile2']) }

        }, {
          key: "changename",
          value: function changename(ev) {
            this.fname = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changelname",
          value: function changelname(ev) {
            this.lname = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeemail",
          value: function changeemail(ev) {
            this.email = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeevent",
          value: function changeevent(ev) {
            this.instaHandle = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeevent2",
          value: function changeevent2(ev) {
            this.lives = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "changeevent3",
          value: function changeevent3(ev) {
            this.from = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "Continue",
          value: function Continue() {
            var _this = this;

            console.log('length of number==', this.dobMonth.length);
            localStorage.setItem('dobDay', this.dobDay);
            localStorage.setItem('dobMonth', this.dobMonth);
            localStorage.setItem('dobYear', this.dobYear);
            localStorage.setItem('instaHandle', this.instaHandle);
            localStorage.setItem('lives', this.lives);
            localStorage.setItem('from', this.from);
            this.fname = localStorage.getItem('fname');
            this.lname = localStorage.getItem('lname');
            this.email = localStorage.getItem('email');
            this.dobDay = localStorage.getItem('dobDay');
            this.dobMonth = localStorage.getItem('dobMonth');
            this.dobYear = localStorage.getItem('dobYear');
            this.instaHandle = localStorage.getItem('instaHandle');
            this.lives = localStorage.getItem('lives');
            this.from = localStorage.getItem('from');
            var dob = localStorage.getItem('dobYear') + '-' + localStorage.getItem('dobMonth') + '-' + localStorage.getItem('dobDay'); ///age difference////

            var bdate = new Date(dob);
            var timeDiff = Math.abs(Date.now() - bdate.getTime());
            this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
            console.log('age diff', this.age);

            if (this.fname == 'null') {
              this.fname = '';
            }

            if (this.lname == 'null') {
              this.lname = '';
            }

            if (this.email == 'null') {
              this.email = '';
            }

            if (this.dobDay == 'null') {
              this.dobDay = '';
            }

            if (this.dobMonth == 'null') {
              this.dobMonth = '';
            } //


            if (this.dobYear == 'null') {
              this.dobYear = '';
            }

            if (this.instaHandle == 'null') {
              this.instaHandle = '';
            }

            if (this.lives == 'null') {
              this.lives = '';
            }

            if (this.from == 'null') {
              this.from = '';
            }

            console.log(JSON.parse(localStorage.getItem('userData')));

            if (this.fname == '') {
              this.fnameStatus = true;
            }

            if (this.lname == '') {
              this.lnameStatus = true;
            }

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(this.email)) {
              this.emailStatus = true;
              this.workService.presentToast('Enter Valid Email.');
            }

            if (this.email == '') {
              this.emailStatus = true;
            }

            if (this.dobDay == '' || this.dobMonth == '' || this.dobYear == '') {
              this.dobStatus = true;
            } // if (this.instaHandle == '') {
            //   this.instaHandleStatus = true
            // }


            if (this.lives == '' || this.lives == 'null') {
              this.livesStatus = true;
            }

            if (this.from == '' || this.from == 'null') {
              this.fromStatus = true;
            }

            setInterval(function () {
              _this.fnameStatus = false;
              _this.lnameStatus = false;
              _this.emailStatus = false;
              _this.dobStatus = false;
              _this.instaHandleStatus = false;
              _this.livesStatus = false;
              _this.fromStatus = false;
            }, 4000);

            if (this.fname != '' && this.lname != '' && this.email != '' && re.test(this.email) && this.dobDay != '' && this.dobMonth != '' && this.dobYear != '' && (this.lives != '' || this.lives == 'null') && (this.from != '' || this.from == 'null')) {
              if (this.dobDay > 31) {
                this.workService.presentToast('Invalid Date');
              } else if (this.dobDay.length < 2) {
                this.workService.presentToast('Date must be 2 digit');
              } else if (this.dobMonth > 12) {
                this.workService.presentToast('Invalid Month');
              } else if (this.dobMonth.length < 2) {
                this.workService.presentToast('Month must be 2 digit');
              } else if (this.dobYear > 2021) {
                this.workService.presentToast('Invalid Year');
              } else if (this.age < 18) {
                this.workService.presentToast('You are under 18');
              } else {
                localStorage.setItem('dobDay', this.dobDay);
                localStorage.setItem('dobMonth', this.dobMonth);
                localStorage.setItem('dobYear', this.dobYear);
                localStorage.setItem('instaHandle', this.instaHandle);
                localStorage.setItem('lives', this.lives);
                localStorage.setItem('from', this.from);
                console.log('mychk');
                console.log(localStorage.getItem('lives'));
                console.log(localStorage.getItem('from'));
                console.log('222');
                console.log(localStorage.getItem('dobDay'));
                console.log(localStorage.getItem('dobMonth'));
                console.log(localStorage.getItem('dobYear'));
                this.router.navigate(['yourprofile2']);
              } // var data = JSON.stringify({
              //   requestType: "profile_detail",
              //   users_id: this.userData.data.user.users_id,
              //   dob: this.dobYear + "-" + this.dobMonth + "-" + this.dobDay,
              //   instagram: this.instaHandle,
              //   lives: this.lives,
              //   from: this.from
              // })
              // console.log(data);
              // this.workService.presentLoading()
              // this.restService.profileAPI(data).subscribe((res: any) => {
              //   this.workService.hideLoading()
              //   console.log(res);
              //   if (res.status == 'success') {
              //     this.router.navigate(['yourprofile2'])
              //   }
              // }, err => {
              //   this.workService.presentToast('Some error occured.')
              //   this.workService.hideLoading()
              // })

            } //console.log(JSON.parse(JSON.stringify(localStorage.getItem('userData'))));
            //this.router.navigate(['yourprofile2'])

          }
        }, {
          key: "updateSearchResultsEvent",
          value: function updateSearchResultsEvent(ev) {
            var _this2 = this;

            console.log(ev);

            if (ev.target.value.length > 0) {
              console.log('greatrtt    00000000000', ev.detail.value, ev.target.value.length);
              this.listishidden = false;
              this.GoogleAutocomplete.getPlacePredictions({
                input: this.lives
              }, function (predictions, status) {
                _this2.autocompleteItems = [];

                _this2.zone.run(function () {
                  predictions.forEach(function (prediction) {
                    _this2.autocompleteItems.push(prediction);
                  });
                });
              });
            } else {
              console.log('eeeeeeeeeeeeeeeeeeeeeeeee', ev.detail.value);
              this.listishidden = true;
              console.log('khaallllllooiiiiiiiiiii');
              this.locationishidden = false;
              this.location = '';
              this.autocompleteItems = [];
              console.log('lllllllllllllllll', this.location);
            }
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(item) {
            var _this3 = this;

            this.listishidden = true;
            this.locationishidden = true;
            this.autocompleteItems = [];
            console.log('itemmmmmmmmmmmmmmmmmmmmmmmmm', item);
            this.location = item;
            this.lives = this.location.description;
            this.listishidden = true;
            console.log('location', this.location.latitude);
            this.placeid = this.location.place_id;
            console.log('placeid' + this.placeid);
            this.location = item.description;
            console.log('aaaaaaaaaaaaaaaaaaa', this.location);
            this.nativeGeocoder.forwardGeocode(this.location).then(function (result) {
              _this3.latitude = result[0].latitude;
              _this3.longitude = result[0].longitude;
              console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "updateSearchResultsEventFrom",
          value: function updateSearchResultsEventFrom(ev) {
            var _this4 = this;

            console.log(ev);

            if (ev.target.value.length > 0) {
              console.log('greatrtt    00000000000', ev.detail.value, ev.target.value.length);
              this.listishiddenFrom = false;
              this.GoogleAutocomplete.getPlacePredictions({
                input: this.from
              }, function (predictions, status) {
                _this4.autocompleteItems = [];

                _this4.zone.run(function () {
                  predictions.forEach(function (prediction) {
                    _this4.autocompleteItems.push(prediction);
                  });
                });
              });
            } else {
              console.log('eeeeeeeeeeeeeeeeeeeeeeeee', ev.detail.value);
              this.listishiddenFrom = true;
              console.log('khaallllllooiiiiiiiiiii');
              this.locationishidden = false;
              this.location = '';
              this.autocompleteItems = [];
              console.log('lllllllllllllllll', this.location);
            }
          }
        }, {
          key: "selectSearchResultFrom",
          value: function selectSearchResultFrom(item) {
            var _this5 = this;

            this.listishiddenFrom = true;
            this.autocompleteItems = [];
            console.log('itemmmmmmmmmmmmmmmmmmmmmmmmm', item);
            this.location = item;
            this.from = this.location.description;
            this.listishiddenFrom = true;
            console.log('location', this.location.latitude);
            this.placeid = this.location.place_id;
            console.log('placeid' + this.placeid);
            this.location = item.description;
            console.log('aaaaaaaaaaaaaaaaaaa', this.location);
            this.nativeGeocoder.forwardGeocode(this.location).then(function (result) {
              _this5.latitude = result[0].latitude;
              _this5.longitude = result[0].longitude;
              console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
            })["catch"](function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "checkDay",
          value: function checkDay() {
            if (this.dobDay > 31) {
              this.workService.presentToast('Invalid Date');
              this.dobDay = 31;
            }
          }
        }, {
          key: "checkMinDay",
          value: function checkMinDay() {
            if (parseInt(this.dobDay) < 1) {
              this.workService.presentToast('Invalid Date');
              this.dobDay = 1;
            }
          }
        }, {
          key: "checkMonth",
          value: function checkMonth() {
            if (this.dobMonth > 12) {
              this.workService.presentToast('Invalid Month');
              this.dobMonth = 12;
            }
          }
        }, {
          key: "checkMinMonth",
          value: function checkMinMonth() {
            if (parseInt(this.dobMonth) < 1) {
              this.workService.presentToast('Invalid Month');
              this.dobMonth = 1;
            }
          }
        }, {
          key: "checkYear",
          value: function checkYear() {
            if (this.dobYear > 2021) {
              this.workService.presentToast('Invalid Year');
              this.dobYear = 2021;
            }
          }
        }, {
          key: "minYearCehck",
          value: function minYearCehck() {
            if (parseInt(this.dobYear) < 1950) {
              this.workService.presentToast('Invalid Year');
              this.dobYear = 1950;
            }
          } // types used in filtering autocomplete results
          // input event handler
          // DEBOUNCE THIS

        }, {
          key: "filterSchool",
          value: function filterSchool(key, query) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var schoolPlaceTypes, requestUrl, response, _yield$response$json, predictions, results;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      schoolPlaceTypes = ['school', 'secondary_school', 'university'];
                      requestUrl = encodeURI("https://maps.googleapis.com/maps/api/place/autocomplete/json?key=".concat(key, "&language=fr&input=").concat(query));
                      _context.prev = 2;
                      _context.next = 5;
                      return fetch(requestUrl, {
                        method: 'POST'
                      });

                    case 5:
                      response = _context.sent;
                      _context.next = 8;
                      return response.json();

                    case 8:
                      _yield$response$json = _context.sent;
                      predictions = _yield$response$json.predictions;
                      // get all predictions that match at least on of the targeted types
                      results = predictions.filter(function (_ref) {
                        var types = _ref.types;
                        return types.some(function (type) {
                          return schoolPlaceTypes.includes(type);
                        });
                      }) // OPTIONAL: format filtered places to return only what is needed.
                      .map(function (_ref2) {
                        var structured_formatting = _ref2.structured_formatting,
                            place_id = _ref2.place_id,
                            types = _ref2.types;
                        return {
                          place_id: place_id,
                          name: structured_formatting.main_text,
                          address: structured_formatting.secondary_text,
                          types: types
                        };
                      });
                      return _context.abrupt("return", results);

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](2);
                      console.error(_context.t0);
                      return _context.abrupt("return", []);

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[2, 14]]);
            }));
          }
        }, {
          key: "myInstaClick",
          value: function myInstaClick() {
            console.log('ciccc', this.instaHandle.length);
            if (this.instaHandle.length < 1) this.instaHandle = '@';
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

        return Youprofile1Page;
      }();

      _Youprofile1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }];
      };

      _Youprofile1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-youprofile1',
        template: _raw_loader_youprofile1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_youprofile1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Youprofile1Page);
      /***/
    },

    /***/
    39084:
    /*!***************************************************!*\
      !*** ./src/app/youprofile1/youprofile1.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 7px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  height: 40pt;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 0.5em;\n          margin-block-start: 0.5em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\nhr {\n  display: block;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: auto;\n          margin-inline-start: auto;\n  -webkit-margin-end: auto;\n          margin-inline-end: auto;\n  overflow: hidden;\n  border-style: inset;\n}\n\nion-toggle {\n  --background: rgb(255, 255, 255);\n  --background-checked: #000000;\n  --handle-background: #000000;\n  --handle-background-checked: rgb(255, 255, 255);\n}\n\n.numberDiv1 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #615d5db0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv2 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.numberDiv3 {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background-color: #000000b0;\n  text-align: center;\n  padding-top: 3px;\n}\n\n.redclass {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXByb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUFBLDBCQUFBO0VBQUEscUJBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSw2QkFBQTtFQUVBLDRCQUFBO0VBQ0EsK0NBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSiIsImZpbGUiOiJ5b3Vwcm9maWxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB0O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxufVxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDAwMDAwO1xyXG5cclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLm51bWJlckRpdjEge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTVkNWRiMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5udW1iZXJEaXYyIHtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4ubnVtYmVyRGl2MyB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGIwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG5cclxuLnJlZGNsYXNzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    77997:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/youprofile1/youprofile1.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"3\" style=\"padding-left: 10px;\">\n      <img (click)=\"goBack()\" style=\"width: 20px;\n    height: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center; padding-top: 0px;\">\n      <ion-label style=\"font-size: 14pt;\">Your Profile</ion-label>\n    </ion-col>\n    <ion-col size=\"3\">\n\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col style=\"text-align: -webkit-right;\">\n        <div class=\"numberDiv1\"><label>1</label></div>\n      </ion-col>\n\n      <ion-col style=\"text-align: -webkit-center;\">\n        <div class=\"numberDiv2\"><label>2</label></div>\n      </ion-col>\n\n      <ion-col>\n        <div class=\"numberDiv3\"><label>3</label></div>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row style=\"margin-top: 20px;\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt;\">Your Details</ion-label> <br>\n        <ion-text style=\"font-size: 7pt;\">Your data will be stored in accordance with the terms in our privacy policy.\n        </ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"border: 2px solid #707070; border-radius: 10px; margin-top: 20px;\">\n\n      <div class=\"inp-top-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text [class.redclass]=\"fnameStatus\" style=\"font-size: 7pt;\">First name *</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter first name\" [(ngModel)]=\"fname\" autocapitalize=words\n          (ionChange)=\"changename($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"lnameStatus\">Last name *</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter last name\" [(ngModel)]=\"lname\" autocapitalize=words\n          (ionChange)=\"changelname($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"emailStatus\">Email *</ion-text>\n        <ion-input style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter email\" [(ngModel)]=\"email\" (ionChange)=\"changeemail($event)\"></ion-input>\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"dobStatus\">Date of birth *</ion-text>\n\n        <ion-row>\n          <ion-col>\n            <ion-input type=\"tel\" style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Day\" [(ngModel)]=\"dobDay\" (ionChange)=\"checkDay()\" (ionBlur)=\"checkMinDay()\"\n              maxlength=\"2\"></ion-input>\n          </ion-col>\n\n          <ion-col>\n            <ion-input type=\"tel\" style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Month\" [(ngModel)]=\"dobMonth\" (ionChange)=\"checkMonth()\"\n              (ionBlur)=\"checkMinMonth()\" max=\"12\" maxlength=\"2\"></ion-input>\n          </ion-col>\n\n          <ion-col>\n            <ion-input type=\"tel\" style=\"height: 26px;\n            font-size: 9pt;\" placeholder=\"Year\" [(ngModel)]=\"dobYear\" (ionChange)=\"checkYear()\"\n              (ionBlur)=\"minYearCehck()\" maxlength=\"4\"></ion-input>\n          </ion-col>\n        </ion-row>\n\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n      <div (click)=\"myInstaClick()\" class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"instaHandleStatus\">Instagram handle</ion-text>\n        <ion-input style=\"height: 26px;\n              font-size: 9pt;\" placeholder=\"@insta\" [(ngModel)]=\"instaHandle\" (ionChange)=\"changeevent($event)\">\n        </ion-input>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n      <div class=\"inp\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"livesStatus\">Lives *</ion-text>\n        <ion-input autocapitalize=words style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Location\" [(ngModel)]=\"lives\" (ionInput)=\"updateSearchResultsEvent($event)\"\n          (ionChange)=\"changeevent2($event)\">\n        </ion-input>\n\n\n        <ion-list [hidden]=\"listishidden\">\n          <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\" style=\"    --background: black;\n          color: white;\">\n            {{ item.description }}\n          </ion-item>\n        </ion-list>\n\n      </div>\n\n      <hr style=\"border-bottom: 2px solid #707070; width: 100%;\">\n\n\n\n\n      <div class=\"inp-bottom-radius\" style=\"padding-top:10px; padding-left: 10px; padding-right: 10px;\">\n\n        <ion-text style=\"font-size: 7pt;\" [class.redclass]=\"fromStatus\">From *</ion-text>\n        <ion-input autocapitalize=words style=\"height: 26px;\n      font-size: 9pt;\" placeholder=\"Enter Location\" [(ngModel)]=\"from\"\n          (ionInput)=\"updateSearchResultsEventFrom($event)\" (ionChange)=\"changeevent3($event)\">\n        </ion-input>\n\n\n        <ion-list [hidden]=\"listishiddenFrom\">\n          <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResultFrom(item)\" style=\"    --background: black;\n          color: white;\">\n            {{ item.description }}\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n\n\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col style=\"text-align: center;\">\n        <button (click)=\"Continue()\" style=\"margin-bottom: 12px;\" class=\"btn\">Continue</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_youprofile1_youprofile1_module_ts-es5.js.map