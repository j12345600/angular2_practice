import { Component, OnInit } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service'

export class Item{
    name: string;
    link: string;
    constructor(n:string,l:string){
        this.name=n;
        this.link=l;
    }
}
@Component({
    moduleId: module.id,
    selector: 'wiki-search',
    template: `
        <div>
        <h2>Wikipedia Search</h2>
        <input #term type="text" (keyup)="search(term.value)">
        <ul>
            <li *ngFor="let item of items">
                <a  href="{{item.link}}">{{item.name}}</a>
            </li>
        </ul>
        </div>
    `
})
export class WikipediaSearchComponent implements OnInit {
    items: Array<Item>;
    constructor(private wikipediasearchservice: WikipediaSearchService) { }
    
    
    ngOnInit() {
    }
    search(term){
        this.wikipediasearchservice.search(term)
                                   .then(items => {
                                       this.items=[];
                                       let len = items[0].length;
                                       for (let i=0; i< len; i++){
                                           this.items.push(new Item(items[1][i],items[3][i]));
                                       }
                                      });
    }
}