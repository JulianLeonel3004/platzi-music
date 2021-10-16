import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private storage:Storage,
              private router:Router) {}

  async canActivate() {
    this.storage.create();
   const isIntroShowed = await this.storage.get('isIntroShowed')

    return isIntroShowed
    ? true
    : this.router.navigateByUrl('/intro');
  }
}
