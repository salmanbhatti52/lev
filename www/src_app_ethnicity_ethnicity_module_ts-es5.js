(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_ethnicity_ethnicity_module_ts"], {
    /***/
    47872:
    /*!*******************************************************!*\
      !*** ./src/app/ethnicity/ethnicity-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EthnicityPageRoutingModule": function EthnicityPageRoutingModule() {
          return (
            /* binding */
            _EthnicityPageRoutingModule
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


      var _ethnicity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ethnicity.page */
      30369);

      var routes = [{
        path: '',
        component: _ethnicity_page__WEBPACK_IMPORTED_MODULE_0__.EthnicityPage
      }];

      var _EthnicityPageRoutingModule = function EthnicityPageRoutingModule() {
        _classCallCheck(this, EthnicityPageRoutingModule);
      };

      _EthnicityPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EthnicityPageRoutingModule);
      /***/
    },

    /***/
    65864:
    /*!***********************************************!*\
      !*** ./src/app/ethnicity/ethnicity.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EthnicityPageModule": function EthnicityPageModule() {
          return (
            /* binding */
            _EthnicityPageModule
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


      var _ethnicity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ethnicity-routing.module */
      47872);
      /* harmony import */


      var _ethnicity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ethnicity.page */
      30369);

      var _EthnicityPageModule = function EthnicityPageModule() {
        _classCallCheck(this, EthnicityPageModule);
      };

      _EthnicityPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ethnicity_routing_module__WEBPACK_IMPORTED_MODULE_0__.EthnicityPageRoutingModule],
        declarations: [_ethnicity_page__WEBPACK_IMPORTED_MODULE_1__.EthnicityPage]
      })], _EthnicityPageModule);
      /***/
    },

    /***/
    30369:
    /*!*********************************************!*\
      !*** ./src/app/ethnicity/ethnicity.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EthnicityPage": function EthnicityPage() {
          return (
            /* binding */
            _EthnicityPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_ethnicity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ethnicity.page.html */
      45583);
      /* harmony import */


      var _ethnicity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ethnicity.page.scss */
      34738);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _EthnicityPage = /*#__PURE__*/function () {
        function EthnicityPage(location, workService, restService) {
          _classCallCheck(this, EthnicityPage);

          this.location = location;
          this.workService = workService;
          this.restService = restService;
          this.addedArray = [];
        }

        _createClass(EthnicityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            // this.addedArray = JSON.parse(localStorage.getItem('ethnicityArr'))
            // if (this.addedArray) {
            // } else {
            //   this.addedArray = []
            // }
            if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
              this.addedArray = [];
            } else {
              var arr = this.workService.userPrefData.user_preferences_ethinicity;
              arr.forEach(function (val) {
                var fields = {
                  name: val.system_ethinicity_name,
                  sort_order: "1",
                  status: "Active",
                  system_ethinicity_id: val.system_ethinicity_id,
                  added: true
                };

                _this.addedArray.push(fields);
              });
              console.log('hurra', this.addedArray);
            }

            this.ethnicityArray = this.workService.systemData.ethinicity;
            console.log('ethnicityArray---', this.ethnicityArray);
            var hash = Object.create(null);
            this.ethnicityArray.forEach(function (obj) {
              return hash[obj.name] = obj;
            });
            this.addedArray.forEach(function (obj) {
              return Object.assign(hash[obj.name], obj);
            });
            console.log('after mergeee', this.ethnicityArray);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "saveEthnicity",
          value: function saveEthnicity() {
            var _this2 = this;

            this.workService.presentLoading();
            console.log('saveEthnicity-------111', this.addedArray);
            var userID = localStorage.getItem('loggedinUserID');
            var data = JSON.stringify({
              "system_ethinicity_id": this.addedArray
            });
            console.log('system_ethinicity_id-------111', data);
            this.restService.updatePrefAPI('update_ethinicity/', userID, data).subscribe(function (res) {
              _this2.workService.hideLoading();

              console.log('resss======', res);

              if (res.status == 'success') {
                _this2.workService.presentToast(res.message);

                _this2.location.back();
              }
            }, function (err) {
              _this2.workService.hideLoading();

              _this2.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "ethSelected",
          value: function ethSelected(val, i) {
            var obj = this.addedArray.find(function (o) {
              return o.system_ethinicity_id == val.system_ethinicity_id;
            });

            if (obj) {
              console.log('delete');
              var aa = {
                system_ethinicity_id: val.system_ethinicity_id,
                name: val.name,
                sort_order: val.sort_order,
                status: val.status,
                added: false
              };
              this.ethnicityArray[i] = aa;
              var deleteThisIDPlz = 0;

              for (var _i = 0; _i < this.addedArray.length; _i++) {
                if (this.addedArray[_i].system_ethinicity_id == val.system_ethinicity_id) {
                  console.log('indexxxxxxx id testID--------', _i);
                  deleteThisIDPlz = _i;
                }
              }

              this.addedArray.splice(deleteThisIDPlz, 1);
              console.log('delete-------', this.addedArray);
            } else {
              console.log('Add');
              var bb = {
                system_ethinicity_id: val.system_ethinicity_id,
                name: val.name,
                sort_order: val.sort_order,
                status: val.status,
                added: true
              };
              this.ethnicityArray[i] = bb;
              this.addedArray.push(bb);
              console.log('added-------111111111', this.addedArray);
            }

            console.log('added-------9999999999', this.addedArray); // localStorage.setItem('ethnicity', val.name)
            // localStorage.setItem('ethnicityID', val.system_ethinicity_id)
            // 
          }
        }]);

        return EthnicityPage;
      }();

      _EthnicityPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _EthnicityPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ethnicity',
        template: _raw_loader_ethnicity_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ethnicity_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EthnicityPage);
      /***/
    },

    /***/
    34738:
    /*!***********************************************!*\
      !*** ./src/app/ethnicity/ethnicity.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n\n.divbg {\n  height: 50px;\n  margin-left: 2px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  height: 50px;\n  margin-left: 2px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 2px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aG5pY2l0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoiZXRobmljaXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZGl2Ymcge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdmJnOmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgZm9udC1zaXplOiAxMXB0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGl2ZWRpdmJnIHtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFwdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    45583:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ethnicity/ethnicity.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 20px;\">\n\n    <ion-text>Ethnicity *</ion-text>\n\n    <div class=\"margin-top-fixed\" style=\"padding: 0px 0px 0px 0px;\">\n\n      <ion-chip *ngFor=\"let eth of ethnicityArray;  let i = index;\" class=\"divbg\" (click)=\"ethSelected(eth,i)\"\n        [class.activedivbg]=\"eth.added\">\n        <ion-label style=\" color: gray;;\">{{eth.name}}</ion-label>\n      </ion-chip>\n\n    </div>\n\n\n    <ion-row style=\"width: 100%;  bottom: 3px; padding: 6px; margin-top: 40px;\">\n      <ion-col style=\"text-align: center\">\n        <button (click)=\"saveEthnicity()\" class=\"btn\">Save</button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_ethnicity_ethnicity_module_ts-es5.js.map