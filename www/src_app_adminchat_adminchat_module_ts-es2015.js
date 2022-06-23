(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_adminchat_adminchat_module_ts"],{

/***/ 56733:
/*!*******************************************************!*\
  !*** ./src/app/adminchat/adminchat-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminchatPageRoutingModule": function() { return /* binding */ AdminchatPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _adminchat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminchat.page */ 76729);




const routes = [
    {
        path: '',
        component: _adminchat_page__WEBPACK_IMPORTED_MODULE_0__.AdminchatPage
    }
];
let AdminchatPageRoutingModule = class AdminchatPageRoutingModule {
};
AdminchatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminchatPageRoutingModule);



/***/ }),

/***/ 6734:
/*!***********************************************!*\
  !*** ./src/app/adminchat/adminchat.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminchatPageModule": function() { return /* binding */ AdminchatPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _adminchat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminchat-routing.module */ 56733);
/* harmony import */ var _adminchat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminchat.page */ 76729);







let AdminchatPageModule = class AdminchatPageModule {
};
AdminchatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminchat_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminchatPageRoutingModule
        ],
        declarations: [_adminchat_page__WEBPACK_IMPORTED_MODULE_1__.AdminchatPage]
    })
], AdminchatPageModule);



/***/ }),

/***/ 76729:
/*!*********************************************!*\
  !*** ./src/app/adminchat/adminchat.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminchatPage": function() { return /* binding */ AdminchatPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_adminchat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adminchat.page.html */ 86614);
/* harmony import */ var _adminchat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminchat.page.scss */ 44636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ 61881);
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../userservice.service */ 75157);
/* harmony import */ var _extrasservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extrasservice.service */ 29486);
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../work.service */ 8981);














