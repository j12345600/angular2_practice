import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="dashboardLink">dashboard</a>
            <a [routerLink]="heroLink">Heroes</a>
        </nav>
       <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    heroLink:string = '/heroes';
    dashboardLink:string = '/dashboard';
    title='Tour of Heroes';

    constructor() { }

    ngOnInit() { }

}