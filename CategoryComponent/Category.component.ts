import { Component } from '@angular/core';

@Component ({
    selector: 'CategoryComponent',
    templateUrl: './Category.component.html',
    styleUrls: ['./Category.component.css']
})

export class CategoryComponent {
    items:string[] = ['Fashion','Electronic','Music','Fantasy'];
    constructor() {}
}