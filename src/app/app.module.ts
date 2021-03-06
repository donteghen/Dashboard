import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';

import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';

import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { CommonModule } from '@angular/common';
import { ProfileDetailComponent } from './views/profile-detail/profile-detail.component';

// Authentication setting
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Route[] = [
  
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'dashboards', canActivateChild:[AuthGuard], children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', canActivateChild:[AuthGuard], children:
    [
      { path: 'profile1', pathMatch:'full', component: Profile1Component },
      { path: 'profile1/:id', component: ProfileDetailComponent}
    ]
  },
  { path: 'tables', canActivateChild:[AuthGuard], children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', canActivateChild:[AuthGuard], children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'userprofile', canActivate:[AuthGuard], component:UserProfileComponent},
  { path: '**', component: NotFoundComponent },
  

];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,CommonModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule.forRoot(routes),
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({...env.auth})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],

})
export class AppModule { }
