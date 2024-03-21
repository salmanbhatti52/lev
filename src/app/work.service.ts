import { Injectable } from '@angular/core';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';


@Injectable({
  providedIn: 'root'
})
export class WorkService {

  loading: HTMLIonLoadingElement;
  toast: HTMLIonToastElement;

  data1: any
  data2: any

  systemData: any
  myUserData: any

  userPrefData: any

  chatImage: any = ''


  otpConfrimResultData: any = ''

  comingForm: any = ''

  userMobileNum: any = ''
  closedUserIds = [];

  constructor(public loadingController: LoadingController,
    public toastController: ToastController,
    public camera: Camera,
    public platform: Platform
  ) { }



  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async hideLoading() {
    this.loading.dismiss()
  }





  async presentToast(msg) {
    this.toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    this.toast.present();
  }

  async hideToast() {
    this.toast.dismiss()
  }




  selectImageInCamera() {

    if (this.platform.is('ios')) {
      const CAMERA_OPTIONS: CameraOptions = {
        allowEdit: true,
        correctOrientation: true,
        // cameraDirection: 1,
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 500,
        targetWidth: 500,
      }
      return this.camera.getPicture(CAMERA_OPTIONS);
    } else {
      const CAMERA_OPTIONS: CameraOptions = {
        // allowEdit: true,
        correctOrientation: true,
        // cameraDirection: 1,
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 500,
        targetWidth: 500,
      }
      return this.camera.getPicture(CAMERA_OPTIONS);
    }


  }

  // choose image from gallery
  selectImageInGallery() {

    if (this.platform.is('ios')) {
      const CAMERA_OPTIONS: CameraOptions = {
        allowEdit: true,
        quality: 50,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
      }
      return this.camera.getPicture(CAMERA_OPTIONS);
    } else {
      const CAMERA_OPTIONS: CameraOptions = {
        // allowEdit: true,
        quality: 50,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
      }
      return this.camera.getPicture(CAMERA_OPTIONS);
    }

  }
}
