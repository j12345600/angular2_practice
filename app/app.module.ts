import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule,JsonpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { WikipediaSearchComponent } from './wikipedia-search.component';
import { WikipediaSearchService } from './wikipedia-search.service';

import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  imports: [
    JsonpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    WikipediaSearchComponent
  ],
  providers:[
    HeroService,
    WikipediaSearchService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
 }