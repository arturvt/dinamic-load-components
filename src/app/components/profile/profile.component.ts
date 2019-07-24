import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from 'src/app/ad.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AdComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
