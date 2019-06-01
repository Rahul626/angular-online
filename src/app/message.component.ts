import { Component, Input } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h2>this is a example text</h2>
`
})
export class MessageComponent {
    @Input() message: string;
}