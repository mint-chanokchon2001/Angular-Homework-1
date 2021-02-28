import { Component,Input } from '@angular/core';

@Component ({
    selector: 'ToDoList',
    templateUrl: './ToDoList.component.html',
    styleUrls: ['ToDoList.component.css']
})

export class ToDoListComponent {
    tasks:string[] = [];
    task:string;

    constructor() {}

    AddTask () {
        console.log(this.tasks.push(this.task));
        this.task = null;
    }
}