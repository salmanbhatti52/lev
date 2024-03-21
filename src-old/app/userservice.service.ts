import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userName: any = ''
  userId: any = ''
  userIMG:any = ''

  constructor() {

  }

}