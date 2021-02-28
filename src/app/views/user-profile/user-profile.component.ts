import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 profile : string = '';
  constructor( public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user =>{
      this.profile = JSON.stringify(user, null, 2);
      console.log(this.profile);
    });
  }

}
