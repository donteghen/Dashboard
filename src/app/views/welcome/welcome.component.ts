import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
  }
  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }
    signUp(){
      this.auth.loginWithRedirect({screen_hint: 'signup'})
    }
  logout():void {
    this.auth.logout({returnTo:this.doc.location.origin});
  }

}
