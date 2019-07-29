import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from 'src/app/ad.component';
import { JobData } from './job.data';

@Component({
  selector: 'app-job-ad',
  templateUrl: './job-ad.component.html',
  styleUrls: ['./job-ad.component.css']
})
export class JobAdComponent implements OnInit, AdComponent {

  @Input() data: JobData;

  constructor() {}

  ngOnInit() {}

}
