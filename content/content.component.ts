import { Component } from '@angular/core';

@Component ({
    selector: 'Content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent {
    buttons:string[] = ['TRY FOR FREE','SIGN UP']
    constructor () {}
}