let AdminchatPage = class AdminchatPage {
    constructor(navCtrl, route, router, userService, restService, extras, alertController, camera, transfer, modalCtrl, location, platform, workService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.restService = restService;
        this.extras = extras;
        this.alertController = alertController;
        this.camera = camera;
        this.transfer = transfer;
        this.modalCtrl = modalCtrl;
        this.location = location;
        this.platform = platform;
        this.workService = workService;
        this.matchpopupHidden = true;
        this.checkType = "chatList";
        this.showSkeleton = true;
        this.noChatlistFlag = false;
        this.allMessages = [];
        this.chatImagesArray = [];
        this.remainingSMS = 0;
        this.currentUser = localStorage.getItem('loggedinUserID');
        // this.currentUser = 15
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    showPopup(val) {
        this.matchpopupHidden = false;
        console.log(val);
        this.popupSelectedVal = val;
    }
    hidePopup() {
        this.matchpopupHidden = true;
    }
    goToMemberShip() {
        this.hidePopup();
        this.router.navigate(['smspkg']);
    }
    ionViewWillEnter() {
        var user = JSON.parse(localStorage.getItem('loggedinUserData'));
        console.log('user daata -------', user);
        this.remainingSMS = parseInt(localStorage.getItem('remainingSMS'));
        this.senderUserName = this.userService.userName;
        this.senderUserID = parseInt(this.userService.userId);
        if (user) {
            this.userIMG = this.restService.baseUrlForImg + user.profile_pic_1;
        }
        console.log('user daata -------', this.userIMG);
        // Get all  messages....
        this.getMessages(this.senderUserID);
        this.autoSaveInterval = setInterval(() => {
            this.updateMessages();
        }, 3000);
    }
    ionViewWillLeave() {
        clearInterval(this.autoSaveInterval);
        console.log("clear");
    }
    userTyping(event) {
        this.scrollDown();
    }
    changeFunction(ev) {
        this.user_input = this.restService.removebadwords(ev.detail.value);
    }
    updateMessages() {
        // geting all chats Messages
        var data = JSON.stringify({
            // request_type: "getMessages",
            request_type: "getUnreadMessages",
            users_customers_id: localStorage.getItem('loggedinUserID'),
            // users_customers_id: 15,
            reciever_users_customers_id: 'admin'
        });
        console.log('datttttttaaaaaaaaaaaa-----', data);
        this.restService.admin_chat_messagesAPI(data)
            .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.showSkeleton = false;
            if (res.status == "success") {
                let unread_messages = res.data.chat_messages;
                // this.allMessages = res.data.chat_messages;
                let chatLength = res.data.chat_messages;
                console.log("receving All chats unread messages", unread_messages);
                if (unread_messages.length > 0) {
                    if (chatLength != unread_messages.length) {
                        for (var i = 0; i < unread_messages.length; i++) {
                            this.allMessages.push({
                                userId: unread_messages[i].userId,
                                time: unread_messages[i].time,
                                message: unread_messages[i].message,
                                msgType: unread_messages[i].msgType,
                            });
                        }
                        this.scrollDown();
                    }
                }
                this.noChatlistFlag = false;
            }
            else {
                this.noChatlistFlag = true;
            }
        }), err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    getMessages(senderUserID) {
        console.log("logged in user", this.currentUser);
        // geting all chats Messages
        var data = JSON.stringify({
            request_type: "getMessages",
            users_customers_id: localStorage.getItem('loggedinUserID'),
            // users_customers_id: 15,
            reciever_users_customers_id: 'admin'
        });
        console.log('getAll Msg data-------', data);
        this.restService.admin_chat_messagesAPI(data)
            .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.showSkeleton = false;
            console.log("response", res);
            if (res.status == "success") {
                this.allMessages = res.data.chat_messages;
                console.log("receving All chats messages", this.allMessages);
                // this.allMessages.map((messages, index) => {
                //   if (messages.msgType == "attachment") {
                //     this.chatImagesArray.push({
                //       image: messages.message,
                //     });
                //   }
                // });
                console.log("allMsg array ", this.chatImagesArray);
                this.scrollDown();
                this.noChatlistFlag = false;
            }
            else {
                this.noChatlistFlag = true;
            }
        }), err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    back() {
        this.location.back();
        clearInterval(this.autoSaveInterval);
    }
    sendMsg() {
        console.log('remainong smssss---', this.remainingSMS);
        var time = new Date();
        this.currentTime = time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
        console.log(this.currentTime, "curent");
        if (this.user_input !== "") {
            this.allMessages.push({
                userId: this.currentUser,
                time: this.currentTime,
                message: this.user_input,
                msgType: "text",
            });
            let msgToSend = this.user_input;
            this.user_input = "";
            this.scrollDown();
            this.sendMessage(parseInt(this.senderUserID), msgToSend, "text");
        }
    }
    scrollDown() {
        this.content.scrollToBottom();
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 100);
    }
    sendMessage(senderUserID, msg, type) {
        // this.remainingSMS = this.remainingSMS - 1
        // localStorage.setItem('remainingSMS', this.remainingSMS.toString())
        var data = JSON.stringify({
            request_type: "sendMessage",
            sender_users_customers_id: localStorage.getItem('loggedinUserID'),
            // sender_users_customers_id: 15,
            reciever_users_customers_id: 'admin',
            msgType: type,
            chatMsg: msg
        });
        console.log('my msg', data);
        this.restService.admin_chat_messagesAPI(data)
            .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("response", res);
            this.scrollDown();
        }), err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
    takePhotoFromGallery(imageType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 50,
                // allowEdit: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: 0,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                var time = new Date();
                this.currentTime = time.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                });
                let imagedata = `data:image/png;base64,${imageData}`;
                console.log("select from gallary", imagedata);
                this.allMessages.push({
                    userId: this.currentUser,
                    time: this.currentTime,
                    message: imagedata,
                    msgType: "attachment",
                });
                console.log("image added from gallary", this.allMessages);
                this.workService.presentLoading();
                this.uploadChatImage(imagedata);
            });
        });
    }
    takePhotoFromCamera(imageType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 50,
                // allowEdit: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: false,
                correctOrientation: true,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                var time = new Date();
                this.currentTime = time.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                });
                let imagedata = `data:image/png;base64,${imageData}`;
                console.log("select from Camera", imagedata);
                this.allMessages.push({
                    userId: this.currentUser,
                    time: this.currentTime,
                    message: imagedata,
                    msgType: "attachment",
                });
                console.log("image added from gallary", this.allMessages);
                this.workService.presentLoading();
                this.uploadChatImage(imagedata);
                // setTimeout(() => {
                //   this.extras.dismiss();
                //   this.scrollDown();
                // }, 5000);
            }, (err) => {
                console.log(err);
            });
        });
    }
    uploadChatImage(imageData) {
        const fileTransfer = this.transfer.create();
        const random = Math.floor(Math.random() * 100);
        const options = {
            fileKey: "image_data",
            fileName: "myChat_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: "post",
            mimeType: "image/jpeg",
            headers: {},
            params: {
                image: "YPOP",
            },
        };
        fileTransfer
            .upload(imageData, "https://thelevapp.co/backoffice/webservices/process_image_upload/chatImages/", options)
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let newProfImage = JSON.parse(data.response);
            console.log("Image name after uploading", newProfImage);
            this.sendMessage(this.senderUserID, newProfImage.message, "attachment");
            this.workService.hideLoading();
            this.scrollDown();
        }), (err) => {
            this.workService.hideLoading();
            console.log("Error");
            console.log(err);
            return;
        });
    }
    selectImages(imageType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Select Attachment",
                buttons: [
                    {
                        text: "Choose from Gallery",
                        handler: (res) => this.takePhotoFromGallery(imageType),
                    },
                    {
                        text: "Camera",
                        handler: (res) => this.takePhotoFromCamera(imageType),
                    },
                    {
                        text: "Cancel",
                    },
                ],
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    viewImage(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.workService.chatImage = index;
            this.router.navigate(['showimage']);
        });
    }
    handleImgError(ev, item, url) {
        let source = ev.srcElement;
        // let imgSrc = `assets/imgs/placeholder.jpg`;
        let imgSrc = `assets/imgs/placeholder.jpg`;
        source.src = imgSrc;
    }
};
AdminchatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _userservice_service__WEBPACK_IMPORTED_MODULE_5__.UserserviceService },
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: _extrasservice_service__WEBPACK_IMPORTED_MODULE_6__.ExtrasserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _work_service__WEBPACK_IMPORTED_MODULE_7__.WorkService }
];
AdminchatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["IonContent", { static: true },] }]
};
AdminchatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-adminchat',
        template: _raw_loader_adminchat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adminchat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminchatPage);



