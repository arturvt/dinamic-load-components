import { Injectable }           from '@angular/core';
import { AdItem }               from './ad-item';
import { JobAdComponent } from './components/job-ad/job-ad.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdModel } from './ad.model';

@Injectable()
export class AdService {

  getAdsRequest(): AdModel[] {
    return [
      {type: 'profile-component', data: {
        name: 'Profile 01', bio: 'description of the 1st profile'}
      },
      {type: 'profile-component', data: {
        name: 'Profile 02', bio: 'Second profile description'}
      },
      {type: 'profile-component', data: {
        name: 'Profile 03', bio: 'Second profile description'}
      },
      {type: 'job-ad', data: {
        name: 'Some JobAd', headline: 'Greetings sir!',  body: 'Body Sample', bio: "Don't show this!"
      }}
    ];
  }

  private resolveComponent(adModel: AdModel): AdItem {
    switch(adModel.type) {
      case 'profile-component':
        return new AdItem(ProfileComponent, adModel.data);
      default:
        return new AdItem(JobAdComponent,   adModel.data);
    }
  }

  getAds(): AdItem[] {
    return this.getAdsRequest().map(a => this.resolveComponent(a));
  }

  // getAds(): AdItem[] {
  //   return [
  //     new AdItem(ProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
  //     new AdItem(JobAdComponent,   {headline: 'Openings in all departments',
  //                                       body: 'Apply today'}),
  //     new AdItem(ProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

  //     new AdItem(ProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

  //     new AdItem(JobAdComponent,   {headline: 'Hiring for several positions',
  //                                       body: 'Submit your resume today!'}),

  //     new AdItem(JobAdComponent,   {headline: 'Openings in all departments',
  //                                       body: 'Apply today'}),
  //   ];
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/