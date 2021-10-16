import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  validation_message = {
    email:[
      {type:"required", message:"El email es requerido"},
      {type:"email", message:"El email es incorrecto"},
    ],
    password:[
      {type:"required", message:"La contraseña es requerida"},
      {type:"minLength", message:"La contraseña debe tener minimo 5 caracteres"},
    ]
  }

  constructor(private formbuilder:FormBuilder,
    private authService:AuthenticateService,
    private navController:NavController) { 

    this.loginForm = this.formbuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),

      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }

  loginUser(credential:any) {
    this.authService.loginUser(credential)
    .then(()=>{
      this.navController.navigateForward('/home');
    })
  }
}
