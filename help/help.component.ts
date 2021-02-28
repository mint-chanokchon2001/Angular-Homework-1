import { Component } from '@angular/core';

@Component ({
    selector: 'Help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})

export class HelpComponent {

    text:string[] = ['FOR PEOPLE WHO NEED HELP','FOR PEOPLE WHO PROVIDE HELP','FOR SHOP OWNERS']
    constructor () {}
}