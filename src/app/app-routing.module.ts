import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'apply',
    loadChildren: () => import('./apply/apply.module').then( m => m.ApplyPageModule)
  },
  {
    path: 'gettingstart',
    loadChildren: () => import('./gettingstart/gettingstart.module').then( m => m.GettingstartPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./profile1/profile1.module').then( m => m.Profile1PageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'youprofile1',
    loadChildren: () => import('./youprofile1/youprofile1.module').then( m => m.Youprofile1PageModule)
  },
  {
    path: 'yourprofile2',
    loadChildren: () => import('./yourprofile2/yourprofile2.module').then( m => m.Yourprofile2PageModule)
  },
  {
    path: 'yourprofile3',
    loadChildren: () => import('./yourprofile3/yourprofile3.module').then( m => m.Yourprofile3PageModule)
  },
  {
    path: 'prompt1',
    loadChildren: () => import('./prompt1/prompt1.module').then( m => m.Prompt1PageModule)
  },
  {
    path: 'prompt2',
    loadChildren: () => import('./prompt2/prompt2.module').then( m => m.Prompt2PageModule)
  },
  {
    path: 'prompt3',
    loadChildren: () => import('./prompt3/prompt3.module').then( m => m.Prompt3PageModule)
  },
  {
    path: 'requestsubmitted',
    loadChildren: () => import('./requestsubmitted/requestsubmitted.module').then( m => m.RequestsubmittedPageModule)
  },
  {
    path: 'prompts',
    loadChildren: () => import('./prompts/prompts.module').then( m => m.PromptsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'prefrence',
    loadChildren: () => import('./prefrence/prefrence.module').then( m => m.PrefrencePageModule)
  },
  {
    path: 'accountsetting',
    loadChildren: () => import('./accountsetting/accountsetting.module').then( m => m.AccountsettingPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'religion',
    loadChildren: () => import('./religion/religion.module').then( m => m.ReligionPageModule)
  },
  {
    path: 'maritalstatus',
    loadChildren: () => import('./maritalstatus/maritalstatus.module').then( m => m.MaritalstatusPageModule)
  },
  {
    path: 'lookingfor',
    loadChildren: () => import('./lookingfor/lookingfor.module').then( m => m.LookingforPageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'agerange',
    loadChildren: () => import('./agerange/agerange.module').then( m => m.AgerangePageModule)
  },
  {
    path: 'koshar',
    loadChildren: () => import('./koshar/koshar.module').then( m => m.KosharPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'viewprofile',
    loadChildren: () => import('./viewprofile/viewprofile.module').then( m => m.ViewprofilePageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginotp',
    loadChildren: () => import('./loginotp/loginotp.module').then( m => m.LoginotpPageModule)
  },
  {
    path: 'interestedin',
    loadChildren: () => import('./interestedin/interestedin.module').then( m => m.InterestedinPageModule)
  },
  {
    path: 'ethnicity',
    loadChildren: () => import('./ethnicity/ethnicity.module').then( m => m.EthnicityPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'heightrange',
    loadChildren: () => import('./heightrange/heightrange.module').then( m => m.HeightrangePageModule)
  },
  {
    path: 'myage',
    loadChildren: () => import('./myage/myage.module').then( m => m.MyagePageModule)
  },
  {
    path: 'prompt1update',
    loadChildren: () => import('./prompt1update/prompt1update.module').then( m => m.Prompt1updatePageModule)
  },
  {
    path: 'prompt2update',
    loadChildren: () => import('./prompt2update/prompt2update.module').then( m => m.Prompt2updatePageModule)
  },
  {
    path: 'prompt3update',
    loadChildren: () => import('./prompt3update/prompt3update.module').then( m => m.Prompt3updatePageModule)
  },
  {
    path: 'interestedinpref',
    loadChildren: () => import('./interestedinpref/interestedinpref.module').then( m => m.InterestedinprefPageModule)
  },
  {
    path: 'maritalstatuspref',
    loadChildren: () => import('./maritalstatuspref/maritalstatuspref.module').then( m => m.MaritalstatusprefPageModule)
  },
  {
    path: 'religionpref',
    loadChildren: () => import('./religionpref/religionpref.module').then( m => m.ReligionprefPageModule)
  },
  {
    path: 'showimage',
    loadChildren: () => import('./showimage/showimage.module').then( m => m.ShowimagePageModule)
  },
  {
    path: 'termsservice',
    loadChildren: () => import('./termsservice/termsservice.module').then( m => m.TermsservicePageModule)
  },
  {
    path: 'otherprofile',
    loadChildren: () => import('./otherprofile/otherprofile.module').then( m => m.OtherprofilePageModule)
  },
  {
    path: 'mykoshar',
    loadChildren: () => import('./mykoshar/mykoshar.module').then( m => m.MykosharPageModule)
  },
  {
    path: 'poll',
    loadChildren: () => import('./poll/poll.module').then( m => m.PollPageModule)
  },
  {
    path: 'myethnicity',
    loadChildren: () => import('./myethnicity/myethnicity.module').then( m => m.MyethnicityPageModule)
  },
  {
    path: 'smspkg',
    loadChildren: () => import('./smspkg/smspkg.module').then( m => m.SmspkgPageModule)
  },
  {
    path: 'contactus2',
    loadChildren: () => import('./contactus2/contactus2.module').then( m => m.Contactus2PageModule)
  },
  {
    path: 'otppageweb',
    loadChildren: () => import('./otppageweb/otppageweb.module').then( m => m.OtppagewebPageModule)
  },
  {
    path: 'matchdelete',
    loadChildren: () => import('./matchdelete/matchdelete.module').then( m => m.MatchdeletePageModule)
  },
  {
    path: 'adminchat',
    loadChildren: () => import('./adminchat/adminchat.module').then( m => m.AdminchatPageModule)
  },
  {
    path: 'contactussignup',
    loadChildren: () => import('./contactussignup/contactussignup.module').then( m => m.ContactussignupPageModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./career/career.module').then( m => m.CareerPageModule)
  },
  {
    path: 'subscriptionlogin',
    loadChildren: () => import('./subscriptionlogin/subscriptionlogin.module').then( m => m.SubscriptionloginPageModule)
  },
  {
    path: 'pollnew',
    loadChildren: () => import('./pollnew/pollnew.module').then( m => m.PollnewPageModule)
  },
  {
    path: 'promptnew',
    loadChildren: () => import('./promptnew/promptnew.module').then( m => m.PromptnewPageModule)
  },
  {
    path: 'deleteaccount',
    loadChildren: () => import('./deleteaccount/deleteaccount.module').then( m => m.DeleteaccountPageModule)
  },
  {
    path: 'viewprofileother',
    loadChildren: () => import('./viewprofileother/viewprofileother.module').then( m => m.ViewprofileotherPageModule)
  },  {
    path: 'userpreferencesmodal',
    loadChildren: () => import('./userpreferencesmodal/userpreferencesmodal.module').then( m => m.UserpreferencesmodalPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
