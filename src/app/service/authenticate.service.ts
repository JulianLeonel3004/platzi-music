import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential) {
    return new Promise((accepd, reject)=> {
      accepd("Logeado");
    })
  }
}