/***/ }),

/***/ 44636:
/*!***********************************************!*\
  !*** ./src/app/adminchat/adminchat.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.header,\n.footer,\nion-content {\n  --background: #000;\n}\n\n.header {\n  padding: 10px 10px;\n  border: none;\n}\n\n.header-inner {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.backBtn,\n.sideMenu {\n  position: absolute;\n}\n\n.sideMenu {\n  right: 0px;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n}\n\n.title {\n  width: 100%;\n}\n\n.userName {\n  color: #c5e2ee;\n  font-size: 22px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.footerAction {\n  display: grid;\n  grid-template-columns: 1.5fr 7fr 1.5fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  grid-row-gap: 0px;\n}\n\n.attachments {\n  grid-area: 1/1/2/2;\n}\n\n.message {\n  grid-area: 1/2/2/3;\n}\n\n.sendMessage {\n  grid-area: 1/3/2/4;\n}\n\n.attachments,\n.sendMessage {\n  height: 50px;\n  background: #1a1a1a;\n  border-radius: 10px;\n  border: 1px solid #ffffff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attachSvg,\n.sendSvg {\n  text-align: center;\n}\n\n.input {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  border-radius: 10px;\n  /* border: 1px solid #c5e2ee; */\n  /* background-color: #1a1a1a; */\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0em;\n  margin: auto;\n  padding-top: 7px;\n}\n\n.footer {\n  padding-bottom: 20px;\n}\n\n.chat {\n  margin-top: 20px;\n}\n\n.reciever {\n  background-color: #333333;\n  /* border: 1px solid #c5e2ee; */\n  color: #ffffff;\n  font-size: 14px;\n  /* font-weight: 400; */\n  border-top-left-radius: 10px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  /* border-bottom-left-radius: 5px; */\n  width: auto;\n  padding: 15px;\n  text-align: justify;\n  max-width: 320px;\n}\n\n.messageTime {\n  font-size: 10px;\n  color: #7a7a7a;\n}\n\n.messageTimeSender {\n  font-size: 10px;\n  color: #7a7a7a;\n  text-align: end;\n}\n\n.sender_message_container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.senderMessage {\n  background-color: #333333;\n  color: #1a1a1a;\n  font-size: 14px;\n  font-weight: 400;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 10px;\n  /* border-bottom-right-radius: 5px; */\n  border-bottom-left-radius: 20px;\n  width: auto;\n  padding: 15px;\n  text-align: justify;\n  max-width: 320px;\n}\n\n.attachment_sender {\n  height: 200px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.attachment_receiver {\n  height: 200px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skel_receiver {\n  color: #c5e2ee;\n  font-size: 14px;\n  font-weight: 400;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 5px;\n  width: 65%;\n  padding: 15px;\n  background-color: #212628;\n}\n\n.skel_sender {\n  color: #1a1a1a;\n  font-size: 14px;\n  font-weight: 400;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 20px;\n  width: 65%;\n  padding: 19px;\n  background-color: #212628;\n}\n\n.reciever_message_cont {\n  display: grid;\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTs7O0VBR0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTs7RUFFSSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtBQUtKOztBQUhBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0FBWUo7O0FBVkE7O0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVhBOztFQUVJLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksb0JBQUE7QUFnQko7O0FBZEE7RUFDSSxnQkFBQTtBQWlCSjs7QUFmQTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQXFCSjs7QUFuQkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBdUJKOztBQXJCQTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUF3Qko7O0FBcEJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBd0JKOztBQXRCQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQXlCSiIsImZpbGUiOiJhZG1pbmNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmlucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhlYWRlcixcclxuLmZvb3RlcixcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5oZWFkZXItaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJhY2tCdG4sXHJcbi5zaWRlTWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNpZGVNZW51IHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlck5hbWUge1xyXG4gICAgY29sb3I6ICNjNWUyZWU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5mb290ZXJBY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgN2ZyIDEuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcclxufVxyXG4uYXR0YWNobWVudHMge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG59XHJcbi5tZXNzYWdlIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcclxufVxyXG4uc2VuZE1lc3NhZ2Uge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xyXG59XHJcbi5hdHRhY2htZW50cyxcclxuLnNlbmRNZXNzYWdlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hdHRhY2hTdmcsXHJcbi5zZW5kU3ZnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjNWUyZWU7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhOyAqL1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2hhdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yZWNpZXZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2M1ZTJlZTsgKi9cclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxuLm1lc3NhZ2VUaW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjN2E3YTdhO1xyXG59XHJcbi5tZXNzYWdlVGltZVNlbmRlciB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4uc2VuZGVyX21lc3NhZ2VfY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zZW5kZXJNZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG59XHJcbi5hdHRhY2htZW50X3NlbmRlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uYXR0YWNobWVudF9yZWNlaXZlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLy8gc2tlbGV0b24gY3NzXHJcbi5za2VsX3JlY2VpdmVyIHtcclxuICAgIGNvbG9yOiAjYzVlMmVlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjI4O1xyXG59XHJcbi5za2VsX3NlbmRlciB7XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nOiAxOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyODtcclxufVxyXG4ucmVjaWV2ZXJfbWVzc2FnZV9jb250IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 86614:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminchat/adminchat.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"header\">\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col size=\"2\" style=\"text-align: center;\">\n        <img (click)=\"goBack()\" style=\"height: 20px;\n          width: 20px;\" src=\"assets/imgs/left.svg\">\n      </ion-col>\n      <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n        <ion-text style=\"font-size: 20px;\">Hi, Admin</ion-text>\n      </ion-col>\n      <ion-col size=\"2\" style=\"text-align: center;     padding: 0px;\">\n        <img style=\"    object-fit: cover;\n          height: 35px;\n          width: 35px;\n          border-radius: 50%;\" src=\"{{userIMG}}\" (error)=\"handleImgError($event, userIMG)\">\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content #IonContent>\n  <div class=\"container\">\n    <ng-container *ngIf=\"!showSkeleton\">\n      <div class=\"chat\" style=\"display: grid; grid-row-gap: 4px\">\n        <ng-container *ngFor=\"let msg of allMessages\">\n          <div class=\"reciever_message_container reciever_message_cont\" *ngIf=\"msg.userId!=currentUser\">\n            <div class=\"reciever\">\n              <ion-text class=\"textMessage\" *ngIf=\"msg.msgType=='text'\">\n                {{msg.message}}\n              </ion-text>\n              <div (click)=\"viewImage(msg.message)\" *ngIf=\"msg.msgType=='attachment'\">\n                <img class=\"attachment_receiver\" src=\"{{msg.message}}\" />\n              </div>\n            </div>\n            <ion-text class=\"messageTime\">{{msg.time}}</ion-text>\n          </div>\n          <div class=\"sender\" *ngIf=\"msg.userId==currentUser\">\n            <div class=\"sender_message_container\">\n              <div class=\"senderMessage\">\n                <ion-text class=\"textMessage\" *ngIf=\"msg.msgType=='text'\">\n                  {{msg.message}}\n                </ion-text>\n                <div (click)=\"viewImage(msg.message)\" *ngIf=\"msg.msgType=='attachment'\">\n                  <img class=\"attachment_sender\" src=\"{{msg.message}}\" />\n                </div>\n              </div>\n            </div>\n\n            <ion-row style=\"padding: 0px;\">\n              <ion-col style=\"text-align: right; padding: 0px;\">\n                <ion-text class=\"messageTimeSender\">{{msg.time}}</ion-text>\n              </ion-col>\n\n            </ion-row>\n\n\n\n          </div>\n        </ng-container>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"showSkeleton\">\n      <div class=\"chat\" style=\"display: grid; grid-gap: 15px\">\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text class=\"skel_receiver\" animated></ion-skeleton-text>\n          <ion-text class=\"messageTime\"></ion-text>\n          <!-- <div class=\"reciever\">\n                <p class=\"textMessage\">Hi Moaviz skeleton. How are you?</p>\n              </div> -->\n        </div>\n\n        <div class=\"sender\">\n          <div class=\"sender_message_container\">\n            <ion-skeleton-text style=\"height: 97px\" class=\"skel_sender\" animated></ion-skeleton-text>\n          </div>\n        </div>\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text class=\"skel_receiver\" animated></ion-skeleton-text>\n        </div>\n\n        <div class=\"sender\">\n          <div class=\"sender_message_container\">\n            <ion-skeleton-text class=\"skel_sender\" animated>\n            </ion-skeleton-text>\n          </div>\n        </div>\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text style=\"height: 97px\" class=\"skel_receiver\" animated></ion-skeleton-text>\n        </div>\n\n        <div class=\"sender\">\n          <div class=\"sender_message_container\">\n            <ion-skeleton-text class=\"skel_sender\" animated></ion-skeleton-text>\n          </div>\n        </div>\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text style=\"height: 97px\" class=\"skel_receiver\" animated></ion-skeleton-text>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n<ion-footer style=\"    padding-left: 20px;    padding-right: 20px;\n    background: black;\" class=\"ion-no-margin ion-no-padding ion-no-border\">\n  <ion-toolbar class=\"footer\">\n\n\n\n    <div style=\"background-color: #4e4c4cdb; border-radius: 10px; height: 52px;\">\n\n      <ion-row>\n        <ion-col size=\"2\" style=\"padding: 0px;\">\n          <img (click)=\"selectImages('profile')\" src=\"assets/imgs/plus.svg\" style=\" padding: 8px;\n          height: 50px;\n          background: white;\n          border-radius: 10px;\n          margin-top: 1px;\">\n        </ion-col>\n\n        <ion-col size=\"8\" style=\"padding-top: 0px;\">\n          <ion-input style=\"height: 50px;\" class=\"input\" rows=\"1\" cols=\"20\" [(ngModel)]=\"user_input\"\n            placeholder=\"Type something\" (keypress)=\"userTyping($event)\" (ionChange)=\"changeFunction($event)\">\n          </ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\" style=\"text-align: right; padding-right: 13px;\">\n          <img (click)=\"sendMsg()\" src=\"assets/imgs/send.svg\" style=\"margin-top: 10px;\n          height: 25px;\">\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n    <!-- <div class=\"container\">\n      <div class=\"footerAction\">\n        <div class=\"attachments\">\n          <img class=\"attachSvg\" (click)=\"selectImages('profile')\" src=\"/assets/icon/attach.svg\" alt=\"\" />\n        </div>\n        <div class=\"message\">\n         \n        </div>\n        <div class=\"sendMessage\" (click)=\"sendMsg()\">\n          <img class=\"sendSvg\" src=\"/assets/icon/send.svg\" alt=\"\" />\n        </div>\n      </div>\n    </div> -->\n\n\n\n\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_adminchat_adminchat_module_ts-es2015.js.map