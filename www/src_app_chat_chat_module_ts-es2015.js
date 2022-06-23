(self["webpackChunklev"] = self["webpackChunklev"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 54761:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": function() { return /* binding */ ChatPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 24099);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 20818:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": function() { return /* binding */ ChatPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 54761);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 24099);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 24099:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": function() { return /* binding */ ChatPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.page.html */ 99451);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 66582);
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














let ChatPage = class ChatPage {
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
        this.otherUSerAutoReply = '';
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
        this.restService.get_user_auto_repsonse(localStorage.getItem('loggedinUserID')).subscribe((res) => {
            console.log('hhhhhhh----------', res.data);
            this.otherUSerAutoReply = res.data;
        });
        this.remainingSMS = parseInt(localStorage.getItem('remainingSMS'));
        this.senderUserName = this.userService.userName;
        this.senderUserID = parseInt(this.userService.userId);
        console.log('senderuseid line 116===', this.senderUserID);
        this.userIMG = this.userService.userIMG;
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
            reciever_users_customers_id: parseInt(this.senderUserID)
        });
        console.log('datttttttaaaaaaaaaaaa-----', data);
        this.restService.chat_messagesAPI(data)
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
            reciever_users_customers_id: parseInt(this.senderUserID)
        });
        console.log('getAll Msg data-------', data);
        this.restService.chat_messagesAPI(data)
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
        if (this.remainingSMS > 0) {
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
        else {
            this.workService.presentToast('Message limit exceeded.');
        }
    }
    scrollDown() {
        this.content.scrollToBottom();
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 100);
    }
    sendMessage(senderUserID, msg, type) {
        this.remainingSMS = this.remainingSMS - 1;
        localStorage.setItem('remainingSMS', this.remainingSMS.toString());
        var data = JSON.stringify({
            request_type: "sendMessage",
            sender_users_customers_id: localStorage.getItem('loggedinUserID'),
            // sender_users_customers_id: 15,
            reciever_users_customers_id: this.senderUserID,
            msgType: type,
            chatMsg: msg
        });
        this.restService.chat_messagesAPI(data)
            .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("response", res);
            if (this.allMessages.length < 1) {
                this.autoReply();
            }
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
            // console.log("Chat images console", index);
            // //this.chatImagesArray
            // let showImage = [{ image: index }];
            // const modal = await this.modalCtrl.create({
            //   component: ImagemodelComponent,
            //   componentProps: {
            //     images: showImage,
            //     initialIndex: index,
            //   },
            // });
            // await modal.present();
        });
    }
    handleImgError(ev, item, url) {
        let source = ev.srcElement;
        // let imgSrc = `assets/imgs/placeholder.jpg`;
        let imgSrc = `assets/imgs/placeholder.jpg`;
        source.src = imgSrc;
    }
    autoReply() {
        console.log('autoReplyyyyyyyyyy');
        var data = JSON.stringify({
            request_type: "sendMessage",
            reciever_users_customers_id: localStorage.getItem('loggedinUserID'),
            // sender_users_customers_id: 15,
            sender_users_customers_id: this.senderUserID,
            msgType: "text",
            chatMsg: this.otherUSerAutoReply
        });
        this.restService.chat_messagesAPI(data)
            .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("response", res);
            this.scrollDown();
        }), err => {
            this.workService.hideLoading();
            this.workService.presentToast('Network error occured');
        });
    }
};
ChatPage.ctorParameters = () => [
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
ChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ["IonContent", { static: true },] }]
};
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatPage);



/***/ }),

