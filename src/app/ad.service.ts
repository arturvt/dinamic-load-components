import { Injectable }           from '@angular/core';
import { AdItem }               from './ad-item';
import { JobAdComponent } from './components/job-ad/job-ad.component';
import { ProfileComponent } from './components/profile/profile.component';

@Injectable()
export class AdService {
  getAds(): AdItem[] {
    return [
      new AdItem(ProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
      new AdItem(JobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
      new AdItem(ProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(ProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(JobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(JobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/