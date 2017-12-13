import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

import { LogService } from './log.service';
import { StarWarsService } from './star-wars.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    LogService,
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
