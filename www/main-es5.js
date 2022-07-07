(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunklev"] = self["webpackChunklev"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'apply',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_apply_apply_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./apply/apply.module */
          67149)).then(function (m) {
            return m.ApplyPageModule;
          });
        }
      }, {
        path: 'gettingstart',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_firebase_auth_dist_index_esm_js"), __webpack_require__.e("src_app_gettingstart_gettingstart_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./gettingstart/gettingstart.module */
          22505)).then(function (m) {
            return m.GettingstartPageModule;
          });
        }
      }, {
        path: 'otp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_firebase_auth_dist_index_esm_js"), __webpack_require__.e("src_app_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./otp/otp.module */
          71599)).then(function (m) {
            return m.OtpPageModule;
          });
        }
      }, {
        path: 'profile1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profile1_profile1_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profile1/profile1.module */
          8582)).then(function (m) {
            return m.Profile1PageModule;
          });
        }
      }, {
        path: 'info',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_info_info_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./info/info.module */
          43056)).then(function (m) {
            return m.InfoPageModule;
          });
        }
      }, {
        path: 'youprofile1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_youprofile1_youprofile1_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./youprofile1/youprofile1.module */
          78954)).then(function (m) {
            return m.Youprofile1PageModule;
          });
        }
      }, {
        path: 'yourprofile2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_yourprofile2_yourprofile2_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./yourprofile2/yourprofile2.module */
          97285)).then(function (m) {
            return m.Yourprofile2PageModule;
          });
        }
      }, {
        path: 'yourprofile3',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_yourprofile3_yourprofile3_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./yourprofile3/yourprofile3.module */
          627)).then(function (m) {
            return m.Yourprofile3PageModule;
          });
        }
      }, {
        path: 'prompt1',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompt1/prompt1.module */
          69858)).then(function (m) {
            return m.Prompt1PageModule;
          });
        }
      }, {
        path: 'prompt2',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompt2/prompt2.module */
          30605)).then(function (m) {
            return m.Prompt2PageModule;
          });
        }
      }, {
        path: 'prompt3',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompt3/prompt3.module */
          89417)).then(function (m) {
            return m.Prompt3PageModule;
          });
        }
      }, {
        path: 'requestsubmitted',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_requestsubmitted_requestsubmitted_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./requestsubmitted/requestsubmitted.module */
          54525)).then(function (m) {
            return m.RequestsubmittedPageModule;
          });
        }
      }, {
        path: 'prompts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_prompts_prompts_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompts/prompts.module */
          66453)).then(function (m) {
            return m.PromptsPageModule;
          });
        }
      }, {
        path: 'welcome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./welcome/welcome.module */
          32526)).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: 'subscription',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_subscription_subscription_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./subscription/subscription.module */
          7474)).then(function (m) {
            return m.SubscriptionPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./home/home.module */
          3467)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'prefrence',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_prefrence_prefrence_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./prefrence/prefrence.module */
          77475)).then(function (m) {
            return m.PrefrencePageModule;
          });
        }
      }, {
        path: 'accountsetting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_accountsetting_accountsetting_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./accountsetting/accountsetting.module */
          50317)).then(function (m) {
            return m.AccountsettingPageModule;
          });
        }
      }, {
        path: 'contactus',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_contactus_contactus_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./contactus/contactus.module */
          58037)).then(function (m) {
            return m.ContactusPageModule;
          });
        }
      }, {
        path: 'religion',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./religion/religion.module */
          81775)).then(function (m) {
            return m.ReligionPageModule;
          });
        }
      }, {
        path: 'maritalstatus',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./maritalstatus/maritalstatus.module */
          99759)).then(function (m) {
            return m.MaritalstatusPageModule;
          });
        }
      }, {
        path: 'lookingfor',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./lookingfor/lookingfor.module */
          63647)).then(function (m) {
            return m.LookingforPageModule;
          });
        }
      }, {
        path: 'gender',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./gender/gender.module */
          28663)).then(function (m) {
            return m.GenderPageModule;
          });
        }
      }, {
        path: 'agerange',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_agerange_agerange_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./agerange/agerange.module */
          89190)).then(function (m) {
            return m.AgerangePageModule;
          });
        }
      }, {
        path: 'koshar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_koshar_koshar_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./koshar/koshar.module */
          87601)).then(function (m) {
            return m.KosharPageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./faq/faq.module */
          5083)).then(function (m) {
            return m.FaqPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./notification/notification.module */
          22154)).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'viewprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_viewprofile_viewprofile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./viewprofile/viewprofile.module */
          18684)).then(function (m) {
            return m.ViewprofilePageModule;
          });
        }
      }, {
        path: 'message',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./message/message.module */
          42770)).then(function (m) {
            return m.MessagePageModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_chat_chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./chat/chat.module */
          20818)).then(function (m) {
            return m.ChatPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'loginotp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_loginotp_loginotp_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./loginotp/loginotp.module */
          65611)).then(function (m) {
            return m.LoginotpPageModule;
          });
        }
      }, {
        path: 'interestedin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_interestedin_interestedin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./interestedin/interestedin.module */
          5143)).then(function (m) {
            return m.InterestedinPageModule;
          });
        }
      }, {
        path: 'ethnicity',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_ethnicity_ethnicity_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./ethnicity/ethnicity.module */
          65864)).then(function (m) {
            return m.EthnicityPageModule;
          });
        }
      }, {
        path: 'editprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_editprofile_editprofile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./editprofile/editprofile.module */
          59285)).then(function (m) {
            return m.EditprofilePageModule;
          });
        }
      }, {
        path: 'heightrange',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_heightrange_heightrange_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./heightrange/heightrange.module */
          16264)).then(function (m) {
            return m.HeightrangePageModule;
          });
        }
      }, {
        path: 'myage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_myage_myage_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./myage/myage.module */
          42209)).then(function (m) {
            return m.MyagePageModule;
          });
        }
      }, {
        path: 'prompt1update',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_prompt1update_prompt1update_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompt1update/prompt1update.module */
          88807)).then(function (m) {
            return m.Prompt1updatePageModule;
          });
        }
      }, {
        path: 'prompt2update',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_prompt2update_prompt2update_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompt2update/prompt2update.module */
          2742)).then(function (m) {
            return m.Prompt2updatePageModule;
          });
        }
      }, {
        path: 'prompt3update',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_prompt3update_prompt3update_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./prompt3update/prompt3update.module */
          86646)).then(function (m) {
            return m.Prompt3updatePageModule;
          });
        }
      }, {
        path: 'interestedinpref',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_interestedinpref_interestedinpref_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./interestedinpref/interestedinpref.module */
          25082)).then(function (m) {
            return m.InterestedinprefPageModule;
          });
        }
      }, {
        path: 'maritalstatuspref',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_maritalstatuspref_maritalstatuspref_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./maritalstatuspref/maritalstatuspref.module */
          49521)).then(function (m) {
            return m.MaritalstatusprefPageModule;
          });
        }
      }, {
        path: 'religionpref',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_religionpref_religionpref_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./religionpref/religionpref.module */
          74883)).then(function (m) {
            return m.ReligionprefPageModule;
          });
        }
      }, {
        path: 'showimage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_showimage_showimage_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./showimage/showimage.module */
          12360)).then(function (m) {
            return m.ShowimagePageModule;
          });
        }
      }, {
        path: 'termsservice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_termsservice_termsservice_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./termsservice/termsservice.module */
          27059)).then(function (m) {
            return m.TermsservicePageModule;
          });
        }
      }, {
        path: 'otherprofile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_otherprofile_otherprofile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./otherprofile/otherprofile.module */
          15699)).then(function (m) {
            return m.OtherprofilePageModule;
          });
        }
      }, {
        path: 'mykoshar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_mykoshar_mykoshar_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./mykoshar/mykoshar.module */
          68664)).then(function (m) {
            return m.MykosharPageModule;
          });
        }
      }, {
        path: 'poll',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_poll_poll_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./poll/poll.module */
          19826)).then(function (m) {
            return m.PollPageModule;
          });
        }
      }, {
        path: 'myethnicity',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_myethnicity_myethnicity_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./myethnicity/myethnicity.module */
          4755)).then(function (m) {
            return m.MyethnicityPageModule;
          });
        }
      }, {
        path: 'smspkg',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_smspkg_smspkg_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./smspkg/smspkg.module */
          90833)).then(function (m) {
            return m.SmspkgPageModule;
          });
        }
      }, {
        path: 'contactus2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_contactus2_contactus2_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./contactus2/contactus2.module */
          43538)).then(function (m) {
            return m.Contactus2PageModule;
          });
        }
      }, {
        path: 'otppageweb',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_otppageweb_otppageweb_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./otppageweb/otppageweb.module */
          85137)).then(function (m) {
            return m.OtppagewebPageModule;
          });
        }
      }, {
        path: 'matchdelete',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./matchdelete/matchdelete.module */
          68934)).then(function (m) {
            return m.MatchdeletePageModule;
          });
        }
      }, {
        path: 'adminchat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_adminchat_adminchat_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./adminchat/adminchat.module */
          6734)).then(function (m) {
            return m.AdminchatPageModule;
          });
        }
      }, {
        path: 'contactussignup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_contactussignup_contactussignup_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./contactussignup/contactussignup.module */
          5942)).then(function (m) {
            return m.ContactussignupPageModule;
          });
        }
      }, {
        path: 'career',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_career_career_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./career/career.module */
          9066)).then(function (m) {
            return m.CareerPageModule;
          });
        }
      }, {
        path: 'subscriptionlogin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_subscriptionlogin_subscriptionlogin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./subscriptionlogin/subscriptionlogin.module */
          13580)).then(function (m) {
            return m.SubscriptionloginPageModule;
          });
        }
      }, {
        path: 'pollnew',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pollnew_pollnew_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pollnew/pollnew.module */
          6061)).then(function (m) {
            return m.PollnewPageModule;
          });
        }
      }, {
        path: 'promptnew',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_promptnew_promptnew_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./promptnew/promptnew.module */
          21190)).then(function (m) {
            return m.PromptnewPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      61779);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./work.service */
      8981);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rest.service */
      61881);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, navCtrl, oneSignal, workService, restService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.navCtrl = navCtrl;
          this.oneSignal = oneSignal;
          this.workService = workService;
          this.restService = restService; // oneSignalAppId = '3d7fddea-62ec-4b88-9b2f-1b15e2ba3138'
          // oneSignalFirebaseId = '257224415793'

          this.oneSignalAppId = 'db3264f6-fcb1-49e5-b3df-888a40925111';
          this.oneSignalFirebaseId = '150920249203';
          this.identy = '';
          this.userData = '';
          this.arr = [];

          if (this.platform.ready()) {
            this.initializeApp();
            console.log('platform Ready apComponent', localStorage.getItem('login')); // Login code start here

            if (localStorage.getItem('login') == 'isLogin') {
              this.checkSubscription();
              this.userData = JSON.parse(localStorage.getItem('loggedinUserData'));
              console.log('usr packageee--->>>>>', this.userData.packages_id); // var sbID = this.userData.packages_id

              var sbID = localStorage.getItem('packages_id');

              if (sbID == '0' || sbID == 'null' || sbID == null) {
                this.navCtrl.navigateRoot(['apply'], {
                  replaceUrl: true
                });
              } else {
                this.navCtrl.navigateRoot(['/tabs/tab1'], {
                  replaceUrl: true
                });
              }
            } else {
              this.navCtrl.navigateRoot('/apply');
            } //   // Login code end here

          }
        }

        _createClass(AppComponent, [{
          key: "checkSubscription",
          value: function checkSubscription() {
            var _this = this;

            var userID = localStorage.getItem('loggedinUserID');
            var data = {
              loginuser: 0,
              otheruser: userID
            };
            this.restService.get_user_dataAPI(data).subscribe(function (res) {
              console.log('incomming data === ', res);

              if (res.status == "success") {
                if (res.data.user_data) {
                  _this.workService.myUserData = res;
                  _this.userData = _this.workService.myUserData.data.user_data;
                  console.log('user dataaa app.component====', _this.userData.packages_id);
                  localStorage.setItem('userNotiStatus', _this.workService.myUserData.data.user_data.notification_switch);

                  if (_this.userData.packages_id == 0) {
                    _this.navCtrl.navigateRoot(['apply'], {
                      replaceUrl: true
                    });

                    localStorage.clear();
                  }
                } else {
                  _this.navCtrl.navigateRoot(['apply'], {
                    replaceUrl: true
                  });

                  localStorage.clear();
                }
              }
            }, function (err) {
              _this.workService.hideLoading();

              _this.workService.presentToast('Network error occured');
            });
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.platform.ready().then(function () {
                        _this2.restService.sendRequest('get_badwords', {}).subscribe(function (res) {
                          console.log('hellow ppl===', res);
                          res.data.map(function (val) {
                            console.log('map value', val.word);

                            _this2.arr.push(val.word);

                            console.log('new array==', _this2.arr);
                            _this2.restService.newarr = _this2.arr;
                          });
                        }); // For onesignal push notification


                        // For onesignal push notification
                        _this2.onesignalNotification();
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onesignalNotification",
          value: function onesignalNotification() {
            var _this3 = this;

            console.log("app noti checkind started"); // For onesignal push notification

            this.oneSignal.setLogLevel({
              logLevel: 6,
              visualLevel: 2
            });
            this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (identity) {
              _this3.identy = identity;
              localStorage.setItem("oneSignaldeviceID", _this3.identy.userId);
              console.log('userID==========>', _this3.identy.userId); // alert('id--->' + this.identy.userId)

              _this3.pushNotification();
            }, function (err) {
              console.log("Error");
              console.log(err);
              return;
            }); // For onesignal push notification
          }
        }, {
          key: "pushNotification",
          value: function pushNotification() {
            this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.endInit();
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__.OneSignal
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _maritalstatus_maritalstatus_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maritalstatus/maritalstatus.module */
      99759);
      /* harmony import */


      var _religion_religion_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./religion/religion.module */
      81775);
      /* harmony import */


      var _gender_gender_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gender/gender.module */
      28663);
      /* harmony import */


      var _lookingfor_lookingfor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lookingfor/lookingfor.module */
      63647);
      /* harmony import */


      var _prompt1_prompt1_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./prompt1/prompt1.module */
      69858);
      /* harmony import */


      var _prompt2_prompt2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./prompt2/prompt2.module */
      30605);
      /* harmony import */


      var _prompt3_prompt3_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./prompt3/prompt3.module */
      89417);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/app-availability/ngx */
      10097);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      97905);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./firebase */
      91416);
      /* harmony import */


      var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase/ngx */
      11963);
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      61779);
      /* harmony import */


      var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase-2/ngx */
      73532);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/fire */
      50057);
      /* harmony import */


      var _matchdelete_matchdelete_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./matchdelete/matchdelete.module */
      68934);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_23__.AngularFireModule.initializeApp(_firebase__WEBPACK_IMPORTED_MODULE_16__["default"]), _ionic_storage__WEBPACK_IMPORTED_MODULE_24__.IonicStorageModule.forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _maritalstatus_maritalstatus_module__WEBPACK_IMPORTED_MODULE_3__.MaritalstatusPageModule, _religion_religion_module__WEBPACK_IMPORTED_MODULE_4__.ReligionPageModule, _gender_gender_module__WEBPACK_IMPORTED_MODULE_5__.GenderPageModule, _lookingfor_lookingfor_module__WEBPACK_IMPORTED_MODULE_6__.LookingforPageModule, _prompt1_prompt1_module__WEBPACK_IMPORTED_MODULE_7__.Prompt1PageModule, _prompt2_prompt2_module__WEBPACK_IMPORTED_MODULE_8__.Prompt2PageModule, _prompt3_prompt3_module__WEBPACK_IMPORTED_MODULE_9__.Prompt3PageModule, _matchdelete_matchdelete_module__WEBPACK_IMPORTED_MODULE_20__.MatchdeletePageModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule],
        providers: [_ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_17__.InAppPurchase, _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_19__.InAppPurchase2, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_18__.OneSignal, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__.Geolocation, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_11__.NativeGeocoder, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__.InAppBrowser, _ionic_native_app_availability_ngx__WEBPACK_IMPORTED_MODULE_13__.AppAvailability, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__.FileTransfer, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__.FileTransferObject, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__.File, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_26__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    91416:
    /*!*****************************!*\
      !*** ./src/app/firebase.ts ***!
      \*****************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var config = {
        apiKey: "AIzaSyAXy4ZVvlXpIzx5sGo30NoyX7AyZdrat_c",
        authDomain: "levotp.firebaseapp.com",
        projectId: "levotp",
        storageBucket: "levotp.appspot.com",
        messagingSenderId: "806016614387",
        appId: "1:806016614387:web:eb605086c62a0a64735c86",
        measurementId: "G-E0JEPSQHWM"
      };
      /* harmony default export */

      __webpack_exports__["default"] = config;
      /***/
    },

    /***/
    79983:
    /*!*************************************************!*\
      !*** ./src/app/gender/gender-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenderPageRoutingModule": function GenderPageRoutingModule() {
          return (
            /* binding */
            _GenderPageRoutingModule
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


      var _gender_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./gender.page */
      73204);

      var routes = [{
        path: '',
        component: _gender_page__WEBPACK_IMPORTED_MODULE_0__.GenderPage
      }];

      var _GenderPageRoutingModule = function GenderPageRoutingModule() {
        _classCallCheck(this, GenderPageRoutingModule);
      };

      _GenderPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _GenderPageRoutingModule);
      /***/
    },

    /***/
    28663:
    /*!*****************************************!*\
      !*** ./src/app/gender/gender.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenderPageModule": function GenderPageModule() {
          return (
            /* binding */
            _GenderPageModule
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


      var _gender_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./gender-routing.module */
      79983);
      /* harmony import */


      var _gender_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gender.page */
      73204);

      var _GenderPageModule = function GenderPageModule() {
        _classCallCheck(this, GenderPageModule);
      };

      _GenderPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _gender_routing_module__WEBPACK_IMPORTED_MODULE_0__.GenderPageRoutingModule],
        declarations: [_gender_page__WEBPACK_IMPORTED_MODULE_1__.GenderPage]
      })], _GenderPageModule);
      /***/
    },

    /***/
    73204:
    /*!***************************************!*\
      !*** ./src/app/gender/gender.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenderPage": function GenderPage() {
          return (
            /* binding */
            _GenderPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_gender_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./gender.page.html */
      35742);
      /* harmony import */


      var _gender_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./gender.page.scss */
      89665);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _GenderPage = /*#__PURE__*/function () {
        function GenderPage(location, signupService, workService) {
          _classCallCheck(this, GenderPage);

          this.location = location;
          this.signupService = signupService;
          this.workService = workService;
          this.Selectedgender = '';
          this.genderArr = '';
          this.selectedGenderID = '';
        }

        _createClass(GenderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.Selectedgender = localStorage.getItem('selectedGenderId');
            this.genderArr = this.workService.systemData.system_genders;
            console.log('gender---', this.genderArr);
            console.log('gender---', this.Selectedgender);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "funClick",
          value: function funClick(val) {
            console.log(val);
            localStorage.setItem('gender', val.name);
            localStorage.setItem('selectedGenderId', val.system_genders_id);
            this.signupService.gender = val;
            this.location.back();
          }
        }]);

        return GenderPage;
      }();

      _GenderPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _GenderPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gender',
        template: _raw_loader_gender_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_gender_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GenderPage);
      /***/
    },

    /***/
    10958:
    /*!*********************************************************!*\
      !*** ./src/app/lookingfor/lookingfor-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookingforPageRoutingModule": function LookingforPageRoutingModule() {
          return (
            /* binding */
            _LookingforPageRoutingModule
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


      var _lookingfor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lookingfor.page */
      43881);

      var routes = [{
        path: '',
        component: _lookingfor_page__WEBPACK_IMPORTED_MODULE_0__.LookingforPage
      }];

      var _LookingforPageRoutingModule = function LookingforPageRoutingModule() {
        _classCallCheck(this, LookingforPageRoutingModule);
      };

      _LookingforPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LookingforPageRoutingModule);
      /***/
    },

    /***/
    63647:
    /*!*************************************************!*\
      !*** ./src/app/lookingfor/lookingfor.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookingforPageModule": function LookingforPageModule() {
          return (
            /* binding */
            _LookingforPageModule
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


      var _lookingfor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lookingfor-routing.module */
      10958);
      /* harmony import */


      var _lookingfor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lookingfor.page */
      43881);

      var _LookingforPageModule = function LookingforPageModule() {
        _classCallCheck(this, LookingforPageModule);
      };

      _LookingforPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _lookingfor_routing_module__WEBPACK_IMPORTED_MODULE_0__.LookingforPageRoutingModule],
        declarations: [_lookingfor_page__WEBPACK_IMPORTED_MODULE_1__.LookingforPage]
      })], _LookingforPageModule);
      /***/
    },

    /***/
    43881:
    /*!***********************************************!*\
      !*** ./src/app/lookingfor/lookingfor.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookingforPage": function LookingforPage() {
          return (
            /* binding */
            _LookingforPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_lookingfor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./lookingfor.page.html */
      77256);
      /* harmony import */


      var _lookingfor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lookingfor.page.scss */
      2353);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _LookingforPage = /*#__PURE__*/function () {
        function LookingforPage(location, signupService, workService) {
          _classCallCheck(this, LookingforPage);

          this.location = location;
          this.signupService = signupService;
          this.workService = workService;
          this.lookingForID = '';
          this.LookingForArr = '';
          this.selectedLookingForID = '';
        }

        _createClass(LookingforPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            //this.selectedGenderID = selectedGenderID
            this.lookingForID = localStorage.getItem('lookingForSelectedID');
            this.LookingForArr = this.workService.systemData.system_looking_for;
            console.log('gender---', this.lookingForID);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "funClick",
          value: function funClick(val) {
            console.log(val);
            localStorage.setItem('lookingFor', val.name);
            localStorage.setItem('lookingForSelectedID', val.system_looking_for_id);
            this.signupService.lookingFor = val;
            this.location.back();
          }
        }]);

        return LookingforPage;
      }();

      _LookingforPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _LookingforPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-lookingfor',
        template: _raw_loader_lookingfor_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lookingfor_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LookingforPage);
      /***/
    },

    /***/
    68651:
    /*!***************************************************************!*\
      !*** ./src/app/maritalstatus/maritalstatus-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaritalstatusPageRoutingModule": function MaritalstatusPageRoutingModule() {
          return (
            /* binding */
            _MaritalstatusPageRoutingModule
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


      var _maritalstatus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maritalstatus.page */
      96945);

      var routes = [{
        path: '',
        component: _maritalstatus_page__WEBPACK_IMPORTED_MODULE_0__.MaritalstatusPage
      }];

      var _MaritalstatusPageRoutingModule = function MaritalstatusPageRoutingModule() {
        _classCallCheck(this, MaritalstatusPageRoutingModule);
      };

      _MaritalstatusPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MaritalstatusPageRoutingModule);
      /***/
    },

    /***/
    99759:
    /*!*******************************************************!*\
      !*** ./src/app/maritalstatus/maritalstatus.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaritalstatusPageModule": function MaritalstatusPageModule() {
          return (
            /* binding */
            _MaritalstatusPageModule
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


      var _maritalstatus_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maritalstatus-routing.module */
      68651);
      /* harmony import */


      var _maritalstatus_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maritalstatus.page */
      96945);

      var _MaritalstatusPageModule = function MaritalstatusPageModule() {
        _classCallCheck(this, MaritalstatusPageModule);
      };

      _MaritalstatusPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _maritalstatus_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaritalstatusPageRoutingModule],
        declarations: [_maritalstatus_page__WEBPACK_IMPORTED_MODULE_1__.MaritalstatusPage]
      })], _MaritalstatusPageModule);
      /***/
    },

    /***/
    96945:
    /*!*****************************************************!*\
      !*** ./src/app/maritalstatus/maritalstatus.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaritalstatusPage": function MaritalstatusPage() {
          return (
            /* binding */
            _MaritalstatusPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_maritalstatus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./maritalstatus.page.html */
      81943);
      /* harmony import */


      var _maritalstatus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./maritalstatus.page.scss */
      63725);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _MaritalstatusPage = /*#__PURE__*/function () {
        function MaritalstatusPage(location, signupService, workService) {
          _classCallCheck(this, MaritalstatusPage);

          this.location = location;
          this.signupService = signupService;
          this.workService = workService;
          this.meritalStatusSelectedID = '';
          this.maritalStatusArr = '';
        }

        _createClass(MaritalstatusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "funClick",
          value: function funClick(val) {
            localStorage.setItem('meritalStatus', val.name);
            localStorage.setItem('meritalStatusSelectedID', val.system_maritalstatus_id);
            this.signupService.meritalStatus = val;
            this.location.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.meritalStatusSelectedID = localStorage.getItem('meritalStatusSelectedID');
            console.log(this.workService.systemData);
            this.maritalStatusArr = this.workService.systemData.system_maritalstatus;
          }
        }]);

        return MaritalstatusPage;
      }();

      _MaritalstatusPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _MaritalstatusPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-maritalstatus',
        template: _raw_loader_maritalstatus_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_maritalstatus_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MaritalstatusPage);
      /***/
    },

    /***/
    83529:
    /*!***********************************************************!*\
      !*** ./src/app/matchdelete/matchdelete-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchdeletePageRoutingModule": function MatchdeletePageRoutingModule() {
          return (
            /* binding */
            _MatchdeletePageRoutingModule
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


      var _matchdelete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./matchdelete.page */
      13447);

      var routes = [{
        path: '',
        component: _matchdelete_page__WEBPACK_IMPORTED_MODULE_0__.MatchdeletePage
      }];

      var _MatchdeletePageRoutingModule = function MatchdeletePageRoutingModule() {
        _classCallCheck(this, MatchdeletePageRoutingModule);
      };

      _MatchdeletePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MatchdeletePageRoutingModule);
      /***/
    },

    /***/
    68934:
    /*!***************************************************!*\
      !*** ./src/app/matchdelete/matchdelete.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchdeletePageModule": function MatchdeletePageModule() {
          return (
            /* binding */
            _MatchdeletePageModule
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


      var _matchdelete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./matchdelete-routing.module */
      83529);
      /* harmony import */


      var _matchdelete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./matchdelete.page */
      13447);

      var _MatchdeletePageModule = function MatchdeletePageModule() {
        _classCallCheck(this, MatchdeletePageModule);
      };

      _MatchdeletePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _matchdelete_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchdeletePageRoutingModule],
        declarations: [_matchdelete_page__WEBPACK_IMPORTED_MODULE_1__.MatchdeletePage]
      })], _MatchdeletePageModule);
      /***/
    },

    /***/
    13447:
    /*!*************************************************!*\
      !*** ./src/app/matchdelete/matchdelete.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatchdeletePage": function MatchdeletePage() {
          return (
            /* binding */
            _MatchdeletePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_matchdelete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./matchdelete.page.html */
      60438);
      /* harmony import */


      var _matchdelete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./matchdelete.page.scss */
      5793);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rest.service */
      61881);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _MatchdeletePage = /*#__PURE__*/function () {
        function MatchdeletePage(location, modalCtrl, workService, restService) {
          _classCallCheck(this, MatchdeletePage);

          this.location = location;
          this.modalCtrl = modalCtrl;
          this.workService = workService;
          this.restService = restService;
        }

        _createClass(MatchdeletePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            var stringy = JSON.stringify({
              add: 0
            });
            this.modalCtrl.dismiss(stringy);
          }
        }, {
          key: "close",
          value: function close() {
            var stringy = JSON.stringify({
              add: 1
            });
            this.modalCtrl.dismiss(stringy);
          }
        }, {
          key: "closeMatch",
          value: function closeMatch() {
            var _this4 = this;

            var ss = JSON.stringify({
              'users_customers_id': localStorage.getItem('loggedinUserID'),
              'other_users_customers_id': localStorage.getItem('other_users_customers_id')
            });
            this.workService.presentLoading();
            this.restService.delete_matchAPI(ss).subscribe(function (res) {
              _this4.workService.hideLoading();

              console.log('resss----', res);

              if (res.status == 'success') {
                _this4.workService.presentToast(res.message);

                _this4.close();
              } else {
                _this4.workService.presentToast(res.message);
              }
            }, function (err) {
              _this4.workService.hideLoading();

              _this4.workService.presentToast('Network error occured');
            });
            console.log(ss); //
          }
        }, {
          key: "openChat",
          value: function openChat(event) {
            var _this5 = this;

            console.log("event---", event);
            var ss = JSON.stringify({
              'users_customers_id': localStorage.getItem('loggedinUserID'),
              'other_users_customers_id': localStorage.getItem('other_users_customers_id')
            });
            this.workService.presentLoading();
            this.restService.remove_matchAPI(ss).subscribe(function (res) {
              _this5.workService.hideLoading();

              console.log('resss----', res);

              if (res.status == 'success') {
                _this5.workService.presentToast(res.message);

                _this5.close();
              } else {
                _this5.workService.presentToast(res.message);
              }
            }, function (err) {
              _this5.workService.hideLoading();

              _this5.workService.presentToast('Network error occured');
            });
            console.log(ss);
          }
        }]);

        return MatchdeletePage;
      }();

      _MatchdeletePage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _MatchdeletePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-matchdelete',
        template: _raw_loader_matchdelete_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_matchdelete_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MatchdeletePage);
      /***/
    },

    /***/
    53020:
    /*!***************************************************!*\
      !*** ./src/app/prompt1/prompt1-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt1PageRoutingModule": function Prompt1PageRoutingModule() {
          return (
            /* binding */
            _Prompt1PageRoutingModule
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


      var _prompt1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt1.page */
      24520);

      var routes = [{
        path: '',
        component: _prompt1_page__WEBPACK_IMPORTED_MODULE_0__.Prompt1Page
      }];

      var _Prompt1PageRoutingModule = function Prompt1PageRoutingModule() {
        _classCallCheck(this, Prompt1PageRoutingModule);
      };

      _Prompt1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Prompt1PageRoutingModule);
      /***/
    },

    /***/
    69858:
    /*!*******************************************!*\
      !*** ./src/app/prompt1/prompt1.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt1PageModule": function Prompt1PageModule() {
          return (
            /* binding */
            _Prompt1PageModule
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


      var _prompt1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt1-routing.module */
      53020);
      /* harmony import */


      var _prompt1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt1.page */
      24520);

      var _Prompt1PageModule = function Prompt1PageModule() {
        _classCallCheck(this, Prompt1PageModule);
      };

      _Prompt1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _prompt1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Prompt1PageRoutingModule],
        declarations: [_prompt1_page__WEBPACK_IMPORTED_MODULE_1__.Prompt1Page]
      })], _Prompt1PageModule);
      /***/
    },

    /***/
    24520:
    /*!*****************************************!*\
      !*** ./src/app/prompt1/prompt1.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt1Page": function Prompt1Page() {
          return (
            /* binding */
            _Prompt1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prompt1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prompt1.page.html */
      59425);
      /* harmony import */


      var _prompt1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt1.page.scss */
      38678);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../rest.service */
      61881);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../signup.service */
      46298);

      var _Prompt1Page = /*#__PURE__*/function () {
        function Prompt1Page(location, signupService, restService) {
          _classCallCheck(this, Prompt1Page);

          this.location = location;
          this.signupService = signupService;
          this.restService = restService;
          this.prompt = '';
          this.promptTitle = '';
        }

        _createClass(Prompt1Page, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.promptTitle = this.signupService.prompt1User;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.prompt = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            localStorage.setItem('prompt1Val', this.prompt);
            this.signupService.prompt1Val = this.prompt;
            this.location.back();
          }
        }]);

        return Prompt1Page;
      }();

      _Prompt1Page.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _Prompt1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-prompt1',
        template: _raw_loader_prompt1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prompt1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Prompt1Page);
      /***/
    },

    /***/
    97573:
    /*!***************************************************!*\
      !*** ./src/app/prompt2/prompt2-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt2PageRoutingModule": function Prompt2PageRoutingModule() {
          return (
            /* binding */
            _Prompt2PageRoutingModule
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


      var _prompt2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt2.page */
      12979);

      var routes = [{
        path: '',
        component: _prompt2_page__WEBPACK_IMPORTED_MODULE_0__.Prompt2Page
      }];

      var _Prompt2PageRoutingModule = function Prompt2PageRoutingModule() {
        _classCallCheck(this, Prompt2PageRoutingModule);
      };

      _Prompt2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Prompt2PageRoutingModule);
      /***/
    },

    /***/
    30605:
    /*!*******************************************!*\
      !*** ./src/app/prompt2/prompt2.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt2PageModule": function Prompt2PageModule() {
          return (
            /* binding */
            _Prompt2PageModule
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


      var _prompt2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt2-routing.module */
      97573);
      /* harmony import */


      var _prompt2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt2.page */
      12979);

      var _Prompt2PageModule = function Prompt2PageModule() {
        _classCallCheck(this, Prompt2PageModule);
      };

      _Prompt2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _prompt2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Prompt2PageRoutingModule],
        declarations: [_prompt2_page__WEBPACK_IMPORTED_MODULE_1__.Prompt2Page]
      })], _Prompt2PageModule);
      /***/
    },

    /***/
    12979:
    /*!*****************************************!*\
      !*** ./src/app/prompt2/prompt2.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt2Page": function Prompt2Page() {
          return (
            /* binding */
            _Prompt2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prompt2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prompt2.page.html */
      51149);
      /* harmony import */


      var _prompt2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt2.page.scss */
      89005);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../rest.service */
      61881);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../signup.service */
      46298);

      var _Prompt2Page = /*#__PURE__*/function () {
        function Prompt2Page(location, signupService, restService) {
          _classCallCheck(this, Prompt2Page);

          this.location = location;
          this.signupService = signupService;
          this.restService = restService;
          this.prompt = '';
          this.promptTitle = '';
        }

        _createClass(Prompt2Page, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.promptTitle = this.signupService.prompt2User;
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            localStorage.setItem('prompt2Val', this.prompt);
            this.signupService.prompt2Val = this.prompt;
            this.location.back();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.prompt = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return Prompt2Page;
      }();

      _Prompt2Page.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _Prompt2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-prompt2',
        template: _raw_loader_prompt2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prompt2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Prompt2Page);
      /***/
    },

    /***/
    72990:
    /*!***************************************************!*\
      !*** ./src/app/prompt3/prompt3-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt3PageRoutingModule": function Prompt3PageRoutingModule() {
          return (
            /* binding */
            _Prompt3PageRoutingModule
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


      var _prompt3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt3.page */
      64559);

      var routes = [{
        path: '',
        component: _prompt3_page__WEBPACK_IMPORTED_MODULE_0__.Prompt3Page
      }];

      var _Prompt3PageRoutingModule = function Prompt3PageRoutingModule() {
        _classCallCheck(this, Prompt3PageRoutingModule);
      };

      _Prompt3PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Prompt3PageRoutingModule);
      /***/
    },

    /***/
    89417:
    /*!*******************************************!*\
      !*** ./src/app/prompt3/prompt3.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt3PageModule": function Prompt3PageModule() {
          return (
            /* binding */
            _Prompt3PageModule
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


      var _prompt3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prompt3-routing.module */
      72990);
      /* harmony import */


      var _prompt3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt3.page */
      64559);

      var _Prompt3PageModule = function Prompt3PageModule() {
        _classCallCheck(this, Prompt3PageModule);
      };

      _Prompt3PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _prompt3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Prompt3PageRoutingModule],
        declarations: [_prompt3_page__WEBPACK_IMPORTED_MODULE_1__.Prompt3Page]
      })], _Prompt3PageModule);
      /***/
    },

    /***/
    64559:
    /*!*****************************************!*\
      !*** ./src/app/prompt3/prompt3.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Prompt3Page": function Prompt3Page() {
          return (
            /* binding */
            _Prompt3Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prompt3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prompt3.page.html */
      1837);
      /* harmony import */


      var _prompt3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prompt3.page.scss */
      17509);
      /* harmony import */


      var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../rest.service */
      61881);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../signup.service */
      46298);

      var _Prompt3Page = /*#__PURE__*/function () {
        function Prompt3Page(location, signupService, restService) {
          _classCallCheck(this, Prompt3Page);

          this.location = location;
          this.signupService = signupService;
          this.restService = restService;
          this.prompt = '';
          this.promptTitle = '';
        }

        _createClass(Prompt3Page, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.promptTitle = this.signupService.prompt3User;
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            localStorage.setItem('prompt3Val', this.prompt);
            this.signupService.prompt3Val = this.prompt;
            this.location.back();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeFunction",
          value: function changeFunction(ev) {
            this.prompt = this.restService.removebadwords(ev.detail.value);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return Prompt3Page;
      }();

      _Prompt3Page.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_3__.SignupService
        }, {
          type: _rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService
        }];
      };

      _Prompt3Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-prompt3',
        template: _raw_loader_prompt3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prompt3_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Prompt3Page);
      /***/
    },

    /***/
    52235:
    /*!*****************************************************!*\
      !*** ./src/app/religion/religion-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReligionPageRoutingModule": function ReligionPageRoutingModule() {
          return (
            /* binding */
            _ReligionPageRoutingModule
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


      var _religion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./religion.page */
      88367);

      var routes = [{
        path: '',
        component: _religion_page__WEBPACK_IMPORTED_MODULE_0__.ReligionPage
      }];

      var _ReligionPageRoutingModule = function ReligionPageRoutingModule() {
        _classCallCheck(this, ReligionPageRoutingModule);
      };

      _ReligionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReligionPageRoutingModule);
      /***/
    },

    /***/
    81775:
    /*!*********************************************!*\
      !*** ./src/app/religion/religion.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReligionPageModule": function ReligionPageModule() {
          return (
            /* binding */
            _ReligionPageModule
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


      var _religion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./religion-routing.module */
      52235);
      /* harmony import */


      var _religion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./religion.page */
      88367);

      var _ReligionPageModule = function ReligionPageModule() {
        _classCallCheck(this, ReligionPageModule);
      };

      _ReligionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _religion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReligionPageRoutingModule],
        declarations: [_religion_page__WEBPACK_IMPORTED_MODULE_1__.ReligionPage]
      })], _ReligionPageModule);
      /***/
    },

    /***/
    88367:
    /*!*******************************************!*\
      !*** ./src/app/religion/religion.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReligionPage": function ReligionPage() {
          return (
            /* binding */
            _ReligionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_religion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./religion.page.html */
      13284);
      /* harmony import */


      var _religion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./religion.page.scss */
      89353);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../signup.service */
      46298);
      /* harmony import */


      var _work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../work.service */
      8981);

      var _ReligionPage = /*#__PURE__*/function () {
        function ReligionPage(location, signupService, workService) {
          _classCallCheck(this, ReligionPage);

          this.location = location;
          this.signupService = signupService;
          this.workService = workService;
          this.religionID = '';
          this.religionArr = '';
        }

        _createClass(ReligionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.religionID = localStorage.getItem('religionID');
            this.religionArr = this.workService.systemData.system_religions;
            console.log('gender---', this.religionArr);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "religionSelected",
          value: function religionSelected(val) {
            localStorage.setItem('religion', val.name);
            localStorage.setItem('religionID', val.system_religions_id);
            this.signupService.religion = val;
            this.location.back();
          }
        }]);

        return ReligionPage;
      }();

      _ReligionPage.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService
        }, {
          type: _work_service__WEBPACK_IMPORTED_MODULE_3__.WorkService
        }];
      };

      _ReligionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-religion',
        template: _raw_loader_religion_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_religion_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReligionPage);
      /***/
    },

    /***/
    61881:
    /*!*********************************!*\
      !*** ./src/app/rest.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RestService": function RestService() {
          return (
            /* binding */
            _RestService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _RestService = /*#__PURE__*/function () {
        function RestService(http, alertcontroller) {
          _classCallCheck(this, RestService);

          this.http = http;
          this.alertcontroller = alertcontroller;
          this.flagsList = [{
            "id": 4,
            "name": "Afghanistan",
            "alpha2": "af",
            "alpha3": "afg"
          }, {
            "id": 248,
            "name": "Åland Islands",
            "alpha2": "ax",
            "alpha3": "ala"
          }, {
            "id": 8,
            "name": "Albania",
            "alpha2": "al",
            "alpha3": "alb"
          }, {
            "id": 12,
            "name": "Algeria",
            "alpha2": "dz",
            "alpha3": "dza"
          }, {
            "id": 16,
            "name": "American Samoa",
            "alpha2": "as",
            "alpha3": "asm"
          }, {
            "id": 20,
            "name": "Andorra",
            "alpha2": "ad",
            "alpha3": "and"
          }, {
            "id": 24,
            "name": "Angola",
            "alpha2": "ao",
            "alpha3": "ago"
          }, {
            "id": 660,
            "name": "Anguilla",
            "alpha2": "ai",
            "alpha3": "aia"
          }, {
            "id": 10,
            "name": "Antarctica",
            "alpha2": "aq",
            "alpha3": "ata"
          }, {
            "id": 28,
            "name": "Antigua and Barbuda",
            "alpha2": "ag",
            "alpha3": "atg"
          }, {
            "id": 32,
            "name": "Argentina",
            "alpha2": "ar",
            "alpha3": "arg"
          }, {
            "id": 51,
            "name": "Armenia",
            "alpha2": "am",
            "alpha3": "arm"
          }, {
            "id": 533,
            "name": "Aruba",
            "alpha2": "aw",
            "alpha3": "abw"
          }, {
            "id": 36,
            "name": "Australia",
            "alpha2": "au",
            "alpha3": "aus"
          }, {
            "id": 40,
            "name": "Austria",
            "alpha2": "at",
            "alpha3": "aut"
          }, {
            "id": 31,
            "name": "Azerbaijan",
            "alpha2": "az",
            "alpha3": "aze"
          }, {
            "id": 44,
            "name": "Bahamas",
            "alpha2": "bs",
            "alpha3": "bhs"
          }, {
            "id": 48,
            "name": "Bahrain",
            "alpha2": "bh",
            "alpha3": "bhr"
          }, {
            "id": 50,
            "name": "Bangladesh",
            "alpha2": "bd",
            "alpha3": "bgd"
          }, {
            "id": 52,
            "name": "Barbados",
            "alpha2": "bb",
            "alpha3": "brb"
          }, {
            "id": 112,
            "name": "Belarus",
            "alpha2": "by",
            "alpha3": "blr"
          }, {
            "id": 56,
            "name": "Belgium",
            "alpha2": "be",
            "alpha3": "bel"
          }, {
            "id": 84,
            "name": "Belize",
            "alpha2": "bz",
            "alpha3": "blz"
          }, {
            "id": 204,
            "name": "Benin",
            "alpha2": "bj",
            "alpha3": "ben"
          }, {
            "id": 60,
            "name": "Bermuda",
            "alpha2": "bm",
            "alpha3": "bmu"
          }, {
            "id": 64,
            "name": "Bhutan",
            "alpha2": "bt",
            "alpha3": "btn"
          }, {
            "id": 68,
            "name": "Bolivia (Plurinational State of)",
            "alpha2": "bo",
            "alpha3": "bol"
          }, {
            "id": 535,
            "name": "Bonaire, Sint Eustatius and Saba",
            "alpha2": "bq",
            "alpha3": "bes"
          }, {
            "id": 70,
            "name": "Bosnia and Herzegovina",
            "alpha2": "ba",
            "alpha3": "bih"
          }, {
            "id": 72,
            "name": "Botswana",
            "alpha2": "bw",
            "alpha3": "bwa"
          }, {
            "id": 74,
            "name": "Bouvet Island",
            "alpha2": "bv",
            "alpha3": "bvt"
          }, {
            "id": 76,
            "name": "Brazil",
            "alpha2": "br",
            "alpha3": "bra"
          }, {
            "id": 86,
            "name": "British Indian Ocean Territory",
            "alpha2": "io",
            "alpha3": "iot"
          }, {
            "id": 96,
            "name": "Brunei Darussalam",
            "alpha2": "bn",
            "alpha3": "brn"
          }, {
            "id": 100,
            "name": "Bulgaria",
            "alpha2": "bg",
            "alpha3": "bgr"
          }, {
            "id": 854,
            "name": "Burkina Faso",
            "alpha2": "bf",
            "alpha3": "bfa"
          }, {
            "id": 108,
            "name": "Burundi",
            "alpha2": "bi",
            "alpha3": "bdi"
          }, {
            "id": 132,
            "name": "Cabo Verde",
            "alpha2": "cv",
            "alpha3": "cpv"
          }, {
            "id": 116,
            "name": "Cambodia",
            "alpha2": "kh",
            "alpha3": "khm"
          }, {
            "id": 120,
            "name": "Cameroon",
            "alpha2": "cm",
            "alpha3": "cmr"
          }, {
            "id": 124,
            "name": "Canada",
            "alpha2": "ca",
            "alpha3": "can"
          }, {
            "id": 136,
            "name": "Cayman Islands",
            "alpha2": "ky",
            "alpha3": "cym"
          }, {
            "id": 140,
            "name": "Central African Republic",
            "alpha2": "cf",
            "alpha3": "caf"
          }, {
            "id": 148,
            "name": "Chad",
            "alpha2": "td",
            "alpha3": "tcd"
          }, {
            "id": 152,
            "name": "Chile",
            "alpha2": "cl",
            "alpha3": "chl"
          }, {
            "id": 156,
            "name": "China",
            "alpha2": "cn",
            "alpha3": "chn"
          }, {
            "id": 162,
            "name": "Christmas Island",
            "alpha2": "cx",
            "alpha3": "cxr"
          }, {
            "id": 166,
            "name": "Cocos (Keeling) Islands",
            "alpha2": "cc",
            "alpha3": "cck"
          }, {
            "id": 170,
            "name": "Colombia",
            "alpha2": "co",
            "alpha3": "col"
          }, {
            "id": 174,
            "name": "Comoros",
            "alpha2": "km",
            "alpha3": "com"
          }, {
            "id": 178,
            "name": "Congo",
            "alpha2": "cg",
            "alpha3": "cog"
          }, {
            "id": 180,
            "name": "Congo, Democratic Republic of the",
            "alpha2": "cd",
            "alpha3": "cod"
          }, {
            "id": 184,
            "name": "Cook Islands",
            "alpha2": "ck",
            "alpha3": "cok"
          }, {
            "id": 188,
            "name": "Costa Rica",
            "alpha2": "cr",
            "alpha3": "cri"
          }, {
            "id": 384,
            "name": "Côte d'Ivoire",
            "alpha2": "ci",
            "alpha3": "civ"
          }, {
            "id": 191,
            "name": "Croatia",
            "alpha2": "hr",
            "alpha3": "hrv"
          }, {
            "id": 192,
            "name": "Cuba",
            "alpha2": "cu",
            "alpha3": "cub"
          }, {
            "id": 531,
            "name": "Curaçao",
            "alpha2": "cw",
            "alpha3": "cuw"
          }, {
            "id": 196,
            "name": "Cyprus",
            "alpha2": "cy",
            "alpha3": "cyp"
          }, {
            "id": 203,
            "name": "Czechia",
            "alpha2": "cz",
            "alpha3": "cze"
          }, {
            "id": 208,
            "name": "Denmark",
            "alpha2": "dk",
            "alpha3": "dnk"
          }, {
            "id": 262,
            "name": "Djibouti",
            "alpha2": "dj",
            "alpha3": "dji"
          }, {
            "id": 212,
            "name": "Dominica",
            "alpha2": "dm",
            "alpha3": "dma"
          }, {
            "id": 214,
            "name": "Dominican Republic",
            "alpha2": "do",
            "alpha3": "dom"
          }, {
            "id": 218,
            "name": "Ecuador",
            "alpha2": "ec",
            "alpha3": "ecu"
          }, {
            "id": 818,
            "name": "Egypt",
            "alpha2": "eg",
            "alpha3": "egy"
          }, {
            "id": 222,
            "name": "El Salvador",
            "alpha2": "sv",
            "alpha3": "slv"
          }, {
            "id": 226,
            "name": "Equatorial Guinea",
            "alpha2": "gq",
            "alpha3": "gnq"
          }, {
            "id": 232,
            "name": "Eritrea",
            "alpha2": "er",
            "alpha3": "eri"
          }, {
            "id": 233,
            "name": "Estonia",
            "alpha2": "ee",
            "alpha3": "est"
          }, {
            "id": 748,
            "name": "Eswatini",
            "alpha2": "sz",
            "alpha3": "swz"
          }, {
            "id": 231,
            "name": "Ethiopia",
            "alpha2": "et",
            "alpha3": "eth"
          }, {
            "id": 238,
            "name": "Falkland Islands (Malvinas)",
            "alpha2": "fk",
            "alpha3": "flk"
          }, {
            "id": 234,
            "name": "Faroe Islands",
            "alpha2": "fo",
            "alpha3": "fro"
          }, {
            "id": 242,
            "name": "Fiji",
            "alpha2": "fj",
            "alpha3": "fji"
          }, {
            "id": 246,
            "name": "Finland",
            "alpha2": "fi",
            "alpha3": "fin"
          }, {
            "id": 250,
            "name": "France",
            "alpha2": "fr",
            "alpha3": "fra"
          }, {
            "id": 254,
            "name": "French Guiana",
            "alpha2": "gf",
            "alpha3": "guf"
          }, {
            "id": 258,
            "name": "French Polynesia",
            "alpha2": "pf",
            "alpha3": "pyf"
          }, {
            "id": 260,
            "name": "French Southern Territories",
            "alpha2": "tf",
            "alpha3": "atf"
          }, {
            "id": 266,
            "name": "Gabon",
            "alpha2": "ga",
            "alpha3": "gab"
          }, {
            "id": 270,
            "name": "Gambia",
            "alpha2": "gm",
            "alpha3": "gmb"
          }, {
            "id": 268,
            "name": "Georgia",
            "alpha2": "ge",
            "alpha3": "geo"
          }, {
            "id": 276,
            "name": "Germany",
            "alpha2": "de",
            "alpha3": "deu"
          }, {
            "id": 288,
            "name": "Ghana",
            "alpha2": "gh",
            "alpha3": "gha"
          }, {
            "id": 292,
            "name": "Gibraltar",
            "alpha2": "gi",
            "alpha3": "gib"
          }, {
            "id": 300,
            "name": "Greece",
            "alpha2": "gr",
            "alpha3": "grc"
          }, {
            "id": 304,
            "name": "Greenland",
            "alpha2": "gl",
            "alpha3": "grl"
          }, {
            "id": 308,
            "name": "Grenada",
            "alpha2": "gd",
            "alpha3": "grd"
          }, {
            "id": 312,
            "name": "Guadeloupe",
            "alpha2": "gp",
            "alpha3": "glp"
          }, {
            "id": 316,
            "name": "Guam",
            "alpha2": "gu",
            "alpha3": "gum"
          }, {
            "id": 320,
            "name": "Guatemala",
            "alpha2": "gt",
            "alpha3": "gtm"
          }, {
            "id": 831,
            "name": "Guernsey",
            "alpha2": "gg",
            "alpha3": "ggy"
          }, {
            "id": 324,
            "name": "Guinea",
            "alpha2": "gn",
            "alpha3": "gin"
          }, {
            "id": 624,
            "name": "Guinea-Bissau",
            "alpha2": "gw",
            "alpha3": "gnb"
          }, {
            "id": 328,
            "name": "Guyana",
            "alpha2": "gy",
            "alpha3": "guy"
          }, {
            "id": 332,
            "name": "Haiti",
            "alpha2": "ht",
            "alpha3": "hti"
          }, {
            "id": 334,
            "name": "Heard Island and McDonald Islands",
            "alpha2": "hm",
            "alpha3": "hmd"
          }, {
            "id": 336,
            "name": "Holy See",
            "alpha2": "va",
            "alpha3": "vat"
          }, {
            "id": 340,
            "name": "Honduras",
            "alpha2": "hn",
            "alpha3": "hnd"
          }, {
            "id": 344,
            "name": "Hong Kong",
            "alpha2": "hk",
            "alpha3": "hkg"
          }, {
            "id": 348,
            "name": "Hungary",
            "alpha2": "hu",
            "alpha3": "hun"
          }, {
            "id": 352,
            "name": "Iceland",
            "alpha2": "is",
            "alpha3": "isl"
          }, {
            "id": 356,
            "name": "India",
            "alpha2": "in",
            "alpha3": "ind"
          }, {
            "id": 360,
            "name": "Indonesia",
            "alpha2": "id",
            "alpha3": "idn"
          }, {
            "id": 364,
            "name": "Iran (Islamic Republic of)",
            "alpha2": "ir",
            "alpha3": "irn"
          }, {
            "id": 368,
            "name": "Iraq",
            "alpha2": "iq",
            "alpha3": "irq"
          }, {
            "id": 372,
            "name": "Ireland",
            "alpha2": "ie",
            "alpha3": "irl"
          }, {
            "id": 833,
            "name": "Isle of Man",
            "alpha2": "im",
            "alpha3": "imn"
          }, {
            "id": 376,
            "name": "Israel",
            "alpha2": "il",
            "alpha3": "isr"
          }, {
            "id": 380,
            "name": "Italy",
            "alpha2": "it",
            "alpha3": "ita"
          }, {
            "id": 388,
            "name": "Jamaica",
            "alpha2": "jm",
            "alpha3": "jam"
          }, {
            "id": 392,
            "name": "Japan",
            "alpha2": "jp",
            "alpha3": "jpn"
          }, {
            "id": 832,
            "name": "Jersey",
            "alpha2": "je",
            "alpha3": "jey"
          }, {
            "id": 400,
            "name": "Jordan",
            "alpha2": "jo",
            "alpha3": "jor"
          }, {
            "id": 398,
            "name": "Kazakhstan",
            "alpha2": "kz",
            "alpha3": "kaz"
          }, {
            "id": 404,
            "name": "Kenya",
            "alpha2": "ke",
            "alpha3": "ken"
          }, {
            "id": 296,
            "name": "Kiribati",
            "alpha2": "ki",
            "alpha3": "kir"
          }, {
            "id": 408,
            "name": "Korea (Democratic People's Republic of)",
            "alpha2": "kp",
            "alpha3": "prk"
          }, {
            "id": 410,
            "name": "Korea, Republic of",
            "alpha2": "kr",
            "alpha3": "kor"
          }, {
            "id": 414,
            "name": "Kuwait",
            "alpha2": "kw",
            "alpha3": "kwt"
          }, {
            "id": 417,
            "name": "Kyrgyzstan",
            "alpha2": "kg",
            "alpha3": "kgz"
          }, {
            "id": 418,
            "name": "Lao People's Democratic Republic",
            "alpha2": "la",
            "alpha3": "lao"
          }, {
            "id": 428,
            "name": "Latvia",
            "alpha2": "lv",
            "alpha3": "lva"
          }, {
            "id": 422,
            "name": "Lebanon",
            "alpha2": "lb",
            "alpha3": "lbn"
          }, {
            "id": 426,
            "name": "Lesotho",
            "alpha2": "ls",
            "alpha3": "lso"
          }, {
            "id": 430,
            "name": "Liberia",
            "alpha2": "lr",
            "alpha3": "lbr"
          }, {
            "id": 434,
            "name": "Libya",
            "alpha2": "ly",
            "alpha3": "lby"
          }, {
            "id": 438,
            "name": "Liechtenstein",
            "alpha2": "li",
            "alpha3": "lie"
          }, {
            "id": 440,
            "name": "Lithuania",
            "alpha2": "lt",
            "alpha3": "ltu"
          }, {
            "id": 442,
            "name": "Luxembourg",
            "alpha2": "lu",
            "alpha3": "lux"
          }, {
            "id": 446,
            "name": "Macao",
            "alpha2": "mo",
            "alpha3": "mac"
          }, {
            "id": 450,
            "name": "Madagascar",
            "alpha2": "mg",
            "alpha3": "mdg"
          }, {
            "id": 454,
            "name": "Malawi",
            "alpha2": "mw",
            "alpha3": "mwi"
          }, {
            "id": 458,
            "name": "Malaysia",
            "alpha2": "my",
            "alpha3": "mys"
          }, {
            "id": 462,
            "name": "Maldives",
            "alpha2": "mv",
            "alpha3": "mdv"
          }, {
            "id": 466,
            "name": "Mali",
            "alpha2": "ml",
            "alpha3": "mli"
          }, {
            "id": 470,
            "name": "Malta",
            "alpha2": "mt",
            "alpha3": "mlt"
          }, {
            "id": 584,
            "name": "Marshall Islands",
            "alpha2": "mh",
            "alpha3": "mhl"
          }, {
            "id": 474,
            "name": "Martinique",
            "alpha2": "mq",
            "alpha3": "mtq"
          }, {
            "id": 478,
            "name": "Mauritania",
            "alpha2": "mr",
            "alpha3": "mrt"
          }, {
            "id": 480,
            "name": "Mauritius",
            "alpha2": "mu",
            "alpha3": "mus"
          }, {
            "id": 175,
            "name": "Mayotte",
            "alpha2": "yt",
            "alpha3": "myt"
          }, {
            "id": 484,
            "name": "Mexico",
            "alpha2": "mx",
            "alpha3": "mex"
          }, {
            "id": 583,
            "name": "Micronesia (Federated States of)",
            "alpha2": "fm",
            "alpha3": "fsm"
          }, {
            "id": 498,
            "name": "Moldova, Republic of",
            "alpha2": "md",
            "alpha3": "mda"
          }, {
            "id": 492,
            "name": "Monaco",
            "alpha2": "mc",
            "alpha3": "mco"
          }, {
            "id": 496,
            "name": "Mongolia",
            "alpha2": "mn",
            "alpha3": "mng"
          }, {
            "id": 499,
            "name": "Montenegro",
            "alpha2": "me",
            "alpha3": "mne"
          }, {
            "id": 500,
            "name": "Montserrat",
            "alpha2": "ms",
            "alpha3": "msr"
          }, {
            "id": 504,
            "name": "Morocco",
            "alpha2": "ma",
            "alpha3": "mar"
          }, {
            "id": 508,
            "name": "Mozambique",
            "alpha2": "mz",
            "alpha3": "moz"
          }, {
            "id": 104,
            "name": "Myanmar",
            "alpha2": "mm",
            "alpha3": "mmr"
          }, {
            "id": 516,
            "name": "Namibia",
            "alpha2": "na",
            "alpha3": "nam"
          }, {
            "id": 520,
            "name": "Nauru",
            "alpha2": "nr",
            "alpha3": "nru"
          }, {
            "id": 524,
            "name": "Nepal",
            "alpha2": "np",
            "alpha3": "npl"
          }, {
            "id": 528,
            "name": "Netherlands",
            "alpha2": "nl",
            "alpha3": "nld"
          }, {
            "id": 540,
            "name": "New Caledonia",
            "alpha2": "nc",
            "alpha3": "ncl"
          }, {
            "id": 554,
            "name": "New Zealand",
            "alpha2": "nz",
            "alpha3": "nzl"
          }, {
            "id": 558,
            "name": "Nicaragua",
            "alpha2": "ni",
            "alpha3": "nic"
          }, {
            "id": 562,
            "name": "Niger",
            "alpha2": "ne",
            "alpha3": "ner"
          }, {
            "id": 566,
            "name": "Nigeria",
            "alpha2": "ng",
            "alpha3": "nga"
          }, {
            "id": 570,
            "name": "Niue",
            "alpha2": "nu",
            "alpha3": "niu"
          }, {
            "id": 574,
            "name": "Norfolk Island",
            "alpha2": "nf",
            "alpha3": "nfk"
          }, {
            "id": 807,
            "name": "North Macedonia",
            "alpha2": "mk",
            "alpha3": "mkd"
          }, {
            "id": 580,
            "name": "Northern Mariana Islands",
            "alpha2": "mp",
            "alpha3": "mnp"
          }, {
            "id": 578,
            "name": "Norway",
            "alpha2": "no",
            "alpha3": "nor"
          }, {
            "id": 512,
            "name": "Oman",
            "alpha2": "om",
            "alpha3": "omn"
          }, {
            "id": 586,
            "name": "Pakistan",
            "alpha2": "pk",
            "alpha3": "pak"
          }, {
            "id": 585,
            "name": "Palau",
            "alpha2": "pw",
            "alpha3": "plw"
          }, {
            "id": 275,
            "name": "Palestine, State of",
            "alpha2": "ps",
            "alpha3": "pse"
          }, {
            "id": 591,
            "name": "Panama",
            "alpha2": "pa",
            "alpha3": "pan"
          }, {
            "id": 598,
            "name": "Papua New Guinea",
            "alpha2": "pg",
            "alpha3": "png"
          }, {
            "id": 600,
            "name": "Paraguay",
            "alpha2": "py",
            "alpha3": "pry"
          }, {
            "id": 604,
            "name": "Peru",
            "alpha2": "pe",
            "alpha3": "per"
          }, {
            "id": 608,
            "name": "Philippines",
            "alpha2": "ph",
            "alpha3": "phl"
          }, {
            "id": 612,
            "name": "Pitcairn",
            "alpha2": "pn",
            "alpha3": "pcn"
          }, {
            "id": 616,
            "name": "Poland",
            "alpha2": "pl",
            "alpha3": "pol"
          }, {
            "id": 620,
            "name": "Portugal",
            "alpha2": "pt",
            "alpha3": "prt"
          }, {
            "id": 630,
            "name": "Puerto Rico",
            "alpha2": "pr",
            "alpha3": "pri"
          }, {
            "id": 634,
            "name": "Qatar",
            "alpha2": "qa",
            "alpha3": "qat"
          }, {
            "id": 638,
            "name": "Réunion",
            "alpha2": "re",
            "alpha3": "reu"
          }, {
            "id": 642,
            "name": "Romania",
            "alpha2": "ro",
            "alpha3": "rou"
          }, {
            "id": 643,
            "name": "Russian Federation",
            "alpha2": "ru",
            "alpha3": "rus"
          }, {
            "id": 646,
            "name": "Rwanda",
            "alpha2": "rw",
            "alpha3": "rwa"
          }, {
            "id": 652,
            "name": "Saint Barthélemy",
            "alpha2": "bl",
            "alpha3": "blm"
          }, {
            "id": 654,
            "name": "Saint Helena, Ascension and Tristan da Cunha",
            "alpha2": "sh",
            "alpha3": "shn"
          }, {
            "id": 659,
            "name": "Saint Kitts and Nevis",
            "alpha2": "kn",
            "alpha3": "kna"
          }, {
            "id": 662,
            "name": "Saint Lucia",
            "alpha2": "lc",
            "alpha3": "lca"
          }, {
            "id": 663,
            "name": "Saint Martin (French part)",
            "alpha2": "mf",
            "alpha3": "maf"
          }, {
            "id": 666,
            "name": "Saint Pierre and Miquelon",
            "alpha2": "pm",
            "alpha3": "spm"
          }, {
            "id": 670,
            "name": "Saint Vincent and the Grenadines",
            "alpha2": "vc",
            "alpha3": "vct"
          }, {
            "id": 882,
            "name": "Samoa",
            "alpha2": "ws",
            "alpha3": "wsm"
          }, {
            "id": 674,
            "name": "San Marino",
            "alpha2": "sm",
            "alpha3": "smr"
          }, {
            "id": 678,
            "name": "Sao Tome and Principe",
            "alpha2": "st",
            "alpha3": "stp"
          }, {
            "id": 682,
            "name": "Saudi Arabia",
            "alpha2": "sa",
            "alpha3": "sau"
          }, {
            "id": 686,
            "name": "Senegal",
            "alpha2": "sn",
            "alpha3": "sen"
          }, {
            "id": 688,
            "name": "Serbia",
            "alpha2": "rs",
            "alpha3": "srb"
          }, {
            "id": 690,
            "name": "Seychelles",
            "alpha2": "sc",
            "alpha3": "syc"
          }, {
            "id": 694,
            "name": "Sierra Leone",
            "alpha2": "sl",
            "alpha3": "sle"
          }, {
            "id": 702,
            "name": "Singapore",
            "alpha2": "sg",
            "alpha3": "sgp"
          }, {
            "id": 534,
            "name": "Sint Maarten (Dutch part)",
            "alpha2": "sx",
            "alpha3": "sxm"
          }, {
            "id": 703,
            "name": "Slovakia",
            "alpha2": "sk",
            "alpha3": "svk"
          }, {
            "id": 705,
            "name": "Slovenia",
            "alpha2": "si",
            "alpha3": "svn"
          }, {
            "id": 90,
            "name": "Solomon Islands",
            "alpha2": "sb",
            "alpha3": "slb"
          }, {
            "id": 706,
            "name": "Somalia",
            "alpha2": "so",
            "alpha3": "som"
          }, {
            "id": 710,
            "name": "South Africa",
            "alpha2": "za",
            "alpha3": "zaf"
          }, {
            "id": 239,
            "name": "South Georgia and the South Sandwich Islands",
            "alpha2": "gs",
            "alpha3": "sgs"
          }, {
            "id": 728,
            "name": "South Sudan",
            "alpha2": "ss",
            "alpha3": "ssd"
          }, {
            "id": 724,
            "name": "Spain",
            "alpha2": "es",
            "alpha3": "esp"
          }, {
            "id": 144,
            "name": "Sri Lanka",
            "alpha2": "lk",
            "alpha3": "lka"
          }, {
            "id": 729,
            "name": "Sudan",
            "alpha2": "sd",
            "alpha3": "sdn"
          }, {
            "id": 740,
            "name": "Suriname",
            "alpha2": "sr",
            "alpha3": "sur"
          }, {
            "id": 744,
            "name": "Svalbard and Jan Mayen",
            "alpha2": "sj",
            "alpha3": "sjm"
          }, {
            "id": 752,
            "name": "Sweden",
            "alpha2": "se",
            "alpha3": "swe"
          }, {
            "id": 756,
            "name": "Switzerland",
            "alpha2": "ch",
            "alpha3": "che"
          }, {
            "id": 760,
            "name": "Syrian Arab Republic",
            "alpha2": "sy",
            "alpha3": "syr"
          }, {
            "id": 158,
            "name": "Taiwan, Province of China",
            "alpha2": "tw",
            "alpha3": "twn"
          }, {
            "id": 762,
            "name": "Tajikistan",
            "alpha2": "tj",
            "alpha3": "tjk"
          }, {
            "id": 834,
            "name": "Tanzania, United Republic of",
            "alpha2": "tz",
            "alpha3": "tza"
          }, {
            "id": 764,
            "name": "Thailand",
            "alpha2": "th",
            "alpha3": "tha"
          }, {
            "id": 626,
            "name": "Timor-Leste",
            "alpha2": "tl",
            "alpha3": "tls"
          }, {
            "id": 768,
            "name": "Togo",
            "alpha2": "tg",
            "alpha3": "tgo"
          }, {
            "id": 772,
            "name": "Tokelau",
            "alpha2": "tk",
            "alpha3": "tkl"
          }, {
            "id": 776,
            "name": "Tonga",
            "alpha2": "to",
            "alpha3": "ton"
          }, {
            "id": 780,
            "name": "Trinidad and Tobago",
            "alpha2": "tt",
            "alpha3": "tto"
          }, {
            "id": 788,
            "name": "Tunisia",
            "alpha2": "tn",
            "alpha3": "tun"
          }, {
            "id": 792,
            "name": "Turkey",
            "alpha2": "tr",
            "alpha3": "tur"
          }, {
            "id": 795,
            "name": "Turkmenistan",
            "alpha2": "tm",
            "alpha3": "tkm"
          }, {
            "id": 796,
            "name": "Turks and Caicos Islands",
            "alpha2": "tc",
            "alpha3": "tca"
          }, {
            "id": 798,
            "name": "Tuvalu",
            "alpha2": "tv",
            "alpha3": "tuv"
          }, {
            "id": 800,
            "name": "Uganda",
            "alpha2": "ug",
            "alpha3": "uga"
          }, {
            "id": 804,
            "name": "Ukraine",
            "alpha2": "ua",
            "alpha3": "ukr"
          }, {
            "id": 784,
            "name": "United Arab Emirates",
            "alpha2": "ae",
            "alpha3": "are"
          }, {
            "id": 826,
            "name": "United Kingdom of Great Britain and Northern Ireland",
            "alpha2": "gb",
            "alpha3": "gbr"
          }, {
            "id": 840,
            "name": "United States of America",
            "alpha2": "us",
            "alpha3": "usa"
          }, {
            "id": 581,
            "name": "United States Minor Outlying Islands",
            "alpha2": "um",
            "alpha3": "umi"
          }, {
            "id": 858,
            "name": "Uruguay",
            "alpha2": "uy",
            "alpha3": "ury"
          }, {
            "id": 860,
            "name": "Uzbekistan",
            "alpha2": "uz",
            "alpha3": "uzb"
          }, {
            "id": 548,
            "name": "Vanuatu",
            "alpha2": "vu",
            "alpha3": "vut"
          }, {
            "id": 862,
            "name": "Venezuela (Bolivarian Republic of)",
            "alpha2": "ve",
            "alpha3": "ven"
          }, {
            "id": 704,
            "name": "Viet Nam",
            "alpha2": "vn",
            "alpha3": "vnm"
          }, {
            "id": 92,
            "name": "Virgin Islands (British)",
            "alpha2": "vg",
            "alpha3": "vgb"
          }, {
            "id": 850,
            "name": "Virgin Islands (U.S.)",
            "alpha2": "vi",
            "alpha3": "vir"
          }, {
            "id": 876,
            "name": "Wallis and Futuna",
            "alpha2": "wf",
            "alpha3": "wlf"
          }, {
            "id": 732,
            "name": "Western Sahara",
            "alpha2": "eh",
            "alpha3": "esh"
          }, {
            "id": 887,
            "name": "Yemen",
            "alpha2": "ye",
            "alpha3": "yem"
          }, {
            "id": 894,
            "name": "Zambia",
            "alpha2": "zm",
            "alpha3": "zmb"
          }, {
            "id": 716,
            "name": "Zimbabwe",
            "alpha2": "zw",
            "alpha3": "zwe"
          }];
          this.baseURL = 'https://thelevapp.co/backoffice/webservices/';
          this.baseUrlForImg = 'https://thelevapp.co/backoffice/uploads/users_customers/';
        }

        _createClass(RestService, [{
          key: "removebadwords",
          value: function removebadwords(string) {
            var _this6 = this;

            var strtoarray = string.split(' ');
            console.log('strtoarray=', strtoarray);
            var badwords = this.newarr;
            badwords.map(function (element) {
              var lowBadWord = element.toLowerCase();

              if (strtoarray.includes(lowBadWord)) {
                console.log("have bad word ", lowBadWord);
                var str1 = strtoarray.indexOf(lowBadWord);
                console.log('str get--', str1);
                strtoarray.splice(str1, 1);
                console.log('str get--after', strtoarray);
                var newStringValue = strtoarray.toString();
                string = newStringValue.replaceAll(',', ' ');
                console.log('replace afreter==', string);

                _this6.basicAlert('you are not allowed to use this word');
              } else {
                console.log("Pak saf word ");
              }
            });
            return string;
          }
        }, {
          key: "sendRequest",
          value: function sendRequest(action, data, token) {
            var header;

            if (token) {
              header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Auth-Key': token
              });
              header.append('Access-Control-Allow-Origin', '*');
              header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
            } else {
              header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
              header.append('Access-Control-Allow-Origin', '*');
              header.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT,OPTIONS');
            }

            return this.http.post("".concat(this.baseURL, "/").concat(action, "/"), JSON.stringify(data), {
              headers: header
            });
          }
        }, {
          key: "getOTP",
          value: function getOTP(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + '/send_otp/', data, {
              headers: headers
            });
          }
        }, {
          key: "profile1API",
          value: function profile1API(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + '/signup/', data, {
              headers: headers
            });
          }
        }, {
          key: "profileAPI",
          value: function profileAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + '/profile/', data, {
              headers: headers
            });
          }
        }, {
          key: "getUserPrompts",
          value: function getUserPrompts(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + '/user_prompts/', data, {
              headers: headers
            });
          }
        }, {
          key: "getSystemDataAPI",
          value: function getSystemDataAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_all_system_data', data, {
              headers: headers
            });
          }
        }, {
          key: "signupAPI",
          value: function signupAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'signup', data, {
              headers: headers
            });
          }
        }, {
          key: "check_email_existsAPI",
          value: function check_email_existsAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'check_email_exists', data, {
              headers: headers
            });
          }
        }, {
          key: "check_contact_existsAPI",
          value: function check_contact_existsAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'check_contact_exists', data, {
              headers: headers
            });
          }
        }, {
          key: "getSubScriptionDetailsAPI",
          value: function getSubScriptionDetailsAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_packages', data, {
              headers: headers
            });
          }
        }, {
          key: "loginAPI",
          value: function loginAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'login', data, {
              headers: headers
            });
          }
        }, {
          key: "contactUSAPI",
          value: function contactUSAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'contact_us', data, {
              headers: headers
            });
          }
        }, {
          key: "get_user_dataAPI",
          value: function get_user_dataAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_user_data', data, {
              headers: headers
            });
          }
        }, {
          key: "get_user_auto_repsonse",
          value: function get_user_auto_repsonse(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_auto_response/' + data, {
              headers: headers
            });
          }
        }, {
          key: "saveSubscriptiondataAPI",
          value: function saveSubscriptiondataAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'create_transactions/', data, {
              headers: headers
            });
          }
        }, {
          key: "create_sms_transactionsAPI",
          value: function create_sms_transactionsAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'create_sms_transactions/' + data, {
              headers: headers
            });
          }
        }, {
          key: "get_coupon_dataAPI",
          value: function get_coupon_dataAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_coupon_data/' + data, {
              headers: headers
            });
          }
        }, {
          key: "updatePrefAPI",
          value: function updatePrefAPI(funName, uid, data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'update_prefences/' + funName + uid, data, {
              headers: headers
            });
          }
        }, {
          key: "cancelSubscription",
          value: function cancelSubscription(uid) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'cancel_subscription/' + uid, {
              headers: headers
            });
          }
        }, {
          key: "get_user_preferencesAPI",
          value: function get_user_preferencesAPI(uid) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_user_preferences/' + uid, {
              headers: headers
            });
          }
        }, {
          key: "chat_messagesAPI",
          value: function chat_messagesAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'chat_messages/', data, {
              headers: headers
            });
          }
        }, {
          key: "admin_chat_messagesAPI",
          value: function admin_chat_messagesAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'admin_chat_messages/', data, {
              headers: headers
            });
          }
        }, {
          key: "getBestMatchesAPI",
          value: function getBestMatchesAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_matches/', data, {
              headers: headers
            });
          }
        }, {
          key: "blockuser",
          value: function blockuser(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'blockuser/', data, {
              headers: headers
            });
          }
        }, {
          key: "unblockuser",
          value: function unblockuser(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'unblockuser/', data, {
              headers: headers
            });
          }
        }, {
          key: "update_notification_switchAPI",
          value: function update_notification_switchAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'update_notification_switch/', data, {
              headers: headers
            });
          }
        }, {
          key: "get_notifications_listAPI",
          value: function get_notifications_listAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_notifications_list/', data, {
              headers: headers
            });
          }
        }, {
          key: "update_additional_commentsAPI",
          value: function update_additional_commentsAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'update_additional_comments/', data, {
              headers: headers
            });
          }
        }, {
          key: "save_prompt_repliesAPI",
          value: function save_prompt_repliesAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'save_prompt_replies/', data, {
              headers: headers
            });
          }
        }, {
          key: "get_prompt_repliesAPI",
          value: function get_prompt_repliesAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'get_prompt_replies/', data, {
              headers: headers
            });
          }
        }, {
          key: "create_polsqsAPI",
          value: function create_polsqsAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'create_polsqs/', data, {
              headers: headers
            });
          }
        }, {
          key: "delete_matchAPI",
          value: function delete_matchAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'delete_match/', data, {
              headers: headers
            });
          }
        }, {
          key: "remove_matchAPI",
          value: function remove_matchAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'remove_match/', data, {
              headers: headers
            });
          }
        }, {
          key: "check_phone_authAPI",
          value: function check_phone_authAPI(data) {
            var headers = {
              'Content-Type': 'application/json'
            };
            return this.http.post(this.baseURL + 'check_phone_auth/', data, {
              headers: headers
            });
          }
        }, {
          key: "updateUserDataAPI",
          value: function updateUserDataAPI(data, userID) {
            var headers = {
              'Content-Type': 'application/json'
            };
            console.log('rest data -----', this.baseURL + 'update_profile' + userID + data);
            return this.http.post(this.baseURL + 'update_profile/' + userID, data, {
              headers: headers
            });
          }
        }, {
          key: "basicAlert",
          value: function basicAlert(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

        return RestService;
      }();

      _RestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _RestService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _RestService);
      /***/
    },

    /***/
    46298:
    /*!***********************************!*\
      !*** ./src/app/signup.service.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SignupService": function SignupService() {
          return (
            /* binding */
            _SignupService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SignupService = function SignupService() {
        _classCallCheck(this, SignupService);

        this.gender = 'Please Select';
        this.lookingFor = 'Please Select';
        this.religion = 'Please Select';
        this.meritalStatus = 'Please Select';
        this.prompt1Val = 'Choose your prompt';
        this.prompt2Val = 'Choose your prompt';
        this.prompt3Val = 'Choose your prompt';
        this.heightRangeofUser = '';
        this.prompt1User = '';
        this.prompt2User = '';
        this.prompt3User = '';
        this.appInsta = '';
        this.kosher = '';
      };

      _SignupService.ctorParameters = function () {
        return [];
      };

      _SignupService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _SignupService);
      /***/
    },

    /***/
    8981:
    /*!*********************************!*\
      !*** ./src/app/work.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkService": function WorkService() {
          return (
            /* binding */
            _WorkService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);

      var _WorkService = /*#__PURE__*/function () {
        function WorkService(loadingController, toastController, camera, platform) {
          _classCallCheck(this, WorkService);

          this.loadingController = loadingController;
          this.toastController = toastController;
          this.camera = camera;
          this.platform = platform;
          this.chatImage = '';
          this.otpConfrimResultData = '';
          this.comingForm = '';
          this.userMobileNum = '';
        }

        _createClass(WorkService, [{
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      this.loading = _context3.sent;
                      _context3.next = 5;
                      return this.loading.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.loading.dismiss();

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      this.toast = _context5.sent;
                      this.toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "hideToast",
          value: function hideToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.toast.dismiss();

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "selectImageInCamera",
          value: function selectImageInCamera() {
            if (this.platform.is('ios')) {
              var CAMERA_OPTIONS = {
                allowEdit: true,
                correctOrientation: true,
                // cameraDirection: 1,
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetHeight: 500,
                targetWidth: 500
              };
              return this.camera.getPicture(CAMERA_OPTIONS);
            } else {
              var _CAMERA_OPTIONS = {
                // allowEdit: true,
                correctOrientation: true,
                // cameraDirection: 1,
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetHeight: 500,
                targetWidth: 500
              };
              return this.camera.getPicture(_CAMERA_OPTIONS);
            }
          } // choose image from gallery

        }, {
          key: "selectImageInGallery",
          value: function selectImageInGallery() {
            if (this.platform.is('ios')) {
              var CAMERA_OPTIONS = {
                allowEdit: true,
                quality: 50,
                targetHeight: 500,
                targetWidth: 500,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE
              };
              return this.camera.getPicture(CAMERA_OPTIONS);
            } else {
              var _CAMERA_OPTIONS2 = {
                // allowEdit: true,
                quality: 50,
                targetHeight: 500,
                targetWidth: 500,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE
              };
              return this.camera.getPicture(_CAMERA_OPTIONS2);
            }
          }
        }]);

        return WorkService;
      }();

      _WorkService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform
        }];
      };

      _WorkService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _WorkService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false // For Firebase JS SDK v7.20.0 and later, measurementId is optional

      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [2239, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    89665:
    /*!*****************************************!*\
      !*** ./src/app/gender/gender.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".divbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\nbr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiZ2VuZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZiZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdmJnOmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTRweCAyNXB4IDE0cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYWN0aXZlZGl2Ymcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    2353:
    /*!*************************************************!*\
      !*** ./src/app/lookingfor/lookingfor.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".divbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2tpbmdmb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6Imxvb2tpbmdmb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmJnIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2Ymc6YWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZWRpdmJnIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    63725:
    /*!*******************************************************!*\
      !*** ./src/app/maritalstatus/maritalstatus.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".divbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcml0YWxzdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJtYXJpdGFsc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZiZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTFwdDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdmJnOmFjdGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlZGl2Ymcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    5793:
    /*!***************************************************!*\
      !*** ./src/app/matchdelete/matchdelete.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  padding: 0px;\n}\n\n.btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.btn_disable {\n  background: #a5a5a5 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoZGVsZXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6Im1hdGNoZGVsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLmJ0bl9kaXNhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY1LCAxNjUsIDE2NSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    38678:
    /*!*******************************************!*\
      !*** ./src/app/prompt1/prompt1.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdDEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJwcm9tcHQxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDFmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    89005:
    /*!*******************************************!*\
      !*** ./src/app/prompt2/prompt2.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001F;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNGLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJwcm9tcHQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    17509:
    /*!*******************************************!*\
      !*** ./src/app/prompt3/prompt3.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001F;\n  border-radius: 10px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdDMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNGLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFBRiIsImZpbGUiOiJwcm9tcHQzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnRue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICMwMDAwMDAxRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    89353:
    /*!*********************************************!*\
      !*** ./src/app/religion/religion.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".divbg {\n  height: 50px;\n  margin-left: 10px;\n  font-size: 11pt;\n  color: gray;\n  border: 1px solid #707070;\n  background: #333333;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.divbg:active {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.activedivbg {\n  margin-left: 15px;\n  font-size: 11pt;\n  color: black;\n  border: 1px solid #707070;\n  background: #ffffff;\n  padding: 14px 25px 14px 25px;\n  border-radius: 40px;\n  text-align: center;\n}\n\n.LabelClorActive {\n  color: black;\n}\n\n.LabelClor {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGlnaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoicmVsaWdpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmJnIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHBhZGRpbmc6IDE0cHggMjVweCAxNHB4IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2Ymc6YWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZWRpdmJnIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI1cHggMTRweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkxhYmVsQ2xvckFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5MYWJlbENsb3Ige1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    35742:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gender/gender.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-text>How do you identify yourself?</ion-text>\n\n    <div style=\"margin-top: 28px;\">\n\n      <ion-text *ngFor=\"let gender of genderArr\" class=\"divbg\" (click)=\"funClick(gender)\"\n        [class.activedivbg]=\"gender.system_genders_id == Selectedgender\">{{gender.name}}\n      </ion-text>\n\n    </div>\n\n\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    77256:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lookingfor/lookingfor.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-text>What Are You Looking For?</ion-text>\n\n    <!-- <div style=\"margin-top: 28px;\">\n\n      <ion-text class=\"divbg\" (click)=\"funClick('Dating')\">Dating</ion-text>\n\n      <ion-text class=\"divbg\" style=\"margin-left: 20px;\" (click)=\"funClick('Marriage')\">Marriage</ion-text>\n\n\n\n    </div> -->\n\n\n    <div style=\"margin-top: 28px;\">\n\n      <ion-text *ngFor=\"let look of LookingForArr\" class=\"divbg\" (click)=\"funClick(look)\"\n        [class.activedivbg]=\"look.system_looking_for_id == lookingForID\">{{look.name}}</ion-text>\n\n    </div>\n\n\n    <!-- \n    <div style=\"margin-top: 40px;\">\n\n\n      <ion-text class=\"divbg\" (click)=\"funClick('Not Specific')\">Not Specific</ion-text>\n\n\n\n    </div> -->\n\n\n\n\n\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    81943:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maritalstatus/maritalstatus.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-text>Marital Status *</ion-text>\n\n    <div style=\"margin-top: 28px;\">\n\n\n      <ion-text *ngFor=\"let stat of maritalStatusArr\" class=\"divbg\" (click)=\"funClick(stat)\"\n        [class.activedivbg]=\"stat.system_maritalstatus_id ==  meritalStatusSelectedID\">{{stat.name}}</ion-text>\n\n    </div>\n\n\n\n    <!-- <div style=\"margin-top: 40px;\">\n\n    \n      <ion-text class=\"divbg\" (click)=\"funClick('Single')\">Single</ion-text>\n\n\n    </div> -->\n\n\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    60438:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matchdelete/matchdelete.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n  <div style=\"\nheight: 100%;\nwidth: 100%;\nposition: absolute;\">\n    <div style=\"  left: 10%;\n    position: absolute;\n    top: 40px;\n    width: 80%;\n    height: 366px;\n    background-color: rgb(0 0 0 / 0%);\">\n      <ion-row>\n        <ion-col style=\"padding-top: 10 px; padding-right: 10px; text-align: right\">\n          <img style=\"\n        height: 15px;\n        width: 15px;\" src=\"assets/imgs/close.svg\" (click)=\"hidePopup()\" />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 0px\">\n        <ion-col style=\"text-align: center\">\n          <img style=\"    width: 300px;\n    height: 190px;\" src=\"assets/imgs/logo.svg\" />\n        </ion-col>\n      </ion-row>\n\n      <div style=\"\n    padding: 15px;\n    border: 2px solid white;\n    text-align: center;\n    margin: 17px;\n  \">\n        <ion-label>Mutual matches will expire within 6 days.</ion-label>\n      </div>\n\n      <div style=\"padding-left: 0px;\n      padding-right: 0px;\n      margin-top: 29px;\">\n        <ion-row>\n          <ion-col size=\"9\" style=\"padding-top: 8px\">\n            <ion-text style=\"font-size: 10pt\">Close the match</ion-text>\n          </ion-col>\n\n          <ion-col size=\"3\" style=\"text-align: right\">\n            <ion-toggle (ionChange)=\"closeMatch($event)\" [class.togglePaddClass]=\"togglePlatformAndroid\"></ion-toggle>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"9\" style=\"padding-top: 8px\">\n            <ion-text style=\"font-size: 10pt\">Conversation continued off the app</ion-text>\n          </ion-col>\n\n          <ion-col size=\"3\" style=\"text-align: right\">\n            <ion-toggle (ionChange)=\"openChat($event)\" [class.togglePaddClass]=\"togglePlatformAndroid\">\n            </ion-toggle>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    59425:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompt1/prompt1.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-row style=\"margin-right: 20px\" class=\"top-margin-head-40\">\n    <ion-col style=\"text-align: right; padding-right: 24px;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/close.svg\" />\n    </ion-col>\n  </ion-row>\n\n  <div style=\"padding: 0px 20px 20px 20px\" class=\"margin-top-fixed\">\n    <ion-row style=\"margin-top: 0px\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt\">{{promptTitle}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -10px\">\n      <ion-col>\n        <ion-textarea style=\"\n            height: 170px;\n            border-radius: 10px;\n            background: rgba(112, 112, 112, 0.44);\n          \" placeholder=\"Write here....\" [(ngModel)]=\"prompt\" (ionChange)=\"changeFunction($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row style=\"width: 100%; bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goToProfile()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    51149:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompt2/prompt2.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-row style=\"margin-right: 20px\" class=\"top-margin-head-40\">\n    <ion-col style=\"text-align: right; margin-top: 20px; padding-right: 24px;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/close.svg\" />\n    </ion-col>\n  </ion-row>\n\n  <div style=\"padding: 0px 20px 20px 20px\" class=\"margin-top-fixed\">\n    <ion-row style=\"margin-top: 0px\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt\">{{promptTitle}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -10px\">\n      <ion-col>\n        <ion-textarea style=\"\n            height: 170px;\n            border-radius: 10px;\n            background: rgba(112, 112, 112, 0.44);\n          \" placeholder=\"Write here....\" [(ngModel)]=\"prompt\" (ionChange)=\"changeFunction($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row style=\"width: 100%; bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goToProfile()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    1837:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prompt3/prompt3.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-row style=\"margin-right: 20px\" class=\"top-margin-head-40\">\n    <ion-col style=\"text-align: right; margin-top: 20px; padding-right: 24px;\">\n      <img (click)=\"goBack()\" style=\"height: 20px; width: 20px\" src=\"assets/imgs/close.svg\" />\n    </ion-col>\n  </ion-row>\n\n  <div style=\"padding: 0px 20px 20px 20px\" class=\"margin-top-fixed\">\n    <ion-row style=\"margin-top: 0px\">\n      <ion-col>\n        <ion-label style=\"font-size: 9pt\">{{promptTitle}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: -10px\">\n      <ion-col>\n        <ion-textarea style=\"\n            height: 170px;\n            border-radius: 10px;\n            background: rgba(112, 112, 112, 0.44);\n          \" placeholder=\"Write here....\" [(ngModel)]=\"prompt\" (ionChange)=\"changeFunction($event)\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row style=\"width: 100%;  bottom: 3px; padding: 20px\">\n    <ion-col style=\"text-align: center\">\n      <button (click)=\"goToProfile()\" class=\"btn\">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    },

    /***/
    13284:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/religion/religion.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n\n  <ion-row class=\"top-margin-head-40\">\n    <ion-col size=\"2\" style=\"text-align: center;\">\n      <img (click)=\"goBack()\" style=\"height: 20px;\n      width: 20px;\" src=\"assets/imgs/left.svg\">\n    </ion-col>\n    <ion-col size=\"8\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"2\">\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"padding: 0px 20px 20px 20px;\" class=\"margin-top-fixed\">\n\n    <ion-text>Religion *</ion-text>\n\n    <div style=\"margin-top: 28px;\">\n\n \n      <ion-chip *ngFor=\"let religion of religionArr\" class=\"divbg\" (click)=\"religionSelected(religion)\"\n        [class.activedivbg]=\"religion.system_religions_id == religionID\">\n        <ion-label style=\"color: gray;\">{{religion.name}}</ion-label>\n      </ion-chip>\n\n\n    </div>\n\n\n  </div>\n\n</ion-content>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map