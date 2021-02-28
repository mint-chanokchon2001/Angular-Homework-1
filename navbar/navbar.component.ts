import { Component } from '@angular/core';

@Component ({
    selector: 'Navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    menus:string[] = ['home','shop owners','Login'];
    menus2:string[][] = [['home','shop owners','Login'],['555']];
    constructor () {}
}