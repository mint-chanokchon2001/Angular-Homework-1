import { Component, Input } from '@angular/core';

@Component ({
    selector: 'counting',
    templateUrl: './counting.compunent.html',
    styleUrls: ['./counting.compunent.css']
})

export class CountingCompunent {
    @Input()
    count:number = null;

    constructor() {}

    plus () {
        this.count = this.count + 1;
    }
    delete() {
        this.count = this.count - 1;
    }
    clear() {
        this.count = null;
    }

}