import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';
import { JobAdComponent } from './components/job-ad/job-ad.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponentComponent } from './components/main-component/main-component.component';

@NgModule({
  imports: [ BrowserModule ],
  providers: [AdService],
  declarations: [ AppComponent,
                  AdDirective,
                  JobAdComponent,
                  ProfileComponent,
                  MainComponentComponent ],
  entryComponents: [JobAdComponent, ProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/