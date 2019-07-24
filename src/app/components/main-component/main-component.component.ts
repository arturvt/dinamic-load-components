import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../../ad.directive';
import { AdItem }      from '../../ad-item';
import { AdComponent } from '../../ad.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Input() ads: AdItem[];
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponents(this.ads.length);
  }

  loadComponents(qnt: number) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    for (var i = 0; i < qnt; i++) {
      const adItem = this.ads[i];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
  }

}
