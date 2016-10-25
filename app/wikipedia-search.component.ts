import { Component, OnInit } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service'
@Component({
    moduleId: module.id,
    selector: 'wiki-search',
    template: `
        <div>
        <h2>Wikipedia Search</h2>
        <input #term type="text" (keyup)="search(term.value)">
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        </div>
    `
})
export class WikipediaSearchComponent implements OnInit {
    items: Array<string>;
    constructor(private wikipediasearchservice: WikipediaSearchService) { }

    ngOnInit() { }
    search(term){
        this.wikipediasearchservice.search(term)
                                   .then(items => this.items=items);
    }
}