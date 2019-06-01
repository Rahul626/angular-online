import { Component, Input } from '@angular/core';

@Component({
  selector: 'message',
  template: `<h1>this is dynamic component A!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloEnComponent  {
  @Input() name: string;
}

@Component({
  selector: 'message',
  template: `<h1>this is dynamic component B!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloTwComponent  {
  @Input() name: string;
}
