(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_tab2_tab2_module_ts"], {
    /***/
    93092:
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageRoutingModule": function Tab2PageRoutingModule() {
          return (
            /* binding */
            _Tab2PageRoutingModule
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
      }];

      var _Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      _Tab2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab2PageRoutingModule);
      /***/
    },

    /***/
    14608:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageModule": function Tab2PageModule() {
          return (
            /* binding */
            _Tab2PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2-routing.module */
      93092);

      var _Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      _Tab2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
      })], _Tab2PageModule);
      /***/
    },

    /***/
    70442:
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2Page": function Tab2Page() {
          return (
            /* binding */
            _Tab2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab2.page.html */
      82477);
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab2.page.scss */
      92055);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _userservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../userservice.service */
      75157);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(navCtrl, restService, userService, workService, platform, router) {
          var _this = this;

          _classCallCheck(this, Tab2Page);

          this.navCtrl = navCtrl;
          this.restService = restService;
          this.userService = userService;
          this.workService = workService;
          this.platform = platform;
          this.router = router;
          this.showSkeleton = true;
          this.skeletonArray = [1, 2, 3, 4, 5, 6];
          this.noChatlistFlag = false;
          this.allChats = [];
          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');

            _this.router.navigate(['tabs/tab1']);
          });
          this.authToken = localStorage.getItem("token"); // geting all chats list

          this.getChatList();
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log('ionviewwillenter');
            var userID = localStorage.getItem('loggedinUserID');
            var data = {
              loginuser: 0,
              otheruser: userID
            };
            this.restService.get_user_dataAPI(data).subscribe(function (res) {
              console.log('incomming data === ', res);

              if (res.status == "success") {
                localStorage.setItem('remainingSMS', res.data.user_data.allowed_sms);
                console.log('smssssss-------------------', res.data.user_data.allowed_sms);
                localStorage.setItem('userNotiStatus', _this2.workService.myUserData.data.user_data.notification_switch);
              }
            }, function (err) {
              _this2.workService.hideLoading();

              _this2.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "getChatList",
          value: function getChatList(event) {
            var _this3 = this;

            this.workService.presentLoading(); // geting all chats list

            var data = JSON.stringify({
              request_type: "getChatList",
              users_customers_id: localStorage.getItem('loggedinUserID') // users_customers_id: 15

            });
            console.log('getMychatdata,', data);
            this.restService.chat_messagesAPI(data).subscribe(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.workService.hideLoading();

                        if (event) {
                          event.target.complete();
                        }

                        this.showSkeleton = false;
                        console.log("response-----------------", res);

                        if (res.status == "success") {
                          this.allChats = res.data.chat_list_details; // this.allChats = this.allChats.map((val) => ({
                          //   ...val,
                          //   msg_time: this.extras.formatAMPM(new Date(val.msg_time)),
                          // }));

                          console.log("receving All chats", this.allChats);
                          this.noChatlistFlag = false;
                        } else {
                          this.noChatlistFlag = true;
                        }

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (err) {
              _this3.workService.hideLoading();

              console.log('error in get chatlist===', err); // this.workService.presentToast('Network error occured')
            });
          }
        }, {
          key: "viewChat",
          value: function viewChat(userDetails) {
            console.log("userDetails", userDetails);
            this.userService.userId = userDetails.user_id;
            this.userService.userName = userDetails.name;
            this.userService.userIMG = userDetails.profileImage;
            this.navCtrl.navigateForward("/chat");
          }
        }, {
          key: "handleImgError",
          value: function handleImgError(ev, item, url) {
            var source = ev.srcElement;
            var imgSrc = "assets/imgs/placeholder.jpg";
            source.src = imgSrc;
          }
        }]);

        return Tab2Page;
      }();

      _Tab2Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }, {
          type: _userservice_service__WEBPACK_IMPORTED_MODULE_3__.UserserviceService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_4__.WorkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _Tab2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab2Page);
      /***/
    },

    /***/
    92055:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header,\nion-content {\n  --background: #000;\n  color: #fff;\n}\n\n.header {\n  padding: 10px 10px;\n  border: none;\n}\n\n.header-inner {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n  margin-top: 10px;\n}\n\n.container2 {\n  width: 95%;\n  margin: auto;\n}\n\n.heading {\n  color: #ffffff;\n  font-size: 22px;\n  text-align: center;\n  font-weight: 600;\n  margin-top: 40px;\n}\n\n.sideMenu {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n}\n\n.title {\n  width: 100%;\n}\n\nion-fab ion-fab-button {\n  --background: #ffffff;\n  --color: #000;\n  --color-activated: #000;\n  --color-focused: #000;\n  font-weight: 400;\n}\n\n.addEvent {\n  font-size: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.addIcon {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.listItem {\n  padding-bottom: 5px;\n  display: grid;\n  grid-template-columns: 1.5fr 5fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  border-bottom: 0.5px solid #ffffff;\n  margin-bottom: 20px;\n}\n\n.avatar {\n  width: 100%;\n  grid-area: 1/1/2/2;\n}\n\n.content {\n  padding: 0px 10px;\n  position: relative;\n  grid-area: 1/2/2/3;\n}\n\n.time {\n  margin-top: 50px;\n  color: #ffffff;\n  font-size: 10px;\n  font-weight: 300;\n  position: absolute;\n  right: 0px;\n}\n\n.avatarImage {\n  border-radius: 50%;\n}\n\n.userName {\n  font-size: 16px;\n  color: #ffffff;\n  text-transform: capitalize;\n}\n\n.message {\n  font-size: 12px;\n  color: #ffffff;\n}\n\n.listItem_skele {\n  display: grid;\n  grid-template-columns: 1.5fr 5fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  border-bottom: 0.5px solid #ffffff;\n  margin-bottom: 20px;\n  background-color: #212628;\n  height: 75px;\n}\n\n.skel_text {\n  width: 100px;\n  height: 18px;\n  margin-left: 11px;\n  border: 0px;\n  border-radius: 0px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0FBUUo7O0FBTEk7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFRUjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWFKOztBQVhBO0VBQ0ksa0JBQUE7QUFjSjs7QUFaQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFlSjs7QUFiQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBZ0JKOztBQVpBO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWVKOztBQWJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0JKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcixcbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyMiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGluZyB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG4uc2lkZU1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMTBweDtcbn1cbi50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tZmFiIHtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgLS1jb2xvcjogIzAwMDtcbiAgICAgICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMwMDA7XG4gICAgICAgIC0tY29sb3ItZm9jdXNlZDogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59XG4uYWRkRXZlbnQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGRJY29uIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5saXN0SXRlbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNmZmZmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbn1cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuLnRpbWUge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG59XG4uYXZhdGFySW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51c2VyTmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLy8gZm9yIHNrZWxldG9uXG4ubGlzdEl0ZW1fc2tlbGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2ZmZmZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI2Mjg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuLnNrZWxfdGV4dCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    82477:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"header\">\n    <div class=\"header-inner\">\n      <div class=\"title\">\n        <h1 class=\"heading\">Messages</h1>\n      </div>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getChatList($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"container\">\n    <div class=\"lists\">\n      <ng-container *ngIf=\"!noChatlistFlag\">\n        <div (click)=\"viewChat(chats)\" *ngFor=\"let chats of allChats; let i = index\" class=\"listItem\">\n          <div class=\"avatar\" style=\"    border-radius: 50%;\n          height: 65px;\n          margin-top: 0px;\n          width: 65px;\">\n            <!-- <img  class=\"avatarImage\" src=\"/assets/img.jpg\" alt=\"\" /> -->\n            <ion-skeleton-text style=\"    height: 65px;\n            width: 65px;\" *ngIf=\"chats.profileImage==''\" style=\"height: 100%\" class=\"skeleton_tumbs\" animated>\n            </ion-skeleton-text>\n            <img (error)=\"handleImgError($event, match)\" style=\"height: 65px;\n            width: 65px;\" *ngIf=\"chats.profileImage!=''\" class=\"avatarImage\" src=\"{{chats.profileImage}}\" alt=\"\" />\n          </div>\n          <div class=\"content\">\n            <ion-text class=\"time\">{{chats.msg_time}}</ion-text>\n            <ion-text class=\"userName\">{{chats.name}}</ion-text>\n            <ion-text class=\"message\" *ngIf=\"chats.msgType == 'text'\"> <br>\n              <span>{{chats.message.substring(0,30)}}</span>\n              <span *ngIf=\"chats.message.length > 30\">...</span>\n            </ion-text>\n            <ion-text class=\"message\" *ngIf=\"chats.msgType == 'attachment'\">\n              <span><img style=\"width: 23px; position: absolute; top: 27px; left: 10px\" src=\"/assets/imgs/gallery.png\"\n                  (error)=\"handleImgError($event, match)\" /></span>\n              <br> <span style=\"position: relative; left: 27px; top: 4px\">\n                Image</span>\n            </ion-text>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"noChatlistFlag\">\n        <div class=\"noSreachFound\">\n          <div style=\"text-align: center;\">\n            <p>No chat found</p>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n  </div>\n</ion-content>\n<!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button>\n    <div class=\"addEvent\">\n      <ion-icon class=\"addIcon\" name=\"add\"></ion-icon>\n      <p>Message</p>\n    </div>\n  </ion-fab-button>\n</ion-fab> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es5.js.map