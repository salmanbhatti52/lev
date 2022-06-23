import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {
  NavController,
  AlertController,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";

import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, Platform, PopoverController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { RestService } from "../rest.service";
import { UserserviceService } from "../userservice.service";
import { ExtrasserviceService } from "../extrasservice.service";
import { WorkService } from "../work.service";
import { ImagemodelComponent } from "../imagemodel/imagemodel.component";



@Component({
  selector: 'app-adminchat',
  templateUrl: './adminchat.page.html',
  styleUrls: ['./adminchat.page.scss'],
})
export class AdminchatPage implements OnInit {

  matchpopupHidden = true;
  popupSelectedVal: any;

  @ViewChild("IonContent", { static: true }) content: IonContent;
  checkType = "chatList";
  authToken: any;
  senderUserName: any;
  senderUserID: any;
  showSkeleton = true;
  noChatlistFlag = false;
  allMessages = [];
  currentUser: any;
  currentTime: string;
  user_input: string;
  chatImagesArray = [];
  private autoSaveInterval: any;
  userIMG: any;

  remainingSMS = 0



  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserserviceService,
    public restService: RestService,
    public extras: ExtrasserviceService,
    private alertController: AlertController,
    private camera: Camera,
    private transfer: FileTransfer,
    private modalCtrl: ModalController,
    private location: Location,
    public platform: Platform,
    public workService: WorkService
  ) {
    this.currentUser = localStorage.getItem('loggedinUserID')
    // this.currentUser = 15

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }


  ngOnInit() {
  }

  goBack() {
    this.location.back()
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
    this.hidePopup()
    this.router.navigate(['smspkg'])
  }

  ionViewWillEnter() {


    var user = JSON.parse(localStorage.getItem('loggedinUserData'))

    console.log('user daata -------', user);


    this.remainingSMS = parseInt(localStorage.getItem('remainingSMS'))

    this.senderUserName = this.userService.userName
    this.senderUserID = parseInt(this.userService.userId)

    if (user) {
      this.userIMG = this.restService.baseUrlForImg + user.profile_pic_1
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
  userTyping(event: any) {
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
    })


    console.log('datttttttaaaaaaaaaaaa-----', data);


    this.restService.admin_chat_messagesAPI(data)
      .subscribe(async (res: any) => {
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
        } else {
          this.noChatlistFlag = true;
        }
      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
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
    })

    console.log('getAll Msg data-------', data);


    this.restService.admin_chat_messagesAPI(data)
      .subscribe(async (res: any) => {

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
        } else {
          this.noChatlistFlag = true;
        }
      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      });
  }

  back() {

    this.location.back();
    clearInterval(this.autoSaveInterval);
  }
  sendMsg() {

    console.log('remainong smssss---', this.remainingSMS)


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
    })



    console.log('my msg', data);


    this.restService.admin_chat_messagesAPI(data)
      .subscribe(async (res: any) => {
        console.log("response", res);
        this.scrollDown()
      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      });
  }
  async takePhotoFromGallery(imageType) {
    const options: CameraOptions = {
      quality: 50,
      // allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: 0,
    };
    await this.camera.getPicture(options).then((imageData: any) => {
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
  }
  async takePhotoFromCamera(imageType) {
    const options: CameraOptions = {
      quality: 50,
      // allowEdit: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    await this.camera.getPicture(options).then(
      (imageData: any) => {
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
      },
      (err) => {
        console.log(err);
      }
    );
  }
  uploadChatImage(imageData) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const random = Math.floor(Math.random() * 100);
    const options: FileUploadOptions = {
      fileKey: "image_data",
      fileName: "myChat_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: "post",
      mimeType: "image/jpeg",
      headers: {

      },
      params: {
        image: "YPOP",
      },
    };
    fileTransfer
      .upload(
        imageData,
        "https://thelevapp.co/backoffice/webservices/process_image_upload/chatImages/",
        options
      )
      .then(
        async (data: any) => {
          let newProfImage = JSON.parse(data.response);
          console.log("Image name after uploading", newProfImage);
          this.sendMessage(
            this.senderUserID,
            newProfImage.message,
            "attachment"
          );
          this.workService.hideLoading();
          this.scrollDown();
        },
        (err) => {
          this.workService.hideLoading();
          console.log("Error");
          console.log(err);
          return;
        }
      );
  }
  async selectImages(imageType) {
    const alert = await this.alertController.create({
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
    await alert.present();
    await alert.onDidDismiss();
  }
  async viewImage(index) {

    this.workService.chatImage = index

    this.router.navigate(['showimage'])

  }


  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    // let imgSrc = `assets/imgs/placeholder.jpg`;

    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }



}
