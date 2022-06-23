import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {



  gender: any = 'Please Select'
  lookingFor: any = 'Please Select'
  religion: any = 'Please Select'
  meritalStatus: any = 'Please Select'

  prompt1Val: any = 'Choose your prompt'
  prompt2Val: any = 'Choose your prompt'
  prompt3Val: any = 'Choose your prompt'

  heightRangeofUser: any = ''

  prompt1User: any = ''
  prompt2User: any = ''
  prompt3User: any = ''

  appInsta: any = ''
  kosher:any = ''

  constructor() { }
}
