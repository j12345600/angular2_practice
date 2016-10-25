"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const wikipedia_search_service_1 = require('./wikipedia-search.service');
let WikipediaSearchComponent = class WikipediaSearchComponent {
    constructor(wikipediasearchservice) {
        this.wikipediasearchservice = wikipediasearchservice;
    }
    ngOnInit() { }
    search(term) {
        this.wikipediasearchservice.search(term)
            .then(items => this.items = items);
    }
};
WikipediaSearchComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [wikipedia_search_service_1.WikipediaSearchService])
], WikipediaSearchComponent);
exports.WikipediaSearchComponent = WikipediaSearchComponent;
//# sourceMappingURL=wikipedia-search.component.js.map