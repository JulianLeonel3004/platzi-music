import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private storage:Storage) { }

  ngOnInit(){}

  finish() {
    this.storage.create();
    this.storage.set('isIntroShowed', true);
  }

}
