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
        this.tasks.push(this.task);
        this.task = null;
    }

    DeleteTask (taskIndex:number) {
        console.log(taskIndex);
        this.tasks = this.tasks.filter((t,index) => index !== taskIndex);
    }
}