import { Component } from '@angular/core';
import {

    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory
} from '@angular/core';
import { MessageComponent } from './message.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Dynamic load of angular component';

    componentRef: any;
    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }
    createComponent(message) {
        this.entry.clear();
        const factory = this.resolver.resolveComponentFactory(MessageComponent);
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.message = message;
    }
    destroyComponent() {
        this.componentRef.destroy();
    }
}