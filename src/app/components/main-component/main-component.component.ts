import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdItem }      from '../../ad-item';
import { AdComponent } from '../../ad.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Input() ads: AdItem[];
  @ViewChild('dynamic', { read: ViewContainerRef, static: true })
  private view: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadContainerContent();
  }

  loadContainerContent() {
    this.view.clear();
    const viewContainerRef = this.view;
    for (var i = 0; i < this.ads.length; i++) {
      const adItem = this.ads[i];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
  }

}
