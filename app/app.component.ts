import { Component, OnInit } from '@angular/core';
// <wiki-search> </wiki-search>
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="dashboardLink" routerLinkActive="active">dashboard</a>
            <a [routerLink]="heroLink" routerLinkActive="active">Heroes</a>
        </nav>
       <router-outlet></router-outlet>
       <wiki-search> </wiki-search>
    `,
    styleUrls:[ 'app.component.css' ]
})
export class AppComponent implements OnInit {
    heroLink:string = '/heroes';
    dashboardLink:string = '/dashboard';
    title='Tour of Heroes';

    constructor() { }

    ngOnInit() { }

}