import { Injectable } from "@angular/core";
import { AdItem } from "./ad-item";
import { JobAdComponent } from "./components/job-ad/job-ad.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdModel } from "./ad.model";

@Injectable()
export class AdService {
  getAdsRequest(): AdModel[] {
    return [
      {
        type: "job-ad",
        isVisible: true,
        data: {
          advertising: 'Some content',
          text: 'Some text',
          clients: 10,
          isImportant: true
        }
      },
      {
        type: "profile-component",
        isVisible: true,
        data: {
          title: 'title from item 01',
          subTitle: 'subtitle item 01',
          text: 'Lorem ipsum dolor sit amet, at nam persecuti voluptaria elaboraret, no mazim congue ullamcorper per. Movet placerat voluptaria no his, persius postulant accusamus sea ad. In duo debitis consectetuer definitiones',
          isNew: false
        }
      },
      {
        type: "profile-component",
        isVisible: true,
        data: {
          title: 'title from item 02',
          subTitle: 'Subtitle from item 02',
          text: 'Lorem ipsum dolor sit amet, at nam persecuti voluptaria elaboraret, no mazim congue ullamcorper per. Movet placerat voluptaria no his, persius postulant accusamus sea ad. In duo debitis consectetuer definitiones',
          isNew: true
        }
      },
      {
        type: "job-ad",
        isVisible: true,
        data: {
          advertising: 'Some content',
          text: 'Some text',
          clients: 20,
          isImportant: false
        }
      }
    ];
  }

  private resolveComponent(adModel: AdModel): AdItem {
    switch (adModel.type) {
      case "profile-component":
        return new AdItem(ProfileComponent, adModel.data);
      default:
        return new AdItem(JobAdComponent, adModel.data);
    }
  }

  getAds(): AdItem[] {
    return this.getAdsRequest().map(a => this.resolveComponent(a));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