/***/ 66582:
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  color: black;\n  font-size: 14pt;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100%;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.inp {\n  padding: 10px;\n  background: #2d2d39;\n  box-shadow: 0px 4px 10px #0000001f;\n  border-radius: 8px;\n  opacity: 1;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 13px;\n  --padding-end: 13px;\n  --padding-bottom: 13px;\n  --padding-start: 13px;\n  font-size: inherit;\n}\n\n.header,\n.footer,\nion-content {\n  --background: #000;\n}\n\n.header {\n  padding: 10px 10px;\n  border: none;\n}\n\n.header-inner {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.backBtn,\n.sideMenu {\n  position: absolute;\n}\n\n.sideMenu {\n  right: 0px;\n}\n\n.container {\n  width: 90%;\n  margin: auto;\n}\n\n.title {\n  width: 100%;\n}\n\n.userName {\n  color: #c5e2ee;\n  font-size: 22px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.footerAction {\n  display: grid;\n  grid-template-columns: 1.5fr 7fr 1.5fr;\n  grid-template-rows: 1fr;\n  grid-column-gap: 10px;\n  grid-row-gap: 0px;\n}\n\n.attachments {\n  grid-area: 1/1/2/2;\n}\n\n.message {\n  grid-area: 1/2/2/3;\n}\n\n.sendMessage {\n  grid-area: 1/3/2/4;\n}\n\n.attachments,\n.sendMessage {\n  height: 50px;\n  background: #1a1a1a;\n  border-radius: 10px;\n  border: 1px solid #ffffff;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attachSvg,\n.sendSvg {\n  text-align: center;\n}\n\n.input {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  border-radius: 10px;\n  /* border: 1px solid #c5e2ee; */\n  /* background-color: #1a1a1a; */\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0em;\n  margin: auto;\n  padding-top: 7px;\n}\n\n.footer {\n  padding-bottom: 20px;\n}\n\n.chat {\n  margin-top: 20px;\n}\n\n.reciever {\n  background-color: #333333;\n  /* border: 1px solid #c5e2ee; */\n  color: #ffffff;\n  font-size: 14px;\n  /* font-weight: 400; */\n  border-top-left-radius: 10px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  /* border-bottom-left-radius: 5px; */\n  width: auto;\n  padding: 15px;\n  text-align: justify;\n  max-width: 320px;\n  white-space: pre-line;\n}\n\n.messageTime {\n  font-size: 10px;\n  color: #7a7a7a;\n}\n\n.messageTimeSender {\n  font-size: 10px;\n  color: #7a7a7a;\n  text-align: end;\n}\n\n.sender_message_container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.senderMessage {\n  background-color: #333333;\n  color: #1a1a1a;\n  font-size: 14px;\n  font-weight: 400;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 10px;\n  /* border-bottom-right-radius: 5px; */\n  border-bottom-left-radius: 20px;\n  width: auto;\n  padding: 15px;\n  text-align: justify;\n  max-width: 320px;\n  white-space: pre-line;\n}\n\n.attachment_sender {\n  height: 200px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.attachment_receiver {\n  height: 200px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.skel_receiver {\n  color: #c5e2ee;\n  font-size: 14px;\n  font-weight: 400;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 5px;\n  width: 65%;\n  padding: 15px;\n  background-color: #212628;\n}\n\n.skel_sender {\n  color: #1a1a1a;\n  font-size: 14px;\n  font-weight: 400;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 20px;\n  width: 65%;\n  padding: 19px;\n  background-color: #212628;\n}\n\n.reciever_message_cont {\n  display: grid;\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7OztFQUdJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7O0VBRUksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtBQVlKOztBQVZBOztFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTs7RUFFSSxrQkFBQTtBQWNKOztBQVpBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLG9CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksZ0JBQUE7QUFpQko7O0FBZkE7RUFDSSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQXFCSjs7QUFuQkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUF1Qko7O0FBckJBO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQXdCSjs7QUFwQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBdUJKOztBQXJCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBeUJKIiwiZmlsZSI6ImNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmlucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJkMmQzOTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjMDAwMDAwMWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTNweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2MtaW9uLWlucHV0LWlvcy1oIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxM3B4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLmhlYWRlcixcclxuLmZvb3RlcixcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5oZWFkZXItaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJhY2tCdG4sXHJcbi5zaWRlTWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNpZGVNZW51IHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlck5hbWUge1xyXG4gICAgY29sb3I6ICNjNWUyZWU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5mb290ZXJBY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgN2ZyIDEuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcclxufVxyXG4uYXR0YWNobWVudHMge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG59XHJcbi5tZXNzYWdlIHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcclxufVxyXG4uc2VuZE1lc3NhZ2Uge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xyXG59XHJcbi5hdHRhY2htZW50cyxcclxuLnNlbmRNZXNzYWdlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxYTFhMWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hdHRhY2hTdmcsXHJcbi5zZW5kU3ZnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjNWUyZWU7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhOyAqL1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2hhdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yZWNpZXZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2M1ZTJlZTsgKi9cclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLm1lc3NhZ2VUaW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjN2E3YTdhO1xyXG59XHJcbi5tZXNzYWdlVGltZVNlbmRlciB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4uc2VuZGVyX21lc3NhZ2VfY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zZW5kZXJNZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi5hdHRhY2htZW50X3NlbmRlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uYXR0YWNobWVudF9yZWNlaXZlciB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLy8gc2tlbGV0b24gY3NzXHJcbi5za2VsX3JlY2VpdmVyIHtcclxuICAgIGNvbG9yOiAjYzVlMmVlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjI4O1xyXG59XHJcbi5za2VsX3NlbmRlciB7XHJcbiAgICBjb2xvcjogIzFhMWExYTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwYWRkaW5nOiAxOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjYyODtcclxufVxyXG4ucmVjaWV2ZXJfbWVzc2FnZV9jb250IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 99451:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"header\">\n    <ion-row style=\"margin-top: 30px;\">\n      <ion-col size=\"2\" style=\"text-align: center;\">\n        <img (click)=\"goBack()\" style=\"height: 20px;\n          width: 20px;\" src=\"assets/imgs/left.svg\">\n      </ion-col>\n      <ion-col size=\"8\" style=\"text-align: center; padding-top: 0px;\">\n        <ion-text style=\"font-size: 20px;\">Hi, {{senderUserName}}</ion-text>\n      </ion-col>\n      <ion-col size=\"2\" style=\"text-align: center;\">\n        <img style=\"    object-fit: cover;\n          height: 35px;\n          width: 35px;\n          border-radius: 50%;\" src=\"{{userIMG}}\" (error)=\"handleImgError($event, userIMG)\">\n      </ion-col>\n    </ion-row>\n\n\n    <div (click)=\"showPopup()\" style=\"    display: flex;\n    width: 100%;\n    text-align: center;\n    margin-top: -13px;\n    justify-content: center;\">\n\n      <img style=\"height: 20px;\n        width: 20px;\" src=\"assets/imgs/i.svg\">\n\n      <ion-text style=\"margin-top: 2px;\n      font-size: 12px;\n      color: red;\n      margin-left: 10px;\">{{remainingSMS}} Text Remaining</ion-text>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content #IonContent>\n  <div class=\"container\">\n    <ng-container *ngIf=\"!showSkeleton\">\n      <div class=\"chat\" style=\"display: grid; grid-row-gap: 4px\">\n        <ng-container *ngFor=\"let msg of allMessages\">\n          <div class=\"reciever_message_container reciever_message_cont\" *ngIf=\"msg.userId!=currentUser\">\n            <div class=\"reciever\">\n              <ion-text class=\"textMessage\" *ngIf=\"msg.msgType=='text'\">\n                {{msg.message}}\n              </ion-text>\n              <div (click)=\"viewImage(msg.message)\" *ngIf=\"msg.msgType=='attachment'\">\n                <img class=\"attachment_receiver\" src=\"{{msg.message}}\" />\n              </div>\n            </div>\n            <ion-text class=\"messageTime\">{{msg.time}}</ion-text>\n          </div>\n          <div class=\"sender\" *ngIf=\"msg.userId==currentUser\">\n            <div class=\"sender_message_container\">\n              <div class=\"senderMessage\">\n                <ion-text class=\"textMessage\" *ngIf=\"msg.msgType=='text'\">\n                  {{msg.message}}\n                </ion-text>\n                <div (click)=\"viewImage(msg.message)\" *ngIf=\"msg.msgType=='attachment'\">\n                  <img class=\"attachment_sender\" src=\"{{msg.message}}\" />\n                </div>\n              </div>\n            </div>\n\n            <ion-row style=\"padding: 0px;\">\n              <ion-col style=\"text-align: right; padding: 0px;\">\n                <ion-text class=\"messageTimeSender\">{{msg.time}}</ion-text>\n              </ion-col>\n\n            </ion-row>\n\n\n\n          </div>\n        </ng-container>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"showSkeleton\">\n      <div class=\"chat\" style=\"display: grid; grid-gap: 15px\">\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text class=\"skel_receiver\" animated></ion-skeleton-text>\n          <ion-text class=\"messageTime\"></ion-text>\n          <!-- <div class=\"reciever\">\n                <p class=\"textMessage\">Hi Moaviz skeleton. How are you?</p>\n              </div> -->\n        </div>\n\n        <div class=\"sender\">\n          <div class=\"sender_message_container\">\n            <ion-skeleton-text style=\"height: 97px\" class=\"skel_sender\" animated></ion-skeleton-text>\n          </div>\n        </div>\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text class=\"skel_receiver\" animated></ion-skeleton-text>\n        </div>\n\n        <div class=\"sender\">\n          <div class=\"sender_message_container\">\n            <ion-skeleton-text class=\"skel_sender\" animated>\n            </ion-skeleton-text>\n          </div>\n        </div>\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text style=\"height: 97px\" class=\"skel_receiver\" animated></ion-skeleton-text>\n        </div>\n\n        <div class=\"sender\">\n          <div class=\"sender_message_container\">\n            <ion-skeleton-text class=\"skel_sender\" animated></ion-skeleton-text>\n          </div>\n        </div>\n        <div class=\"reciever_message_container\">\n          <ion-skeleton-text style=\"height: 97px\" class=\"skel_receiver\" animated></ion-skeleton-text>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n<ion-footer style=\"    padding-left: 20px;    padding-right: 20px;\n    background: black;\" class=\"ion-no-margin ion-no-padding ion-no-border\">\n  <ion-toolbar class=\"footer\">\n    <ion-row>\n      <ion-col style=\"text-align: center;\">\n        <ion-text style=\"margin-top: 2px;\n        font-size: 12px;\n        color: #fff;\n        margin-left: 10px;\">Message automatically expire after 3 days.</ion-text>\n\n      </ion-col>\n    </ion-row>\n\n\n\n    <div style=\"background-color: #4e4c4cdb; border-radius: 10px; height: 52px;\">\n\n      <ion-row>\n\n        <ion-col size=\"2\" style=\"padding: 0px;\">\n          <img (click)=\"selectImages('profile')\" src=\"assets/imgs/plus.svg\" style=\" padding: 8px;\n          height: 50px;\n          background: white;\n          border-radius: 10px;\n          margin-top: 1px;\">\n        </ion-col>\n\n        <ion-col size=\"8\" style=\"padding-top: 0px;\">\n          <ion-input style=\"height: 50px;\" class=\"input\" rows=\"1\" cols=\"20\" [(ngModel)]=\"user_input\"\n            placeholder=\"Type something\" (keypress)=\"userTyping($event)\" (ionChange)=\"changeFunction($event)\">\n          </ion-input>\n        </ion-col>\n\n        <ion-col size=\"2\" style=\"text-align: right; padding-right: 13px;\">\n          <img (click)=\"sendMsg()\" src=\"assets/imgs/send.svg\" style=\"margin-top: 10px;\n          height: 25px;\">\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n    <!-- <div class=\"container\">\n      <div class=\"footerAction\">\n        <div class=\"attachments\">\n          <img class=\"attachSvg\" (click)=\"selectImages('profile')\" src=\"/assets/icon/attach.svg\" alt=\"\" />\n        </div>\n        <div class=\"message\">\n         \n        </div>\n        <div class=\"sendMessage\" (click)=\"sendMsg()\">\n          <img class=\"sendSvg\" src=\"/assets/icon/send.svg\" alt=\"\" />\n        </div>\n      </div>\n    </div> -->\n\n\n\n\n  </ion-toolbar>\n</ion-footer>\n\n\n\n<div [hidden]=\"matchpopupHidden\" style=\"\n    height: 100%;\n    width: 100%;\n    background-color: #0c293dd9;\n    position: absolute;\n  \">\n  <div style=\"    left: 10%;\n  position: absolute;\n  top: 24%;\n  width: 80%;\n  height: auto;\n  background-color: rgb(0 0 0);\n  padding-bottom: 20px;\">\n    <ion-row>\n      <ion-col style=\"padding-top: 10 px; padding-right: 10px; text-align: right\">\n        <img style=\"\n            height: 15px;\n            width: 15px;\n            margin-right: 10px;\n            margin-top: 14px;\n          \" src=\"assets/imgs/close.svg\" (click)=\"hidePopup()\" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 0px\">\n      <ion-col style=\"text-align: center\">\n        <img style=\"    width: 300px;\n        height: 190px;\" src=\"assets/imgs/logo.svg\" />\n      </ion-col>\n    </ion-row>\n\n    <div style=\"padding: 15px;\n        border: 2px solid white;\n        text-align: center;\n        margin: 17px;\">\n      <ion-label style=\"font-size: 8pt;\">You can chat for free up-to 6 messages then the app will automatically\n        exchange\n        your information or the\n        you can pay to chat more through messaging.</ion-label>\n    </div>\n\n    <ion-row style=\"padding-right: 15px;\n    margin-left: 15px;\">\n      <ion-col>\n        <button (click)=\"goToMemberShip()\" class=\"btn\" style=\"font-size: 11pt;\">Buy More Messages</button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts-es2015.js.map