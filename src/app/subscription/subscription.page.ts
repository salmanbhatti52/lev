import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';


////////////////////////


import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';





@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {


  subArray: any = ''

 

  europe = false;
  getData: any;
  subscriptionData: any;
  subscriptionDataArray = [];
  locationCity: any;
  monthlyCharges: any;
  monthlyYoutubeCharges: any;
  yearlyCharges: any;
  symbol: any;
  subscriptionChoosed = '';

  subscriptionID1 = '';
  subscriptionID2 = '';
  subscriptionID3 = '';

  selectedSubscritionID = '';
  subscriptionIdToSend = '';
  message: any;
  responsesharing: any;
  restorePurchasesArray: any;
  transactionResponse: any;
  userSubscriptionRes: any;
  percentOff: any

  copun: any = ''
  copunStatus = false

  userData: any = ''

  noSubScription = true

  sbID: any = ''



  //////sub data



  amount: any = ''
  android_product_id: any = ''
  duration: any = ''
  duration_type: any = ''
  ios_product_id: any = ''
  name: any = ''
  packages_id: any = ''
  status: any = ''
  platformSUB: any = ''


  productIdArr = []

  freePkg: any = ''
  selectedsbID: any;


  constructor(public location: Location,
    public router: Router,
    public restService: RestService,
    public workService: WorkService,
    private rest: RestService,
    private navCtrl: NavController,
    private platform: Platform,
    private toastController: ToastController,
    private iap: InAppPurchase) {


  }


  ionViewWillEnter() {


    this.workService.presentLoading()

    var stringy = JSON.stringify({

    })

    this.restService.getSubScriptionDetailsAPI(stringy).subscribe((res: any) => {
      this.workService.hideLoading()
    
      if (res.status == "success") {
      this.subArray = res.data
      this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))

      console.log('id---',this.subArray[2].packages_id);
      console.log('subArray----',this.subArray);

        this.sbID = localStorage.getItem('packages_id')

        console.log('id--sss-',this.sbID);

        if (this.sbID) {
          // if (this.sbID.toString() == '0' || this.sbID.toString() == '1') 
          if (this.sbID.toString() == '0' || this.sbID.toString() == '88') {
            this.noSubScription = true
          } else {
            this.noSubScription = false
          }
        } else {
          this.noSubScription = true
        }




        this.platform.ready().then(() => {

          if (this.platform.is('ios')) {
            this.platformSUB = "IOS"

            for (var i = 0; i < this.subArray.length; i++) {

              var sbElement = {
                productID: this.subArray[i].ios_product_id
              }
              this.productIdArr.push(sbElement)


            }
         
            this.subscriptionID1 = this.subArray[0].ios_product_id
            this.subscriptionID2 = this.subArray[1].ios_product_id
            // this.subscriptionID3 = this.subArray[2].ios_product_id
          } else if (this.platform.is('android')) {
            this.platformSUB = "Android"


            for (var i = 0; i < this.subArray.length; i++) {

              var sbElement = {
                productID: this.subArray[i].android_product_id
              }
              this.productIdArr.push(sbElement)


            }


            this.subscriptionID1 = this.subArray[0].android_product_id
            this.subscriptionID2 = this.subArray[1].android_product_id
            // this.subscriptionID3 = this.subArray[2].android_product_id
          }



          for (var i = 0; i < this.subArray.length; i++) {
          
            var nn = [1, 1, 1, 1]

            this.iap
              .getProducts([
                this.productIdArr[i].productID
              ])
              .then(function (products) {
              })
              .catch((err) => {
              });


          }

        });


      }

    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

  }



  changeFunction(ev) {

    this.copun = this.restService.removebadwords(ev.detail.value);
  }


  purchaseSubscription() {

  
    if (this.platform.is('android')) {
      this.iap
        .subscribe(this.selectedSubscritionID)
        .then((data: any) => {
        
          this.userSubscriptionRes = data;
          return this.iap
            .consume(data.productType, data.receipt, data.signature)
            .then(
              (res) => {
                this.successSubscri();
                this.transactionResponse = res;
                // alert('transactionResponse' + this.transactionResponse)
              },
              (err) => {
          
                this.workService.presentToast(
                  'Some Error Occured'
                );

                // alert('Some Error Occured' + err)
                alert('Some Error Occured')

              }
            );
        })
        .catch((err) => {
       
          this.workService.presentToast(
            'Some Error Occured'
          );

          // alert('Some Error Occured' + err)
          alert('Some Error Occured')
        });
    }
    if (this.platform.is('ios')) {
      this.iap
        .buy(this.selectedSubscritionID)
        .then((data: any) => {
       
          this.userSubscriptionRes = data;
          return this.iap
            .consume(data.productType, data.receipt, data.signature)
            .then((res) => {
          
              this.successSubscri();
          
              // alert('transactionResponse ios' + this.transactionResponse)

            });
        })
        .catch((err) => {
         
          this.workService.presentToast(
            'Some Error Occured'
          );
          // alert('Some Error Occured' + err)
          alert('Some Error Occured')
        });
    }

  }


  successSubscri() {


    var subData = JSON.stringify({
      "users_customers_id": localStorage.getItem('loggedinUserID'),
      "transaction_id": this.userSubscriptionRes.transactionId,
      "device_id": "NotAvaiable",
      "packages_id": this.packages_id,
      "product_id": this.subscriptionIdToSend,
      "amount": this.amount,
      "duration": this.duration,
      "duration_type": this.duration_type,
      "product_name": this.name,
      "platform": this.platformSUB,
      "coupon_codes_id": "0",
      "codes": "0",
      "coupon_amount": "0"
    })






    this.restService.saveSubscriptiondataAPI(subData)
      .subscribe((data: any) => {
      

        if (data.status == 'success') {
          localStorage.setItem('packages_id', this.packages_id)
          this.router.navigate(['tabs/tab1'], { replaceUrl: true })
        } else {
          this.workService.presentToast('Some Error Occuresd.')
        }

      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      });
    this.workService.presentToast(
      'Purchase Successful'
    );
    setTimeout(() => {
      // if (this.subscriptionIdToSend === '1') {
      //   this.workService.presentToast(
      //     this.lang.showLanguage.subscription.purchasePackage +
      //     this.lang.showLanguage.subscription.plans[0].title
      //   );
      // }
      // if (this.subscriptionIdToSend === '2') {
      //   this.presentToast(
      //     this.lang.showLanguage.subscription.purchasePackage +
      //     this.lang.showLanguage.subscription.plans[1].title
      //   );
      // }
      // if (this.subscriptionIdToSend === '3') {
      //   this.presentToast(
      //     this.lang.showLanguage.subscription.purchasePackage +
      //     this.lang.showLanguage.subscription.plans[2].title
      //   );
      // }
      // this.nextToast();
    }, 2000);

  }


  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

  goToTabs() {

    if (this.copun != '') {
      this.copunStatus = false


      var ss = JSON.stringify({

      })

      this.workService.presentLoading()

      this.restService.get_coupon_dataAPI(this.copun).subscribe((res: any) => {
      
        this.workService.hideLoading()

        if (res.status == 'success') {

          if (res.data.coupon_data.status == "Active") {
            this.freePkg = res.data.packages_data
            this.giveOneMonthFreeSubscription()

          } if (res.data.coupon_data.status == "Expired") {
            this.workService.presentToast('Coupon Expired')
          } if (res.data.coupon_data.status == "Cancelled") {
            this.workService.presentToast('Coupon Cancelled')
          } if (res.data.coupon_data.status == "Inactive") {
            this.workService.presentToast('Coupon Inactive')
          }

        } else {
          this.workService.presentToast(res.message)
        }


      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      })



    } else {
      this.copunStatus = true

      setTimeout(() => {
        this.copunStatus = false
      }, 3000)
    }



  }

  subSelect(sub) {
   
    this.amount = sub.amount
    this.android_product_id = sub.android_product_id
    this.duration = sub.duration
    this.duration_type = sub.duration_type
    this.ios_product_id = sub.ios_product_id
    this.name = sub.name
    this.packages_id = sub.packages_id
    this.status = sub.status



    this.platform.ready().then(() => {

      if (this.platform.is('ios')) {

        this.platformSUB = "IOS"


        this.selectedSubscritionID = sub.ios_product_id;
        this.subscriptionIdToSend = sub.packages_id;

        this.purchaseSubscription();

      } else if (this.platform.is('android')) {
        this.platformSUB = "Android"
        this.selectedSubscritionID = sub.android_product_id;
        this.subscriptionIdToSend = sub.packages_id;

        this.purchaseSubscription();

      }

    })
  }



  restorePurchaseAli() {
    this.iap
      .restorePurchases()
      .then((data) => {
    
        this.restorePurchasesArray = data;

      })
      .catch((err) => {
       
      });
  }


  giveOneMonthFreeSubscription() {


    var subData = JSON.stringify({
      "users_customers_id": localStorage.getItem('loggedinUserID'),
      "transaction_id": "Free",
      "device_id": "NotAvaiable",
      "packages_id": this.freePkg.packages_id,
      "product_id": this.freePkg.android_product_id,
      "amount": this.freePkg.amount,
      "duration": this.freePkg.duration,
      "duration_type": this.freePkg.duration_type,
      "product_name": this.freePkg.name,
      "platform": this.platformSUB,
      "coupon_codes_id": "0",
      "codes": "0",
      "coupon_amount": "0"
    })





    this.restService.saveSubscriptiondataAPI(subData)
      .subscribe((data: any) => {
   
        if (data.status == 'success') {
          localStorage.setItem('packages_id', this.freePkg.packages_id)
          this.router.navigate(['tabs/tab1'], { replaceUrl: true })
        } else {
          this.workService.presentToast('Some Error Occuresd.')
        }

      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      });

    setTimeout(() => {

    }, 2000);

  }


  cancelMembership() {
   this.workService.presentLoading()


    this.restService.cancelSubscription(localStorage.getItem('loggedinUserID'))
      .subscribe((data: any) => {
     
        this.workService.hideLoading()

        if (data.status == 'success') {
          // localStorage.removeItem('packages_id')
          localStorage.setItem('packages_id', '88')
          this.workService.presentToast(data.message)
          this.navCtrl.navigateRoot(['subscriptionlogin'], { replaceUrl: true })


        } else {
          this.workService.presentToast(data.message)
        }

      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      });

  }

}
