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
var core_1 = require('@angular/core');
var wikipedia_search_service_1 = require('./wikipedia-search.service');
var Item = (function () {
    function Item(n, l) {
        this.name = n;
        this.link = l;
    }
    return Item;
}());
exports.Item = Item;
var WikipediaSearchComponent = (function () {
    function WikipediaSearchComponent(wikipediasearchservice) {
        this.wikipediasearchservice = wikipediasearchservice;
    }
    WikipediaSearchComponent.prototype.ngOnInit = function () {
    };
    WikipediaSearchComponent.prototype.search = function (term) {
        var _this = this;
        this.wikipediasearchservice.search(term)
            .then(function (items) {
            _this.items = [];
            var len = items[0].length;
            for (var i = 0; i < len; i++) {
                _this.items.push(new Item(items[1][i], items[3][i]));
            }
        });
    };
    WikipediaSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'wiki-search',
            template: "\n        <div>\n        <h2>Wikipedia Search</h2>\n        <input #term type=\"text\" (keyup)=\"search(term.value)\">\n        <ul>\n            <li *ngFor=\"let item of items\">\n                <a  href=\"{{item.link}}\">{{item.name}}</a>\n            </li>\n        </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [wikipedia_search_service_1.WikipediaSearchService])
    ], WikipediaSearchComponent);
    return WikipediaSearchComponent;
}());
exports.WikipediaSearchComponent = WikipediaSearchComponent;
//# sourceMappingURL=wikipedia-search.component.js.map